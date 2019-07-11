package com.easybuy.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easybuy.entity.Browse;
import com.easybuy.entity.Product;
import com.easybuy.entity.User;
import com.easybuy.service.BrowseService;
import com.easybuy.service.ProService;

@Controller
@RequestMapping("/browse")
public class BrowseController {
	@Autowired
	private BrowseService bService;
	@Autowired
	private ProService pService;
	
	@ResponseBody
	@RequestMapping("/selectMyBrowse")
	public Map<String,Object> selectMyBrowse(HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			List<Browse> browseList = bService.selectMyBrowse(user.getLoginName());
			List<Product> proList = null;
			if(browseList!=null&&browseList.size()>0) {
				proList = new ArrayList<Product>();
				for (Browse b : browseList) {
					Product pro = pService.selectProByID(b.getProID());
					if(pro!=null) {
						proList.add(pro);
					}
				}
			}
			map.put("browseList", browseList);
			map.put("proList", proList);
		}
		return map;
	}
}
