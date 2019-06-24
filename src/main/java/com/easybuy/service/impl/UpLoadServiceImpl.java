package com.easybuy.service.impl;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.easybuy.service.UpLoadService;

@Service
public class UpLoadServiceImpl implements UpLoadService {

	@Value("${ftp_address}")
	private String ftp_address;
	
	@Value("${ftp_port}")
	private Integer ftp_port;
	
	@Value("${ftp_username}")
	private String ftp_username;
	
	@Value("${ftp_password}")
	private String ftp_password;
	
	@Value("${ftp_uploadPath}")
	private String ftp_uploadPath;
	
	@Value("${ftp_imageBasePath}")
	private String ftp_imageBasePath;
	
	
	public Map<String, Object> upLoadImage(MultipartFile imageFile) {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			FTPClient ftpClient = new FTPClient();
			ftpClient.connect(ftp_address, ftp_port);//连接FTP
			ftpClient.enterLocalPassiveMode();//设置连接为被动模式
			ftpClient.login(ftp_username, ftp_password);//登录
			ftpClient.changeWorkingDirectory(ftp_uploadPath);//设置将文件上传到哪个文件夹
			ftpClient.setFileType(FTP.BINARY_FILE_TYPE);//设置上传文件类型为二进制
			String oldName = imageFile.getOriginalFilename();
			//String newName = System.currentTimeMillis()+oldName.substring(oldName.lastIndexOf(","));
			String newName = UUID.randomUUID()+oldName;
			boolean bool = ftpClient.storeFile(newName, imageFile.getInputStream());
			if(bool) {
				map.put("code", 100);
				map.put("imageName", ftp_imageBasePath+newName);
				map.put("msg", "上传成功！");
			}else {
				map.put("code", 500);
				map.put("imageName", null);
			map.put("msg", "上传失败~！");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return map;
	}

}
