package com.easybuy.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.easybuy.entity.Product;
/**
 * 商品Dao
 * @author 陈昌
 */
public interface ProMapper {
	/**
	 * 根据商品类别分页查询该类别下的商品
	 */
	List<Product> selectProByType(Map<String, Object> map);
	
	/**
	 * 根据商品类别查询该类别下的商品数量
	 */
	int countProByType(Map<String, Object> map);
	
	/**
	 * 根据商品编号查询商品详细信息
	 */
	Product selectProByID(Integer proID);
	
	Product selectProByIDNoDel(Integer proID);
	
	int updateStockAndSales(@Param("updateNum")Integer updateNum,@Param("proID")Integer proID);
}
