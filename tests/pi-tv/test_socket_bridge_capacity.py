"""Allow two player documents during reload; retain the global memory bound."""
import sys,threading,unittest
from pathlib import Path
from unittest.mock import patch
sys.path.insert(0,str(Path(__file__).resolve().parents[2]/'tools/pi-tv'))
import socket_bridge
class FakeChannel:
 def __init__(self,owner,token,path):self.owner=owner
class Capacity(unittest.TestCase):
 def test_reload_capacity_is_bounded(self):
  pool=object.__new__(socket_bridge.Bridges);pool.channels={};pool.lock=threading.RLock()
  with patch.object(socket_bridge,'Channel',FakeChannel):
   for _ in range(12):pool.open('player','test','/api/v1/facade/ws')
   with self.assertRaises(socket_bridge.BridgeError) as owner_limit:pool.open('player','test','/api/v1/facade/ws')
   self.assertEqual(owner_limit.exception.code,429)
   for _ in range(4):pool.open('second','test','/api/v1/facade/ws')
   with self.assertRaises(socket_bridge.BridgeError) as global_limit:pool.open('third','test','/api/v1/facade/ws')
   self.assertEqual(global_limit.exception.code,429);self.assertEqual(len(pool.channels),16)
if __name__=='__main__':unittest.main()
