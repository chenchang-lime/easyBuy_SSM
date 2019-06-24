package com.easybuy.web;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.easybuy.entity.User;
import com.easybuy.service.UpLoadService;


@Controller
@RequestMapping("/pic")
public class PicController {
	
	@Autowired
	private UpLoadService service;
	
	@RequestMapping("/uploadToTomcat")
	public String uploadToTomcat(Model model,User account,@RequestParam("image") MultipartFile[] images,HttpServletRequest request) {
		String path = request.getServletContext().getRealPath("upload");//获取upload文件夹在Tomcat的真实路径
		System.out.println("path--->>>>>>>>>>>"+path);
		List<String> imagesList = new ArrayList<String>();
		try {
			for (MultipartFile img : images) {
				String oldName = img.getOriginalFilename();//获取上传前客户端所取的文件名
				String newName = UUID.randomUUID()+oldName;//用UUID生成一个新的唯一文件名
				File file = new File(path+"/"+newName);//创建File对象，包含需要保存的图片的路径，和新的名称
				img.transferTo(file);//将文件上传至指定路径（Tomcat项目中）
				imagesList.add(newName);//将文件名放入List中
			}
			model.addAttribute("imagesList", imagesList);
			return "uploadToTomcat";
		} catch (Exception e) {
			e.printStackTrace();
		}
		model.addAttribute("msg", "文件过大，上传失败！");
		return "error";
	}
	
	//ResponseBody将返回值类型自动转换成JSON（这里注解自动引用的是JackJson）
	@ResponseBody
	@RequestMapping("/uploadToTomcatAjax")
	public Map<String,Object> uploadToTomcatAjax(MultipartFile imageFile,HttpServletRequest request) {
		Map<String,Object> map = new HashMap<String, Object>();
		try {
			String path = request.getServletContext().getRealPath("upload");//获取upload文件夹在Tomcat的真实路径
			System.out.println("path--->>>>>>>>>>>"+path);
			String oldName = imageFile.getOriginalFilename();//获取上传前客户端所取的文件名
			String newName = UUID.randomUUID()+oldName;//用UUID生成一个新的唯一文件名
			File file = new File(path+"/"+newName);//创建File对象，包含需要保存的图片的路径，和新的名称
			imageFile.transferTo(file);//将文件上传至指定路径（Tomcat项目中）
			map.put("code", 100);
			map.put("imageName", newName);
			map.put("msg", "上传成功！");
		} catch (Exception e) {
			e.printStackTrace();
			map.put("code", 500);
			map.put("imageName", null);
			map.put("msg", "上传失败！");
		}
		return map;
	}
	
	//ResponseBody将返回值类型自动转换成JSON（这里注解自动引用的是JackJson）
	@ResponseBody
	@RequestMapping("/uploadToFTP")
	public Map<String,Object> uploadToFTP(MultipartFile imageFile) {
		return service.upLoadImage(imageFile);
	}
}
