"""Library-driven installation of allowlisted libre cores, within the project volume.
Never fetches games/BIOS/firmware, never installs a system package.
"""
import io,json,os,platform,shutil,struct,subprocess,sys,tempfile,threading,time,urllib.parse,urllib.request,zipfile,hashlib
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from library import atomic_json
from rom_import import FORMATS
# One reviewed registry drives both the user-facing official links and the
# automatic allowlist. Entries without `automatic: true` are information
# links only; this service never fetches them.
CATALOG_PATH=Path(__file__).with_name('emulators.json')
def load_catalog():
 raw=json.loads(CATALOG_PATH.read_text(encoding='utf-8'))
 if raw.get('schemaVersion')!=1 or not isinstance(raw.get('platforms'),list):raise RuntimeError('Registre des émulateurs invalide.')
 by_console={}
 for platform_item in raw['platforms']:
  if not isinstance(platform_item,dict):continue
  for console in platform_item.get('consoleIds',[]):
   if isinstance(console,str) and console not in by_console:by_console[console]=platform_item
 return raw,by_console
CATALOG,CATALOG_BY_CONSOLE=load_catalog()
CORES={console:(item.get('core',''),item.get('emulator') or 'Configuration manuelle',item.get('license','')) for console,item in CATALOG_BY_CONSOLE.items()}
# Automatic installation remains limited to entries explicitly reviewed in
# emulators.json. Libretro cores are validated as shared objects; the few
# standalone packages are validated as AppImage/zip archives and left in
# cores/<console>/ for the matching session image to unpack and configure.
INSTALLABLE={console for console,item in CATALOG_BY_CONSOLE.items() if item.get('automatic') is True and item.get('integration') in ('libretro','streamex') and (item.get('core') or item.get('files'))}
DOWNLOADS={console:item.get('downloads',{}) for console,item in CATALOG_BY_CONSOLE.items()}
ARCH={'aarch64':('aarch64',183),'arm64':('aarch64',183),'x86_64':('x86_64',62)}
PACKAGE_HOSTS={'github.com','objects.githubusercontent.com','release-assets.githubusercontent.com','nightly.eden-emu.dev','master.eden-emu.dev'}
LOCK=threading.RLock();POOL=ThreadPoolExecutor(max_workers=1);JOBS={}
class EmulatorError(ValueError):pass
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*args,**kwargs):raise EmulatorError('Redirection du fournisseur refusée.')
class PackageRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,req,fp,code,msg,headers,newurl):
  parsed=urllib.parse.urlsplit(newurl)
  if parsed.scheme!='https' or (parsed.hostname or '').lower() not in PACKAGE_HOSTS:raise EmulatorError('Redirection de téléchargement non approuvée.')
  return super().redirect_request(req,fp,code,msg,headers,newurl)
def elf_machine(path):
 with Path(path).open('rb') as f:h=f.read(20)
 if len(h)!=20 or h[:4]!=b'\x7fELF' or h[4]!=2 or h[5]!=1 or struct.unpack_from('<H',h,16)[0]!=3:raise EmulatorError('Le core ne correspond pas à une bibliothèque Linux 64 bits.')
 return struct.unpack_from('<H',h,18)[0]
def validate_core(path,machine):
 if elf_machine(path)!=machine:raise EmulatorError('Architecture du core incompatible avec ce serveur.')
 probe="import ctypes,sys; c=ctypes.CDLL(sys.argv[1]); assert c.retro_api_version()==1; assert all(hasattr(c,n) for n in ['retro_init','retro_run','retro_load_game','retro_get_system_info'])"
 r=subprocess.run([sys.executable,'-c',probe,str(path)],capture_output=True,timeout=10)
 if r.returncode:raise EmulatorError('Core incompatible avec les bibliothèques du serveur. Aucun fichier installé.')
def package_file(item,platform_id):
 files=item.get('files',{})
 return files.get(platform_id) or files.get((platform_id or '').replace('/','-'))
def validate_package(path,filename,machine):
 lower=filename.lower()
 if lower.endswith('.appimage'):
  if elf_machine(path)!=machine:raise EmulatorError('Architecture de l’émulateur incompatible avec ce serveur.')
  with Path(path).open('rb') as source:header=source.read(11)
  if len(header)<11 or header[8:11] not in (b'AI\x01',b'AI\x02'):raise EmulatorError('AppImage invalide.')
  return
 if lower.endswith('.zip'):
  try:
   with zipfile.ZipFile(path) as archive:
    entries=archive.infolist()
    if not entries or sum(entry.file_size for entry in entries)>2*1024**3:raise EmulatorError('Archive d’émulateur invalide.')
    for entry in entries:
     bits=Path(entry.filename)
     if bits.is_absolute() or '..' in bits.parts:raise EmulatorError('Archive d’émulateur non sûre.')
  except zipfile.BadZipFile as error:raise EmulatorError('Archive d’émulateur invalide.') from error
  return
 raise EmulatorError('Format d’émulateur non pris en charge.')
def sha256_file(path):
 digest=hashlib.sha256()
 with Path(path).open('rb') as source:
  while block:=source.read(1024*1024):digest.update(block)
 return digest.hexdigest()
def asset_target(library,asset):
 destination=asset.get('destination','')
 parts=Path(destination)
 if not destination or parts.is_absolute() or '..' in parts.parts or parts.parts[0] not in ('bios',):raise EmulatorError('Destination des données d’émulateur invalide.')
 return library.mount/parts
def assets_installed(library,catalog):
 for asset in catalog.get('assets',[]):
  target=asset_target(library,asset);required=asset.get('required','')
  if target.is_symlink() or not required or not (target/required).is_file():return False
 return True
def install_assets(library,catalog,update):
 records=[]
 for asset in catalog.get('assets',[]):
  target=asset_target(library,asset);required=asset.get('required','')
  if not required or Path(required).is_absolute() or '..' in Path(required).parts:raise EmulatorError('Contrôle des données d’émulateur invalide.')
  if target.is_symlink():raise EmulatorError('Dossier de données d’émulateur refusé.')
  if (target/required).is_file():
   records.append({'id':asset.get('id'),'destination':asset.get('destination'),'existing':True});continue
  if target.exists():raise EmulatorError('Le dossier de données Dolphin existe mais il est incomplet ; il a été conservé.')
  url=asset.get('url','');root=asset.get('archiveRoot','')
  if not isinstance(url,str) or not url.startswith('https://buildbot.libretro.com/assets/system/') or not root or Path(root).name!=root:raise EmulatorError('Source des données d’émulateur non approuvée.')
  update(phase='configuring',message='Installation des données système de '+(catalog.get('emulator') or 'l’émulateur')+'…')
  request=urllib.request.Request(url,headers={'User-Agent':'GameFlex-Core-Assistant/1.0'})
  body=bytearray()
  with urllib.request.build_opener(NoRedirect).open(request,timeout=30) as response:
   total=int(response.headers.get('Content-Length','0')) or None
   if total and total>32*1024*1024:raise EmulatorError('Paquet de données d’émulateur trop volumineux.')
   while block:=response.read(65536):
    body.extend(block)
    if len(body)>32*1024*1024:raise EmulatorError('Paquet de données d’émulateur trop volumineux.')
  parent=target.parent
  if parent.is_symlink():raise EmulatorError('Dossier de données d’émulateur refusé.')
  parent.mkdir(parents=True,exist_ok=True)
  if shutil.disk_usage(parent).free<96*1024*1024:raise EmulatorError('Espace disque insuffisant pour les données de l’émulateur.')
  work=Path(tempfile.mkdtemp(prefix='.emulator-assets-',dir=parent))
  try:
   with zipfile.ZipFile(io.BytesIO(body)) as archive:
    entries=archive.infolist();expanded=sum(entry.file_size for entry in entries)
    if not entries or expanded>64*1024*1024:raise EmulatorError('Paquet de données d’émulateur invalide.')
    prefix=root+'/'
    for entry in entries:
     path=Path(entry.filename)
     if path.is_absolute() or '..' in path.parts or not entry.filename.startswith(prefix):raise EmulatorError('Paquet de données d’émulateur non sûr.')
     relative=Path(*path.parts[1:])
     if not relative.parts:continue
     output=work/root/relative
     if entry.is_dir():output.mkdir(parents=True,exist_ok=True);continue
     output.parent.mkdir(parents=True,exist_ok=True)
     with archive.open(entry) as source,output.open('wb') as destination:shutil.copyfileobj(source,destination,1024*1024)
   staged=work/root
   if not (staged/required).is_file():raise EmulatorError('Le paquet ne contient pas les données attendues par Dolphin.')
   os.replace(staged,target)
  finally:shutil.rmtree(work,ignore_errors=True)
  records.append({'id':asset.get('id'),'destination':asset.get('destination'),'source':url,'sha256':hashlib.sha256(body).hexdigest(),'size':len(body)})
 return records
def system_info():
 machine=platform.machine().lower();arch=ARCH.get(machine)
 try:ram=int(next(line.split()[1] for line in Path('/proc/meminfo').read_text().splitlines() if line.startswith('MemTotal:')))*1024
 except (OSError,StopIteration,ValueError):ram=0
 return {'os':platform.system(),'architecture':machine,'platform':('linux/'+arch[0]) if platform.system()=='Linux' and arch else None,'ramGiB':round(ram/1024**3),'execution':'server'}
def inventory(library):
 info=system_info();expected=ARCH.get(info['architecture'],('',0))[1];items=[]
 for console,extensions in FORMATS.items():
  folder=library.mount/'roms'/console
  if not folder.is_dir() or folder.is_symlink():continue
  entries=list(folder.iterdir())
  count=sum(p.is_file() and not p.is_symlink() and p.suffix.lower().lstrip('.') in extensions for p in entries)
  # Multi-file games (PS1 cue/bin, extracted Wii U titles, etc.) are one
  # top-level directory in the same library layout used by the kernel.
  count+=sum(p.is_dir() and not p.is_symlink() and not p.name.startswith('.') for p in entries)
  if not count:continue
  core,name,license=CORES.get(console,('','Configuration manuelle',''))
  catalog=CATALOG_BY_CONSOLE.get(console,{})
  integration=catalog.get('integration','none');filename=package_file(catalog,info['platform']) if integration=='streamex' else (core+'_libretro.so' if core else None)
  target=library.mount/'cores'/console/filename if filename else None;installed=False
  if target and target.is_file() and not target.is_symlink():
   try:
    if integration=='streamex':validate_package(target,filename,expected);installed=True
    else:installed=elf_machine(target)==expected
   except (OSError,EmulatorError):pass
  if installed and not assets_installed(library,catalog):installed=False
  with LOCK:job=dict(JOBS[console]) if console in JOBS else None
  platform_downloads=catalog.get('downloads',{})
  download_url=platform_downloads.get(info['platform']) or platform_downloads.get((info['platform'] or '').replace('/','-'))
  items.append({'consoleId':console,'games':count,'core':core,'name':name,'license':license,'installed':installed,
   'canInstall':bool(info['platform'] and console in INSTALLABLE and download_url and filename),
   'status':'installed' if installed else 'missing','supportStatus':catalog.get('status','manual'),
   'integration':integration,'downloadPage':catalog.get('downloadPage'),'packageFile':filename,
   'downloadUrl':download_url,'requiresBios':bool(catalog.get('requiresBios')),
   'requiresFirmware':bool(catalog.get('requiresFirmware')),'requiresKeys':bool(catalog.get('requiresKeys')),
   'requiresGpu':bool(catalog.get('requiresGpu')),'job':job})
 return {'hardware':info,'items':items,'catalogVersion':CATALOG.get('updated'),'canInstall':True}
def start(library,console):
 info=system_info()
 if console not in INSTALLABLE or not info['platform']:raise EmulatorError('Installation automatique non vérifiée pour cette console ou cette architecture.')
 item=next((i for i in inventory(library)['items'] if i['consoleId']==console),None)
 if not item:raise EmulatorError('Aucun jeu installé pour cette console.')
 if item['installed']:return {'status':'succeeded','consoleId':console,'message':'Émulateur déjà installé.'}
 with LOCK:
  if console in JOBS and JOBS[console]['status']=='running':return dict(JOBS[console])
  JOBS[console]={'consoleId':console,'status':'running','phase':'queued','message':'Installation en attente…','bytesReceived':0,'totalBytes':None}
 POOL.submit(install,library,console);return dict(JOBS[console])
def install(library,console):
 def update(**values):
  with LOCK:JOBS[console].update(values)
 partial=None
 try:
  info=system_info();arch,machine=ARCH[info['architecture']];core,name,license=CORES[console];catalog=CATALOG_BY_CONSOLE[console];integration=catalog.get('integration')
  target_dir=library.mount/'cores'/console
  if (library.mount/'cores').is_symlink() or target_dir.is_symlink():raise EmulatorError('Dossier de cores refusé.')
  target_dir.mkdir(parents=True,exist_ok=True)
  filename=package_file(catalog,info['platform']) if integration=='streamex' else core+'_libretro.so'
  if not filename or Path(filename).name!=filename:raise EmulatorError('Nom de paquet d’émulateur invalide.')
  target=target_dir/filename
  if target.is_symlink():raise EmulatorError('Un émulateur non sûr est déjà présent ; il a été conservé.')
  if target.exists():
   if integration!='libretro' or not catalog.get('assets') or assets_installed(library,catalog):raise EmulatorError('Un émulateur est déjà présent ; il a été conservé.')
   validate_core(target,machine);assets=install_assets(library,catalog,update);digest=sha256_file(target)
   atomic_json(library.data/'emulator-installations'/(console+'.json'),{'core':core,'file':filename,'integration':integration,'platform':info['platform'],'sha256':digest,'source':'existing','assets':assets,'installedAt':time.time(),'configured':True,'license':license})
   update(status='succeeded',phase='completed',message=name+' intégré et configuré.',sha256=digest);return
  url=DOWNLOADS.get(console,{}).get('linux/'+arch) or DOWNLOADS.get(console,{}).get('linux-'+arch)
  parsed=urllib.parse.urlsplit(url) if isinstance(url,str) else None
  valid_core=integration=='libretro' and isinstance(url,str) and url.startswith('https://buildbot.libretro.com/nightly/linux/')
  valid_package=integration=='streamex' and parsed and parsed.scheme=='https' and (parsed.hostname or '').lower() in PACKAGE_HOSTS
  if not valid_core and not valid_package:
   raise EmulatorError('Aucun téléchargement officiel vérifié pour cette architecture.')
  update(phase='downloading',message='Téléchargement de '+name+' pour Linux '+arch+'…')
  req=urllib.request.Request(url,headers={'User-Agent':'GameFlex-Core-Assistant/1.0'})
  max_bytes=512*1024*1024 if integration=='streamex' else 32*1024*1024
  deadline=time.monotonic()+(900 if integration=='streamex' else 120)
  opener=urllib.request.build_opener(PackageRedirect) if integration=='streamex' else urllib.request.build_opener(NoRedirect)
  fd,tmp=tempfile.mkstemp(prefix='.emulator-',suffix='.part',dir=target_dir);partial=Path(tmp)
  with os.fdopen(fd,'wb') as out,opener.open(req,timeout=30) as response:
   total=int(response.headers.get('Content-Length','0')) or None
   final=urllib.parse.urlsplit(getattr(response,'geturl',lambda:url)())
   if integration=='streamex' and (final.scheme!='https' or (final.hostname or '').lower() not in PACKAGE_HOSTS):raise EmulatorError('Source finale de téléchargement non approuvée.')
   if total and total>max_bytes:raise EmulatorError('Archive d’émulateur trop volumineuse.')
   if total and shutil.disk_usage(target_dir).free<total+96*1024*1024:raise EmulatorError('Espace disque insuffisant pour installer cet émulateur.')
   received=0
   while True:
    if time.monotonic()>deadline:raise EmulatorError('Téléchargement trop lent. Réessayez.')
    block=response.read(65536)
    if not block:break
    received+=len(block)
    if received>max_bytes:raise EmulatorError('Archive d’émulateur trop volumineuse.')
    out.write(block);update(bytesReceived=received,totalBytes=total)
   out.flush();os.fsync(out.fileno())
  update(phase='validating',message='Vérification et configuration de '+name+'…')
  if integration=='libretro':
   with zipfile.ZipFile(partial) as archive:
    entries=[e for e in archive.infolist() if e.filename==filename]
    if len(entries)!=1 or not 0<entries[0].file_size<=64*1024*1024:raise EmulatorError('Archive du core invalide.')
    archive_path=partial.with_suffix('.core')
    with archive.open(entries[0]) as source,archive_path.open('wb') as output:
     written=0
     while block:=source.read(1024*1024):
      written+=len(block)
      if written>64*1024*1024:raise EmulatorError('Core décompressé trop volumineux.')
      output.write(block)
     output.flush();os.fsync(output.fileno())
   partial.unlink();partial=archive_path
   validate_core(partial,machine)
  else:validate_package(partial,filename,machine)
  digest=sha256_file(partial)
  assets=install_assets(library,catalog,update)
  os.chmod(partial,0o644);os.link(partial,target,follow_symlinks=False)
  atomic_json(library.data/'emulator-installations'/(console+'.json'),{'core':core,'file':filename,'integration':integration,'platform':info['platform'],'sha256':digest,'source':url,'assets':assets,'installedAt':time.time(),'configured':True,'license':license})
  update(status='succeeded',phase='completed',message=name+' téléchargé et configuré.',sha256=digest)
 except EmulatorError as e:update(status='failed',phase='failed',message=str(e))
 except Exception:update(status='failed',phase='failed',message='Installation impossible. L’émulateur existant est conservé ; réessayez.')
 finally:
  if partial:partial.unlink(missing_ok=True)
