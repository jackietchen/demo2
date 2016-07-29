package com.Service.impl;

import com.Pojo.Kqdy;
import com.Service.KqdyService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("kqdyImp")
public class KqdyServiceImp implements KqdyService {

	@Autowired
	private KqdyMapper kqdyDao;
	public int deleteByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return this.kqdyDao.deleteByPrimaryKey(id);
	}

	public int insert(Kqdy record) {
		// TODO Auto-generated method stub
		return this.kqdyDao.insert(record);
	}

	public int insertSelective(Kqdy record) {
		// TODO Auto-generated method stub
		return this.kqdyDao.insertSelective(record);
	}

	public Kqdy selectByPrimaryKey(Integer id) {
		// TODO Auto-generated method stub
		return this.kqdyDao.selectByPrimaryKey(id);
	}

	public List<Kqdy> selectByDeptno(String deptno){
		return this.kqdyDao.selectByDeptno(deptno);
	}
	
	public int updateByPrimaryKeySelective(Kqdy record) {
		// TODO Auto-generated method stub
		return this.kqdyDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Kqdy record) {
		// TODO Auto-generated method stub
		return this.kqdyDao.updateByPrimaryKey(record);
	}

	public KqdyMapper getKqdyDao() {
		return kqdyDao;
	}

	public void setKqdyDao(KqdyMapper kqdyDao) {
		this.kqdyDao = kqdyDao;
	}

}
