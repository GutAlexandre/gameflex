import React, {useRef, useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {MemoryRouter} from 'react-router-dom';
import {AuthProvider} from '../../src/webapp/src/app/gameflex/profile/auth/AuthContext.jsx';
import TVPhoneHost from '../../src/webapp/src/app/gameflex/tv/TVPhoneHost.jsx';
import {GatewayWebRTC} from '../../src/webapp/src/app/gameflex/stream/shared/GatewayWebRTC.jsx';
import {SessionStream,LaunchScreen} from '../../src/webapp/src/app/gameflex/stream/shared/SessionStream.jsx';
import {primeGameAudio} from '../../src/webapp/src/app/gameflex/stream/shared/game-audio-context.js';
import '../../src/webapp/src/node_modules/bootstrap/dist/css/bootstrap.min.css';
const t=key=>key;
function Harness(){const ref=useRef(null),[muted,setMuted]=useState(false),[mounted,setMounted]=useState(!window.TEST_PRIMED),[started,setStarted]=useState(false);const full=!!window.TEST_PLAYER;
 useEffect(()=>{window.audioTest={stats:()=>ref.current?.getAudioStats?.()||null,raw:()=>ref.current?.getRawStats(),close:()=>setMounted(false),viewers:0};if(!full)(async()=>{await ref.current.createViewer({hasInput:false,preview:true});await ref.current.attach();})();},[]);
 const start=()=>{primeGameAudio();setStarted(true);setTimeout(()=>setMounted(true),400);};
 return <><button id="fullscreen" onClick={()=>document.getElementById("player-frame")?.requestFullscreen()}>Plein écran</button><button id="mute" onClick={()=>setMuted(x=>!x)}>{muted?'Rétablir le son':'Couper le son'}</button>{window.TEST_PRIMED&&!started&&<button id="start" onClick={start}>Lancer le jeu de test</button>}{mounted&&(full?<div id="player-frame" style={{position:'relative',height:'90vh'}}><SessionStream screenRef={ref} sessionId={window.TEST_SESSION} host={{origin:window.TEST_HOST}} t={t} hasInput={false} muted={muted} pictureTimeoutMs={9000} maxAttempts={null} onViewerReady={()=>{window.audioTest.viewers++;}}/><LaunchScreen t={t} zIndex={1010} label="Chargement du jeu"/></div>:<GatewayWebRTC ref={ref} sessionId={window.TEST_SESSION} host={{origin:window.TEST_HOST}} muted={muted} keepMuted={muted}/>)}</>;
}
createRoot(document.getElementById('root')).render(<AuthProvider><MemoryRouter initialEntries={['/streaming']}><TVPhoneHost><Harness/></TVPhoneHost></MemoryRouter></AuthProvider>);
