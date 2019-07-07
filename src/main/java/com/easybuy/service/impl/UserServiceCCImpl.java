package com.easybuy.service.impl;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.easybuy.dao.UserMapperCC;
import com.easybuy.entity.User;
import com.easybuy.service.UserServiceCC;

@Service
public class UserServiceCCImpl implements UserServiceCC {
	
	@Autowired
	private UserMapperCC mapper;

	@Transactional
	public User login(String loginName, String password) {
		User user = mapper.login(loginName, password);
		if(user!=null) {
			user.setLastLoginTime(new Date());
			user.setLoginNum(user.getLoginNum()+1);
			if(mapper.lastLogin(user)>0) {
				return user;
			}else {
				return null;
			}
		}else {
			return null;
		}
	}

	public int updateFinishOrderNum(Integer id) {
		return mapper.updateFinishOrderNum(id);
	}

	public int addMoney(Double money, Integer id) {
		return mapper.addMoney(money,id);
	}
}
