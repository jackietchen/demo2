package com.Service.impl;

import com.Pojo.Fmqkxxb;
import com.Service.FmqkxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;

@Service("fmqkxxbImp")
public class FmqkxxbServiceImp implements FmqkxxbService {

	@Autowired
	private FmqkxxbMapper fmqkxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.fmqkxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Fmqkxxb record) {
		// TODO Auto-generated method stub
		return this.fmqkxxbDao.insert(record);
	}

	public int insertSelective(Fmqkxxb record) {
		// TODO Auto-generated method stub
		return this.fmqkxxbDao.insertSelective(record);
	}

	public Fmqkxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.fmqkxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Fmqkxxb> selectByYg(String yg)
	{
		return this.fmqkxxbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Fmqkxxb record) {
		// TODO Auto-generated method stub
		return this.fmqkxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Fmqkxxb record) {
		// TODO Auto-generated method stub
		return this.fmqkxxbDao.updateByPrimaryKey(record);
	}

	public FmqkxxbMapper getFmqkxxbDao() {
		return fmqkxxbDao;
	}

	public void setFmqkxxbDao(FmqkxxbMapper fmqkxxbDao) {
		this.fmqkxxbDao = fmqkxxbDao;
	}

}
