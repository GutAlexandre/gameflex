const assert=require('node:assert/strict');
const {FallbackAudio}=require('../../src/webapp/src/app/gameflex/stream/shared/fallback-audio.js');
(async()=>{
 let frees=0,activations=0,closed=0,created=0;
 class Decoder{constructor(){this.ready=Promise.resolve();}decodeFrame(){return{samplesDecoded:480,sampleRate:48000,channelData:[new Float32Array(480).fill(.25),new Float32Array(480).fill(-.25)],errors:[]};}free(){frees++;}}
 const context=()=>{created++;return {state:'running',currentTime:0,destination:{},resume(){this.state='running';return Promise.resolve();},close(){this.state='closed';closed++;return Promise.resolve();},createGain(){return {gain:{value:1},connect(){}}},createBuffer(n,count,rate){return {duration:count/rate,getChannelData:()=>new Float32Array(count)}},createBufferSource(){return{connect(){},disconnect(){},start(){},stop(){}}}};};
 const session={type:'auto'};const player=new FallbackAudio({session,load:async()=>Decoder,context,onActive:()=>activations++});player.setMuted(true);player.push(new Uint8Array([1]));await player.loading;assert(player.stats().samples>0);assert.equal(player.stats().scheduled,0,'Voluntary mute must stay silent');assert.equal(session.type,'auto');
 player.setMuted(false);player.push(new Uint8Array([1]));assert.equal(player.stats().scheduled,480);assert(player.stats().energy>0);assert.equal(activations,1);assert.equal(session.type,'playback');
 for(let i=0;i<100;i++)player.push(new Uint8Array([1]));assert(player.sources.size<=31,'Burst queue must stay bounded');
 player.setMuted(true);assert.equal(player.sources.size,0);assert.equal(session.type,'auto');const previous=player.samples;player.close();player.push(new Uint8Array([1]));assert.equal(player.samples,previous);assert.equal(closed,1);assert.equal(frees,1);assert.equal(player.stats().state,'closed');
 let ready;const late=new FallbackAudio({load:()=>new Promise(r=>ready=r),context});for(let i=0;i<100;i++)late.push(new Uint8Array([1]));assert.equal(late.pending.length,24);late.push(new Uint8Array(8193));assert.equal(late.pending.length,24);late.close();ready(Decoder);await late.loading;assert.equal(frees,2);assert.equal(created,1,'Late decoder must not recreate audio after cleanup');
 console.log('Audio fallback: real mute intent, bounded burst/initial queues, invalid packets, decoder ownership and late cleanup passed.');
})().catch(e=>{console.error(e);process.exitCode=1;});
