package com.easybuy.service;

import java.util.List;

import com.easybuy.entity.Detail;

public interface DetailServiceCC {

	List<Detail> selectInfoByOrderID(Integer orderId);

}
