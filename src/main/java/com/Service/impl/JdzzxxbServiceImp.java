package com.Service.impl;

import com.Pojo.Jdzzxxb;
import com.Service.JdzzxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("jdzzxxbImp")
public class JdzzxxbServiceImp implements JdzzxxbService {

	@Autowired
	private JdzzxxbMapper jdzzxxbDao;
	public int deleteByPrimaryKey(Integer lsh) {
		// TODO Auto-generated method stub
		return this.jdzzxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Jdzzxxb record) {
		// TODO Auto-generated method stub
		return this.jdzzxxbDao.insert(record);
	}

	public int insertSelective(Jdzzxxb record) {
		// TODO Auto-generated method stub
		return this.jdzzxxbDao.insertSelective(record);
	}

	public Jdzzxxb selectByPrimaryKey(Integer lsh) {
		// TODO Auto-generated method stub
		return this.jdzzxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Jdzzxxb> selectByYg(String yg){
		return this.jdzzxxbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Jdzzxxb record) {
		// TODO Auto-generated method stub
		return this.jdzzxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Jdzzxxb record) {
		// TODO Auto-generated method stub
		return this.jdzzxxbDao.updateByPrimaryKey(record);
	}

	public JdzzxxbMapper getJdzzxxbDao() {
		return jdzzxxbDao;
	}

	public void setJdzzxxbDao(JdzzxxbMapper jdzzxxbDao) {
		this.jdzzxxbDao = jdzzxxbDao;
	}

}
