// An original synthetic tone/pattern only. Scoped gateway key arrives on stdin.
const fs=require('fs'),crypto=require('crypto'),WebSocket=require('/app/src/webapp/src/node_modules/ws');
const cfg=JSON.parse(fs.readFileSync(0,'utf8')),root='/app/.local/audio-fix/';
const audio=JSON.parse(fs.readFileSync(root+'tone.json')).map(x=>Buffer.from(x,'base64'));
const raw=fs.readFileSync(root+'test-pattern.h264'),starts=[];
for(let i=0;i<raw.length-4;i++){let n=raw[i]===0&&raw[i+1]===0&&raw[i+2]===1?3:raw[i]===0&&raw[i+1]===0&&raw[i+2]===0&&raw[i+3]===1?4:0;if(n){starts.push([i,n]);i+=n-1;}}
const frames=[],headers=[];let current=[];
for(let i=0;i<starts.length;i++){const [at,n]=starts[i],end=starts[i+1]?.[0]||raw.length,type=raw[at+n]&31,part=raw.subarray(at,end);if(type===7||type===8)headers.push(part);if(type===9&&current.length){frames.push(Buffer.concat(current));current=[];}current.push(part);}if(current.length)frames.push(Buffer.concat(current));
const ws=new WebSocket('ws://127.0.0.1:10202/internal/stream/ws?sessionId='+cfg.sessionId,{headers:{'X-Internal-Secret':cfg.key}});let timers=[];
const send=(kind,duration,payload)=>{if(ws.readyState!==WebSocket.OPEN)return;const head=Buffer.alloc(9);head[0]=kind;head.writeBigUInt64BE(BigInt(duration),1);ws.send(Buffer.concat([head,payload]));};
ws.on('open',()=>ws.send(JSON.stringify({type:'register',sessionId:cfg.sessionId,platform:'retro'})));
ws.on('message',data=>{let msg;try{msg=JSON.parse(data)}catch{return;}if(msg.type==='registered'){for(const h of headers.slice(0,2))send(0,0,h);let a=0,v=0;timers.push(setInterval(()=>send(1,10000000,audio[a++%audio.length]),10),setInterval(()=>send(0,50000000,frames[v++%frames.length]),50));console.log('Synthetic source ready');}});
ws.on('error',()=>{console.error('Synthetic source unavailable');process.exitCode=1;});ws.on('close',()=>{timers.forEach(clearInterval);process.exit();});setTimeout(()=>ws.close(),240000);
