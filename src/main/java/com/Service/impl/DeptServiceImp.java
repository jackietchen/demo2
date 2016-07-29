package com.Service.impl;

import com.Pojo.Dept;
import com.Service.DeptService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("deptImp")
public class DeptServiceImp implements DeptService {

	@Autowired
	private DeptMapper deptDao;
	
	public int deleteByPrimaryKey(String no) {
		// TODO Auto-generated method stub
		return this.deptDao.deleteByPrimaryKey(no);
	}

	public int insert(Dept record) {
		// TODO Auto-generated method stub
		return this.deptDao.insert(record);
	}

	public int insertSelective(Dept record) {
		// TODO Auto-generated method stub
		return this.deptDao.insertSelective(record);
	}

	public Dept selectByPrimaryKey(String no) {
		// TODO Auto-generated method stub
		return this.deptDao.selectByPrimaryKey(no);
	}

	public List<Dept> selectByUnitno(String unitno)
	{
		return this.deptDao.selectByUnitno(unitno);
	}
	
	public int updateByPrimaryKeySelective(Dept record) {
		// TODO Auto-generated method stub
		return this.deptDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Dept record) {
		// TODO Auto-generated method stub
		return this.deptDao.updateByPrimaryKey(record);
	}

	public DeptMapper getDeptDao() {
		return deptDao;
	}

	public void setDeptDao(DeptMapper deptDao) {
		this.deptDao = deptDao;
	}

}
