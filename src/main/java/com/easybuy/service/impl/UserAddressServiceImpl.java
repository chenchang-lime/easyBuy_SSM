package com.easybuy.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.UserAddressMapper;
import com.easybuy.entity.UserAddress;
import com.easybuy.service.UserAddressService;

@Service
public class UserAddressServiceImpl implements UserAddressService {

	@Autowired
	private UserAddressMapper mapper;
	
	public UserAddress selectMyDefaultAddress(Integer userID) {
		return mapper.selectMyDefaultAddress(userID);
	}

}
