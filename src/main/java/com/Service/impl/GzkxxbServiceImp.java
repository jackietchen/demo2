package com.Service.impl;

import com.Pojo.Gzkxxb;
import com.Service.GzkxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("gzkxxbImp")
public class GzkxxbServiceImp implements GzkxxbService {

	@Autowired
	private GzkxxbMapper gzkxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.gzkxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Gzkxxb record) {
		// TODO Auto-generated method stub
		return this.gzkxxbDao.insert(record);
	}

	public int insertSelective(Gzkxxb record) {
		// TODO Auto-generated method stub
		return this.gzkxxbDao.insertSelective(record);
	}

	public Gzkxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.gzkxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Gzkxxb> selectByYg(String yg){
		return this.gzkxxbDao.selectByYg(yg);
	}
    
    public List<Gzkxxb> selectByKhyh(Long khyh){
    	return this.gzkxxbDao.selectByKhyh(khyh);
    }
	
	public int updateByPrimaryKeySelective(Gzkxxb record) {
		// TODO Auto-generated method stub
		return this.gzkxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Gzkxxb record) {
		// TODO Auto-generated method stub
		return this.gzkxxbDao.updateByPrimaryKey(record);
	}

	public GzkxxbMapper getGzkxxbDao() {
		return gzkxxbDao;
	}

	public void setGzkxxbDao(GzkxxbMapper gzkxxbDao) {
		this.gzkxxbDao = gzkxxbDao;
	}

}
