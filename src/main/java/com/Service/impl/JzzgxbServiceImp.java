package com.Service.impl;

import com.Pojo.Jzzgxb;
import com.Service.JzzgxbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("jzzgxbImp")
public class JzzgxbServiceImp implements JzzgxbService {

	@Autowired
	private JzzgxbMapper jzzgxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.jzzgxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Jzzgxb record) {
		// TODO Auto-generated method stub
		return this.jzzgxbDao.insert(record);
	}

	public int insertSelective(Jzzgxb record) {
		// TODO Auto-generated method stub
		return this.jzzgxbDao.insertSelective(record);
	}

	public Jzzgxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.jzzgxbDao.selectByPrimaryKey(lsh);
	}

	public int updateByPrimaryKeySelective(Jzzgxb record) {
		// TODO Auto-generated method stub
		return this.jzzgxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Jzzgxb record) {
		// TODO Auto-generated method stub
		return this.jzzgxbDao.updateByPrimaryKey(record);
	}

	public JzzgxbMapper getJzzgxbDao() {
		return jzzgxbDao;
	}

	public void setJzzgxbDao(JzzgxbMapper jzzgxbDao) {
		this.jzzgxbDao = jzzgxbDao;
	}

}
