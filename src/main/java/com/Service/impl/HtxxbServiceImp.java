package com.Service.impl;

import com.Pojo.Htxxb;
import com.Service.HtxxbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("htxxbImp")
public class HtxxbServiceImp implements HtxxbService {

	@Autowired
	private HtxxbMapper htxxbDao;
	public int deleteByPrimaryKey(Integer htzblsh) {
		// TODO Auto-generated method stub
		return this.htxxbDao.deleteByPrimaryKey(htzblsh);
	}

	public int insert(Htxxb record) {
		// TODO Auto-generated method stub
		return this.htxxbDao.insert(record);
	}

	public int insertSelective(Htxxb record) {
		// TODO Auto-generated method stub
		return this.htxxbDao.insertSelective(record);
	}

	public Htxxb selectByPrimaryKey(Integer htzblsh) {
		// TODO Auto-generated method stub
		return this.htxxbDao.selectByPrimaryKey(htzblsh);
	}

	public int updateByPrimaryKeySelective(Htxxb record) {
		// TODO Auto-generated method stub
		return this.htxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Htxxb record) {
		// TODO Auto-generated method stub
		return this.htxxbDao.updateByPrimaryKey(record);
	}

	public HtxxbMapper getHtxxbDao() {
		return htxxbDao;
	}

	public void setHtxxbDao(HtxxbMapper htxxbDao) {
		this.htxxbDao = htxxbDao;
	}

}
