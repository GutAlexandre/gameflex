// Exercise document lifecycle rather than relying on the relay's 35s expiry.
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
(async()=>{
 const listeners={},calls=[];let timers=0;
 const context={EventTarget,Event,MessageEvent,AbortController,URL,console,
  window:{location:{href:'https://loutrenas.myqnapcloud.com/gameflex/',reload(){calls.push('reload')}},addEventListener(k,f){listeners[k]=f}},
  setTimeout(){return ++timers},clearTimeout(){},getStoredToken:()=>'',streamAuthToken:()=>'',
  fetch:(url,opts)=>{calls.push({url,opts});return Promise.resolve({ok:true,json:async()=>({})})}};
 let source=fs.readFileSync(require('node:path').join(__dirname,'../../src/webapp/src/app/gameflex/libs/GameSocket.js'),'utf8').replace(/^import .*;$/gm,'').replace(/export /g,'');source+='\nglobalThis.Socket=GameSocket;';
 vm.runInNewContext(source,context);
 const socket=new context.Socket('wss://loutrenas.myqnapcloud.com/gameflex/api/v1/facade/ws','fixture-only');socket.id='fixture-channel';socket.readyState=1;
 listeners.pagehide();assert.equal(socket.readyState,3);assert.equal(socket.abort.signal.aborted,true);
 assert.equal(calls.length,1);assert.equal(calls[0].opts.keepalive,true);assert.equal(calls[0].opts.method,'POST');assert.ok(calls[0].url.endsWith('/fixture-channel/close'));
 listeners.pagehide();assert.equal(calls.length,1,'Document release must be idempotent');
 listeners.pageshow({persisted:false});assert.equal(calls.length,1);listeners.pageshow({persisted:true});assert.equal(calls.at(-1),'reload');
 console.log('Game sockets: pagehide releases authenticated relay channels with keepalive; BFCache restores reconnect.');
})().catch(e=>{console.error(e);process.exitCode=1});
