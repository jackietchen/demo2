package com.Service.impl;

import com.Pojo.Ryjbxxb;
import com.Service.RyjbxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("ryjbxxbImp")
public class RyjbxxbServiceImp implements RyjbxxbService {

	@Autowired
	private RyjbxxbMapper ryjbxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.ryjbxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Ryjbxxb record) {
		// TODO Auto-generated method stub
		return this.ryjbxxbDao.insert(record);
	}

	public int insertSelective(Ryjbxxb record) {
		// TODO Auto-generated method stub
		return this.ryjbxxbDao.insertSelective(record);
	}

	public Ryjbxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.ryjbxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Ryjbxxb> selectByJg(String jg){
		return this.ryjbxxbDao.selectByJg(jg);
	}
	
	public int updateByPrimaryKeySelective(Ryjbxxb record) {
		// TODO Auto-generated method stub
		return this.ryjbxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Ryjbxxb record) {
		// TODO Auto-generated method stub
		return this.ryjbxxbDao.updateByPrimaryKey(record);
	}

	public RyjbxxbMapper getRyjbxxbDao() {
		return ryjbxxbDao;
	}

	public void setRyjbxxbDao(RyjbxxbMapper ryjbxxbDao) {
		this.ryjbxxbDao = ryjbxxbDao;
	}

}
