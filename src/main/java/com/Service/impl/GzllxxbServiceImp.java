package com.Service.impl;

import com.Pojo.Gzllxxb;
import com.Service.GzllxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("gzllxxbImp")
public class GzllxxbServiceImp implements GzllxxbService {

	@Autowired
	private GzllxxbMapper gzllxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.gzllxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Gzllxxb record) {
		// TODO Auto-generated method stub
		return this.gzllxxbDao.insert(record);
	}

	public int insertSelective(Gzllxxb record) {
		// TODO Auto-generated method stub
		return this.gzllxxbDao.insertSelective(record);
	}

	public Gzllxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.gzllxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Gzllxxb> selectByYg(String yg){
		return this.gzllxxbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Gzllxxb record) {
		// TODO Auto-generated method stub
		return this.gzllxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Gzllxxb record) {
		// TODO Auto-generated method stub
		return this.gzllxxbDao.updateByPrimaryKey(record);
	}

	public GzllxxbMapper getGzllxxbDao() {
		return gzllxxbDao;
	}

	public void setGzllxxbDao(GzllxxbMapper gzllxxbDao) {
		this.gzllxxbDao = gzllxxbDao;
	}

}
