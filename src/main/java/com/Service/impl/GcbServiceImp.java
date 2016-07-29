package com.Service.impl;

import com.Pojo.Gcb;
import com.Service.GcbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;

@Service("gcbImp")
public class GcbServiceImp implements GcbService {

	@Autowired
	private GcbMapper gcbDao;
	
	public int deleteByPrimaryKey(Integer gcbid) {
		// TODO Auto-generated method stub
		return this.gcbDao.deleteByPrimaryKey(gcbid);
	}

	public int insert(Gcb record) {
		// TODO Auto-generated method stub
		return this.gcbDao.insert(record);
	}

	public int insertSelective(Gcb record) {
		// TODO Auto-generated method stub
		return this.gcbDao.insertSelective(record);
	}

	public Gcb selectByPrimaryKey(Integer gcbid) {
		// TODO Auto-generated method stub
		return this.gcbDao.selectByPrimaryKey(gcbid);
	}

	public List<Gcb> selectByDepNo(String depNo){
		return this.gcbDao.selectByDepNo(depNo);
	}
    
    public List<Gcb> selectByXmfzr(String xmfzr){
    	return this.gcbDao.selectByXmfzr(xmfzr);
    }
    
    public List<Gcb> selectByLike(Gcb record)
    {
    	return this.gcbDao.selectByLike(record);
    }
    
    public List<Gcb> selectByLikes(Gcb record){
    	return this.gcbDao.selectByLikes(record);
    }
	
	public int updateByPrimaryKeySelective(Gcb record) {
		// TODO Auto-generated method stub
		return this.gcbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Gcb record) {
		// TODO Auto-generated method stub
		return this.gcbDao.updateByPrimaryKey(record);
	}

	public GcbMapper getGcbDao() {
		return gcbDao;
	}

	public void setGcbDao(GcbMapper gcbDao) {
		this.gcbDao = gcbDao;
	}

}
