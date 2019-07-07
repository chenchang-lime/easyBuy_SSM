package com.easybuy.dao;

import com.easybuy.entity.UserAddress;
/**
 * 收货地址Dao
 * @author ?
 */
public interface UserAddressMapper {
	/**
	 * 新增收货地址
	 */
//	int insertUserAddress(UserAddress address);
	
	/**
	 * 查询我的默认收货地址
	 */
	UserAddress selectMyDefaultAddress(Integer userID);
}
