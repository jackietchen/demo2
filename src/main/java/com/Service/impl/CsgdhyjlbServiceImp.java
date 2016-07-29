package com.Service.impl;

import com.Pojo.Csgdhyjlb;
import com.Service.CsgdhyjlbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;

@Service("csgdhyjlbImp")
public class CsgdhyjlbServiceImp implements CsgdhyjlbService {

	@Autowired
	private CsgdhyjlbMapper csgdhyjlbDao;
	
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.csgdhyjlbDao.deleteByPrimaryKey(lsh);
	}

	public int deleteByYg(String yg)
	{
		return this.csgdhyjlbDao.deleteByYg(yg);
	}
	
	public int insert(Csgdhyjlb record) {
		// TODO Auto-generated method stub
		return this.csgdhyjlbDao.insert(record);
	}

	public int insertSelective(Csgdhyjlb record) {
		// TODO Auto-generated method stub
		return this.csgdhyjlbDao.insertSelective(record);
	}

	public Csgdhyjlb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.csgdhyjlbDao.selectByPrimaryKey(lsh);
	}

	public List<Csgdhyjlb> selectByYg(String yg)
	{
		return this.csgdhyjlbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Csgdhyjlb record) {
		// TODO Auto-generated method stub
		return this.csgdhyjlbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Csgdhyjlb record) {
		// TODO Auto-generated method stub
		return this.csgdhyjlbDao.updateByPrimaryKey(record);
	}

	public CsgdhyjlbMapper getCsgdhyjlbDao() {
		return csgdhyjlbDao;
	}

	public void setCsgdhyjlbDao(CsgdhyjlbMapper csgdhyjlbDao) {
		this.csgdhyjlbDao = csgdhyjlbDao;
	}

}
