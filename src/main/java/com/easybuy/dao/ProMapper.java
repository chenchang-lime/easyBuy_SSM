package com.easybuy.dao;

import java.util.List;

import com.easybuy.entity.Product;
/**
 * 商品Dao
 * @author 刘宸威
 */
public interface ProMapper {

	/**
	 * 查询所有商品
	 */
	List<Product> selectAll();
	
	
	/**
	 * 根据商品类别小类（3）分页查询该类别下的商品
	 */
	List<Product> selectProByType3(int categoryLevel3Id);
	
	/**
	 * 根据商品编号查询商品详细信息
	 */
	Product selectProByID(int id);
	
	/**
	 * 更新商品信息
	 */
	int updatePro(Product pro);
	
	/**
	 * 删除商品
	 */
	int deletePro(int id);
}
