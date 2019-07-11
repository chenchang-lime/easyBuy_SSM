package com.easybuy.service;

import java.util.List;

import com.easybuy.entity.Browse;

public interface BrowseService {
	int addBrowse(Browse browse);
	
	List<Browse> selectMyBrowse(String loginName);
}
