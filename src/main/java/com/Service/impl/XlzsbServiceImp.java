package com.Service.impl;

import com.Pojo.Xlzsb;
import com.Service.XlzsbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("xlzsbImp")
public class XlzsbServiceImp implements XlzsbService {

	@Autowired
	private XlzsbMapper xlzsbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.xlzsbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Xlzsb record) {
		// TODO Auto-generated method stub
		return this.xlzsbDao.insert(record);
	}

	public int insertSelective(Xlzsb record) {
		// TODO Auto-generated method stub
		return this.xlzsbDao.insertSelective(record);
	}

	public Xlzsb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.xlzsbDao.selectByPrimaryKey(lsh);
	}

	public List<Xlzsb> selectBySsyg(String ssyg){
		return this.xlzsbDao.selectBySsyg(ssyg);
	}
	
	public int updateByPrimaryKeySelective(Xlzsb record) {
		// TODO Auto-generated method stub
		return this.xlzsbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Xlzsb record) {
		// TODO Auto-generated method stub
		return this.xlzsbDao.updateByPrimaryKey(record);
	}

	public XlzsbMapper getXlzsbDao() {
		return xlzsbDao;
	}

	public void setXlzsbDao(XlzsbMapper xlzsbDao) {
		this.xlzsbDao = xlzsbDao;
	}

}
