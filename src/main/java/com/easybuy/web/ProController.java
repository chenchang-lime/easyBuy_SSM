package com.easybuy.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easybuy.entity.ProType;
import com.easybuy.entity.Product;
import com.easybuy.service.ProService;
import com.easybuy.service.ProTypeService;

@Controller
@RequestMapping("/pro")
public class ProController {
	@Autowired
	private ProService pService;
	@Autowired
	private ProTypeService ptService;
	
	@ResponseBody
	@RequestMapping("/selectProByTypeAJAX/{type1}/{type2}/{type3}/{pageNum}/{pageSize}")
	public Map<String,Object> selectProByTypeAJAX(@PathVariable Integer pageNum,@PathVariable Integer pageSize,@PathVariable Integer type1,@PathVariable Integer type2,@PathVariable Integer type3){
		Map<String,Object> map = new HashMap<String,Object>();
		//System.out.println("type1-->"+type1+",type2-->"+type2+",type3-->"+type3+",pageNum-->"+pageNum+",pageSize-->"+pageSize);
		List<Product> list = pService.selectProByType(pageNum, pageSize, type1, type2, type3);
		int totalPro = pService.countProByType(type1, type2, type3);
		map.put("list", list);
		map.put("pageNum", pageNum);
		map.put("pageSize", pageSize);
		map.put("totalPro", totalPro);
		map.put("totalPage", totalPro%pageSize==0?totalPro/pageSize:totalPro/pageSize+1);
		return map;
	}
	
	@RequestMapping("/selectProByType/{type1}/{type2}/{type3}")
	public String selectProByType(Model model,@PathVariable Integer type1,@PathVariable Integer type2,@PathVariable Integer type3){
		model.addAttribute("type1", type1);
		model.addAttribute("type2", type2);
		model.addAttribute("type3", type3);
		if(type1!=null) {
			String type1Name = ptService.selectTypeByID(type1).getName();
			model.addAttribute("type1Name", type1Name);
		}
		if(type2!=0){
			String type2Name = ptService.selectTypeByID(type2).getName();
			model.addAttribute("type2Name", type2Name);
		}
		if(type3!=0) {
			String type3Name = ptService.selectTypeByID(type3).getName();
			model.addAttribute("type3Name", type3Name);
		}
		return "categoryList";
	}
	
	@RequestMapping("/product/{proID}")
	public String product(Model model,@PathVariable Integer proID){
		model.addAttribute("proID", proID);
		return "product";
	}
	
	@ResponseBody
	@RequestMapping("/selectProByID/{proID}")
	public Map<String,Object> selectProByID(@PathVariable Integer proID){
		Map<String,Object> map = new HashMap<String,Object>();
		Product pro = pService.selectProByID(proID);
		ProType type1 = ptService.selectTypeByID(pro.getCategoryLevel1Id());
		ProType type2 = ptService.selectTypeByID(pro.getCategoryLevel2Id());
		ProType type3 = ptService.selectTypeByID(pro.getCategoryLevel3Id());
		map.put("pro", pro);
		map.put("type1", type1);
		map.put("type2", type2);
		map.put("type3", type3);
		return map;
	}
}
