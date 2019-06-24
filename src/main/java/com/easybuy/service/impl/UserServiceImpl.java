package com.easybuy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.UserMapper;
import com.easybuy.entity.User;
import com.easybuy.entity.UserAddress;
import com.easybuy.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper mapper;

	public User login(String loginName, String password) {
		return mapper.login(loginName, password);
	}

	public int regist(User user) {
		return 0;
	}

	public List<User> selectUserByPage(Integer pageNum, Integer pageSize) {
		return null;
	}

	public int updateUser(User user) {
		return 0;
	}

	public int deleteUserByID(int id) {
		return 0;
	}

	public int insertUserAddress(UserAddress address) {
		return 0;
	}

}
