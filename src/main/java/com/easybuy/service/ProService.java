package com.easybuy.service;

import java.util.List;

import com.easybuy.entity.Product;

/**
 * 购物(商品)Service
 * @author 陈昌
 */
public interface ProService {
	/**
	 * 根据商品类别小类（3）分页查询该类别下的商品
	 */
	List<Product> selectProByType3(Integer pageNum,Integer pageSize,int categoryLevel3Id);
	
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
