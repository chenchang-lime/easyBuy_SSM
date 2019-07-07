package com.easybuy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.DetailMapperCC;
import com.easybuy.entity.Detail;
import com.easybuy.service.DetailServiceCC;

@Service
public class DetailServiceCCImpl implements DetailServiceCC {

	@Autowired
	private DetailMapperCC mapper;
	
	public List<Detail> selectInfoByOrderID(Integer orderId) {
		return mapper.selectInfoByOrderID(orderId);
	}

}
