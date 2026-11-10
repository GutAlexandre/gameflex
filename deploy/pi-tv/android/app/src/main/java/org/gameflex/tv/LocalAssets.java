package org.gameflex.tv;
import android.content.res.AssetManager;import android.net.Uri;import android.webkit.WebResourceResponse;import java.io.*;
public final class LocalAssets {
 public static final String ORIGIN="https://gameflex.local";
 public static boolean trusted(String url){try{Uri u=Uri.parse(url);return "https".equals(u.getScheme())&&"gameflex.local".equals(u.getHost())&&u.getPort()==-1;}catch(Exception e){return false;}}
 public static WebResourceResponse response(AssetManager assets,String url){
  try{if(!trusted(url))return denied();String path=Uri.parse(url).getPath();if(path==null||!path.startsWith("/local/")||path.contains("..")||path.contains("\\")||path.indexOf('\0')>=0)return denied();String name=path.substring(1);String mime=name.endsWith(".js")?"application/javascript":name.endsWith(".wasm")?"application/wasm":name.endsWith(".css")?"text/css":name.endsWith(".png")?"image/png":name.endsWith(".webp")?"image/webp":"text/html";return new WebResourceResponse(mime,"UTF-8",assets.open(name));}catch(Exception e){return denied();}
 }
 private static WebResourceResponse denied(){return new WebResourceResponse("text/plain","UTF-8",403,"Forbidden",java.util.Collections.emptyMap(),new ByteArrayInputStream(new byte[0]));}
}
