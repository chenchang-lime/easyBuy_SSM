package com.easybuy.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.ProMapper;
import com.easybuy.entity.Product;
import com.easybuy.service.ProService;
import com.github.pagehelper.PageHelper;

@Service
public class ProServiceImpl implements ProService {

	@Autowired
	private ProMapper mapper;

	public List<Product> selectProByType(Integer pageNum, Integer pageSize, Integer type1, Integer type2, Integer type3,
			String likeName,Integer minPrice,Integer maxPrice,String orderBy) {
		PageHelper.startPage(pageNum, pageSize);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("type1", type1);
		map.put("type2", type2);
		map.put("type3", type3);
		map.put("minPrice", minPrice+0.0);
		map.put("maxPrice", maxPrice+0.0);
		System.out.println("orderBy-->"+orderBy);
		if(orderBy!=null && !"".equals(orderBy)) {
			if("orderBySalesMax".equals(orderBy)) {
				map.put("salesMax", "salesMax");
			} else if("orderBySalesMin".equals(orderBy)){
				map.put("salesMin", "salesMin");
			} else if("orderByPriceMax".equals(orderBy)) {
				map.put("orderMaxPrice", "orderMaxPrice");
			} else if("orderByPriceMin".equals(orderBy)) {
				map.put("orderMinPrice", "orderMinPrice");
			}
		}
		if (likeName != null && !"".equals(likeName) && !"*".equals(likeName)) {
			map.put("likeName", "%" + likeName + "%");
		}
		return mapper.selectProByType(map);
	}

	public int countProByType(Integer type1, Integer type2, Integer type3, String likeName,Integer minPrice,Integer maxPrice) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("type1", type1);
		map.put("type2", type2);
		map.put("type3", type3);
		map.put("minPrice", minPrice);
		map.put("maxPrice", maxPrice);
		if (likeName != null && !"".equals(likeName) && !"*".equals(likeName)) {
			map.put("likeName", "%" + likeName + "%");
		}
		return mapper.countProByType(map);
	}

	public Product selectProByID(Integer proID) {
		return mapper.selectProByID(proID);
	}

	public int updatePro(Product pro) {
		return 0;
	}

	public int deletePro(int id) {
		return 0;
	}

	public Product selectProByIDNoDel(Integer proID) {
		return mapper.selectProByIDNoDel(proID);
	}

}
