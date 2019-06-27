package com.easybuy.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easybuy.service.ProTypeService;

@Controller
@RequestMapping("/pro")
public class ProController {
//	@Autowired
//	private ProService pService;
	@Autowired
	private ProTypeService ptService;
	
	@ResponseBody
	@RequestMapping("/selectProByTypeAJAX/{type1}/{type2}/{type3}")
	public Map<String,Object> selectProByTypeAJAX(@PathVariable Integer type1,@PathVariable Integer type2,@PathVariable Integer type3){
		Map<String,Object> map = new HashMap<String,Object>();
		System.out.println("type1-->"+type1+",type2-->"+type2+",type3-->"+type3);
		map.put("result", "ok");
		return map;
	}
	
	@RequestMapping("/selectProByType/{type1}/{type2}/{type3}")
	public String selectProByType(Model model,@PathVariable Integer type1,@PathVariable Integer type2,@PathVariable Integer type3){
		System.out.println("type1-->"+type1+",type2-->"+type2+",type3-->"+type3);
		model.addAttribute("type1", type1);
		String type1Name = ptService.selectTypeByID(type1).getName();
		model.addAttribute("type2", type2);
		String type2Name = ptService.selectTypeByID(type2).getName();
		model.addAttribute("type3", type3);
		String type3Name = ptService.selectTypeByID(type3).getName();
		model.addAttribute("type1Name", type1Name);
		model.addAttribute("type2Name", type2Name);
		model.addAttribute("type3Name", type3Name);
		return "categoryList";
	}
}
