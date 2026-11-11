import React,{useEffect,useRef,useState} from 'react';
import {useAuth} from '../profile/auth/AuthContext.jsx';
import {listCores} from '../api/retrogaming.js';
import {useEmulators,refreshCoreListing} from './EmulatorAssistant.jsx';
import {Icon} from './EmulatorUI.jsx';

export default function ConsoleEmulatorBanner({consoleId,consoleName,onReady}){
 const {token}=useAuth()||{},{state,error,install,refresh}=useEmulators(token);
 const item=state?.items.find(entry=>entry.consoleId===consoleId);
 const [fallback,setFallback]=useState(null),[coreError,setCoreError]=useState(''),[syncError,setSyncError]=useState(''),[requesting,setRequesting]=useState(false);
 const synced=useRef(''),latestReady=useRef(onReady);latestReady.current=onReady;
 useEffect(()=>{setFallback(null);setCoreError('');setSyncError('');if(!state||error)return;let active=true;listCores(consoleId).then(result=>{if(active){if(result.ok)setFallback((result.data||[]).some(core=>core.installed));else setCoreError('Impossible de vérifier les émulateurs installés.');}}).catch(()=>{if(active)setCoreError('Impossible de vérifier les émulateurs installés.');});return()=>{active=false;};},[consoleId,state,item,error]);
 useEffect(()=>{if(item?.job?.status!=='succeeded')return;const identity=JSON.stringify([consoleId,item.job]);if(synced.current===identity)return;synced.current=identity;let active=true;refreshCoreListing(token).then(()=>{if(active){setSyncError('');latestReady.current?.();}}).catch(()=>{if(active){synced.current='';setSyncError('Émulateur installé. Actualisez la bibliothèque pour le détecter.');}});return()=>{active=false;};},[consoleId,item?.job?.status,token]);
 if(error)return <div className="ps-emulator-banner ps-emulator-error" role="alert"><Icon name="settings"/><div><strong>Vérification de l’émulateur indisponible</strong><p>{error}</p></div><button onClick={refresh}>Réessayer</button></div>;
 if(syncError)return <div className="ps-emulator-banner" role="alert"><Icon name="settings"/><div><strong>{syncError}</strong></div><button onClick={()=>{setSyncError('');refresh();latestReady.current?.();}}>Actualiser</button></div>;
 const installed=item?.installed===true||fallback===true?true:fallback;
 if(installed===true)return null;
 if(coreError)return <div className="ps-emulator-banner" role="alert"><p>{coreError}</p><button onClick={refresh}>Réessayer</button></div>;
 if(!state||installed===null||installed===undefined)return <p className="ps-emulator-check" role="status">Vérification de l’émulateur…</p>;
 const running=requesting||item?.job?.status==='running'||item?.job?.status==='queued';
 const allowed=Boolean(item?.canInstall&&state.canInstall);
 const official=typeof item?.downloadPage==='string'&&item.downloadPage.startsWith('https://');
 return <aside className="ps-emulator-banner" aria-label="Émulateur manquant"><span className="ps-emulator-icon"><Icon name="consoles" size={27}/></span><div><strong>Installer l’émulateur compatible GameFlex</strong><p>{running?(item?.job?.message||'Installation en cours…'):item?.job?.status==='failed'?item.job.message:`Vos jeux ${consoleName} sont prêts. GameFlex va installer et configurer ${item?.name||'l’émulateur'} dans la version attendue.`}</p>{!running&&!allowed&&<small>{official?'Installation intégrée indisponible pour cette plateforme · téléchargement officiel proposé.':'Aucun émulateur fonctionnel intégré pour cette console.'}</small>}</div>{allowed?<button disabled={running} onClick={async()=>{setRequesting(true);try{await install(consoleId);}finally{setRequesting(false);}}}>{running?'Installation…':`Installer ${item?.name||'l’émulateur'} pour GameFlex`}</button>:official?<a className="ps-emulator-download" href={item.downloadPage} target="_blank" rel="noreferrer">Téléchargement officiel</a>:<button disabled>Indisponible</button>}</aside>;
}
