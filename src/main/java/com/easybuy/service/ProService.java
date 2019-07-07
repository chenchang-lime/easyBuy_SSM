package com.easybuy.service;

import java.util.List;

import com.easybuy.entity.Product;

/**
 * 购物(商品)Service
 * @author 陈昌
 */
public interface ProService {
	/**
	 * 根据商品类别分页查询该类别下的商品
	 */
	List<Product> selectProByType(Integer pageNum, Integer pageSize, Integer categoryLevel1Id,Integer categoryLevel2Id, Integer categoryLevel3Id,String likeName,Integer minProce,Integer maxPrice,String orderBy);
	
	/**
	 * 根据商品类别查询该类别下的商品数量
	 */
	int countProByType(Integer type1,Integer type2,Integer type3,String likeName,Integer minProce,Integer maxPrice);
	
	
	/**
	 * 根据商品编号查询商品详细信息
	 */
	Product selectProByID(Integer id);
	
	/**
	 * 更新商品信息
	 */
	int updatePro(Product pro);
	
	/**
	 * 删除商品
	 */
	int deletePro(int id);
	
	Product selectProByIDNoDel(Integer proID);
}
