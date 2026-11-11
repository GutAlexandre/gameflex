import React from 'react';
import {createRoot} from 'react-dom/client';
import RomImportDialog from '../src/webapp/src/app/gameflex/experience/RomImportDialog.jsx';
const nativeFetch=window.fetch.bind(window);
window.fetch=(url,options)=>String(url).includes('/experience-api/v1/imports')?Promise.resolve({ok:true,json:async()=>({items:[],formats:{nes:['nes','unf'],gba:['gba'],gbc:['gb','gbc']}})}):nativeFetch(url,options);
createRoot(document.getElementById('root')).render(<><div style={{fontFamily:'system-ui',padding:35,color:'#172368'}}><small>GAMEFLEX / BIBLIOTHÈQUE</small><h1>Mes jeux</h1><button>＋ Ajouter une ROM</button><p>Aperçu du formulaire · aucun fichier envoyé</p></div><RomImportDialog token="" consoles={[{id:'nes',name:'Nintendo Entertainment System'},{id:'gba',name:'Game Boy Advance'},{id:'gbc',name:'Game Boy / Game Boy Color'}]} initialConsole="nes" onClose={()=>{}} onImported={()=>{}}/></>);
