package com.easybuy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.ProMapper;
import com.easybuy.dao.ProductMapper;
import com.easybuy.entity.ProType;
import com.easybuy.entity.Product;
import com.easybuy.service.ProductService;
import com.github.pagehelper.PageHelper;
@Service
public class ProductServiceImpl implements ProductService {
	@Autowired
	private ProductMapper mapper;
	
	public List<Product> selectAll(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		return mapper.selectAll();
	}

	public int selectCount() {
		return mapper.selectCount();
	}
	
	public List<ProType> selectAllProType() {
		return mapper.selectAllProType();
	}
	
	public int selectTypeCount() {
		// TODO Auto-generated method stub
		return mapper.selectTypeCount();
	}

	public int deleteProType(int id) {
		// TODO Auto-generated method stub
		return mapper.deleteProType(id);
	}

	public int deletePro(int id) {
		// TODO Auto-generated method stub
		return mapper.deletePro(id);
	}

	public List<ProType> selectFirType() {
		// TODO Auto-generated method stub
		return mapper.selectFirType();
	}

	public List<ProType> selectSecType() {
		// TODO Auto-generated method stub
		return mapper.selectSecType();
	}

	public List<ProType> selectThiType() {
		// TODO Auto-generated method stub
		return mapper.selectThiType();
	}

	public int insertProduct(Product product) {
		System.out.println(product);
		return mapper.insertProduct(product);
	}

	public int updatePro(Product product) {
		return mapper.updatePro(product);
	}

	public int insertType(ProType proType) {
		return mapper.insertType(proType);
	}

	public List<Product> sameInsertName(String name) {
		return mapper.sameInsertName(name);
	}

	public List<ProType> sameSecType(String name) {
		// TODO Auto-generated method stub
		return mapper.sameSecType(name);
	}

	public List<ProType> sameThdType(String name) {
		// TODO Auto-generated method stub
		return mapper.sameThdType(name);
	}

}
