package org.gameflex.tv;
import java.security.MessageDigest;
public final class LocalRom {
 public static final int MAX_BYTES=8*1024*1024;
 public static String system(byte[] b){
  if(b==null||b.length<16||b.length>MAX_BYTES)throw new IllegalArgumentException("Fichier trop petit ou trop volumineux (8 Mo maximum).");
  if(b[0]=='N'&&b[1]=='E'&&b[2]=='S'&&(b[3]&255)==26){int prg=b[4]&255,chr=b[5]&255,trainer=(b[6]&4)!=0?512:0;if(prg==0||b.length<16+trainer+prg*16384+chr*8192)throw new IllegalArgumentException("Fichier NES incomplet.");return "nes";}
  if(b.length>=32768&&b.length%16384==0){int flag=b[0x143]&255,type=b[0x147]&255;boolean typeOk=type<=3||(type>=15&&type<=19)||(type>=25&&type<=30)||type==255;if(typeOk){int sum=0;for(int i=0x134;i<=0x14c;i++)sum=(sum-(b[i]&255)-1)&255;if(sum==(b[0x14d]&255))return (flag==128||flag==192)?"gbc":"gb";}}
  throw new IllegalArgumentException("Format non reconnu. Importez un fichier NES, GB ou GBC non compressé.");
 }
 public static boolean validId(String id){return id!=null&&id.matches("[a-f0-9]{64}");}
 public static String id(byte[] b)throws Exception{StringBuilder s=new StringBuilder();for(byte n:MessageDigest.getInstance("SHA-256").digest(b))s.append(String.format("%02x",n&255));return s.toString();}
 public static String title(String name){String s=(name==null?"Mon jeu":name).replaceAll("[\\p{Cntrl}]","").replaceAll("(?i)\\.(nes|gb|gbc)$","").trim();return s.isEmpty()?"Mon jeu":s.substring(0,Math.min(s.length(),120));}
}
