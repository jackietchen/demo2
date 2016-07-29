package com.Service.impl;

import com.Pojo.Province;
import com.Service.ProvinceService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("provinceImp")
public class ProvinceServiceImp implements ProvinceService {

	@Autowired
	private ProvinceMapper provinceDao;
	public int deleteByPrimaryKey(Integer no) {
		// TODO Auto-generated method stub
		return this.provinceDao.deleteByPrimaryKey(no);
	}

	public int insert(Province record) {
		// TODO Auto-generated method stub
		return this.provinceDao.insert(record);
	}

	public int insertSelective(Province record) {
		// TODO Auto-generated method stub
		return this.provinceDao.insertSelective(record);
	}

	public Province selectByPrimaryKey(Integer no) {
		// TODO Auto-generated method stub
		return this.provinceDao.selectByPrimaryKey(no);
	}

	public int updateByPrimaryKeySelective(Province record) {
		// TODO Auto-generated method stub
		return this.provinceDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Province record) {
		// TODO Auto-generated method stub
		return this.provinceDao.updateByPrimaryKey(record);
	}

	public ProvinceMapper getProvinceDao() {
		return provinceDao;
	}

	public void setProvinceDao(ProvinceMapper provinceDao) {
		this.provinceDao = provinceDao;
	}

	public List<Province> selectAll() {
		// TODO Auto-generated method stub
		return this.provinceDao.selectAll();
	}

}
