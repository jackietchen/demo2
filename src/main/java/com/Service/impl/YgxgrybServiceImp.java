package com.Service.impl;

import com.Pojo.Ygxgryb;
import com.Service.YgxgrybService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("ygxgrybImp")
public class YgxgrybServiceImp implements YgxgrybService {

	@Autowired
	private YgxgrybMapper ygxgrybDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.ygxgrybDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Ygxgryb record) {
		// TODO Auto-generated method stub
		return this.ygxgrybDao.insert(record);
	}

	public int insertSelective(Ygxgryb record) {
		// TODO Auto-generated method stub
		return this.ygxgrybDao.insertSelective(record);
	}

	public Ygxgryb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.ygxgrybDao.selectByPrimaryKey(lsh);
	}

	public List<Ygxgryb> selectByYg(String yg){
		return this.ygxgrybDao.selectByYg(yg);
	}
    
    public List<Ygxgryb> selectByRy(Long ry){
    	return this.ygxgrybDao.selectByRy(ry);
    }
	
	public int updateByPrimaryKeySelective(Ygxgryb record) {
		// TODO Auto-generated method stub
		return this.ygxgrybDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Ygxgryb record) {
		// TODO Auto-generated method stub
		return this.ygxgrybDao.updateByPrimaryKey(record);
	}

	public YgxgrybMapper getYgxgrybDao() {
		return ygxgrybDao;
	}

	public void setYgxgrybDao(YgxgrybMapper ygxgrybDao) {
		this.ygxgrybDao = ygxgrybDao;
	}

}
