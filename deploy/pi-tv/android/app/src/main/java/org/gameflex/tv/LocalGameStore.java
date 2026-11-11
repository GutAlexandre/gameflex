package org.gameflex.tv;
import android.content.Context;import android.content.Intent;import android.net.Uri;import android.provider.OpenableColumns;import android.database.Cursor;import android.webkit.JavascriptInterface;import android.util.Base64;import org.json.*;import java.io.*;
/** Registered only on the isolated local WebView. Never attached to a server page. */
public final class LocalGameStore {
 private final File dir;private final Context context;private volatile boolean enabled=true;
 public LocalGameStore(Context c){context=c;dir=new File(c.getFilesDir(),"tv-local-v1");dir.mkdirs();}
 public void disable(){enabled=false;}
 private File path(String id,String ext){if(!enabled||!LocalRom.validId(id))throw new IllegalArgumentException();return new File(dir,id+ext);}
 private byte[] read(File f,int maximum)throws IOException{try(InputStream in=new FileInputStream(f)){return bytes(in,maximum);}}
 private byte[] bytes(InputStream in,int max)throws IOException{ByteArrayOutputStream out=new ByteArrayOutputStream();byte[] b=new byte[8192];int n;while((n=in.read(b))!=-1){if(out.size()+n>max)throw new IOException("Fichier trop volumineux.");out.write(b,0,n);}return out.toByteArray();}
 private void atomic(File target,byte[] data)throws IOException{File tmp=new File(dir,target.getName()+".tmp");try(FileOutputStream out=new FileOutputStream(tmp)){out.write(data);out.getFD().sync();}if(!tmp.renameTo(target)){tmp.delete();throw new IOException("Enregistrement impossible.");}}
 public synchronized String importGame(Uri uri)throws Exception{if(!enabled||uri==null||!"content".equals(uri.getScheme()))throw new IOException("Fichier refusé.");String name="Mon jeu";try(Cursor c=context.getContentResolver().query(uri,new String[]{OpenableColumns.DISPLAY_NAME},null,null,null)){if(c!=null&&c.moveToFirst())name=c.getString(0);}byte[] b;try(InputStream in=context.getContentResolver().openInputStream(uri)){if(in==null)throw new IOException("Fichier illisible.");b=bytes(in,LocalRom.MAX_BYTES);}String system=LocalRom.system(b),id=LocalRom.id(b);JSONObject item=new JSONObject().put("id",id).put("title",LocalRom.title(name)).put("system",system).put("bytes",b.length);File rom=path(id,".rom");if(!rom.exists())atomic(rom,b);File meta=path(id,".json");if(!meta.exists())atomic(meta,item.toString().getBytes("UTF-8"));return id;}
 @JavascriptInterface public synchronized String library(){JSONArray list=new JSONArray();if(enabled){File[] all=dir.listFiles((d,n)->n.matches("[a-f0-9]{64}\\.json"));if(all!=null)for(File f:all)try{JSONObject item=new JSONObject(new String(read(f,4096),"UTF-8"));item.put("hasSave",path(item.getString("id"),".save").isFile());list.put(item);}catch(Exception ignored){}}return list.toString();}
 @JavascriptInterface public synchronized String rom(String id){try{return Base64.encodeToString(read(path(id,".rom"),LocalRom.MAX_BYTES),Base64.NO_WRAP);}catch(Exception e){return "";}}
 @JavascriptInterface public synchronized String load(String id){try{return new String(read(path(id,".save"),2*1024*1024),"UTF-8");}catch(Exception e){return "";}}
 @JavascriptInterface public synchronized boolean archive(String id){try{File save=path(id,".save");if(save.isFile())atomic(path(id,".save.previous"),read(save,2*1024*1024));return true;}catch(Exception e){return false;}}
 @JavascriptInterface public synchronized boolean save(String id,String json){try{if(json==null||json.length()>2*1024*1024||!path(id,".rom").isFile())return false;new JSONObject(json);atomic(path(id,".save"),json.getBytes("UTF-8"));return true;}catch(Exception e){return false;}}
}
