import React,{useState} from 'react';
import folders from '../.local/deployment/folder-preview.json';
import {createRoot} from 'react-dom/client';
import {LibrarySetup,DownloadNotifications} from '../src/webapp/src/app/gameflex/experience/LibraryManager.jsx';
import ExperienceView from '../src/webapp/src/app/gameflex/experience/ExperienceView.jsx';
import consoles from './console-photos/catalog.json';
function App(){const [setup,setSetup]=useState(true),[items,setItems]=useState([]);return <><div className="preview-notice">APERÇU INTERACTIF · AUCUNE INSTALLATION EFFECTUÉE</div><ExperienceView mode="covers" section="consoles" consoles={consoles} onConsole={()=>setSetup(true)}/>{setup&&<LibrarySetup library={{configured:false,canConfigure:true,availableFolders:['/home/config/GameFlex/.local/demo-library']}} onBrowse={async folder=>{if(!folders[folder])throw new Error('Dossier inaccessible');return folders[folder];}} onLater={()=>setSetup(false)} onSave={async()=>{setSetup(false);setItems([{id:'preview',kind:'success',title:'Dossier configuré',message:'Les jeux seront rangés par console.'}])}}/>}<DownloadNotifications items={items} onDismiss={id=>setItems(xs=>xs.filter(x=>x.id!==id))}/></>};
createRoot(document.getElementById('root')).render(<App/>);
