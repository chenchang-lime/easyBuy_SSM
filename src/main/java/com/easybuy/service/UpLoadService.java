package com.easybuy.service;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface UpLoadService {
	Map<String,Object> upLoadImage(MultipartFile imageFile);
}
