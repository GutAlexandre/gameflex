import React from 'react';
import {createRoot} from 'react-dom/client';
import ExperienceView from '../src/webapp/src/app/gameflex/experience/ExperienceView.jsx';
const image='/experience-api/v1/media/532aff8ec11f7fc0fb2d06ccf99516e90d64f98df5b5c2150dc0ce56995c1e7b';
const job={id:'preview-progress',gameId:'palette-libre',title:'Palette libre',consoleId:'nes',image,attribution:'GameFlex · CC0',status:'running',phase:'downloading',progress:42,bytesReceived:10328,totalBytes:24592,createdAt:Date.now()/1000,updatedAt:Date.now()/1000,message:'Téléchargement du fichier…'};
const shop=new URLSearchParams(location.search).get('view')==='shop';
createRoot(document.getElementById('root')).render(<><div className="progress-preview-notice">APERÇU · SIMULATION DU SUIVI · AUCUN TRANSFERT DÉCLENCHÉ</div><ExperienceView mode="covers" section={shop?'consoles':'library'} games={[]} downloadJobs={[job]} selectedConsole={shop?{id:'nes',name:'Nintendo Ent. System (NES)',year:1983}:undefined} planetLetter="P" planet={{items:[{title:'Palette libre',consoleId:'nes',downloadId:'palette-libre',image,attribution:'GameFlex · CC0',provider:'GameFlex'}]}} onOpen={()=>{}} onConsole={()=>{}} onHome={()=>{}}/></>);
