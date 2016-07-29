package com.Service.impl;

import com.Pojo.Pxjjxjyb;
import com.Service.PxjjxjybService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("pxjjxjybImp")
public class PxjjxjybServiceImp implements PxjjxjybService {

	@Autowired
	private PxjjxjybMapper pxjjxjybDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.pxjjxjybDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Pxjjxjyb record) {
		// TODO Auto-generated method stub
		return this.pxjjxjybDao.insert(record);
	}

	public int insertSelective(Pxjjxjyb record) {
		// TODO Auto-generated method stub
		return this.pxjjxjybDao.insertSelective(record);
	}

	public Pxjjxjyb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.pxjjxjybDao.selectByPrimaryKey(lsh);
	}

	public List<Pxjjxjyb> selectByYg(String yg){
		return this.pxjjxjybDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Pxjjxjyb record) {
		// TODO Auto-generated method stub
		return this.pxjjxjybDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Pxjjxjyb record) {
		// TODO Auto-generated method stub
		return this.pxjjxjybDao.updateByPrimaryKey(record);
	}

	public PxjjxjybMapper getPxjjxjybDao() {
		return pxjjxjybDao;
	}

	public void setPxjjxjybDao(PxjjxjybMapper pxjjxjybDao) {
		this.pxjjxjybDao = pxjjxjybDao;
	}

}
