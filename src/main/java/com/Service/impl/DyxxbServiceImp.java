package com.Service.impl;

import com.Pojo.Dyxxb;
import com.Service.DyxxbService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;

@Service("dyxxbImp")
public class DyxxbServiceImp implements DyxxbService {

	@Autowired
	private DyxxbMapper dyxxbDao;
	
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return this.dyxxbDao.deleteByPrimaryKey(id);
	}

	public int insert(Dyxxb record) {
		// TODO Auto-generated method stub
		return this.dyxxbDao.insert(record);
	}

	public int insertSelective(Dyxxb record) {
		// TODO Auto-generated method stub
		return this.dyxxbDao.insertSelective(record);
	}

	public Dyxxb selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return this.dyxxbDao.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(Dyxxb record) {
		// TODO Auto-generated method stub
		return this.dyxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Dyxxb record) {
		// TODO Auto-generated method stub
		return this.dyxxbDao.updateByPrimaryKey(record);
	}

	public DyxxbMapper getDyxxbDao() {
		return dyxxbDao;
	}

	public void setDyxxbDao(DyxxbMapper dyxxbDao) {
		this.dyxxbDao = dyxxbDao;
	}

}
