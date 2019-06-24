package com.easybuy.service;

import java.util.List;

import com.easybuy.entity.User;
import com.easybuy.entity.UserAddress;

/**
 * 用户服务（用户&收货地址）Service
 * @author ?
 */
public interface UserService {
	/**
	 * @param loginName 登录用户名
	 * @param password 密码
	 * @return 用户对象
	 */
	User login(String loginName,String password);
	
	/**
	 * 用户注册
	 */
	int regist(User user);
	
	/**
	 * 分页查询用户信息
	 */
	List<User> selectUserByPage(Integer pageNum,Integer pageSize);
	
	/**
	 * 修改用户信息
	 */
	int updateUser(User user);
	
	/**
	 * 删除用户
	 */
	int deleteUserByID(int id);
	
	/**
	 * 新增收货地址
	 */
	int insertUserAddress(UserAddress address);
}
