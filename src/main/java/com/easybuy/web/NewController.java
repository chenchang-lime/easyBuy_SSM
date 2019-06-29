package com.easybuy.web;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.apache.commons.net.ftp.parser.MacOsPeterFTPEntryParser;
import org.apache.ibatis.reflection.wrapper.BaseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easybuy.entity.News;
import com.easybuy.service.impl.NewsServiceImpl;
import com.mysql.fabric.xmlrpc.base.Data;

@Controller
@RequestMapping("/new")
public class NewController {

	@Autowired
	private NewsServiceImpl serviceImpl;
	

		
	@RequestMapping("/tonewid")
	public String toNewId(Model model,Integer id) {
		
		News NewsByID = serviceImpl.selectNewsByID(id);
		model.addAttribute("NewsByID", NewsByID);
		return "/tonewid";
		
		
	}
			
	/**
	 * 分页显示新闻信息
	 */
	@ResponseBody
	@RequestMapping("/tonews")
	public Map<String,Object> tonews(@RequestParam(value="currPage",defaultValue="1")int currPage,@RequestParam(value="pageSize",defaultValue="5")int pageSize){
		
	    serviceImpl.selectNewsByPage(currPage, pageSize);
	    int count = serviceImpl.selectCount();
	    int totalPage = count%pageSize==0?count/pageSize:count/pageSize+1;
	   
	    Map<String,Object> map = new HashMap<String,Object>();	
		List<News> selectNewsByPage = serviceImpl.selectNewsByPage(currPage, pageSize);
		map.put("currPage",currPage);
		map.put("pageSize",pageSize);
		map.put("totalPage", totalPage);
		map.put("list",selectNewsByPage);
		return map;
	}
	
	/**
	 * 根据ID显示相应的新闻内容
	 */
	@ResponseBody
	@RequestMapping("/tonewscontent/{id}")
	public Map<String,Object> tonewscontent(@PathVariable int id){
	
		Map<String,Object> map = new HashMap<String,Object>();
		 serviceImpl.selectNewsByID(id);
		System.out.println(serviceImpl.selectNewsByID(id));
		map.put("id", serviceImpl.selectNewsByID(id));
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/toinsertnews")
	public Map<String,Object> toinsertNews(News news){
		
	   
		Map<String,Object> map=new HashMap<String, Object>();
		
		news.setCreateTime(new Date());
		int count=serviceImpl.insertNews(news);
		if(count>0) {
			map.put("result","ok");
		}else  {
			map.put("result","No");
			
		}
		return map;
	}
		
	
}
