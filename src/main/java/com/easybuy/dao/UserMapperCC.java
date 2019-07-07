package com.easybuy.dao;


import org.apache.ibatis.annotations.Param;

import com.easybuy.entity.User;
/**
 * 用户Dao
 * @author ?
 */
public interface UserMapperCC {
	/**
	 * @param loginName 登录用户名
	 * @param password 密码
	 * @return 用户对象
	 */
	User login(@Param("loginName")String loginName,@Param("password")String password);
	
	User isPayPwd(@Param("loginName")String loginName,@Param("payPwd")String payPwd);
	
	int lastLogin(User user);
	
	int updateMoney(@Param("money")Double money,@Param("id")Integer id);
	
	int addMoney(@Param("money")Double money,@Param("id")Integer id);
	
	int updateFinishOrderNum(Integer id);
}
