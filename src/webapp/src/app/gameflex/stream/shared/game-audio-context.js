// Keep the permission granted by the launch gesture across SPA navigation and
// viewer retries. Media nodes belong to each viewer; the context belongs to play.
import { acquirePlaybackSession } from './audio-session.js';
export class GameAudioContextPool {
    constructor(create = () => new (window.AudioContext || window.webkitAudioContext)({ latencyHint: 'interactive' }), session) {
        this.create = create; this.session = session; this.owners = 0; this.epoch = 0;
    }
    ensure() {
        if (!this.context || this.context.state === 'closed') {
            this.releaseSession?.();
            this.releaseSession = acquirePlaybackSession(this.session);
            try { this.context = this.create(); }
            catch (error) { this.releaseSession(); this.releaseSession = null; throw error; }
        }
        return this.context;
    }
    prime() {
        try {
            const context = this.ensure(), epoch = ++this.epoch;
            clearTimeout(this.timer); this.held = true;
            context.resume().catch(() => {}); // Synchronous call inside Lancer.
            const cancel = () => { if (this.epoch === epoch) { this.held = false; clearTimeout(this.timer); this.disposeIfIdle(); } };
            this.timer = setTimeout(cancel, 60000);
            return cancel;
        } catch { return () => {}; }
    }
    acquire() {
        const context = this.ensure();
        ++this.epoch; clearTimeout(this.timer); this.held = false; this.owners++;
        let released = false;
        return { context, release: () => { if (released) return; released = true; this.owners--; this.disposeIfIdle(); } };
    }
    disposeIfIdle() {
        if (!this.held && !this.owners && this.context) {
            const context = this.context; this.context = null;
            context.close().catch(() => {});
            this.releaseSession?.(); this.releaseSession = null;
        }
    }
}
export const gameAudioContexts = new GameAudioContextPool();
export const primeGameAudio = () => gameAudioContexts.prime();
