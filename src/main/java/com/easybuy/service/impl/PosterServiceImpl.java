package com.easybuy.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.easybuy.dao.PosterMapper;
import com.easybuy.entity.Poster;
import com.easybuy.service.PosterService;

@Service
public class PosterServiceImpl implements PosterService {

	@Autowired
	private PosterMapper mapper;
	
	public List<Poster> selectAllPoster() {
		return mapper.selectAllPoster();
	}

}
