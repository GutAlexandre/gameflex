"""Read-only, conservative occupancy check. A silent game is still occupied."""
import re
class TVOccupied(RuntimeError):pass
def classify(power,foreground,playing,home):
 awake='mWakefulness=Awake' in power or 'mWakefulness=Dreaming' in power
 home_components=re.findall(r'(?m)^\s*([a-zA-Z0-9_.]+/[a-zA-Z0-9_.$]+)\s*$',home)
 foreground_component=re.search(r'([a-zA-Z0-9_.]+)/[a-zA-Z0-9_.$]+',foreground)
 # OEM/custom launchers may resume a different activity in the same HOME package.
 home_packages={component.split('/',1)[0] for component in home_components}
 on_home=bool(foreground_component and foreground_component.group(1) in home_packages)
 occupied=playing>0 or (awake and not on_home) or not any(x in power for x in ['mWakefulness=Awake','mWakefulness=Asleep','mWakefulness=Dozing','mWakefulness=Dreaming'])
 return {'occupied':occupied,'awake':awake,'playingMediaSessions':playing,'launcherVisible':on_home,'reason':'Lecture ou application au premier plan : installation différée.' if occupied else 'Aucune lecture active ; TV en veille ou sur son accueil.'}
def inspect_availability(tv):
 power=tv.shell('dumpsys power | /system/bin/grep mWakefulness');foreground=tv.shell('dumpsys activity activities | /system/bin/grep mResumedActivity');media=tv.shell('dumpsys media_session');playing=len(re.findall(r'state=PlaybackState \{state=3[, ]',media));home=tv.shell('cmd package query-activities --brief --user 0 -a android.intent.action.MAIN -c android.intent.category.HOME')
 return classify(power,foreground,playing,home)
def require_unoccupied(tv):
 report=inspect_availability(tv)
 if report['occupied']:raise TVOccupied(report['reason'])
 return report
