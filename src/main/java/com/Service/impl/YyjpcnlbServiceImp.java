package com.Service.impl;

import com.Pojo.Yyjpcnlb;
import com.Service.YyjpcnlbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("yyjpcnlbImp")
public class YyjpcnlbServiceImp implements YyjpcnlbService {

	@Autowired
	private YyjpcnlbMapper yyjpcnlbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.yyjpcnlbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Yyjpcnlb record) {
		// TODO Auto-generated method stub
		return this.yyjpcnlbDao.insert(record);
	}

	public int insertSelective(Yyjpcnlb record) {
		// TODO Auto-generated method stub
		return this.yyjpcnlbDao.insertSelective(record);
	}

	public Yyjpcnlb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.yyjpcnlbDao.selectByPrimaryKey(lsh);
	}

	public List<Yyjpcnlb> selectByYg(String yg){
		return this.yyjpcnlbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Yyjpcnlb record) {
		// TODO Auto-generated method stub
		return this.yyjpcnlbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Yyjpcnlb record) {
		// TODO Auto-generated method stub
		return this.yyjpcnlbDao.updateByPrimaryKey(record);
	}

	public YyjpcnlbMapper getYyjpcnlbDao() {
		return yyjpcnlbDao;
	}

	public void setYyjpcnlbDao(YyjpcnlbMapper yyjpcnlbDao) {
		this.yyjpcnlbDao = yyjpcnlbDao;
	}

}
