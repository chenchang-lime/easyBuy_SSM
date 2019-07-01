package com.easybuy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.easybuy.entity.Order;

/**
 * 订单Dao
 * @author 周文凡
 */
public interface OrderMapper {
	/**
	 * 新增订单信息
	 */
	int insertOrder(Order order);
	
	/**
	 * 分页查询订单
	 */
	List<Order> selectOrderByPage();
	
	/**
	 * 查询订单总数量
	 */
	int selectAll();
	
	/**
	 * 根据订单id修改订单状态
	 */
	int update(int id);
	
	/**
	 *  根据id查询订单
	 */
	Order selectById(int id);
	
	/**
	 *  根据合并订单，修改总金额
	 */
	 int updateCost( @Param("cost") double cost,@Param("firstId") int firstId);
	
	
	
}
