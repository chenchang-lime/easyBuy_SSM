package com.easybuy.dao;

import java.util.List;

import com.easybuy.entity.Detail;

/**
 * 订单详情Dao
 * @author 陈昌
 */
public interface DetailMapperCC {
	/**
	 * 新增订单详情
	 */
	int insertDetail(Detail detail);
	
	/**
	 * 根据订单编号 查询订单详情列表
	 */
	List<Detail> selectInfoByOrderID(Integer orderId);
}
