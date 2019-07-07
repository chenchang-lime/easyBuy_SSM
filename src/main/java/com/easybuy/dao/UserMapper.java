package com.easybuy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.easybuy.entity.User;
import com.easybuy.entity.UserAddress;
/**
 * 用户Dao
 * @author ?
 */
public interface UserMapper {
	/**
	 * @param loginName 登录用户名
	 * @param password 密码
	 * @return 用户对象
	 */
	User login(@Param("loginName")String loginName,@Param("password")String password);
	
	/**
	 * 用户注册
	 */
	int regist(User user);
	
	/**
	 * 分页查询会员信息
	 */
	List<User> selectvip();
	
	/**
	 * 修改用户信息
	 */
	int updateUser(User user);
	
	/**
	 * 删除用户
	 */
	int deleteUserByID(int id);
	

	/**
	 * 查询用户名存在
	 */
	User selectloginName(String loginName);
	

	/**
	 * 买家用户总数量
	 */
	Integer tatopage();
	
	/**
	 * 查询用户
	 */
	List<User> selecUserByID(int id);
	
	/**
	 * 新增收货地址
	 */
	int insertUserAddress(UserAddress address);
	
}
