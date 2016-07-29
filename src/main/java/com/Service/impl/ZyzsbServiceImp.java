package com.Service.impl;

import com.Pojo.Zyzsb;
import com.Service.ZyzsbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("zyzsbImp")
public class ZyzsbServiceImp implements ZyzsbService {

	@Autowired
	private ZyzsbMapper zyzsbDao;
	public int deleteByPrimaryKey(Long id) {
		// TODO Auto-generated method stub
		return this.zyzsbDao.deleteByPrimaryKey(id);
	}

	public int insert(Zyzsb record) {
		// TODO Auto-generated method stub
		return this.zyzsbDao.insert(record);
	}

	public int insertSelective(Zyzsb record) {
		// TODO Auto-generated method stub
		return this.zyzsbDao.insertSelective(record);
	}

	public Zyzsb selectByPrimaryKey(Long id) {
		// TODO Auto-generated method stub
		return this.zyzsbDao.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(Zyzsb record) {
		// TODO Auto-generated method stub
		return this.zyzsbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Zyzsb record) {
		// TODO Auto-generated method stub
		return this.zyzsbDao.updateByPrimaryKey(record);
	}

	public ZyzsbMapper getZyzsbDao() {
		return zyzsbDao;
	}

	public void setZyzsbDao(ZyzsbMapper zyzsbDao) {
		this.zyzsbDao = zyzsbDao;
	}

}
