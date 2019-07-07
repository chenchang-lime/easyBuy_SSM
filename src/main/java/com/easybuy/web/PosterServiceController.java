package com.easybuy.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easybuy.entity.Poster;
import com.easybuy.entity.Product;
import com.easybuy.service.PosterService;
import com.easybuy.service.ProService;

@Controller
@RequestMapping("/poster")
public class PosterServiceController {
	@Autowired
	private PosterService service;
	
	@Autowired
	private ProService pService;
	
	@ResponseBody
	@RequestMapping("/selectPoster")
	public Map<String,Object> selectPoster(){
		Map<String,Object> map = new HashMap<String,Object>();
		List<Poster> poList = service.selectAllPoster();
		List<Product> proList = null;
		if(poList!=null&&poList.size()>0) {
			proList = new ArrayList<Product>();
			for (Poster p : poList) {
				System.out.println(p);
				Product pro = pService.selectProByID(p.getProID());
				if(pro!=null) {
					proList.add(pro);
				}
			}
			System.out.println("---------------------------");
			map.put("poList",poList);
			map.put("proList",proList);
			for (Product product : proList) {
				System.out.println(product);
			}
			System.out.println("ok");
			map.put("result", "ok");
		}else{
			map.put("result", "error");
		}
		return map;
	}
}
