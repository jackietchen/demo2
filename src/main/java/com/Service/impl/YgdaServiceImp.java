package com.Service.impl;

import com.Dao.YgdaMapper;
import com.Pojo.Ygda;
import com.Service.YgdaService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("ygdaImp")
public class YgdaServiceImp implements YgdaService {

	@Autowired
	private YgdaMapper ygdaDao;
	
	public int deleteByPrimaryKey(String ygbh) {
		// TODO Auto-generated method stub
		return this.ygdaDao.deleteByPrimaryKey(ygbh);
	}

	public int insert(Ygda record) {
		// TODO Auto-generated method stub
		return this.ygdaDao.insert(record);
	}

	public int insertSelective(Ygda record) {
		// TODO Auto-generated method stub
		return this.ygdaDao.insertSelective(record);
	}

	public Ygda selectByPrimaryKey(String ygbh) {
		// TODO Auto-generated method stub
		return this.ygdaDao.selectByPrimaryKey(ygbh);
	}
	
	public Ygda selectByLogin(Ygda record){
		return this.ygdaDao.selectByLogin(record);
	}

	public int updateByPrimaryKeySelective(Ygda record) {
		// TODO Auto-generated method stub
		return this.ygdaDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Ygda record) {
		// TODO Auto-generated method stub
		return this.ygdaDao.updateByPrimaryKey(record);
	}

	public YgdaMapper getYgdaDao() {
		return ygdaDao;
	}

	public void setYgdaDao(YgdaMapper ygdaDao) {
		this.ygdaDao = ygdaDao;
	}

}
