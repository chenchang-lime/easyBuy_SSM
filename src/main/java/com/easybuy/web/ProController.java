package com.easybuy.web;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easybuy.entity.Browse;
import com.easybuy.entity.MyLove;
import com.easybuy.entity.ProType;
import com.easybuy.entity.Product;
import com.easybuy.entity.User;
import com.easybuy.service.BrowseService;
import com.easybuy.service.MyLoveService;
import com.easybuy.service.ProService;
import com.easybuy.service.ProTypeService;

@Controller
@RequestMapping("/pro")
public class ProController {
	@Autowired
	private ProService pService;
	@Autowired
	private ProTypeService ptService;
	@Autowired
	private MyLoveService lService;
	@Autowired
	private BrowseService bService;
	
	
	@ResponseBody
	@RequestMapping("/selectProByTypeAJAX/{pageNum}/{pageSize}/{minPrice}/{maxPrice}/{orderBy}")
	public Map<String,Object> selectProByTypeAJAX(Product pro,@PathVariable Integer pageNum,@PathVariable Integer pageSize,@PathVariable Integer minPrice,@PathVariable Integer maxPrice,@PathVariable String orderBy,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		Integer type1 = pro.getCategoryLevel1Id();
		Integer type2 = pro.getCategoryLevel2Id();
		Integer type3 = pro.getCategoryLevel3Id();
		String likeName = pro.getName();
		System.out.println("likeName-->"+likeName+"type1-->"+type1+",type2-->"+type2+",type3-->"+type3+",pageNum-->"+pageNum+",pageSize-->"+pageSize+",minPrice-->"+minPrice+",maxPrice-->"+maxPrice+",orderBy-->"+orderBy);
		List<Product> list = pService.selectProByType(pageNum, pageSize, type1, type2, type3,likeName,minPrice,maxPrice,orderBy);
		int totalPro = pService.countProByType(type1, type2, type3,likeName,minPrice,maxPrice);
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			List<MyLove> myLoveList = lService.selectMyLove(user.getLoginName());
			map.put("myLoveList", myLoveList);
		}
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
	public Map<String,Object> selectProByID(@PathVariable Integer proID,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		Product pro = pService.selectProByID(proID);
		ProType type1 = ptService.selectTypeByID(pro.getCategoryLevel1Id());
		ProType type2 = ptService.selectTypeByID(pro.getCategoryLevel2Id());
		ProType type3 = ptService.selectTypeByID(pro.getCategoryLevel3Id());
		map.put("pro", pro);
		map.put("type1", type1);
		map.put("type2", type2);
		map.put("type3", type3);
		
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			List<Browse> list = bService.selectMyBrowse(user.getLoginName());
			for (Browse b : list) {
				if(proID.equals(b.getProID())) {
					return map;
				}
			}
			if(bService.addBrowse(new Browse(user.getLoginName(), proID, new Date()))>0) {
				System.out.println(user.getLoginName()+"的"+proID+"浏览记录+1");
			}
		}
		return map;
	}
	
	@RequestMapping("/selectProLikeName")
	public String selectProByType(Model model,Product pro){
		model.addAttribute("type1", 0);
		model.addAttribute("type2", 0);
		model.addAttribute("type3", 0);
		model.addAttribute("ControllerToPageLikeName",pro.getName());
		return "categoryList";
	}
}
