"""Read-only, conservative occupancy check. A silent game is still occupied."""
import re
class TVOccupied(RuntimeError):pass
def classify(power,foreground,playing,home):
 awake='mWakefulness=Awake' in power or 'mWakefulness=Dreaming' in power
 home_component=next((s.strip() for s in home.splitlines() if '/' in s and not s.startswith('priority=')),'')
 on_home=bool(home_component and home_component in foreground)
 occupied=playing>0 or (awake and not on_home) or not any(x in power for x in ['mWakefulness=Awake','mWakefulness=Asleep','mWakefulness=Dozing','mWakefulness=Dreaming'])
 return {'occupied':occupied,'awake':awake,'playingMediaSessions':playing,'launcherVisible':on_home,'reason':'Lecture ou application au premier plan : installation différée.' if occupied else 'Aucune lecture active ; TV en veille ou sur son accueil.'}
def inspect_availability(tv):
 power=tv.shell('dumpsys power | /system/bin/grep mWakefulness');foreground=tv.shell('dumpsys activity activities | /system/bin/grep mResumedActivity');media=tv.shell('dumpsys media_session');playing=len(re.findall(r'state=PlaybackState \{state=3[, ]',media));home=tv.shell('cmd package resolve-activity --brief --user 0 -a android.intent.action.MAIN -c android.intent.category.HOME')
 return classify(power,foreground,playing,home)
def require_unoccupied(tv):
 report=inspect_availability(tv)
 if report['occupied']:raise TVOccupied(report['reason'])
 return report
