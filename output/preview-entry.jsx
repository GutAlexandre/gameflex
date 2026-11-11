import {foldSearch} from '../src/webapp/src/app/gameflex/experience/catalogue-search.js';
import CatalogGameDialog from '../src/webapp/src/app/gameflex/experience/CatalogGameDialog.jsx';
import LaunchDialog from '../src/webapp/src/app/gameflex/experience/LaunchDialog.jsx';
import boxed from '../.local/deployment/pokemon-preview.json';
import nesPlanet from '../.local/pi-tv/planetemu/nes-A.json';
import planet from '../.local/pi-tv/planetemu/gbc-A.json';
import photoCatalog from './console-photos/catalog.json';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import ExperienceView, { InterfacePicker } from '../src/webapp/src/app/gameflex/experience/ExperienceView.jsx';
const consoles = photoCatalog;
const games = [{title:'Palette libre',reference:'demo-palette',consoleId:'nes',consoleName:'Nintendo Ent. System (NES)',image:'/experience-api/v1/media/532aff8ec11f7fc0fb2d06ccf99516e90d64f98df5b5c2150dc0ce56995c1e7b',attribution:'GameFlex · CC0',status:'Local'}];
function App(){
 const [launch,setLaunch]=useState(null),[catalogGame,setCatalogGame]=useState(null),[search,setSearch]=useState(new URLSearchParams(location.search).get('search')||'');
 const [letter,setLetter]=useState(new URLSearchParams(location.search).get('letter') || 'M');
 const [section,setSection]=useState(new URLSearchParams(location.search).get('section') || 'home');
 const [console,setConsole]=useState(new URLSearchParams(location.search).get('console') || '');
 const [mode,setMode]=useState(new URLSearchParams(location.search).get('interface') || 'picker');
 useEffect(()=>{document.title=`GameFlex · ${mode} · ${section}`},[mode,section]);
 const [favorites,setFavorites]=useState(games.slice(0,4).map(g=>`${g.consoleId}:${g.reference}`));
 const [collections,setCollections]=useState([{id:'coop',name:'À partager',games:games.slice(0,4).map(g=>`${g.consoleId}:${g.reference}`)},{id:'discover',name:'À découvrir',games:games.slice(4).map(g=>`${g.consoleId}:${g.reference}`)}]);
 const choose=id=>{setMode(id);history.replaceState(null,'',`?interface=${id}`)};
 return <><div className="preview-notice">APERÇU · CATALOGUE RÉEL · CONTENU LOCAL DE TEST</div>{mode==='picker'?<InterfacePicker onChoose={choose}/>:<ExperienceView mode={mode} games={console ? games.filter((g,i)=>g.consoleId===console && i===0) : games} consoles={consoles} favorites={favorites} history={games.slice(0,5).map(g=>`${g.consoleId}:${g.reference}`)} collections={collections} user="Aperçu" section={section} onNavigate={id=>{setConsole('');setSection(id)}} onHome={()=>{setConsole('');setSection('consoles')}} selectedConsole={consoles.find(c=>c.id===console)} initialQuery={new URLSearchParams(location.search).get('search')||''} onSearchQuery={setSearch} planet={{items:Object.values(boxed).flatMap(page=>page.items||[]),query:foldSearch(search),loading:false}} planetLetter={letter} onPlanetLetter={setLetter} onSettings={()=>choose('picker')} onOpen={game=>game.reference?setLaunch(game):setCatalogGame(game)} onConsole={c=>setConsole(c.id)} onFavorite={g=>{const k=`${g.consoleId}:${g.reference}`;setFavorites(f=>f.includes(k)?f.filter(x=>x!==k):[...f,k])}} onCreateCollection={()=>{const name=prompt('Nom de la collection');if(name)setCollections(c=>[...c,{id:String(Date.now()),name,games:[]}])}} onAddToCollection={(id,g)=>setCollections(c=>c.map(x=>x.id===id?{...x,games:[...new Set([...x.games,`${g.consoleId}:${g.reference}`])]}:x))}/>}{catalogGame&&<CatalogGameDialog game={catalogGame} onClose={()=>setCatalogGame(null)} onPlay={()=>setCatalogGame(null)} onInstall={()=>setCatalogGame(null)}/>} {launch && <LaunchDialog game={launch} mode={mode} launching={false} onPlay={()=>setLaunch(null)} onClose={()=>setLaunch(null)}/>}</>;
}
createRoot(document.getElementById('root')).render(<App/>);
