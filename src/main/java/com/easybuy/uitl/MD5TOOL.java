package com.easybuy.uitl;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
public class MD5TOOL {
	public static MD5TOOL md5;
	public  MD5TOOL() {};
	
	public static MD5TOOL getInstance(){
		if (md5==null) {
			
		}
		md5=new MD5TOOL();		
		return md5;
	}
	public String getMD5tring(String password)  {
		MessageDigest md5;
		String str="";
		try {
			md5 = MessageDigest.getInstance("md5");
			try {
				md5.update(password.getBytes("UTF8"));
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
			byte [] bs=md5.digest();
			for (int i = 0; i < bs.length; i++) {
				str+=Integer.toHexString((0x000000FF&bs[i]) 
						| 0xFFFFFF00).substring(6);
			}
			str=str.toUpperCase();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		
		return str;
	}
}
