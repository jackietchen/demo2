package com.Service.impl;

import com.Pojo.Xmxxb;
import com.Service.XmxxbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("xmxxbImp")
public class XmxxbServiceImp implements XmxxbService {

	@Autowired
	private XmxxbMapper xmxxbDao;
	public int deleteByPrimaryKey(Integer gcbid) {
		// TODO Auto-generated method stub
		return this.xmxxbDao.deleteByPrimaryKey(gcbid);
	}

	public int insert(Xmxxb record) {
		// TODO Auto-generated method stub
		return this.xmxxbDao.insert(record);
	}

	public int insertSelective(Xmxxb record) {
		// TODO Auto-generated method stub
		return this.xmxxbDao.insertSelective(record);
	}

	public Xmxxb selectByPrimaryKey(Integer gcbid) {
		// TODO Auto-generated method stub
		return this.xmxxbDao.selectByPrimaryKey(gcbid);
	}

	public int updateByPrimaryKeySelective(Xmxxb record) {
		// TODO Auto-generated method stub
		return this.xmxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Xmxxb record) {
		// TODO Auto-generated method stub
		return this.xmxxbDao.updateByPrimaryKey(record);
	}

	public XmxxbMapper getXmxxbDao() {
		return xmxxbDao;
	}

	public void setXmxxbDao(XmxxbMapper xmxxbDao) {
		this.xmxxbDao = xmxxbDao;
	}

}
