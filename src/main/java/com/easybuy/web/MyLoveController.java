package com.easybuy.web;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easybuy.entity.MyLove;
import com.easybuy.entity.Product;
import com.easybuy.entity.User;
import com.easybuy.service.MyLoveService;
import com.easybuy.service.ProService;
import com.github.pagehelper.PageHelper;

@Controller
@RequestMapping("/myLove")
public class MyLoveController {

	@Autowired
	private MyLoveService lService;
	@Autowired
	private ProService pService;
	
	@ResponseBody
	@RequestMapping("/addMyLove/{proID}")
	public Map<String,Object> addMyLove(@PathVariable Integer proID,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			Product pro = pService.selectProByID(proID);
			MyLove myLove = new MyLove(proID, pro.getPrice(),new Date(), user.getLoginName());
			if(lService.addMyLove(myLove)>0) {
				map.put("result", "ok");
			} else {
				map.put("result", "error");
			}
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/delMyLove/{proID}")
	public Map<String,Object> delMyLove(@PathVariable Integer proID,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			if(lService.delMyLoveByProID(proID, user.getLoginName())>0) {
				map.put("result", "ok");
			} else {
				map.put("result", "error");
			}
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/selectMyLovePro/{pageNum}/{pageSize}")
	public Map<String,Object> selectMyLovePro(@PathVariable Integer pageNum,@PathVariable Integer pageSize,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			int totalMyLovePro = lService.countMyLove(user.getLoginName());
			if(totalMyLovePro>0) {
				PageHelper.startPage(pageNum, pageSize);
				List<MyLove> myLoveList = lService.selectMyLove(user.getLoginName());
				List<Product> myLoveProList = null;
				if(myLoveList!=null&&myLoveList.size()>0) {
					myLoveProList = new ArrayList<Product>();
					for (MyLove myLove : myLoveList) {
						Product pro = pService.selectProByID(myLove.getMyLoveProID());
						if(pro!=null) {
							myLoveProList.add(pro);
						}
					}
					map.put("totalMyLovePro",totalMyLovePro);
					map.put("totalPage",totalMyLovePro%pageSize==0?totalMyLovePro/pageSize:totalMyLovePro/pageSize+1);
					map.put("pageNum",pageNum);
					map.put("myLoveList",myLoveList);
					map.put("myLoveProList",myLoveProList);
					map.put("result", "ok");
				}else {
					map.put("result", "noLovePro");
				}
			} else {
				map.put("result", "noLovePro");
			}
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
	
}
