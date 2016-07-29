package com.Service.impl;

import com.Pojo.Zyzslbb;
import com.Service.ZyzslbbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("zyzslbbImp")
public class ZyzslbbServiceImp implements ZyzslbbService {

	@Autowired
	private ZyzslbbMapper zyzslbbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.zyzslbbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Zyzslbb record) {
		// TODO Auto-generated method stub
		return this.zyzslbbDao.insert(record);
	}

	public int insertSelective(Zyzslbb record) {
		// TODO Auto-generated method stub
		return this.zyzslbbDao.insertSelective(record);
	}

	public Zyzslbb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.zyzslbbDao.selectByPrimaryKey(lsh);
	}

	public List<Zyzslbb> selectAll()
	{
		return this.zyzslbbDao.selectAll();
	}
	
	public List<Zyzslbb> selectByJg(String jg){
		return this.zyzslbbDao.selectByJg(jg);
	}
	
	public int updateByPrimaryKeySelective(Zyzslbb record) {
		// TODO Auto-generated method stub
		return this.zyzslbbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Zyzslbb record) {
		// TODO Auto-generated method stub
		return this.zyzslbbDao.updateByPrimaryKey(record);
	}

	public ZyzslbbMapper getZyzslbbDao() {
		return zyzslbbDao;
	}

	public void setZyzslbbDao(ZyzslbbMapper zyzslbbDao) {
		this.zyzslbbDao = zyzslbbDao;
	}

}
