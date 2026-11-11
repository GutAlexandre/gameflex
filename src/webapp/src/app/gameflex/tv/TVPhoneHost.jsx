import React,{createContext,useCallback,useContext,useEffect,useRef,useState} from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import {appPath} from '../libs/appBase.js';
import {useAuth} from '../profile/auth/AuthContext.jsx';
import {clearPhonePad,publishPhonePad,hasPhoneGameConsumer,subscribePhoneConsumer} from '../libs/phonePad.js';
import {getPhoneMirrorSession,subscribePhoneMirrorSession} from '../libs/phoneMirror.js';
import {isGameInputSuspended,setGameInputSuspended} from '../libs/gameInput.js';
import {phoneRequest,phoneSocket} from './phone-pad-api.js';
import {useDialogFocus} from '../experience/dialog-focus.js';
import {useDirectionalFocus} from '../experience/ExperienceView.jsx';
import {Icon} from '../experience/EmulatorUI.jsx';
import DeviceRoleSwitch from './DeviceRoleSwitch.jsx';
import PairQRCode from './PairQRCode.jsx';
import {controllerURL,becomeController} from './device-role.js';
import './tv-phone.css';
const TVContext=createContext(null);
export const useTVPhone=()=>useContext(TVContext);
function multiHubSnapshot(){
 const source=document.querySelector('.ps-console');if(!source)return '';
 const clone=source.cloneNode(true),sourceNodes=[source,...source.querySelectorAll('*')],cloneNodes=[clone,...clone.querySelectorAll('*')],focused=sourceNodes.indexOf(document.activeElement);
 if(focused>=0)cloneNodes[focused]?.setAttribute('data-gf-remote-focus','true');
 clone.querySelectorAll('script,iframe,video,audio,object,embed').forEach(node=>node.remove());
 clone.querySelectorAll('input,textarea').forEach(node=>{node.removeAttribute('value');node.textContent='';});
 const styles=[...document.head.querySelectorAll('link[rel="stylesheet"],style')].map(node=>{
  if(node.tagName==='STYLE')return node.outerHTML;
  const copy=node.cloneNode();copy.href=node.href;return copy.outerHTML;
 }).join('');
 const base=new URL(appPath('/'),location.origin).href;
 return `<!doctype html><html lang="fr"><head><meta charset="utf-8"><base href="${base}">${styles}<style>html,body,#root{width:1280px!important;height:720px!important;min-width:1280px!important;min-height:720px!important;margin:0!important;overflow:hidden!important}body{background:#070d16!important}.ps-console{width:1280px!important;height:720px!important;min-height:720px!important;overflow:hidden!important}[data-gf-remote-focus="true"]{outline:4px solid #fff!important;outline-offset:3px!important;box-shadow:0 0 0 8px #1689ff,0 0 30px #1689ff!important;filter:brightness(1.14)!important}</style></head><body class="${document.body.className}">${clone.outerHTML}</body></html>`;
}
function PairDialog({ctx}){
 const root=useRef(null);useDialogFocus(root);useDirectionalFocus(root);
 useEffect(()=>{const previous=isGameInputSuspended();setGameInputSuspended(true);clearPhonePad();return()=>setGameInputSuspended(previous);},[]);
 return <div className="ps-control-backdrop gf-tv-pair-backdrop"><section ref={root} className="ps-control gf-tv-pair" role="dialog" aria-modal="true" aria-labelledby="tv-pair-title" onKeyDown={e=>{if(e.key==='Escape'){e.preventDefault();ctx.close();}if(e.key==='Tab'){const all=[...root.current.querySelectorAll('button:not(:disabled),a[href]')];if(e.shiftKey&&document.activeElement===all[0]){e.preventDefault();all.at(-1)?.focus();}else if(!e.shiftKey&&document.activeElement===all.at(-1)){e.preventDefault();all[0]?.focus();}}}}>
 <header><div><small>GAMEFLEX · SUR GRAND ÉCRAN</small><h2 id="tv-pair-title">Votre téléphone devient une manette</h2></div><button aria-label="Fermer l’association" onClick={ctx.close}><Icon name="close"/></button></header>
 <DeviceRoleSwitch role="screen" onScreen={()=>{}} disabled={ctx.busy} onController={async()=>{await ctx.revoke();becomeController();}}/>
 {ctx.error&&<p role="alert">{ctx.error}</p>}
 {!ctx.pair?<><p>Cet appareil est l’écran : il affiche la bibliothèque et la partie. Associez un autre appareil en mode Manette pour le commander.</p><button className="gf-tv-primary" disabled={ctx.busy} onClick={ctx.create}>{ctx.busy?'Création du code…':'Afficher un code'}</button></>:ctx.status.approved?<><div className="gf-tv-connected"><Icon name="consoles" size={40}/><h3>{ctx.status.phoneConnected?'Manette connectée':'Téléphone déconnecté'}</h3><p>{ctx.status.name} · {ctx.status.phoneConnected?'Prêt pour la navigation et les parties.':'Rouvrez la page manette sur le téléphone.'}</p></div><div className="gf-tv-pair-actions"><button className="gf-tv-primary" onClick={ctx.close}>Continuer sur l’écran</button><button onClick={ctx.revoke}>Déconnecter le téléphone</button></div></>:ctx.status.pending?<><div className="gf-tv-connected"><Icon name="multiplayer" size={40}/><h3>Autoriser « {ctx.status.name} » ?</h3><p>Ce téléphone pourra naviguer et jouer sur cette TV. Il ne recevra pas vos identifiants.</p></div><div className="gf-tv-pair-actions"><button onClick={ctx.revoke}>Refuser</button><button className="gf-tv-primary" disabled={ctx.busy} onClick={ctx.approve}>Autoriser ce téléphone</button></div></>:<><p>Scannez le QR code avec l’appareil qui servira de manette. Le code sera déjà rempli.</p><div className="gf-pair-code-layout">{ctx.remaining>0&&<PairQRCode url={controllerURL(ctx.pair.code)}/>}<div><p className="gf-tv-phone-address" data-copyable="true">{location.origin+appPath('/controller')}</p><div className="gf-tv-code" aria-label={`Code d’association ${ctx.pair.code}`} data-copyable="true">{ctx.pair.code.slice(0,4)} <span>{ctx.pair.code.slice(4)}</span></div><p className="gf-tv-countdown" role="status">{ctx.remaining>0?`Code valable ${ctx.remaining} s · confirmation sur cet écran requise`:'Code expiré. Générez un nouveau code.'}</p></div></div><button disabled={ctx.busy} onClick={ctx.create}>Générer un nouveau code</button></>}
 <footer className="gf-tv-display-tools"><button aria-pressed={ctx.tv} onClick={()=>ctx.setTV(!ctx.tv)}>{ctx.tv?'Mode TV activé':'Activer le mode TV'}</button><button onClick={()=>Promise.resolve(document.documentElement.requestFullscreen?.()).catch(()=>{})}>Plein écran</button></footer>
 </section></div>;
}
export function TVPhoneSettings(){const ctx=useTVPhone();if(!ctx)return null;return <section className="gf-tv-settings"><h3>Télévision et manette téléphone</h3><p>Grandes commandes, marges TV et navigation à la télécommande. Le téléphone sert de manette ; la partie reste à l’écran.</p><button aria-pressed={ctx.tv} onClick={()=>ctx.setTV(!ctx.tv)}>{ctx.tv?'Désactiver le mode TV':'Activer le mode TV'}</button><button onClick={ctx.open}>Associer mon téléphone</button></section>;}
export function TVPhoneButton(){const ctx=useTVPhone();return ctx?<button className="gf-tv-phone-button" aria-label="Manette téléphone" title="Manette téléphone" onClick={ctx.open}><svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-2 11v4m-2-2h4M9 10h.01M15 10h.01"/></svg></button>:null;}
export default function TVPhoneHost({children}){
 const {token}=useAuth()||{},route=useLocation(),navigate=useNavigate();
 const [tv,setTVState]=useState(()=>{try{return new URLSearchParams(location.search).get('tv')==='1'||localStorage.getItem('gameflex:tv-mode')==='1';}catch{return false;}});
 const [largeDisplay,setLargeDisplay]=useState(()=>window.matchMedia('(min-width:900px) and (min-height:450px)').matches);
 const tvDisplay=tv&&largeDisplay;
 const [open,setOpen]=useState(()=>new URLSearchParams(location.search).get('device')==='screen'),[pair,setPair]=useState(null),[status,setStatus]=useState({}),[error,setError]=useState(''),[busy,setBusy]=useState(false),[remaining,setRemaining]=useState(120),[consumer,setConsumer]=useState(hasPhoneGameConsumer),[mirrorSessionId,setMirrorSessionId]=useState(getPhoneMirrorSession);
 const socket=useRef(null),pairRef=useRef(null),lastInput=useRef(0),latest=useRef({}),navState=useRef(new Set()),epoch=useRef(0),repeat=useRef({});
 const streaming=route.pathname==='/streaming',screen=open?'library':route.pathname==='/settings'?'locked':streaming?(consumer?'game':'unsupported'):'library',mirror=screen==='game'?mirrorSessionId:null;latest.current={open,streaming,screen,mirror};pairRef.current=pair;
 useEffect(()=>{const params=new URLSearchParams(route.search);if(params.get('device')==='screen'){setOpen(true);params.delete('device');navigate({pathname:route.pathname,search:params.toString()?`?${params}`:''},{replace:true});}},[route.pathname,route.search,navigate]);
 const setTV=value=>{setTVState(value);try{localStorage.setItem('gameflex:tv-mode',value?'1':'0');}catch{}};
 useEffect(()=>{const media=window.matchMedia('(min-width:900px) and (min-height:450px)'),changed=()=>setLargeDisplay(media.matches);media.addEventListener('change',changed);changed();return()=>media.removeEventListener('change',changed);},[]);
 useEffect(()=>{document.body.classList.toggle('gf-tv-mode',tvDisplay);return()=>document.body.classList.remove('gf-tv-mode');},[tvDisplay]);
 useEffect(()=>subscribePhoneConsumer(()=>setConsumer(hasPhoneGameConsumer())),[]);
 useEffect(()=>subscribePhoneMirrorSession(setMirrorSessionId),[]);
 useEffect(()=>{
  if(!pair||!token||screen!=='library'||!status.phoneConnected)return;
  let stopped=false,publishing=false,last='',queued=false;const send=async()=>{
   if(stopped||publishing)return;const html=multiHubSnapshot();if(!html||html===last)return;publishing=true;
   try{await phoneRequest(`/${pair.id}/multihub/publish`,{hostToken:pair.hostToken,html},token);last=html;}catch{}finally{publishing=false;if(queued){queued=false;send();}}
  };const schedule=()=>{if(publishing){queued=true;return;}send();};
  const observer=new MutationObserver(schedule),root=document.querySelector('.ps-console');if(root)observer.observe(root,{subtree:true,childList:true,attributes:true,characterData:true});
  document.addEventListener('focusin',schedule);window.addEventListener('resize',schedule);const timer=setInterval(schedule,700);schedule();
  return()=>{stopped=true;observer.disconnect();document.removeEventListener('focusin',schedule);window.removeEventListener('resize',schedule);clearInterval(timer);};
 },[pair?.id,token,screen,status.phoneConnected]);
 const revoke=useCallback(async()=>{const current=pairRef.current;if(current)try{await phoneRequest(`/${current.id}/revoke`,{hostToken:current.hostToken},token);}catch{}socket.current?.close();clearPhonePad();setPair(null);setStatus({});},[token]);
 const create=async()=>{if(busy||!token)return;setBusy(true);setError('');await revoke();try{const value=await phoneRequest('/create',{},token);setRemaining(120);setPair({...value,createdAt:Date.now()});setStatus({});}catch(e){setError(e.message);}finally{setBusy(false);}};
 const approve=async()=>{if(!pair||busy)return;setBusy(true);try{await phoneRequest(`/${pair.id}/approve`,{hostToken:pair.hostToken},token);}catch(e){setError(e.message);}finally{setBusy(false);}};
 useEffect(()=>{
  if(!pair||!token)return;let stopped=false,timer=null;const reconnect=()=>{if(stopped||timer)return;timer=setTimeout(()=>{timer=null;connect();},1500);};const connect=()=>{
   const ws=phoneSocket(pair.id);socket.current=ws;ws.onopen=()=>{ws.send(JSON.stringify({role:'host',token:pair.hostToken,accessToken:token}));};
   ws.onmessage=event=>{const value=JSON.parse(event.data);if(value.type==='status'){epoch.current=value.epoch;setStatus(value);setError('');if(!value.phoneConnected){clearPhonePad();navState.current.clear();}if(value.screen!==latest.current.screen||value.mirrorSessionId!==latest.current.mirror)ws.send(JSON.stringify({type:'context',screen:latest.current.screen,mirrorSessionId:latest.current.mirror}));}
    if(value.type==='closed'){stopped=true;clearPhonePad();setPair(null);setStatus({});setError('Association terminée ou expirée. Affichez un nouveau code.');ws.close();}
    if(value.type==='pad'&&value.epoch===epoch.current){lastInput.current=Date.now();const previous=navState.current;navState.current=new Set(value.buttons);if(value.buttons.includes(16)&&!previous.has(16)){clearPhonePad();setOpen(value=>!value);return;}if(latest.current.screen==='game')publishPhonePad(value);else{clearPhonePad();if(latest.current.screen==='locked'&&value.buttons.includes(1)&&!previous.has(1)){navigate('/?section=home');return;}if(latest.current.screen==='library'){
     const surface=document.querySelector('[aria-modal="true"]')||document.querySelector('.ps-console');if(!surface)return;let target=document.activeElement;if(!surface.contains(target)){target=surface.querySelector('button:not(:disabled)');target?.focus();}
     for(const [index,key] of [[12,'ArrowUp'],[13,'ArrowDown'],[14,'ArrowLeft'],[15,'ArrowRight']])if(value.buttons.includes(index)&&(!previous.has(index)||Date.now()-(repeat.current[index]||0)>220)){(['INPUT','TEXTAREA','SELECT'].includes(target?.tagName)?surface:target)?.dispatchEvent(new KeyboardEvent('keydown',{key,bubbles:true}));repeat.current[index]=Date.now();}
     if(value.buttons.includes(0)&&!previous.has(0))target?.click();if(value.buttons.includes(1)&&!previous.has(1)){const close=surface.querySelector('button[aria-label^="Fermer"]');if(close)close.click();else navigate('/?section=home');}
    }}}};
   ws.onclose=event=>{clearPhonePad();navState.current.clear();if(event.code===1008){stopped=true;setPair(null);setStatus({});setError('Association terminée. Affichez un nouveau code.');}if(!stopped){setStatus(value=>({...value,hostConnected:false,phoneConnected:false}));reconnect();}};
   ws.onerror=()=>setError('Connexion à la manette indisponible. Réessayez.');
  };connect();const heartbeat=setInterval(()=>{if(socket.current?.readyState===1)socket.current.send('{"type":"ping"}');else if(socket.current?.readyState===3)reconnect();if(Date.now()-lastInput.current>1200){clearPhonePad();navState.current.clear();}},5000);
  return()=>{stopped=true;clearTimeout(timer);clearInterval(heartbeat);socket.current?.close();clearPhonePad();};
 },[pair?.id,token]);
 useEffect(()=>{clearPhonePad();navState.current.clear();if(socket.current?.readyState===1)socket.current.send(JSON.stringify({type:'context',screen,mirrorSessionId:mirror}));},[route.pathname,route.search,screen,mirror]);
 useEffect(()=>{if(!pair)return;const timer=setInterval(()=>{setRemaining(Math.max(0,120-Math.floor((Date.now()-pair.createdAt)/1000)));},1000);return()=>clearInterval(timer);},[pair]);
 useEffect(()=>()=>{const current=pairRef.current;if(current&&token)phoneRequest(`/${current.id}/revoke`,{hostToken:current.hostToken},token).catch(()=>{});clearPhonePad();},[token]);
 useEffect(()=>{if(!tvDisplay||streaming)return;const focus=()=>{const tile=document.querySelector('.ps-console-tile[aria-pressed="true"]');if(tile){if(document.activeElement===document.body||document.activeElement?.matches('.ps-brand'))tile.focus({preventScroll:true});observer.disconnect();}};const observer=new MutationObserver(focus);observer.observe(document.body,{childList:true,subtree:true});const timer=setTimeout(focus,200);return()=>{clearTimeout(timer);observer.disconnect();};},[tvDisplay,streaming,route.pathname]);
 const ctx={tv,setTV,pair,status,error,busy,remaining,create,approve,revoke,open:()=>{setOpen(true);setError('');},close:()=>setOpen(false)};
 return <TVContext.Provider value={ctx}>{children}{token&&streaming&&(tv||pair)&&<button className="gf-tv-stream-phone" onClick={()=>setOpen(true)}>Manette téléphone{status.phoneConnected?' · connectée':''}</button>}{open&&<PairDialog ctx={ctx}/>}</TVContext.Provider>;
}
