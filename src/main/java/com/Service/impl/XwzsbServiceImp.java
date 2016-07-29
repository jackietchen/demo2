package com.Service.impl;

import com.Pojo.Xwzsb;
import com.Service.XwzsbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("xwzsbImp")
public class XwzsbServiceImp implements XwzsbService {

	@Autowired
	private XwzsbMapper xwzsbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.xwzsbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Xwzsb record) {
		// TODO Auto-generated method stub
		return this.xwzsbDao.insert(record);
	}

	public int insertSelective(Xwzsb record) {
		// TODO Auto-generated method stub
		return this.xwzsbDao.insertSelective(record);
	}

	public Xwzsb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.xwzsbDao.selectByPrimaryKey(lsh);
	}

	public List<Xwzsb> selectBySsyg(String ssyg)
	{
		return this.xwzsbDao.selectBySsyg(ssyg);
	}
	
	public int updateByPrimaryKeySelective(Xwzsb record) {
		// TODO Auto-generated method stub
		return this.xwzsbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Xwzsb record) {
		// TODO Auto-generated method stub
		return this.xwzsbDao.updateByPrimaryKey(record);
	}

	public XwzsbMapper getXwzsbDao() {
		return xwzsbDao;
	}

	public void setXwzsbDao(XwzsbMapper xwzsbDao) {
		this.xwzsbDao = xwzsbDao;
	}

}
