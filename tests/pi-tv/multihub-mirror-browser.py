"""Production-bundle regression for the phone's passive MultiHub mirror."""
import json,os
from playwright.sync_api import sync_playwright

BASE=os.environ.get('INTERFACE_PREVIEW','http://127.0.0.1:10200/')
MOCK="""
if(window.top===window){
sessionStorage.setItem('gameflex:phone-pad',JSON.stringify({id:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',phoneToken:'layout-fixture-capability-not-real'}));
const realFetch=window.fetch.bind(window);
window.fetch=(url,options)=>String(url).includes('/multihub/snapshot')
 ? Promise.resolve(new Response(JSON.stringify({version:1,html:'<!doctype html><html><body style="background:#081426;color:white"><main>MultiHub miroir test</main></body></html>'}),{status:200,headers:{'Content-Type':'application/json'}}))
 : realFetch(url,options);
window.WebSocket=class {
 constructor(){this.readyState=1;setTimeout(()=>this.onopen?.({}),30);}
 send(text){if(JSON.parse(text).role)setTimeout(()=>this.onmessage?.({data:JSON.stringify({type:'status',approved:true,hostConnected:true,epoch:1,screen:'library',mirrorSessionId:null})}),30);}
 close(){this.readyState=3;}
};
}
"""

with sync_playwright() as playwright:
 browser=playwright.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox','--disable-dev-shm-usage'])
 results=[]
 for width,height in [(390,844),(568,320),(932,430)]:
  context=browser.new_context(viewport={'width':width,'height':height},has_touch=True,is_mobile=True)
  context.add_init_script(MOCK);page=context.new_page();errors=[];page.on('pageerror',lambda error:errors.append(str(error)))
  page.goto(BASE+'controller');page.get_by_role('main',name='Manette tactile').wait_for()
  button=page.get_by_role('button',name='Miroir écran');assert button.is_enabled();button.click()
  page.get_by_role('application',name='Écran du MultiHub tactile').wait_for()
  page.frame_locator('iframe[title="Aperçu du MultiHub"]').get_by_text('MultiHub miroir test').wait_for()
  assert not errors,errors
  results.append({'viewport':[width,height],'buttonEnabled':True,'multiHubVisible':True})
  context.close()
 browser.close()
print(json.dumps({'passed':True,'results':results}))
