package com.easybuy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.BrowseMapper;
import com.easybuy.entity.Browse;
import com.easybuy.service.BrowseService;

@Service
public class BrowseServiceImpl implements BrowseService {

	@Autowired
	private BrowseMapper mapper;
	
	public int addBrowse(Browse browse) {
		return mapper.addBrowse(browse);
	}

	public List<Browse> selectMyBrowse(String loginName) {
		return mapper.selectMyBrowse(loginName);
	}

}
