package com.easybuy.service.impl;

import java.util.List;

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
	
	public List<Product> selectProByType(Integer pageNum, Integer pageSize, Integer categoryLevel1Id,
			Integer categoryLevel2Id, Integer categoryLevel3Id) {
		PageHelper.startPage(pageNum, pageSize);
		return mapper.selectProByType(categoryLevel1Id, categoryLevel2Id, categoryLevel3Id);
	}

	public int countProByType(Integer type1, Integer type2, Integer type3) {
		return mapper.countProByType(type1, type2, type3);
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

}
