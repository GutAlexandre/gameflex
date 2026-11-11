import React from 'react';
import {createRoot} from 'react-dom/client';
import CatalogGameDialog from '../src/webapp/src/app/gameflex/experience/CatalogGameDialog.jsx';
import {prioritizeMetadata} from '../src/webapp/src/app/gameflex/experience/metadata-priority.js';
import data from './emugen-preview-data.json';
const game=prioritizeMetadata({...data.game,variants:[{...data.game,language:(data.game.languages||[]).join(',')}]},data.game);
const nativeFetch=window.fetch.bind(window);
window.fetch=(url,options)=>{
 if(String(url).includes('/metadata/enrich'))return Promise.resolve({ok:true,json:async()=>({item:game})});
 if(String(url).includes('/emugen/sources'))return Promise.resolve({ok:true,json:async()=>data.sources});
 return nativeFetch(url,options);
};
createRoot(document.getElementById('root')).render(<><div style={{fontFamily:'system-ui',padding:30,color:'#172368'}}><small>GAMEFLEX / EMUGEN</small><h1>Fiche du jeu</h1><p>Données publiques réelles · état Cloudflare observé sur le Pi</p></div><CatalogGameDialog game={game} token="preview" onClose={()=>{}} onInstall={()=>{}} onPlay={()=>{}}/></>);
