package com.Service.impl;

import com.Pojo.Bgjzlxxb;
import com.Service.BgjzlxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("bgjzlxxbImp")
public class BgjzlxxbServiceImp implements BgjzlxxbService {
	
	@Autowired
	private BgjzlxxbMapper bgjzlxxbDao;
	
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.bgjzlxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Bgjzlxxb record) {
		// TODO Auto-generated method stub
		return this.bgjzlxxbDao.insert(record);
	}

	public int insertSelective(Bgjzlxxb record) {
		// TODO Auto-generated method stub
		return this.bgjzlxxbDao.insertSelective(record);
	}

	public Bgjzlxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.bgjzlxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Bgjzlxxb> selectByWjm(String wjm)
	{
		return this.bgjzlxxbDao.selectByWjm(wjm);
	}
	
	public int updateByPrimaryKeySelective(Bgjzlxxb record) {
		// TODO Auto-generated method stub
		return this.bgjzlxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Bgjzlxxb record) {
		// TODO Auto-generated method stub
		return this.bgjzlxxbDao.updateByPrimaryKey(record);
	}

	public BgjzlxxbMapper getBgjzlxxbDao() {
		return bgjzlxxbDao;
	}

	public void setBgjzlxxbDao(BgjzlxxbMapper bgjzlxxbDao) {
		this.bgjzlxxbDao = bgjzlxxbDao;
	}

}
