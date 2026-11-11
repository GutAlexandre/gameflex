"""Real public HTTPS media, synthetic source, UDP blocked. Credentials only on stdin."""
import sys,json,os,base64
from pathlib import Path
from playwright.sync_api import sync_playwright
cfg=json.load(sys.stdin);root=Path('/app');work=root/'.local/audio-fix';base=cfg.get('base','https://loutrenas.myqnapcloud.com/gameflex');reports=[]
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
 for variant in cfg.get('variants',['before','after','no-video-decoder','webrtc']):
  context=browser.new_context(viewport={'width':390,'height':844},has_touch=True);login=context.request.post(base+'/api/v1/auth/login',data={'username':cfg['username'],'password':cfg['password']});assert login.ok,'API login refused';token=login.json()['item']['access_token'];page=context.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  page.add_init_script('localStorage.setItem("retrogaming-users-token",'+json.dumps(token)+');window.TEST_SESSION='+json.dumps(cfg['sessionId'])+';window.TEST_HOST='+json.dumps(base)+';')
  page.add_init_script("""window.__kinds={};const fetchOriginal=window.fetch.bind(window);window.fetch=async(...args)=>{const r=await fetchOriginal(...args);if(String(args[0]).endsWith('/poll'))r.clone().json().then(data=>{for(const f of data.frames||[]){if(f.binary){const k=atob(f.binary).charCodeAt(0);window.__kinds[k]=(window.__kinds[k]||0)+1;}}}).catch(()=>{});return r;};window.__contexts=[];const AC=window.AudioContext;window.AudioContext=class extends AC{constructor(...args){super(...args);window.__contexts.push(this);}};""")
  if variant!='webrtc':page.add_init_script("const RTC=window.RTCPeerConnection;window.RTCPeerConnection=class extends RTC{constructor(cfg){super({...cfg,iceTransportPolicy:'relay'});}};")
  if variant=='no-video-decoder':page.add_init_script('window.VideoDecoder=undefined;window.AudioDecoder=undefined;')
  page.route(base+'/__audio_probe__',lambda r:r.fulfill(content_type='text/html',body='<html lang="fr"><meta charset="utf-8"><style>body{background:#0b1628;color:white;font:16px sans-serif;margin:12px}button{padding:12px}canvas{max-width:100%}</style><div id="root"></div><script src="'+base+'/__audio_probe__.js"></script></html>'))
  page.route(base+'/__audio_probe__.js',lambda r:r.fulfill(content_type='application/javascript',path=str(work/'harness'/('before.js' if variant=='before' else 'after.js'))))
  page.route(base+'/audio/*',lambda r:r.fulfill(path=str(root/'src/webapp/src/public/audio'/r.request.url.rsplit('/',1)[1]),content_type='application/javascript' if r.request.url.endswith('.js') else 'text/plain'))
  page.goto(base+'/__audio_probe__');page.wait_for_timeout(11000)
  before=page.evaluate('window.audioTest.stats()');kinds=page.evaluate('window.__kinds');canvas=page.evaluate("[...document.querySelectorAll('canvas')].map(c=>({w:c.width,h:c.height,shown:getComputedStyle(c).display!=='none'}))")
  if variant=='before':
   assert not before;assert page.evaluate('window.__contexts.length')==0;assert kinds.get('1',0)>100,(canvas,kinds,errors);reports.append({'variant':variant,'receivedAudioPackets':kinds['1'],'audioContexts':0,'regressionReproduced':True})
  elif variant=='webrtc':
   if page.locator('.gateway-audio-unlock').is_visible():page.locator('.gateway-audio-unlock').click()
   else:print('RTC without prompt',page.evaluate("({media:[...document.querySelectorAll('audio')].map(a=>({muted:a.muted,paused:a.paused,volume:a.volume,ready:a.readyState,tracks:a.srcObject?.getTracks().length})),activation:navigator.userActivation.hasBeenActive})"),flush=True)
   page.wait_for_timeout(1500)
   live=page.evaluate("""async()=>({media:[...document.querySelectorAll('audio')].map(a=>({muted:a.muted,paused:a.paused,volume:a.volume,ready:a.readyState})),inbound:[...((await audioTest.raw())?.values()||[])].filter(r=>r.type==='inbound-rtp'&&r.kind==='audio').map(r=>({bytes:r.bytesReceived,energy:r.totalAudioEnergy}))})""")
   assert live['inbound'] and live['inbound'][0]['bytes']>0 and live['inbound'][0]['energy']>0,live;assert live['media'] and not live['media'][0]['muted'] and not live['media'][0]['paused'] and live['media'][0]['volume']>0,live;assert page.evaluate('audioTest.stats()') is None,'Direct WebRTC must not double audio through fallback';page.evaluate('audioTest.close()');reports.append({'variant':variant,'live':live,'singleAudioTransport':True})
  else:
   for _ in range(40):
    before=page.evaluate('window.audioTest.stats()')
    if before and before['samples']>0:break
    page.wait_for_timeout(250)
   assert before and before['energy']>0,before
   if page.locator('.gateway-audio-unlock').is_visible():page.locator('.gateway-audio-unlock').click()
   else:page.locator('#mute').click();page.locator('#mute').click()
   page.wait_for_timeout(1500);live=page.evaluate('window.audioTest.stats()');assert live['state']=='running' and live['scheduled']>0,live
   page.locator('#mute').click();page.wait_for_timeout(400);quiet=page.evaluate('window.audioTest.stats()');assert quiet['muted'];page.wait_for_timeout(400);assert page.evaluate('window.audioTest.stats().scheduled')==quiet['scheduled']
   page.locator('#mute').click();page.wait_for_timeout(700);assert not page.evaluate('window.audioTest.stats().muted');assert page.evaluate('window.audioTest.stats().scheduled')>quiet['scheduled']
   page.evaluate('window.audioTest.close()');page.wait_for_timeout(500);assert page.evaluate('window.__contexts.every(c=>c.state==="closed")');reports.append({'variant':variant,'beforeGesture':before,'live':live,'muteRespected':True,'resumed':True,'closed':True})
  assert not errors,errors;print('Passed '+variant,flush=True);context.close()
 browser.close()
Path('/results/public-audio.json').write_text(json.dumps(reports,indent=2));print(json.dumps(reports),flush=True)
