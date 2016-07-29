package com.Service.impl;

import com.Pojo.Zbtzsxxb;
import com.Service.ZbtzsxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("zbtzsxxbImp")
public class ZbtzsxxbServiceImp implements ZbtzsxxbService {

	@Autowired
	private ZbtzsxxbMapper zbtzsxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.zbtzsxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Zbtzsxxb record) {
		// TODO Auto-generated method stub
		return this.zbtzsxxbDao.insert(record);
	}

	public int insertSelective(Zbtzsxxb record) {
		// TODO Auto-generated method stub
		return this.zbtzsxxbDao.insertSelective(record);
	}

	public Zbtzsxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.zbtzsxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Zbtzsxxb> selectByZbfzr(String zbfzr){
		return this.zbtzsxxbDao.selectByZbfzr(zbfzr);
	}
	
	public int updateByPrimaryKeySelective(Zbtzsxxb record) {
		// TODO Auto-generated method stub
		return this.zbtzsxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Zbtzsxxb record) {
		// TODO Auto-generated method stub
		return this.zbtzsxxbDao.updateByPrimaryKey(record);
	}

	public ZbtzsxxbMapper getZbtzsxxbDao() {
		return zbtzsxxbDao;
	}

	public void setZbtzsxxbDao(ZbtzsxxbMapper zbtzsxxbDao) {
		this.zbtzsxxbDao = zbtzsxxbDao;
	}

}
