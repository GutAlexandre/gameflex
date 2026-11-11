"""Generate original test media using the already installed runtime image; no downloads."""
import subprocess,json,base64
from pathlib import Path
root=Path(__file__).resolve().parents[2]/'.local/audio-fix';root.mkdir(parents=True,exist_ok=True)
args=['docker','run','--rm','--network','none','--cpus','1','--entrypoint','ffmpeg','gameflex-retrogaming:pi-local','-v','error']
opus=subprocess.check_output(args+['-f','lavfi','-i','sine=frequency=440:sample_rate=48000','-t','2','-ac','2','-c:a','libopus','-b:a','64k','-frame_duration','10','-f','opus','pipe:1']);offset=0;packet=b'';packets=[]
while offset<len(opus):
 assert opus[offset:offset+4]==b'OggS';count=opus[offset+26];lacing=opus[offset+27:offset+27+count];start=offset+27+count
 for size in lacing:
  packet+=opus[start:start+size];start+=size
  if size<255:
   if not packet.startswith((b'OpusHead',b'OpusTags')):packets.append(base64.b64encode(packet).decode())
   packet=b''
 offset=start
(root/'tone.json').write_text(json.dumps(packets))
video=subprocess.check_output(args+['-f','lavfi','-i','testsrc=size=256x240:rate=20','-t','2','-pix_fmt','yuv420p','-c:v','libx264','-profile:v','baseline','-preset','ultrafast','-tune','zerolatency','-g','20','-x264-params','repeat-headers=1:aud=1','-f','h264','pipe:1']);(root/'test-pattern.h264').write_bytes(video)
print('Original 440 Hz tone and test pattern generated; no games or BIOS used.')
