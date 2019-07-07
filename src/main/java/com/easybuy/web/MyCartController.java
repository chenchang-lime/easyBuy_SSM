package com.easybuy.web;

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

import com.easybuy.entity.MyCart;
import com.easybuy.entity.User;
import com.easybuy.service.MyCartService;

@Controller
@RequestMapping("/myCart")
public class MyCartController {
	
	@Autowired
	private MyCartService cService;
	
	@ResponseBody
	@RequestMapping("/addMyCart/{proID}/{num}")
	public Map<String,Object> addMyCart(@PathVariable Integer proID,@PathVariable Integer num,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			MyCart myCart = cService.hasRepeatPro(user.getLoginName(), proID);
			if(myCart==null){
				if(cService.addMyCart(user.getLoginName(), proID, num)>0) {
					map.put("result", "ok");
				}else {
					map.put("result", "sysError");
				}
			} else {
				if(cService.updateRepeatPro(myCart.getId(),myCart.getNum()+num)>0) {
					map.put("result", "ok");
				} else {
					map.put("result", "sysError");
				}
			}
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/selectMyCart")
	public Map<String,Object> selectMyCart(HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			List<MyCart> list = cService.selectMyCart(user.getLoginName());
			if(list.size()>0) {
				map.put("result", "ok");
				map.put("list", list);
			}else {
				map.put("result", "noPro");
			}
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/updateThisPro/{cartID}/{num}")
	public Map<String,Object> updateThisPro(@PathVariable Integer cartID,@PathVariable Integer num,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			if(cService.updateRepeatPro(cartID,num)>0) {
				map.put("result", "ok");
			} else {
				map.put("result", "sysError");
			}
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/delProFromMyCart/{cartID}")
	public Map<String,Object> delProFromMyCart(@PathVariable Integer cartID,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			if(cService.delProFromMyCart(cartID)>0) {
				map.put("result", "ok");
			} else {
				map.put("result", "sysError");
			}
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
}
