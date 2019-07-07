package com.easybuy.service;

import com.easybuy.entity.User;
/**
 * 用户服务（用户&收货地址）Service
 * @author 陈昌
 */
public interface UserServiceCC {
	/**
	 * @param loginName 登录用户名
	 * @param password 密码
	 * @return 用户对象
	 */
	User login(String loginName,String password);
	
	int updateFinishOrderNum(Integer id);
	
	int addMoney(Double money,Integer id);
}
