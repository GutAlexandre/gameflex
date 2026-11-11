// Native TV explicitly permits playback without a DOM gesture. Its remote keys
// are forwarded through JS and therefore do not set navigator.userActivation.
export function mustWaitForAudioGesture(activation,scope){
 const native=scope?.GAMEFLEX_NATIVE_AUTOPLAY===true||(scope?.GameFlexTv?.sharedUI===true&&/Android.*;\s*wv\)/.test(scope?.navigator?.userAgent||''));
 return !native&&activation?.hasBeenActive===false;
}
