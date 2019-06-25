package com.easybuy.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easybuy.entity.ProType;
import com.easybuy.service.ProTypeService;

@Controller
@RequestMapping("/protype")
public class ProTypeController {
	
	@Autowired
	private ProTypeService ptService;
	
	@ResponseBody
	@RequestMapping("/selecttype")
	public Map<String,Object> selectType(){
		Map<String,Object> map = new HashMap<String,Object>();
		List<ProType> list = ptService.selectAllProType();
		List<ProType> list1 = new ArrayList<ProType>();
		List<ProType> list2 = new ArrayList<ProType>();
		List<ProType> list3 = new ArrayList<ProType>();
		for (ProType p : list) {
			if(p.getType()==1) {
				list1.add(p);
			}else if(p.getType()==2) {
				list2.add(p);
			}else if(p.getType()==3) {
				list3.add(p);
			}
		}
		map.put("type1list", list1);
		map.put("type2list", list2);
		map.put("type3list", list3);
		return map;
	}
	
}
