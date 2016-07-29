package com.Service.impl;

import com.Pojo.Jkzkb;
import com.Service.JkzkbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("jkzkbImp")
public class JkzkbServiceImp implements JkzkbService {

	@Autowired
	private JkzkbMapper jkzkbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.jkzkbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Jkzkb record) {
		// TODO Auto-generated method stub
		return this.jkzkbDao.insert(record);
	}

	public int insertSelective(Jkzkb record) {
		// TODO Auto-generated method stub
		return this.jkzkbDao.insertSelective(record);
	}

	public Jkzkb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.jkzkbDao.selectByPrimaryKey(lsh);
	}

	public List<Jkzkb> selectByYg(String yg){
		return this.jkzkbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Jkzkb record) {
		// TODO Auto-generated method stub
		return this.jkzkbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Jkzkb record) {
		// TODO Auto-generated method stub
		return this.jkzkbDao.updateByPrimaryKey(record);
	}

	public JkzkbMapper getJkzkbDao() {
		return jkzkbDao;
	}

	public void setJkzkbDao(JkzkbMapper jkzkbDao) {
		this.jkzkbDao = jkzkbDao;
	}

}
