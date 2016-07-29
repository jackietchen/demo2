package com.Service.impl;

import com.Pojo.Ygrzrddcb;
import com.Service.YgrzrddcbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("ygrzrddcbImp")
public class YgrzrddcbServiceImp implements YgrzrddcbService {

	@Autowired
	private YgrzrddcbMapper ygrzrddcbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.ygrzrddcbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Ygrzrddcb record) {
		// TODO Auto-generated method stub
		return this.ygrzrddcbDao.insert(record);
	}

	public int insertSelective(Ygrzrddcb record) {
		// TODO Auto-generated method stub
		return this.ygrzrddcbDao.insertSelective(record);
	}

	public Ygrzrddcb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.ygrzrddcbDao.selectByPrimaryKey(lsh);
	}

	public int updateByPrimaryKeySelective(Ygrzrddcb record) {
		// TODO Auto-generated method stub
		return this.ygrzrddcbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Ygrzrddcb record) {
		// TODO Auto-generated method stub
		return this.ygrzrddcbDao.updateByPrimaryKey(record);
	}

	public YgrzrddcbMapper getYgrzrddcbDao() {
		return ygrzrddcbDao;
	}

	public void setYgrzrddcbDao(YgrzrddcbMapper ygrzrddcbDao) {
		this.ygrzrddcbDao = ygrzrddcbDao;
	}

}
