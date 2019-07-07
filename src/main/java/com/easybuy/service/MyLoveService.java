package com.easybuy.service;

import java.util.List;
import com.easybuy.entity.MyLove;

public interface MyLoveService {
	int addMyLove(MyLove myLove);
	
	int delMyLoveByProID(Integer proID,String loginName);
	
	List<MyLove> selectMyLove(String loginName);
	
	int countMyLove(String loginName);
}
