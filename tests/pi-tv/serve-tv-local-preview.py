"""Isolated APK assets preview, no proxy and no game downloads."""
from http.server import SimpleHTTPRequestHandler,ThreadingHTTPServer
from pathlib import Path
import mimetypes,urllib.parse
ROOT=Path(__file__).resolve().parents[2]/'deploy/pi-tv/android/app/src/main/assets'
class Handler(SimpleHTTPRequestHandler):
 def do_GET(self):
  p=urllib.parse.urlsplit(self.path).path
  if not p.startswith('/local/') or '..' in p or '\\' in p:self.send_error(404);return
  f=ROOT/p.lstrip('/')
  if not f.is_file():self.send_error(404);return
  data=f.read_bytes();mime='application/wasm' if f.suffix=='.wasm' else mimetypes.guess_type(f.name)[0] or 'application/octet-stream'
  self.send_response(200);self.send_header('Content-Type',mime);self.send_header('Cache-Control','no-store');self.end_headers();self.wfile.write(data)
 def log_message(self,*a):pass
if __name__=='__main__':ThreadingHTTPServer(('0.0.0.0',18235),Handler).serve_forever()
