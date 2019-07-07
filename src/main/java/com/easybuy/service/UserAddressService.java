package com.easybuy.service;

import com.easybuy.entity.UserAddress;

public interface UserAddressService {
	/**
	 * 查询我的默认收货地址
	 */
	UserAddress selectMyDefaultAddress(Integer userID);
}
