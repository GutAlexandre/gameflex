"""Full application + real kernel/runtime; only preferences writes are isolated."""
import sys,json,re,mimetypes
from pathlib import Path
from urllib.parse import urlsplit
from playwright.sync_api import sync_playwright
cfg=json.load(sys.stdin);base='https://loutrenas.myqnapcloud.com/gameflex';web=Path('/app/.local/console-release/web' if cfg.get('production') else '/app/.local/player-preview/web');out=Path('/results');out.mkdir(exist_ok=True)
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage']);ctx=browser.new_context(viewport={'width':390,'height':844},has_touch=True,service_workers='block');login=ctx.request.post(base+'/api/v1/auth/login',data={'username':cfg['username'],'password':cfg['password']});assert login.ok;token=login.json()['item']['access_token'];page=ctx.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)));launchActors=[]
 def request_seen(r):
  if r.url.endswith('/send'):
   try:
    d=json.loads(r.post_data_json.get('text','{}'))
    if d.get('type')=='launch':launchActors.append(d.get('data',{}).get('username')==cfg['username'])
   except Exception:pass
 page.on('request',request_seen)
 page.add_init_script('localStorage.setItem("retrogaming-users-token",'+json.dumps(token)+');localStorage.setItem("gameflex:tv-mode","1");')
 page.add_init_script("""window.__traffic=[];const originalFetch=window.fetch.bind(window);window.fetch=async(...a)=>{const r=await originalFetch(...a);if(String(a[0]).endsWith('/poll'))r.clone().json().then(d=>{for(const f of d.frames||[]){if(f.text)try{const v=JSON.parse(f.text),data=v.data;__traffic.push({type:v.type,topic:v.topic,state:v.state,code:v.code,error:typeof v.error==='string'?v.error.slice(0,90):null,dataType:Array.isArray(data)?'array':typeof data,count:Array.isArray(data)?data.length:null,hasRequested:Array.isArray(data)?data.some(x=>x.id===new URLSearchParams(location.search).get('sessionId')):null,role:v.me?.role||data?.me?.role});if(__traffic.length>150)__traffic.shift();}catch{}}}).catch(()=>{});return r;};window.__audio={contexts:[],resumes:[],energy:0,samples:0};window.__gesture=0;window.addEventListener('pointerup',()=>window.__gesture=performance.now(),true);window.addEventListener('click',()=>window.__gesture=performance.now(),true);const AC=window.AudioContext;window.AudioContext=class extends AC{constructor(o){super(o);__audio.contexts.push(this);const resume=this.resume.bind(this);this.resume=()=>{__audio.resumes.push({gestureAgo:performance.now()-window.__gesture,trusted:navigator.userActivation.isActive});return resume();};const create=this.createBufferSource.bind(this);this.createBufferSource=()=>{const s=create(),connect=s.connect.bind(s),start=s.start.bind(s);s.connect=n=>{s.__to=n;return connect(n);};s.start=(...a)=>{if(s.buffer&&s.context.state==='running'){const gain=s.__to?.gain?.value??1;for(let c=0;c<s.buffer.numberOfChannels;c++)for(const v of s.buffer.getChannelData(c))__audio.energy+=v*v*gain*gain;__audio.samples+=s.buffer.length;}return start(...a);};return s;};}};const RTC=window.RTCPeerConnection;window.RTCPeerConnection=class extends RTC{constructor(c){super({...c,iceTransportPolicy:'relay'});}};if(window.VideoDecoder){const VD=window.VideoDecoder;window.VideoDecoder=class extends VD{configure(c){return super.configure({...c,hardwareAcceleration:'prefer-software'});}};}""")
 def route(r):
  path=urlsplit(r.request.url).path.removeprefix('/gameflex')
  if path.startswith('/api/') or path.startswith('/experience-api/'):
   if path=='/experience-api/v1/preferences' and r.request.method=='PUT':return r.fulfill(status=200,content_type='application/json',body='{}')
   return r.continue_()
  f=web/path.lstrip('/')
  if not f.is_file():f=web/'index.html'
  return r.fulfill(path=str(f),content_type=mimetypes.guess_type(f.name)[0] or 'application/octet-stream')
 page.route(base+'/**',route);page.goto(base+'/retrogaming/nes',wait_until='domcontentloaded');page.get_by_role('button',name=re.compile('^Lancer .*Diagnostic audio',re.I)).first.wait_for(timeout=40000);page.get_by_role('button',name=re.compile('^Lancer .*Diagnostic audio',re.I)).first.tap();page.wait_for_url('**/streaming?**',timeout=45000)
 stages=[]
 for _ in range(100):
  text=page.locator('body').inner_text()[:120]
  if not stages or stages[-1]!=text:stages.append(text)
  if page.evaluate('__audio.energy')>1:break
  page.wait_for_timeout(500)
 state=page.evaluate('({samples:__audio.samples,energy:__audio.energy,contexts:__audio.contexts.map(c=>c.state),resumes:__audio.resumes,canvas:[...document.querySelectorAll("canvas")].map(c=>({width:c.width,height:c.height,visible:!!c.getClientRects().length}))})')
 state['launchActorVerified']=launchActors
 state['traffic']=page.evaluate('window.__traffic');state['stages']=stages
 if state['energy']<=1:print('PLAYER STATE',json.dumps(state),'TEXT',page.locator('body').inner_text()[:1400],flush=True)
 assert state['energy']>1,'Real game produces no scheduled audible PCM'
 assert any(r['trusted'] and r['gestureAgo']<1000 for r in state['resumes']),'Audio was not primed during Launch'
 assert page.locator('.gf-tv-stream-phone').count()==0
 initial=state;page.reload(wait_until='domcontentloaded')
 for _ in range(80):
  if page.locator('.gateway-audio-unlock').is_visible() or page.evaluate('__audio.energy')>1:break
  page.wait_for_timeout(300)
 if not page.locator('.gateway-audio-unlock').is_visible():
  page.evaluate('for(const c of __audio.contexts)if(c.state!=="closed")c.suspend()');page.wait_for_timeout(300)
 button=page.locator('.gateway-audio-unlock')
 if not button.is_visible():
  print('RELOAD STATE',json.dumps(page.evaluate('({url:location.pathname,audio:{samples:__audio.samples,energy:__audio.energy,contexts:__audio.contexts.map(c=>c.state)},traffic:__traffic})')),'TEXT',page.locator('body').inner_text()[:1600],flush=True)
 button.wait_for(timeout=15000)
 assert button.evaluate('(b)=>{const r=b.getBoundingClientRect();return b.contains(document.elementFromPoint(r.x+r.width/2,r.y+r.height/2));}'),'Sound button is covered in the full player'
 button.tap()
 for _ in range(60):
  if page.evaluate('__audio.energy')>1:break
  page.wait_for_timeout(300)
 assert page.evaluate('__audio.energy')>1,'Full-player sound activation did not produce audible PCM'
 assert page.locator('.gf-tv-stream-phone').count()==0
 state={'launch':initial,'afterReload':page.evaluate('({samples:__audio.samples,energy:__audio.energy,contexts:__audio.contexts.map(c=>c.state)})')}
 page.screenshot(path=str(out/'real-player-mobile.png'))
 assert not errors,errors
 (out/'real-player.json').write_text(json.dumps(state,indent=2));print(json.dumps({'fullApplication':True,'realRuntime':True,'withoutExtraSoundTap':True,'audio':state,'noFloatingPhoneButton':True}),flush=True);ctx.close();browser.close()
