// The streaming page publishes the gateway session it is actually showing.
// TVPhoneHost is mounted above it, so a tiny external store avoids coupling
// the player to the TV/controller UI.  Only the opaque gateway session id is
// shared; account credentials never leave the screen device.
let sessionId = null;
const listeners = new Set();

export const getPhoneMirrorSession = () => sessionId;
export const subscribePhoneMirrorSession = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
};

export function publishPhoneMirrorSession(value) {
    const next = typeof value === "string" && value ? value : null;
    sessionId = next;
    listeners.forEach((listener) => listener(next));

    return () => {
        // A newer streaming page may already have replaced this one.
        if (sessionId === next) {
            sessionId = null;
            listeners.forEach((listener) => listener(null));
        }
    };
}
