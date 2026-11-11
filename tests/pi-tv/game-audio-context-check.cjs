const assert=require('node:assert/strict');const {GameAudioContextPool}=require('../../src/webapp/src/app/gameflex/stream/shared/game-audio-context.js');
(async()=>{let made=0,closed=0,resumed=0;const pool=new GameAudioContextPool(()=>{made++;return{state:'suspended',resume(){resumed++;this.state='running';return Promise.resolve()},close(){closed++;this.state='closed';return Promise.resolve()}}});
 const cancel=pool.prime();assert.equal(resumed,1,'Resume must be called synchronously in the launch gesture');const a=pool.acquire();assert.equal(a.context.state,'running');cancel();assert.equal(closed,0,'Old launch cleanup must not close the game context');
 const b=pool.acquire();assert.equal(a.context,b.context);a.release();assert.equal(closed,0);b.release();assert.equal(closed,1);b.release();assert.equal(closed,1);
 const fail=pool.prime();fail();assert.equal(closed,2);assert.equal(made,2);
 console.log('Game audio: launch gesture survives SPA handoff, owners share permission, failures and final exit release the context.');
})().catch(e=>{console.error(e);process.exitCode=1});
