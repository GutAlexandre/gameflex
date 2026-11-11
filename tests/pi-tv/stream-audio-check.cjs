const assert = require('node:assert/strict');
const {StreamAudio} = require('../../src/webapp/src/app/gameflex/stream/shared/stream-audio.js');
const {acquirePlaybackSession} = require('../../src/webapp/src/app/gameflex/stream/shared/audio-session.js');
const {GameAudioContextPool} = require('../../src/webapp/src/app/gameflex/stream/shared/game-audio-context.js');
(async()=>{
 const session={type:'ambient'}; let made=0, resumes=0, disconnected=0, blocked=[]; const listeners=new Set();
 const context={state:'suspended',destination:{},resume(){resumes++;this.state='running';for(const l of listeners)l();return Promise.resolve()},close(){this.state='closed';return Promise.resolve()},
  createMediaStreamSource(stream){assert.equal(stream.id,'incoming');return {connect(){},disconnect(){disconnected++}}},
  createGain(){return {gain:{value:1},connect(){},disconnect(){disconnected++}}},
  addEventListener(type,fn){listeners.add(fn)},removeEventListener(type,fn){listeners.delete(fn)}};
 const pool=new GameAudioContextPool(()=>{assert.equal(session.type,'playback','Set playback category before constructing the context');made++;return context},session);
 const cancel=pool.prime();assert.equal(resumes,1);const lease=pool.acquire();cancel();
 const audio=new StreamAudio({context:lease.context,stream:{id:'incoming'},onBlocked:x=>blocked.push(x)});
 audio.resume();assert.equal(resumes,2,'WebRTC must resume the context unlocked by Launch synchronously');
 audio.setMuted(true);assert.equal(audio.gain.gain.value,0);const n=resumes;audio.resume();assert.equal(resumes,n,'A gesture must not override voluntary mute');
 audio.setMuted(false);assert.equal(audio.gain.gain.value,1);assert.equal(context.state,'running');
 context.state='interrupted';for(const l of listeners)l();assert.equal(blocked.at(-1),true,'iOS interruption must show the sound action');audio.resume();assert.equal(blocked.at(-1),false);
 const fallback=acquirePlaybackSession(session);audio.close();audio.close();assert.equal(disconnected,2);assert.equal(listeners.size,0);assert.equal(context.state,'running','A viewer does not own the shared context');
 lease.release();assert.equal(session.type,'playback','Fallback still owns playback category');fallback();fallback();assert.equal(session.type,'ambient');assert.equal(made,1);
 const release=acquirePlaybackSession(session);session.type='play-and-record';release();assert.equal(session.type,'play-and-record','Preserve a subsequent external session choice');
 const unavailable={get type(){return 'auto'},set type(v){throw Error('unsupported')}};acquirePlaybackSession(unavailable)();
 const failed=new GameAudioContextPool(()=>{throw Error('no context')},session);failed.prime()();assert.equal(session.type,'play-and-record','Failed construction restores category');
 console.log('Stream audio: shared gesture/context, iOS category ordering/interruption, mute, ownership, error cleanup passed.');
})().catch(e=>{console.error(e);process.exitCode=1});
