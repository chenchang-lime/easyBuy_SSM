package com.easybuy.web;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.easybuy.entity.ProType;
import com.easybuy.entity.Product;
import com.easybuy.service.ProTypeService;
import com.easybuy.service.ProductService;
import com.github.pagehelper.PageHelper;


@Controller	
@RequestMapping("/product")
public class ProductController {	
	@Autowired
	private ProductService service;
	
	@ResponseBody
	@RequestMapping("/islogin")
	public Map<String,Object> islogin(HttpServletRequest request){
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		Map<String,Object> map = new HashMap<String,Object>();
		if (obj!=null) {
			map.put("result", "yes");
		}else {
			map.put("result", "no");
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/selectall")
	public Map<String,Object> selectAll(@RequestParam(value="currPage",defaultValue="1")int currPage,@RequestParam(value="pageSize",defaultValue="5")int pageSize){
		int count = service.selectCount();
		int totalPage = count%pageSize==0?count/pageSize:count/pageSize+1;
		Map<String,Object> map = new HashMap<String,Object>();
		List<Product> list = service.selectAll(currPage, pageSize);
		map.put("currPage",currPage);
		map.put("pageSize",pageSize);
		map.put("totalPage",totalPage);
		map.put("count",count);
		map.put("list",list);
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/selectType")
	public Map<String,Object> selectType(@RequestParam(value="currPage",defaultValue="1")int currPage,@RequestParam(value="pageSize",defaultValue="5")int pageSize){
		System.out.println(111);
		int count = service.selectTypeCount();
		System.out.println(count);
		int totalPage = count%pageSize==0?count/pageSize:count/pageSize+1;
		Map<String,Object> map = new HashMap<String,Object>();
		List<ProType> list1 = service.selectAllProType();
		map.put("list1",list1);//在不分页的情况下，实现查询所有
		PageHelper.startPage(currPage, pageSize);
		List<ProType> list = service.selectAllProType();
		System.out.println(list);
		map.put("currPage",currPage);
		map.put("pageSize",pageSize);
		map.put("totalPage",totalPage);
		map.put("count",count);
		map.put("list",list);
		for (ProType proType : list) {
			System.out.println(proType);
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/deleteType")
	public Map<String,Object> deleteType(int id){
		System.out.println(111);
		Map<String,Object> map = new HashMap<String,Object>();
		int num =service.deleteProType(id);
		System.out.println("num");
		if (num>0) {
			map.put("result", "yes");
		}else {
			map.put("result", "no");
			
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/deletePro")
	public Map<String,Object> deletePro(int id){
		System.out.println(111);
		Map<String,Object> map = new HashMap<String,Object>();
		int num =service.deletePro(id);
		System.out.println("num");
		if (num>0) {
			map.put("result", "yes");
		}else {
			map.put("result", "no");
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/updatePro")
	public Map<String,Object> updatePro(Product product){
		Map<String,Object> map = new HashMap<String,Object>();
		int num =service.updatePro(product);
		System.out.println("num");
		if (num>0) {
			map.put("result", "yes");
		}else {
			map.put("result", "no");
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/selectInsertType")
	public Map<String,Object> selectFirType(){
		System.out.println(111);
		Map<String,Object> map = new HashMap<String,Object>();
		List<ProType> list1 = service.selectFirType();
		List<ProType> list2 = service.selectSecType();
		List<ProType> list3 = service.selectThiType();
		map.put("list1", list1);
		map.put("list2", list2);
		map.put("list3", list3);
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/insertProduct")
	public Map<String,Object> insertProduct(@Valid Product product,BindingResult result){
		System.out.println("dwwdw");
		Map<String,Object> map = new HashMap<String,Object>();
		int num = service.insertProduct(product);
		System.out.println(num);
		List<String> errorList = new ArrayList<String>();
		if (result.hasErrors()) {	//判断是有有错
			System.out.println("haserror");
			map.put("result", "error");
			List<ObjectError> list = result.getAllErrors();	//取出所有的错误消息
			for (ObjectError objectError : list) {
				errorList.add("\n"+objectError.getDefaultMessage()+"\n");
			}
			map.put("errorList", errorList);
		}else {
			if (num>0) {
				map.put("result", "yes");
			}else {
				map.put("result", "no");
			}
			
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/upload")
	public Map<String, Object> upload(MultipartFile file,HttpServletRequest res) {
		Map<String, Object> map = new HashMap<String, Object>();
		String path = res.getServletContext().getRealPath("images");
		String oldName = file.getOriginalFilename();
		String newName = System.nanoTime()+oldName.substring(oldName.lastIndexOf("."));
		File f1 = new File(path+"/"+newName);
		try {
			file .transferTo(f1); 
			map.put("code",100);
			map.put("msg","上传成功");
			map.put("url", newName);
			System.out.println(newName);
		} catch (Exception e) {
			e.printStackTrace();
			map.put("code",500);
			map.put("msg","上传失败");
			map.put("url", "");
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/insertType")
	public Map<String,Object> insertType(ProType proType){
		System.out.println(123456789);
		Map<String,Object> map = new HashMap<String,Object>();
		int num = service.insertType(proType);
		System.out.println(num);
		if (num>0) {
			map.put("result", "yes");
		}else {
			map.put("result", "no");
		}
		System.out.println(map);
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/sameInsertName")
	public Map<String,Object> sameInsertName(String name){
		System.out.println(123456789);
		Map<String,Object> map = new HashMap<String,Object>();
		List<Product> list = service.sameInsertName(name);
		if (list.size()==0) {
			map.put("result", "yes");
		}else {
			map.put("result", "no");
		}
		return map;
	}
	@ResponseBody
	@RequestMapping("/sameSecType")
	public Map<String,Object> sameSecType(String name){
		Map<String,Object> map = new HashMap<String,Object>();
		List<ProType> list = service.sameSecType(name);
		if (list.size()==0) {
			map.put("result", "yes");
		}else {
			map.put("result", "no");
		}
		return map;
	}
	@ResponseBody
	@RequestMapping("/sameThdType")
	public Map<String,Object> sameThdType(String name){
		Map<String,Object> map = new HashMap<String,Object>();
		List<ProType> list = service.sameThdType(name);
		if (list.size()==0) {
			map.put("result", "yes");
		}else {
			map.put("result", "no");
		}
		return map;
	}
	
	
}
