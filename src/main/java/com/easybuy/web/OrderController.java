package com.easybuy.web;

import java.rmi.server.SocketSecurityException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.easybuy.entity.Order;
import com.easybuy.service.OrderService;

@Controller
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private OrderService service;
	
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
		Map<String,Object> map=new HashMap<>();
		int count=service.update(id);
		if (count==1) {
			map.put("msg", "ok");
		} else {
			map.put("msg", "no");
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
		Map<String,Object> map=new HashMap<>();
		if (order1.getUserId()==order2.getUserId()) {
			System.out.println("qqqqqq");
			double cost= order1.getCost()+order2.getCost();
			int count=service.updateCost(cost,firstId);
			System.out.println("-------------"+count);
			//int update=service.updataOrderID(firstId, secondId);
			//System.out.println(update);
			map.put("msg", "ok");
		} else {
			map.put("msg", "no");
		}
		return map;
	}
	
	
	
		
	
	
}


