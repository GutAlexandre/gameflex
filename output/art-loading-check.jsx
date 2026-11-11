import React,{useState,useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {Art} from '../src/webapp/src/app/gameflex/experience/ExperienceView.jsx';
import urls from '../.local/deployment/art-fixtures.json';
function Check(){const [tick,setTick]=useState(0),[report,setReport]=useState({});
 useEffect(()=>{const timer=setInterval(()=>setTick(t=>t+1),40);return()=>clearInterval(timer);},[]);
 useEffect(()=>{const timer=setInterval(()=>{const images=[...document.querySelectorAll('.visible-check img')];setReport({loaded:images.filter(i=>i.complete&&i.naturalWidth>0).length,loading:document.querySelectorAll('.visible-check .em-cover-loading').length,offscreenRequested:Boolean(document.querySelector('#offscreen-check img')),renders:Number(document.getElementById('art-render-count')?.textContent||0)});},150);return()=>clearInterval(timer);},[]);
 return <><h1>Test du cache des jaquettes</h1><span id="art-render-count">{tick}</span><output id="art-report">{JSON.stringify(report)}</output><div className="visible-check">{urls.map((url,i)=><section key={i}><Art item={{title:`Cache ${i}`,image:i===0&&tick>20?urls[1]:url,attribution:'Cache local · aperçu'}}/></section>)}<section><Art item={{title:'Source lente simulée',image:'/experience-api/v1/covers/nes/c2xvdw',fallbackImage:urls[2],fallbackAttribution:'Cache local · secours'}}/></section></div><section id="offscreen-check" style={{marginTop:2200}}><Art item={{title:'Hors écran',image:urls[0]}}/></section></>;
}
createRoot(document.getElementById('root')).render(<Check/>);
