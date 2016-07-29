package com.Service.impl;

import com.Pojo.Gzxmyjb;
import com.Service.GzxmyjbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("gzxmyjbImp")
public class GzxmyjbServiceImp implements GzxmyjbService {

	@Autowired
	private GzxmyjbMapper gzxmyjbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.gzxmyjbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Gzxmyjb record) {
		// TODO Auto-generated method stub
		return this.gzxmyjbDao.insert(record);
	}

	public int insertSelective(Gzxmyjb record) {
		// TODO Auto-generated method stub
		return this.gzxmyjbDao.insertSelective(record);
	}

	public Gzxmyjb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.gzxmyjbDao.selectByPrimaryKey(lsh);
	}

	public List<Gzxmyjb> selectByYg(String yg){
		return this.gzxmyjbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Gzxmyjb record) {
		// TODO Auto-generated method stub
		return this.gzxmyjbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Gzxmyjb record) {
		// TODO Auto-generated method stub
		return this.gzxmyjbDao.updateByPrimaryKey(record);
	}

	public GzxmyjbMapper getGzxmyjbDao() {
		return gzxmyjbDao;
	}

	public void setGzxmyjbDao(GzxmyjbMapper gzxmyjbDao) {
		this.gzxmyjbDao = gzxmyjbDao;
	}

}
