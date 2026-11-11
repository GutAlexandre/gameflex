import subprocess,json,hmac,hashlib,base64,secrets,socket,sys,argparse,select
from pathlib import Path
parser=argparse.ArgumentParser(description='Publish a short-lived synthetic probe to the managed gateway and test public audio.');parser.add_argument('--live',action='store_true',help='Explicitly allow the temporary synthetic source on the managed gateway');parser.add_argument('--variant',action='append');args=parser.parse_args()
if not args.live:parser.error('--live is required; the check opens a temporary test stream')
wt=Path(__file__).resolve().parents[2];root=Path(subprocess.check_output(['git','rev-parse','--git-common-dir'],cwd=wt,text=True).strip()).resolve().parent
result=wt/'.local/audio-fix/results';result.mkdir(parents=True,exist_ok=True);source_name='gameflex-audio-probe-'+secrets.token_hex(4)

managed=json.loads(subprocess.check_output(['docker','inspect','gameflex-web']))[0];assert managed['Config'].get('Labels',{}).get('org.gameflex.project')==str(root),'Unmanaged GameFlex deployment'
x=json.loads(subprocess.check_output(['docker','inspect','gameflex-credential']))[0];assert 'gameflex-local' in x['NetworkSettings']['Networks'],'Credential service is outside the GameFlex network';env=dict(v.split('=',1) for v in x['Config']['Env'] if '=' in v);sid=secrets.token_hex(16);key=base64.urlsafe_b64encode(hmac.new(env['GAMEFLEX_INTERNAL_SECRET'].encode(),b'gameflex/auth: session secret v1\x00'+sid.encode(),hashlib.sha256).digest()).decode().rstrip('=')
source=subprocess.Popen(['docker','run','--rm','-i','--name',source_name,'--network','host','--cpus','.25','--memory','128m','-v',str(root)+':'+str(root)+':ro','-v',str(wt)+':/app:ro','node:20-bookworm-slim','node','/app/tests/pi-tv/publish-audio-probe.cjs'],stdin=subprocess.PIPE,stdout=subprocess.PIPE,stderr=subprocess.PIPE,text=True)
source.stdin.write(json.dumps({'sessionId':sid,'key':key}));source.stdin.close()
try:
 assert select.select([source.stdout],[],[],20)[0],'Synthetic source startup timed out'
 line=source.stdout.readline();assert 'ready' in line,'Synthetic source did not start';print('Synthetic source ready',flush=True)
 config={'variants':args.variant or ['before','after','no-video-decoder','webrtc'],'sessionId':sid,'username':env.get('GAMEFLEX_ROOT_USERNAME','root'),'password':env['GAMEFLEX_ROOT_PASSWORD']}
 proc=subprocess.run(['docker','run','--rm','-i','--name',source_name+'-browser','--network','container:'+socket.gethostname(),'--cpus','1','--memory','768m','--shm-size','128m','-v',str(wt)+':/app:ro','-v',str(result)+':/results','gameflex-experience:pi-local','python3','/app/tests/pi-tv/public-audio-browser.py'],input=json.dumps(config),text=True)
 raise SystemExit(proc.returncode)
finally:subprocess.run(['docker','stop','--time','2',source_name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
