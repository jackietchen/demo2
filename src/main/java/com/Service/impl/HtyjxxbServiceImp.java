package com.Service.impl;

import com.Pojo.Htyjxxb;
import com.Service.HtyjxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("htyjxxbImp")
public class HtyjxxbServiceImp implements HtyjxxbService {

	@Autowired
	private HtyjxxbMapper htyjxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.htyjxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Htyjxxb record) {
		// TODO Auto-generated method stub
		return this.htyjxxbDao.insert(record);
	}

	public int insertSelective(Htyjxxb record) {
		// TODO Auto-generated method stub
		return this.htyjxxbDao.insertSelective(record);
	}

	public Htyjxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.htyjxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Htyjxxb> selectByYg(String yg){
		return this.htyjxxbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Htyjxxb record) {
		// TODO Auto-generated method stub
		return this.htyjxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Htyjxxb record) {
		// TODO Auto-generated method stub
		return this.htyjxxbDao.updateByPrimaryKey(record);
	}

	public HtyjxxbMapper getHtyjxxbDao() {
		return htyjxxbDao;
	}

	public void setHtyjxxbDao(HtyjxxbMapper htyjxxbDao) {
		this.htyjxxbDao = htyjxxbDao;
	}

}
