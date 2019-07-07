package com.easybuy.web;


import java.util.ArrayList;
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

import com.easybuy.entity.Detail;
import com.easybuy.entity.Order;
import com.easybuy.entity.Product;
import com.easybuy.entity.User;
import com.easybuy.service.OrderService;
import com.easybuy.service.OrderServiceCC;

@Controller
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private OrderService service;
	@Autowired
	private OrderServiceCC oService;
	
	@RequestMapping("/toOrderInfo/{orderID}")
	public String toOrderInfo(@PathVariable Integer orderID,Model model){
		Order order = oService.selectOrderByID(orderID);
		model.addAttribute("thisOrder", order);
		return "member_AdminOrderInfo";
	}
	
	/**
	 * 分页查询订单
	 */
	@ResponseBody
	@RequestMapping("/select/{currPage}/{pageSize}")
	public Map<String,Object> selectOrderByPage(/*@RequestParam(value="currPage",defaultValue="1")*/@PathVariable int currPage,
			/*@RequestParam(value="pageSize",defaultValue="5")*/ @PathVariable int pageSize){
		List<Order> list=service.selectOrderByPage(currPage,pageSize);
		List<Order> order=service.selectOrder();
		int count=service.selectAll();
		int totalPage=count%pageSize==0?count/pageSize:count/pageSize+1;
		Map<String,Object> map=new HashMap<String, Object>();
		map.put("list", list);
		map.put("currPage", currPage);
		map.put("pageSize", pageSize);
		map.put("totalPage", totalPage);
		map.put("order", order);
		return map;
	}
	
	/**
	 * 修改订单状态
	 */
	@ResponseBody
	@RequestMapping("/update/{id}")
	public Map<String,Object> update(@PathVariable int id){
		Map<String,Object> map=new HashMap<String, Object>();
		int count=service.update(id);
		if (count==1) {
			map.put("result", "yes");
		} else {
			map.put("result", "no");
		}
		return map;
	}
	
	
	/**
	 * 订单合并
	 */
	@ResponseBody
	@RequestMapping("/combine/{firstId}/{secondId}")
	public Map<String,Object> combine(@PathVariable int firstId,@PathVariable int secondId){
		Order order1=service.selectById(firstId);
		System.out.println(order1);
		Order order2=service.selectById(secondId);
		System.out.println(order2);
		Map<String,Object> map=new HashMap<String, Object>();
		if (order1.getStatus()>2||order1.getStatus()>2) {
			map.put("msg", "out");
			return map;
		} 
		if (order1.getUserId()==order2.getUserId()&&order1.getStatus()==order2.getStatus()&&firstId!=secondId) {
			double cost= order1.getCost()+order2.getCost();
			service.updateCost(cost,firstId);
			service.updataOrderID(firstId, secondId);
			service.updateCombine(secondId);
			service.deleteByid(secondId);
			map.put("msg", "ok");
		} else if (firstId==secondId) {
			map.put("msg", "same");
		} else {
			map.put("msg", "no");
		}
		return map;
	}
	
	/**
	 * 判断用户是否登录
	 */
	@ResponseBody
	@RequestMapping("/islogin")
	public Map<String,Object> islogin(HttpServletRequest request){
		Map<String,Object> map=new HashMap<String, Object>();
		HttpSession session=request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			if (user.getType()==1) {
				map.put("result", "ok");
			} else {
				map.put("result", "wrong");
			}
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
	
	/**
	 * 订单发货   修改状态  增加快递单号
	 */
	@ResponseBody
	@RequestMapping("/deliver/{id}/{courierNumber}")
	public Map<String,Object> deliver(@PathVariable int id, @PathVariable String courierNumber){
		System.out.println(id);
		System.out.println(courierNumber);
		int count=service.deliver(courierNumber,id);
		Map<String,Object> map=new HashMap<String, Object>();
		if (count==1) {
			map.put("msg", "ok");
		} else {
			map.put("msg", "no");
		}
		return map;
	}	
	
	/**
	 * 订单根据订单号查询订单详细信息
	 */
	@ResponseBody
	@RequestMapping("/query/{orderId}")
	public Map<String,Object> query(@PathVariable() int orderId){
		Map<String,Object> map=new HashMap<String, Object>();
		List<Detail> list = service.selectDetailsByOrderID(orderId);
		System.out.println(list);
		if (list!=null) {
			List<Product> listPro =new ArrayList<Product>();
			for (Detail detail : list) {
				System.out.println(detail.getProductId());
				Product product = service.selectProductByid(detail.getProductId());
				listPro.add(product);
			}
			System.out.println(listPro);
			map.put("listPro", listPro);
			map.put("list", list);
			map.put("msg", "ok");
		} else {
			map.put("msg", "no");
		}
		return map;
	}

}


