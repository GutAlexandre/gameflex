const assert=require('assert');
const {mustWaitForAudioGesture}=require('../../src/webapp/src/app/gameflex/stream/shared/audio-autoplay-policy.js');
assert(mustWaitForAudioGesture({hasBeenActive:false},{}));assert(!mustWaitForAudioGesture({hasBeenActive:true},{}));
assert(!mustWaitForAudioGesture({hasBeenActive:false},{GAMEFLEX_NATIVE_AUTOPLAY:true}));
assert(!mustWaitForAudioGesture({hasBeenActive:false},{GameFlexTv:{sharedUI:true},navigator:{userAgent:'Mozilla/5.0 (Linux; Android 11; TV; wv) AppleWebKit'}}));
assert(mustWaitForAudioGesture({hasBeenActive:false},{GameFlexTv:{sharedUI:true},navigator:{userAgent:'Desktop Chrome'}}));
console.log('Native TV audio tries playback without a synthetic gesture; normal browser autoplay protection remains.');
