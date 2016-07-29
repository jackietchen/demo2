package com.Service.impl;

import com.Pojo.Jzzxxb;
import com.Service.JzzxxbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("jzzxxbImp")
public class JzzxxbServiceImp implements JzzxxbService {

	@Autowired
	private JzzxxbMapper jzzxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.jzzxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Jzzxxb record) {
		// TODO Auto-generated method stub
		return this.jzzxxbDao.insert(record);
	}

	public int insertSelective(Jzzxxb record) {
		// TODO Auto-generated method stub
		return this.jzzxxbDao.insertSelective(record);
	}

	public Jzzxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.jzzxxbDao.selectByPrimaryKey(lsh);
	}

	public Jzzxxb selectByYgbh(String yg){
		return this.jzzxxbDao.selectByYgbh(yg);
	}
	public int updateByPrimaryKeySelective(Jzzxxb record) {
		// TODO Auto-generated method stub
		return this.jzzxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Jzzxxb record) {
		// TODO Auto-generated method stub
		return this.jzzxxbDao.updateByPrimaryKey(record);
	}

	public JzzxxbMapper getJzzxxbDao() {
		return jzzxxbDao;
	}

	public void setJzzxxbDao(JzzxxbMapper jzzxxbDao) {
		this.jzzxxbDao = jzzxxbDao;
	}

}
