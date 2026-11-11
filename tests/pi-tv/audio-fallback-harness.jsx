import React, {useRef, useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {GatewayWebRTC} from '../../src/webapp/src/app/gameflex/stream/shared/GatewayWebRTC.jsx';
function Harness(){const ref=useRef(null),[muted,setMuted]=useState(false),[mounted,setMounted]=useState(true);
 useEffect(()=>{window.audioTest={stats:()=>ref.current?.getAudioStats?.()||null,raw:()=>ref.current?.getRawStats(),close:()=>setMounted(false)};(async()=>{await ref.current.createViewer({hasInput:false,preview:true});await ref.current.attach();})();},[]);
 return <><button id="mute" onClick={()=>setMuted(x=>!x)}>{muted?'Rétablir le son':'Couper le son'}</button>{mounted&&<GatewayWebRTC ref={ref} sessionId={window.TEST_SESSION} host={{origin:window.TEST_HOST}} muted={muted} keepMuted={muted}/>}</>;
}
createRoot(document.getElementById('root')).render(<Harness/>);
