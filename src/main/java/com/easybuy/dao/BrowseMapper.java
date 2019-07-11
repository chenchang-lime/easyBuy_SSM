package com.easybuy.dao;

import java.util.List;

import com.easybuy.entity.Browse;

public interface BrowseMapper {
	int addBrowse(Browse browse);
	
	List<Browse> selectMyBrowse(String loginName);
}
