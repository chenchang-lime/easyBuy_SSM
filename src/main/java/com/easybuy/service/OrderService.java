package com.easybuy.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

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
	List<Order> selectOrderByPage(Integer currPage,Integer pageSize);
	
	/**
	 *  查询所有订单号
	 */
	List<Order> selectOrder();
	
	/**
	 * 新增订单详情
	 */
	int insertDetail(Detail detail);
	
	/**
	 * 根据订单编号 查询订单详情列表
	 */
	List<Detail> selectDetailsByOrderID(int orderID);
	
	/**
	 * 查询订单总数量
	 */
	int selectAll();
	
	/**
	 * 根据订单id修改订单状态
	 */
	int update(int id);
	
	/**
	 * 根据订单编号 查询订单
	 */ 
	Order selectById(int id);
	
	/**
	 *  根据合并订单，修改总金额
	 */
	int updateCost (double cost,int firstId) ;
	 
	/**
	 * 根据订单编号  合并订单  并修改orderID
	 */
	int updataOrderID(int firstId,int secondId);
	
}
