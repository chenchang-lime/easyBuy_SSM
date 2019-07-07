package com.easybuy.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import com.easybuy.entity.Order;
import com.easybuy.entity.User;
/**
 * 订单&详情Service
 * @author ?
 */
public interface OrderServiceCC {
	/**
	 * 下单
	 */
	Order addOrder(User user,Order order);
	
	Order selectOrderBySetSerialNumber(String serialNumber);
	
	Order selectOrderByID(Integer orderID);
	
	String payOrder(Integer paymentMethod,Integer orderID,String loginName,String payPwd,HttpSession session);
	
	List<Order> selectOrderByPage(Integer pageNum,Integer pageSize,String loginName);
	
	int countMyOrder(String loginName);
	
	int updateOrderStatus(Integer status,String serialNumber);
}
