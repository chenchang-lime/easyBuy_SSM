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
import com.easybuy.service.AliPayService;
import com.easybuy.service.DetailServiceCC;
import com.easybuy.service.OrderServiceCC;
import com.easybuy.service.ProService;
import com.easybuy.service.UserServiceCC;

@Controller
@RequestMapping("/orderCC")
public class OrderControllerCC {
	@Autowired
	private OrderServiceCC oService;
	@Autowired
	private DetailServiceCC dService;
	@Autowired
	private ProService pService;
	@Autowired
	private UserServiceCC uService;
//	@Autowired
//	private AliPayService aliPay;
	
	@ResponseBody
	@RequestMapping("/addOrder")
	public Map<String,Object> addOrder(Order order,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			Order finallyOrder = oService.addOrder(user, order);
			System.out.println("Service-->"+finallyOrder);
			if(finallyOrder!=null) {
				map.put("result", "ok");
				map.put("finallyOrder",finallyOrder);
			}else {
				map.put("result", "sysError");
			}
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
	
	@RequestMapping("/toPay/{serialNumber}")
	public String toPay(@PathVariable String serialNumber,Model model){
		Order order = oService.selectOrderBySetSerialNumber(serialNumber);
		model.addAttribute("order", order);
		return "buyCar_Three";
	}
	
	@RequestMapping("/toPayOrder/{orderID}")
	public String toPayOrder(@PathVariable Integer orderID,Model model){
		Order order = oService.selectOrderByID(orderID);
		model.addAttribute("order", order);
		return "buyCar_Three";
	}
	
	@ResponseBody
	@RequestMapping("/payOrder/{orderID}/{payPwd}/{paymentMethod}")
	public Map<String,Object> payOrder(@PathVariable Integer paymentMethod,@PathVariable Integer orderID,@PathVariable String payPwd,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			String result = oService.payOrder(paymentMethod,orderID,user.getLoginName(),payPwd,session);
//			System.out.println("准备支付！");
//			if(aliPay.aliPayFunction()) {
//				System.out.println("支付成功！支付成功！支付成功！支付成功！支付成功！");
//			}else {
//				System.out.println("失败！！！");
//			}
			map.put("result",result);
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
	
	@ResponseBody
	@RequestMapping("/selectMyOrders/{pageNum}/{pageSize}")
	public Map<String,Object> selectMyOrders(@PathVariable Integer pageNum,@PathVariable Integer pageSize,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			List<Order> list = oService.selectOrderByPage(pageNum, pageSize, user.getLoginName());
			int totalPage = oService.countMyOrder(user.getLoginName());
			map.put("resultList",list);
			map.put("pageNum",pageNum);
			map.put("totalPage",totalPage%pageSize==0?totalPage/pageSize:totalPage/pageSize+1);
			map.put("result","ok");
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
	
	@RequestMapping("/toOrderInfo/{orderID}")
	public String toOrderInfo(@PathVariable Integer orderID,Model model){
		Order order = oService.selectOrderByID(orderID);
		model.addAttribute("thisOrder", order);
		return "member_OrderInfo";
	}
	
	@ResponseBody
	@RequestMapping("/selectInfoByOrderID/{orderId}")
	public Map<String,Object> selectInfoByOrderID(@PathVariable Integer orderId,HttpServletRequest request){
		Map<String,Object> map = new HashMap<String,Object>();
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			List<Detail> list = dService.selectInfoByOrderID(orderId);
			List<Detail> detailList = new ArrayList<Detail>();
			List<Product> proList = null;
			if(list!=null&&list.size()>0) {
				proList = new ArrayList<Product>();
				for (Detail d : list) {
					if(d.getProductId()!=1&&d.getProductId()!=2&&d.getProductId()!=3&&d.getProductId()!=4) {
						detailList.add(d);
						Product product = pService.selectProByID(d.getProductId());
						if(product!=null) {
							proList.add(product);
						}
					}
				}
				map.put("detailList",detailList);
				map.put("proList",proList);
				map.put("result","ok");
			}else {
				map.put("result","no");
			}
		} else {
			map.put("result", "noLogin");
		}
		return map;
	}
	
	@RequestMapping("/finishOrder/{serialNumber}")
	public String finishOrder(@PathVariable String serialNumber,Model model,HttpServletRequest request){
		HttpSession session = request.getSession();
		Object obj = session.getAttribute("account");
		if(obj!=null) {
			User user = (User) session.getAttribute("account");
			if(oService.updateOrderStatus(4,serialNumber)>0){
				if(uService.updateFinishOrderNum(user.getId())>0) {
					user.setFinishOrder(user.getFinishOrder()+1);
					session.setAttribute("account", user);
					return "member_UserOrder";
				} else {
					return "error";
				}
			} else {
				Order order = oService.selectOrderBySetSerialNumber(serialNumber);
				model.addAttribute("thisOrder", order);
				return "member_OrderInfo";
			}
		}else {
			return "login";
		}
	}
	
	
}
