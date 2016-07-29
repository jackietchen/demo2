package com.Service.impl;

import com.Pojo.Zczsb;
import com.Service.ZczsbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;

@Service("zczsbImp")
public class ZczsbServiceImp implements ZczsbService {

	@Autowired
	private ZczsbMapper zczsbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.zczsbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Zczsb record) {
		// TODO Auto-generated method stub
		return this.zczsbDao.insert(record);
	}

	public int insertSelective(Zczsb record) {
		// TODO Auto-generated method stub
		return this.zczsbDao.insertSelective(record);
	}

	public Zczsb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.zczsbDao.selectByPrimaryKey(lsh);
	}

	public List<Zczsb> selectBySsyg(String ssyg){
		return this.zczsbDao.selectBySsyg(ssyg);
	}
	
	public int updateByPrimaryKeySelective(Zczsb record) {
		// TODO Auto-generated method stub
		return this.zczsbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Zczsb record) {
		// TODO Auto-generated method stub
		return this.zczsbDao.updateByPrimaryKey(record);
	}

	public ZczsbMapper getZczsbDao() {
		return zczsbDao;
	}

	public void setZczsbDao(ZczsbMapper zczsbDao) {
		this.zczsbDao = zczsbDao;
	}

}
