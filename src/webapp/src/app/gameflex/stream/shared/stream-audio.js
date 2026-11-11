// The launch gesture unlocks this AudioContext, not an unrelated HTMLAudio
// element. Use it for direct WebRTC as well as the decoded HTTP fallback.
export class StreamAudio {
    constructor({ context, stream, muted = false, onBlocked = () => {} }) {
        this.context = context;
        this.muted = muted;
        this.onBlocked = onBlocked;
        this.source = context.createMediaStreamSource(stream);
        try {
            this.gain = context.createGain();
            this.gain.gain.value = muted ? 0 : 1;
            this.source.connect(this.gain);
            this.gain.connect(context.destination);
            this.stateChanged = () => { if (!this.closed) onBlocked(!this.muted && context.state !== 'running'); };
            context.addEventListener('statechange', this.stateChanged);
            this.stateChanged();
        } catch (error) {
            this.source.disconnect(); this.gain?.disconnect();
            throw error;
        }
    }
    resume() {
        if (this.closed || this.muted) return;
        // resume must be invoked synchronously inside the touch/key handler.
        try {
            this.context.resume().then(() => this.stateChanged()).catch(() => {
                if (!this.closed && !this.muted) this.onBlocked(true);
            });
        } catch { if (!this.closed) this.onBlocked(true); }
    }
    setMuted(muted) {
        this.muted = !!muted;
        this.gain.gain.value = muted ? 0 : 1;
        if (muted) this.onBlocked(false);
        else this.resume();
    }
    close() {
        if (this.closed) return;
        this.closed = true;
        this.context.removeEventListener('statechange', this.stateChanged);
        this.source.disconnect(); this.gain.disconnect();
        // The shared pool owns the context; never stop the incoming track.
    }
}
