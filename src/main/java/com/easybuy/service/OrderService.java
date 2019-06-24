package com.easybuy.service;

import java.util.List;

import com.easybuy.entity.Detail;
import com.easybuy.entity.Order;
/**
 * 订单&详情Service
 * @author ?
 */
public interface OrderService {
	/**
	 * 新增订单
	 */
	int insertOrder(Order order);
	
	/**
	 * 分页查询订单
	 */
	List<Order> selectOrderByPage(Integer pageNum,Integer pageSize);
	
	/**
	 * 新增订单详情
	 */
	int insertDetail(Detail detail);
	
	/**
	 * 根据订单编号 查询订单详情列表
	 */
	List<Detail> selectDetailsByOrderID(int orderID);
}
