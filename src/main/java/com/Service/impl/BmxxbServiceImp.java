package com.Service.impl;

import com.Pojo.Bmxxb;
import com.Service.BmxxbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;

@Service("bmxxbImp")
public class BmxxbServiceImp implements BmxxbService {

	@Autowired
	private BmxxbMapper bmxxbDao;
	
	public int deleteByPrimaryKey(String no) {
		// TODO Auto-generated method stub
		return this.bmxxbDao.deleteByPrimaryKey(no);
	}

	public int insert(Bmxxb record) {
		// TODO Auto-generated method stub
		return this.bmxxbDao.insert(record);
	}

	public int insertSelective(Bmxxb record) {
		// TODO Auto-generated method stub
		return this.bmxxbDao.insertSelective(record);
	}

	public Bmxxb selectByPrimaryKey(String no) {
		// TODO Auto-generated method stub
		return this.bmxxbDao.selectByPrimaryKey(no);
	}

	public int updateByPrimaryKeySelective(Bmxxb record) {
		// TODO Auto-generated method stub
		return this.bmxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Bmxxb record) {
		// TODO Auto-generated method stub
		return this.bmxxbDao.updateByPrimaryKey(record);
	}

	public BmxxbMapper getBmxxbDao() {
		return bmxxbDao;
	}

	public void setBmxxbDao(BmxxbMapper bmxxbDao) {
		this.bmxxbDao = bmxxbDao;
	}

}
