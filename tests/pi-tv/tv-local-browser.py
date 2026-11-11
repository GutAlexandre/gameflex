"""Real local emulator cores, original synthetic test programs, zero remote API."""
import os,json,base64,hashlib
from pathlib import Path
from playwright.sync_api import sync_playwright
BASE=os.environ.get('LOCAL_PREVIEW','http://172.28.0.11:18235/local/')
OUT=Path(os.environ.get('RESULT_DIR','/results'));OUT.mkdir(parents=True,exist_ok=True)
def nes():
 b=bytearray(16+16384+8192);b[:6]=b'NES\x1a\x01\x01'
 code=bytearray([0x78,0xd8,0xa2,0xff,0x9a])
 def write(a,v):code.extend([0xa9,v,0x8d,a&255,a>>8])
 for a,v in [(0x2000,0),(0x2001,0),(0x4015,1),(0x4000,0xbf),(0x4001,0),(0x4002,0xfd),(0x4003,8),(0x2006,0x3f),(0x2006,0),(0x2007,0x21)]:write(a,v)
 loop=0x8000+len(code);code.extend([0xe6,0,0x4c,loop&255,loop>>8]);b[16:16+len(code)]=code
 for offset in [0x3ffa,0x3ffc,0x3ffe]:b[16+offset:16+offset+2]=bytes([0,0x80])
 return bytes(b)
def gb(color=False):
 b=bytearray(32768);b[0x100:0x103]=bytes([0xc3,0x50,0x01]);b[0x134:0x13a]=b'GFTEST';b[0x143]=0xc0 if color else 0;code=bytearray([0xf3,0x31,0xfe,0xff])
 def write(a,v):code.extend([0x3e,v,0xe0,a])
 write(0x40,0);code.extend([0x21,0,0x80,0x06,16]);loop=len(code);code.extend([0x3e,0xff,0x22,0x05,0x20,0xfa])
 for a,v in [(0x47,0xe4),(0x26,0x80),(0x24,0x77),(0x25,0x11),(0x11,0xbf),(0x12,0xf3),(0x13,0x87),(0x14,0x87),(0x40,0x91)]:write(a,v)
 code.extend([0x18,0xfe]);b[0x150:0x150+len(code)]=code;check=0
 for n in b[0x134:0x14d]:check=(check-n-1)&255
 b[0x14d]=check
 return bytes(b)
fixtures=[]
for system,data in [('nes',nes()),('gb',gb()),('gbc',gb(True))]:fixtures.append({'id':hashlib.sha256(data).hexdigest(),'title':'Programme de test original · '+system.upper(),'system':system,'data':base64.b64encode(data).decode()})
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage','--autoplay-policy=no-user-gesture-required']);page=browser.new_page(viewport={'width':960,'height':540});requests=[];page.on('request',lambda r:requests.append(r.url));page.add_init_script('''window.__commands=[];window.GameFlexNativePreview=url=>window.__commands.push(url);window.__games=[];window.GameFlexLocalStore={library:()=>JSON.stringify(window.__games.map(g=>({...g,hasSave:!!localStorage.getItem('test-save:'+g.id)}))),rom:id=>window.__games.find(g=>g.id===id)?.data||'',load:id=>localStorage.getItem('test-save:'+id)||'',save:(id,data)=>{if(data.length>2*1024*1024)throw Error('Save exceeds native bound');localStorage.setItem('test-save:'+id,data);return true;},archive:()=>true};''')
 page.goto(BASE+'startup.html');page.evaluate("GameFlexSetup.configure({server:'http://192.168.1.63:2000',mode:'server'})");assert page.locator('#address').input_value()=='http://192.168.1.63:2000';page.screenshot(path=str(OUT/'startup-server.png'))
 page.locator('#local-tab').click();assert page.locator('#local').is_visible();page.screenshot(path=str(OUT/'startup-local.png'));page.locator('#continue').click();assert page.evaluate("window.__commands.at(-1)").startswith('gameflex-setup://local?');page.goto(BASE+'index.html');page.get_by_text('Votre bibliothèque locale est vide',exact=True).wait_for();page.screenshot(path=str(OUT/'local-empty.png'))
 page.evaluate('data=>{window.__games=data;GameFlexLocal.refresh();}',fixtures);results=[]
 for f in fixtures:
  page.evaluate('id=>GameFlexLocal.launch(id,false)',f['id'])
  for _ in range(80):
   if page.evaluate('GameFlexLocal.stats().frames')>=40:break
   page.wait_for_timeout(250)
  stats=page.evaluate('GameFlexLocal.stats()');print(f['system'],stats,flush=True);assert stats['frames']>=40,(stats,page.locator('#message').inner_text());assert stats['playing'] and stats['audioState']=='running',stats;assert stats['audioSamples']>0 and stats['audioEnergy']>0,stats
  page.evaluate('GameFlexLocal.input(0,true)');assert 0 in page.evaluate('GameFlexLocal.stats().heldButtons');page.evaluate('GameFlexLocal.pause()');assert page.evaluate('GameFlexLocal.stats().heldButtons')==[]
  saved=page.evaluate('id=>localStorage.getItem("test-save:"+id)',f['id']);assert saved
  page.evaluate('GameFlexLocal.back()');page.evaluate('''async id=>{await GameFlexLocal.launch(id,true);GameFlexLocal.pause();}''',f['id']);restored=page.evaluate('id=>localStorage.getItem("test-save:"+id)',f['id'])
  if f['system']=='nes':assert json.loads(saved)['state']['cpu']['mem'][0]==json.loads(restored)['state']['cpu']['mem'][0]
  else:assert json.loads(saved)['state']==json.loads(restored)['state'],'GB state round-trip differs'
  page.screenshot(path=str(OUT/('local-'+f['system']+'-paused.png')));page.evaluate('GameFlexLocal.back()');results.append({'system':f['system'],'frames':stats['frames'],'audioSamples':stats['audioSamples'],'audioEnergy':stats['audioEnergy'],'saveRestored':True,'heldButtonsReleased':True})
 assert all(url.startswith(BASE) for url in requests),requests
 browser.close()
(OUT/'local-results.json').write_text(json.dumps({'passed':True,'realEmulatorCores':True,'testPrograms':'original synthetic NES/GB/GBC programs, not shipped as games','remoteRequests':False,'systems':results},indent=2)+'\n');print(json.dumps({'passed':True,'systems':[r['system'] for r in results],'realAudioSamples':True,'saveRoundTrips':True}))
