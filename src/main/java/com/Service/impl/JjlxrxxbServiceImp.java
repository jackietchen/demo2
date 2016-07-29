package com.Service.impl;

import com.Pojo.Jjlxrxxb;
import com.Service.JjlxrxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("jjlxrxxbImp")
public class JjlxrxxbServiceImp implements JjlxrxxbService {

	@Autowired
	private JjlxrxxbMapper jjlxrxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.jjlxrxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Jjlxrxxb record) {
		// TODO Auto-generated method stub
		return this.jjlxrxxbDao.insert(record);
	}

	public int insertSelective(Jjlxrxxb record) {
		// TODO Auto-generated method stub
		return this.jjlxrxxbDao.insertSelective(record);
	}

	public Jjlxrxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.jjlxrxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Jjlxrxxb> selectByYg(String yg)
	{
		return this.jjlxrxxbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Jjlxrxxb record) {
		// TODO Auto-generated method stub
		return this.jjlxrxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Jjlxrxxb record) {
		// TODO Auto-generated method stub
		return this.jjlxrxxbDao.updateByPrimaryKey(record);
	}

	public JjlxrxxbMapper getJjlxrxxbDao() {
		return jjlxrxxbDao;
	}

	public void setJjlxrxxbDao(JjlxrxxbMapper jjlxrxxbDao) {
		this.jjlxrxxbDao = jjlxrxxbDao;
	}

}
