package com.easybuy.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
	public Map<String,Object> insertProduct(Product product){
		System.out.println(111);
		Map<String,Object> map = new HashMap<String,Object>();
		int num = service.insertProduct(product);
		System.out.println(num);
		if (num>0) {
			map.put("result", "yes");
		}else {
			map.put("result", "no");
		}
		System.out.println(map);
		return map;
	}
	
}
