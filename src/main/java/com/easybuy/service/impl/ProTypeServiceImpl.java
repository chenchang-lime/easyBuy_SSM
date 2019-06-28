package com.easybuy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.ProTypeMapper;
import com.easybuy.entity.ProType;
import com.easybuy.service.ProTypeService;

@Service
public class ProTypeServiceImpl implements ProTypeService {

	@Autowired
	private ProTypeMapper tmapper;

	public int insertProType(ProTypeMapper proType) {
		return 0;
	}

	public int deleteProType(int id) {
		return 0;
	}

	public List<ProType> selectAllProType() {
		return tmapper.selectAllProType();
	}

	public ProType selectTypeByID(Integer id) {
		return tmapper.selectTypeByID(id);
	}

}
