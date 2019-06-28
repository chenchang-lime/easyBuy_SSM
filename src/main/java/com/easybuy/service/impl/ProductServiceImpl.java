package com.easybuy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.ProMapper;
import com.easybuy.dao.ProductMapper;
import com.easybuy.entity.Product;
import com.easybuy.service.ProductService;
import com.github.pagehelper.PageHelper;
@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ProMapper mapper;
	@Autowired
	private ProductMapper mapper1;
	
	public List<Product> selectAll(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		return mapper.selectAll();
	}

	public int selectCount() {
		return mapper1.selectCount();
	}

	public int selectTypeCount() {
		// TODO Auto-generated method stub
		return mapper1.selectTypeCount();
	}

	public int deleteProType(int id) {
		// TODO Auto-generated method stub
		return mapper1.deleteProType(id);
	}

}
