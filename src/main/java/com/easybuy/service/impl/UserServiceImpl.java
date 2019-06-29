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

		return   mapper.regist(user);
	}

	public List<User> selectUserByPage(Integer pageNum, Integer pageSize) {
		return mapper.selectvip();
	}

	public int updateUser(User user) {
		System.out.println("money");
		return mapper.updateUser(user);
	}

	public int deleteUserByID(User user) {
		return   mapper.regist(user);
		
	}

	public int insertUserAddress(UserAddress address) {
		return 0;
	}

	public String selectloginName(String loginName) {
		User user=mapper.selectloginName(loginName);
		if (user==null) {
			return "ok";
		}
		return  "no";
		
	}

	public Integer tatopage() {
		
		return mapper.tatopage();
	}

}
