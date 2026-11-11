// All game outputs share one playback category. In particular, opening a
// WebAudio context must not leave native WebRTC in iOS's ambient category.
const sessions = new WeakMap();
export function acquirePlaybackSession(session = globalThis.navigator?.audioSession) {
    if (!session || typeof session !== 'object') return () => {};
    try {
        let entry = sessions.get(session);
        if (!entry) {
            const previous = session.type;
            session.type = 'playback';
            entry = { previous, owners: 0 };
            sessions.set(session, entry);
        }
        entry.owners++;
        let released = false;
        return () => {
            if (released) return;
            released = true;
            if (--entry.owners === 0) {
                sessions.delete(session);
                // Do not overwrite a later change by another feature.
                try { if (session.type === 'playback') session.type = entry.previous; } catch {}
            }
        };
    } catch { return () => {}; }
}
