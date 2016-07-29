package com.Service.impl;

import com.Pojo.Poqkxxb;
import com.Service.PoqkxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("poqkxxbImp")
public class PoqkxxbServiceImp implements PoqkxxbService {

	@Autowired
	private PoqkxxbMapper poqkxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.poqkxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Poqkxxb record) {
		// TODO Auto-generated method stub
		return this.poqkxxbDao.insert(record);
	}

	public int insertSelective(Poqkxxb record) {
		// TODO Auto-generated method stub
		return this.poqkxxbDao.insertSelective(record);
	}

	public Poqkxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.poqkxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Poqkxxb> selectByYg(String yg){
		return this.poqkxxbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Poqkxxb record) {
		// TODO Auto-generated method stub
		return this.poqkxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Poqkxxb record) {
		// TODO Auto-generated method stub
		return this.poqkxxbDao.updateByPrimaryKey(record);
	}

	public PoqkxxbMapper getPoqkxxbDao() {
		return poqkxxbDao;
	}

	public void setPoqkxxbDao(PoqkxxbMapper poqkxxbDao) {
		this.poqkxxbDao = poqkxxbDao;
	}

}
