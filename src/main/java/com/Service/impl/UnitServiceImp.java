package com.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
import com.Pojo.Unit;
import com.Service.UnitService;

@Service("unitImp")
public class UnitServiceImp implements UnitService {
	
	@Autowired
	private UnitMapper unitDao;
	
	public int deleteByPrimaryKey(String no) {
		// TODO Auto-generated method stub
		return this.unitDao.deleteByPrimaryKey(no);
	}

	public int insert(Unit record) {
		// TODO Auto-generated method stub
		return this.unitDao.insert(record);
	}

	public int insertSelective(Unit record) {
		// TODO Auto-generated method stub
		return this.unitDao.insertSelective(record);
	}

	public Unit selectByPrimaryKey(String no) {
		// TODO Auto-generated method stub
		return this.unitDao.selectByPrimaryKey(no);
	}
	
	public List<Unit> selectAll()
	{
		return this.unitDao.selectAll();
	}
	
	public int updateByPrimaryKeySelective(Unit record) {
		// TODO Auto-generated method stub
		return this.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Unit record) {
		// TODO Auto-generated method stub
		return this.unitDao.updateByPrimaryKey(record);
	}

	public UnitMapper getUnitDao() {
		return unitDao;
	}

	public void setUnitDao(UnitMapper unitDao) {
		this.unitDao = unitDao;
	}

}
