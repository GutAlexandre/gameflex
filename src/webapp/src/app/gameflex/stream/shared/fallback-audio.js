import { appPath } from '../../libs/appBase.js';
import { acquirePlaybackSession } from './audio-session.js';

let decoderScript;
function loadDecoder() {
    if (!decoderScript) decoderScript = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = appPath('/audio/opus-decoder.min.js');
        script.charset = 'UTF-8';
        script.onload = () => resolve(window['opus-decoder'].OpusDecoder);
        script.onerror = () => { script.remove(); decoderScript = null; reject(new Error('Décodeur audio indisponible.')); };
        document.head.append(script);
    });
    return decoderScript;
}

// Same raw Opus packets as WebRTC, decoded locally also on Safari versions
// without AudioDecoder. No extra server, transcoding or third-party request.
export class FallbackAudio {
    constructor({ load = loadDecoder, context = () => new (window.AudioContext || window.webkitAudioContext)(), ownsContext = true, session = globalThis.navigator?.audioSession, onBlocked = () => {}, onActive = () => {} } = {}) {
        Object.assign(this, { load, makeContext: context, ownsContext, session, onBlocked, onActive });
        this.closed = false; this.muted = false; this.pending = []; this.sources = new Set();
        this.samples = 0; this.energy = 0; this.scheduled = 0; this.errors = 0; this.next = 0;
    }
    ensureContext() {
        // Match media-element playback on iOS rather than ambient sound effects.
        // This declares the web session only; it never changes device volume.
        if (!this.closed && !this.muted && !this.releaseSession) this.releaseSession = acquirePlaybackSession(this.session);
        if (!this.ctx && !this.closed) {
            this.ctx = this.makeContext(); this.gain = this.ctx.createGain();
            this.gain.gain.value = this.muted ? 0 : 1; this.gain.connect(this.ctx.destination);
            this.ctx.onstatechange = () => { if (!this.closed && !this.muted) this.onBlocked(this.ctx.state !== 'running'); };
        }
        return this.ctx;
    }
    resume() {
        if (this.closed) return Promise.resolve(false);
        try {
            const ctx = this.ensureContext();
            // Called synchronously from the gesture, before any WASM await.
            return ctx.resume().then(() => { if (!this.closed) this.onBlocked(!this.muted && ctx.state !== 'running'); return ctx.state === 'running'; })
                .catch(() => { if (!this.closed && !this.muted) this.onBlocked(true); return false; });
        } catch { if (!this.muted) this.onBlocked(true); return Promise.resolve(false); }
    }
    setMuted(muted) {
        this.muted = !!muted;
        if (this.gain) this.gain.gain.value = muted ? 0 : 1;
        if (muted) { this.clearSources(); this.releaseSession?.(); this.releaseSession = null; this.onBlocked(false); }
    }
    push(packet) {
        if (this.closed || !(packet instanceof Uint8Array) || !packet.length || packet.length > 8192) return;
        if (this.decoder) { this.decode(packet); return; }
        this.pending.push(packet.slice());
        if (this.pending.length > 24) this.pending.shift();
        if (!this.loading && Date.now() >= (this.retryAt || 0)) this.loading = this.load().then(async Decoder => {
            const decoder = new Decoder({ channels: 2, sampleRate: 48000 });
            await decoder.ready;
            if (this.closed) { decoder.free(); return; }
            this.decoder = decoder;
            this.resume();
            for (const frame of this.pending.splice(0)) this.decode(frame);
        }).catch(() => { this.pending = []; this.errors++; this.loading = null; this.retryAt = Date.now() + 5000; if (!this.closed) this.onBlocked(!this.muted); });
    }
    decode(packet) {
        if (this.closed) return;
        try {
            const data = this.decoder.decodeFrame(packet);
            this.errors += data.errors?.length || 0;
            if (!data.samplesDecoded || !data.channelData?.length) return;
            this.samples += data.samplesDecoded;
            for (const channel of data.channelData) for (const value of channel) this.energy += value * value;
            if (!this.active) { this.active = true; this.onActive(); }
            const ctx = this.ensureContext();
            if (this.muted || ctx.state !== 'running') { if (!this.muted) this.onBlocked(true); return; }
            const buffer = ctx.createBuffer(data.channelData.length, data.samplesDecoded, data.sampleRate);
            data.channelData.forEach((channel, i) => buffer.getChannelData(i).set(channel));
            // HTTP polls deliver bursts. Bound live latency rather than queueing
            // seconds of stale sound after a slow/backgrounded connection.
            if (this.next - ctx.currentTime > .3) this.clearSources();
            this.next = Math.max(this.next, ctx.currentTime + .035);
            const source = ctx.createBufferSource(); source.buffer = buffer; source.connect(this.gain);
            this.sources.add(source); source.onended = () => { this.sources.delete(source); source.disconnect(); };
            source.start(this.next); this.next += buffer.duration; this.scheduled += data.samplesDecoded;
        } catch { this.errors++; }
    }
    clearSources() {
        for (const source of this.sources) { try { source.stop(); source.disconnect(); } catch {} }
        this.sources.clear(); this.next = 0;
    }
    stats() { return { samples: this.samples, energy: this.energy, scheduled: this.scheduled, errors: this.errors, state: this.ctx?.state || 'idle', muted: this.muted, pending: this.pending.length }; }
    close() {
        if (this.closed) return;
        this.closed = true; this.pending = []; this.clearSources(); this.decoder?.free(); this.decoder = null;
        this.releaseSession?.(); this.releaseSession = null;
        if (this.ctx) { this.ctx.onstatechange = null; this.gain?.disconnect(); if (this.ownsContext) this.ctx.close().catch(() => {}); }
    }
}
