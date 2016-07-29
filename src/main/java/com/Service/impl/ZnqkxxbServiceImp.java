package com.Service.impl;

import com.Pojo.Znqkxxb;
import com.Service.ZnqkxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("znqkxxbImp")
public class ZnqkxxbServiceImp implements ZnqkxxbService {

	@Autowired
	private ZnqkxxbMapper znqkxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.znqkxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Znqkxxb record) {
		// TODO Auto-generated method stub
		return this.znqkxxbDao.insert(record);
	}

	public int insertSelective(Znqkxxb record) {
		// TODO Auto-generated method stub
		return this.znqkxxbDao.insertSelective(record);
	}

	public Znqkxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.znqkxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Znqkxxb> selectByYg(String yg){
		return this.znqkxxbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Znqkxxb record) {
		// TODO Auto-generated method stub
		return this.znqkxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Znqkxxb record) {
		// TODO Auto-generated method stub
		return this.znqkxxbDao.updateByPrimaryKey(record);
	}

	public ZnqkxxbMapper getZnqkxxbDao() {
		return znqkxxbDao;
	}

	public void setZnqkxxbDao(ZnqkxxbMapper znqkxxbDao) {
		this.znqkxxbDao = znqkxxbDao;
	}

}
