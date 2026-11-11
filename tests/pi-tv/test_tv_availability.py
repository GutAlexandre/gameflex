import sys,unittest
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[2]/'tools/android-tv'))
from availability import classify
class AvailabilityTests(unittest.TestCase):
 def test_silent_gameflex_is_busy(self):self.assertTrue(classify('mWakefulness=Awake','org.gameflex.tv/.MainActivity',0,'launcher/.Home')['occupied'])
 def test_other_app_is_busy(self):self.assertTrue(classify('mWakefulness=Awake','player/.Movie',0,'launcher/.Home')['occupied'])
 def test_playing_music_is_busy_even_on_home(self):self.assertTrue(classify('mWakefulness=Awake','launcher/.Home',1,'launcher/.Home')['occupied'])
 def test_idle_home_can_install(self):self.assertFalse(classify('mWakefulness=Awake','launcher/.Home',0,'launcher/.Home')['occupied'])
 def test_unknown_is_not_free(self):self.assertTrue(classify('unknown','unknown',0,'')['occupied'])
 def test_standby_is_free_without_media(self):self.assertFalse(classify('mWakefulness=Asleep','launcher/.Home',0,'launcher/.Home')['occupied'])
if __name__=='__main__':unittest.main()
