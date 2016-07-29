package com.Service.impl;

import com.Pojo.Ryjxxxb;
import com.Service.RyjxxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("ryjxxxbImp")
public class RyjxxxbServiceImp implements RyjxxxbService {

	@Autowired
	private RyjxxxbMapper ryjxxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.ryjxxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Ryjxxxb record) {
		// TODO Auto-generated method stub
		return this.ryjxxxbDao.insert(record);
	}

	public int insertSelective(Ryjxxxb record) {
		// TODO Auto-generated method stub
		return this.ryjxxxbDao.insertSelective(record);
	}

	public Ryjxxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.ryjxxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Ryjxxxb> selectByYg(String yg){
		return this.ryjxxxbDao.selectByYg(yg);
	}
    
    public List<Ryjxxxb> selectByGc(Long gc){
    	return this.ryjxxxbDao.selectByGc(gc);
    }
    
    public List<Ryjxxxb> selectByRyjb(Long ryjb){
    	return this.ryjxxxbDao.selectByRyjb(ryjb);
    }
    
    public List<Ryjxxxb> selectBySsbm(String ssbm){
    	return this.ryjxxxbDao.selectBySsbm(ssbm);
    }
    
    public List<Ryjxxxb> selectByJg(String jg){
    	return this.ryjxxxbDao.selectByJg(jg);
    }
	
    public List<Ryjxxxb> selectByLike(Ryjxxxb record){
    	return this.ryjxxxbDao.selectByLike(record);
    }
    
	public int updateByPrimaryKeySelective(Ryjxxxb record) {
		// TODO Auto-generated method stub
		return this.ryjxxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Ryjxxxb record) {
		// TODO Auto-generated method stub
		return this.ryjxxxbDao.updateByPrimaryKey(record);
	}

	public RyjxxxbMapper getRyjxxxbDao() {
		return ryjxxxbDao;
	}

	public void setRyjxxxbDao(RyjxxxbMapper ryjxxxbDao) {
		this.ryjxxxbDao = ryjxxxbDao;
	}

}
