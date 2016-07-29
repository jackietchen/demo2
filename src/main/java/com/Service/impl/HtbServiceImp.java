package com.Service.impl;

import com.Pojo.Htb;
import com.Service.HtbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("htbImp")
public class HtbServiceImp implements HtbService {

	@Autowired
	private HtbMapper htbDao;
	public int deleteByPrimaryKey(Integer htzblsh) {
		// TODO Auto-generated method stub
		return this.htbDao.deleteByPrimaryKey(htzblsh);
	}

	public int insert(Htb record) {
		// TODO Auto-generated method stub
		return this.htbDao.insert(record);
	}

	public int insertSelective(Htb record) {
		// TODO Auto-generated method stub
		return this.htbDao.insertSelective(record);
	}

	public Htb selectByPrimaryKey(Integer htzblsh) {
		// TODO Auto-generated method stub
		return this.htbDao.selectByPrimaryKey(htzblsh);
	}

	public  List<Htb> selectByGcbid(Integer gcbid)
	{
		return this.htbDao.selectByGcbid(gcbid);
	}
	
	public int updateByPrimaryKeySelective(Htb record) {
		// TODO Auto-generated method stub
		return this.htbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Htb record) {
		// TODO Auto-generated method stub
		return this.htbDao.updateByPrimaryKey(record);
	}

	public HtbMapper getHtbDao() {
		return htbDao;
	}

	public void setHtbDao(HtbMapper htbDao) {
		this.htbDao = htbDao;
	}

}
