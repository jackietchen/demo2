package com.Service.impl;

import com.Pojo.Zyzgzsb;
import com.Service.ZyzgzsbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("zyzgzsbImp")
public class ZyzgzsbServiceImp implements ZyzgzsbService {

	@Autowired
	private ZyzgzsbMapper zyzgzsbDao;
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return this.zyzgzsbDao.deleteByPrimaryKey(id);
	}

	public int insert(Zyzgzsb record) {
		// TODO Auto-generated method stub
		return this.zyzgzsbDao.insert(record);
	}

	public int insertSelective(Zyzgzsb record) {
		// TODO Auto-generated method stub
		return this.zyzgzsbDao.insertSelective(record);
	}

	public Zyzgzsb selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return this.zyzgzsbDao.selectByPrimaryKey(id);
	}

	public List<Zyzgzsb> selectBySsyg(String ssyg){
		return this.zyzgzsbDao.selectBySsyg(ssyg);
	}
    
    public List<Zyzgzsb> selectByZslb(Integer zslb){
    	return this.zyzgzsbDao.selectByZslb(zslb);
    }
    
    public List<Zyzgzsb> selectByBgbm(String bgbm){
    	return this.zyzgzsbDao.selectByBgbm(bgbm);
    }
	
	public int updateByPrimaryKeySelective(Zyzgzsb record) {
		// TODO Auto-generated method stub
		return this.zyzgzsbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Zyzgzsb record) {
		// TODO Auto-generated method stub
		return this.zyzgzsbDao.updateByPrimaryKey(record);
	}

	public ZyzgzsbMapper getZyzgzsbDao() {
		return zyzgzsbDao;
	}

	public void setZyzgzsbDao(ZyzgzsbMapper zyzgzsbDao) {
		this.zyzgzsbDao = zyzgzsbDao;
	}


}
