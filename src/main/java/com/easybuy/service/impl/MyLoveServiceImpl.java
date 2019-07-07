package com.easybuy.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.easybuy.dao.MyLoveMapper;
import com.easybuy.entity.MyLove;
import com.easybuy.service.MyLoveService;
import com.github.pagehelper.PageHelper;

@Service
public class MyLoveServiceImpl implements MyLoveService {

	@Autowired
	private MyLoveMapper mapper;
	
	public int addMyLove(MyLove myLove) {
		return mapper.addMyLove(myLove);
	}

	public int delMyLoveByProID(Integer proID, String loginName) {
		return mapper.delMyLoveByProID(proID, loginName);
	}

	public List<MyLove> selectMyLove(String loginName) {
		return mapper.selectMyLove(loginName);
	}

	public int countMyLove(String loginName) {
		return mapper.countMyLove(loginName);
	}

}
