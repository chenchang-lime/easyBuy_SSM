package com.easybuy.dao;

import java.util.List;

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
	List<Product> selectProByType(@Param("type1")Integer type1,@Param("type2")Integer type2,@Param("type3")Integer type3);
	
	/**
	 * 根据商品类别查询该类别下的商品数量
	 */
	int countProByType(@Param("type1")Integer type1,@Param("type2")Integer type2,@Param("type3")Integer type3);
	
	/**
	 * 根据商品编号查询商品详细信息
	 */
	Product selectProByID(Integer proID);
//	
//	/**
//	 * 更新商品信息
//	 */
//	int updatePro(Product pro);
//	
//	/**
//	 * 删除商品
//	 */
//	int deletePro(int id);
}
