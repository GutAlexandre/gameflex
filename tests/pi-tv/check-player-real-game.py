"""Controlled original ROM, real app flow, checksum-guarded cleanup. No game downloads."""
import subprocess,json,urllib.request,ast,hashlib,secrets,time,socket
from pathlib import Path
wt=Path(__file__).resolve().parents[2];root=Path(subprocess.check_output(['git','rev-parse','--git-common-dir'],cwd=wt,text=True).strip()).resolve().parent
x=json.loads(subprocess.check_output(['docker','inspect','gameflex-credential']))[0];env=dict(v.split('=',1) for v in x['Config']['Env'] if '=' in v);base='http://192.168.1.63:2000'
def req(path,data=None,method=None):
 r=urllib.request.Request(base+path,data=json.dumps(data).encode() if data is not None else None,method=method,headers={'Content-Type':'application/json',**({'Authorization':'Bearer '+token} if 'token' in globals() else {})});return json.load(urllib.request.urlopen(r,timeout=45))
token=req('/api/v1/auth/login',{'username':env.get('GAMEFLEX_ROOT_USERNAME','root'),'password':env['GAMEFLEX_ROOT_PASSWORD']})['item']['access_token']
def unbox(d):return d.get('data',d)
def sessions():
 d=unbox(req('/api/v1/retrogaming/sessions'));return d.get('sessions',[]) if isinstance(d,dict) else d
assert not sessions(),'An existing game is active; real-game test deferred'
node=next(n for n in ast.parse((wt/'tests/pi-tv/tv-local-browser.py').read_text()).body if isinstance(n,ast.FunctionDef) and n.name=='nes');scope={};exec(compile(ast.Module(body=[node],type_ignores=[]),'original-test-program','exec'),scope);rom=scope['nes']();sha=hashlib.sha256(rom).hexdigest();name='0000 GameFlex Diagnostic audio '+secrets.token_hex(4);file=root/'.local/demo-library/roms/nes'/(name+'.nes');assert not file.exists();file.write_bytes(rom);file.chmod(0o644);reference=None;channel=None
before=req('/experience-api/v1/preferences')
def rpc(kind,data):
 global channel
 if channel is None:channel=req('/experience-api/v1/socket-bridge',{'path':'/api/v1/facade/ws'})['id']
 id=secrets.token_hex(8);req('/experience-api/v1/socket-bridge/'+channel+'/send',{'text':json.dumps({'type':kind,'id':id,'data':data})})
 for _ in range(20):
  for f in req('/experience-api/v1/socket-bridge/'+channel+'/poll',{}).get('frames',[]):
   if isinstance(f.get('text'),str):
    d=json.loads(f['text'])
    if d.get('id')==id and d.get('type')=='reply':return d
 raise RuntimeError('Test RPC timeout')
try:
 req('/api/v1/retrogaming/listing/rescan?section=roms',{},'POST')
 for _ in range(20):
  items=unbox(req('/api/v1/retrogaming/nes/roms'));found=[g for g in items if name.lower() in g.get('title','').lower()]
  if found:reference=found[0]['reference'];break
  time.sleep(.3)
 assert reference,'Original diagnostic cartridge was not listed'
 result=wt/'.local/player-preview/results';result.mkdir(parents=True,exist_ok=True)
 r=subprocess.run(['docker','run','--rm','-i','--name','gameflex-real-player-check','--network','container:'+socket.gethostname(),'--cpus','1','--memory','1024m','--shm-size','128m','-v',str(wt)+':/app:ro','-v',str(result)+':/results','gameflex-experience:pi-local','python3','/app/tests/pi-tv/player-real-game-browser.py'],input=json.dumps({'username':env.get('GAMEFLEX_ROOT_USERNAME','root'),'password':env['GAMEFLEX_ROOT_PASSWORD']}),text=True)
 if r.returncode:raise RuntimeError('Full-player browser regression failed')
finally:
 if reference:
  for s in sessions():
   if s.get('reference',s.get('game_id'))==reference or s.get('title',s.get('game',''))==name:
    try:req('/api/v1/retrogaming/sessions/'+s.get('id',s.get('sessionId',s.get('session_id')))+'/stop',{},'POST')
    except urllib.error.HTTPError:pass
 if channel:req('/experience-api/v1/socket-bridge/'+channel+'/close',{})
 for cid in subprocess.check_output(['docker','ps','-aq','--filter','label=gameflex.reference='+str(reference)],text=True).split():
  record=json.loads(subprocess.check_output(['docker','inspect',cid]))[0]
  if record['Config'].get('Labels',{}).get('gameflex.game')==name:subprocess.run(['docker','rm','-f',cid],check=True,stdout=subprocess.DEVNULL)

 assert file.is_file() and hashlib.sha256(file.read_bytes()).hexdigest()==sha,'Diagnostic file changed; not removing it';file.unlink();req('/api/v1/retrogaming/listing/rescan?section=roms',{},'POST');assert req('/experience-api/v1/preferences')==before,'Preferences changed during test'
 print('Owned diagnostic cartridge and session cleaned up; preferences preserved',flush=True)
