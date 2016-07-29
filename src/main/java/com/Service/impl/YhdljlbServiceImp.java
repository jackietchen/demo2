package com.Service.impl;

import com.Pojo.Yhdljlb;
import com.Service.YhdljlbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("yhdljlbImp")
public class YhdljlbServiceImp implements YhdljlbService {

	@Autowired
	private YhdljlbMapper yhdljlbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.yhdljlbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Yhdljlb record) {
		// TODO Auto-generated method stub
		return this.yhdljlbDao.insert(record);
	}

	public int insertSelective(Yhdljlb record) {
		// TODO Auto-generated method stub
		return this.yhdljlbDao.insertSelective(record);
	}

	public Yhdljlb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.yhdljlbDao.selectByPrimaryKey(lsh);
	}

	public List<Yhdljlb> selectBySzdw(String szdw){
		return this.yhdljlbDao.selectBySzdw(szdw);
	}
	
	public int updateByPrimaryKeySelective(Yhdljlb record) {
		// TODO Auto-generated method stub
		return this.yhdljlbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Yhdljlb record) {
		// TODO Auto-generated method stub
		return this.yhdljlbDao.updateByPrimaryKey(record);
	}

	public YhdljlbMapper getYhdljlbDao() {
		return yhdljlbDao;
	}

	public void setYhdljlbDao(YhdljlbMapper yhdljlbDao) {
		this.yhdljlbDao = yhdljlbDao;
	}

}
