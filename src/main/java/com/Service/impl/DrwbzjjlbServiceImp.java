package com.Service.impl;

import com.Pojo.Drwbzjjlb;
import com.Service.DrwbzjjlbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("drwbzjjlbImp")
public class DrwbzjjlbServiceImp implements DrwbzjjlbService {

	@Autowired
	private DrwbzjjlbMapper drwbzjjlbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.drwbzjjlbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Drwbzjjlb record) {
		// TODO Auto-generated method stub
		return this.drwbzjjlbDao.insert(record);
	}

	public int insertSelective(Drwbzjjlb record) {
		// TODO Auto-generated method stub
		return this.drwbzjjlbDao.insertSelective(record);
	}

	public Drwbzjjlb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.drwbzjjlbDao.selectByPrimaryKey(lsh);
	}

	public List<Drwbzjjlb> selectByYg(String yg){
		return this.drwbzjjlbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Drwbzjjlb record) {
		// TODO Auto-generated method stub
		return this.drwbzjjlbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Drwbzjjlb record) {
		// TODO Auto-generated method stub
		return this.drwbzjjlbDao.updateByPrimaryKey(record);
	}

	public DrwbzjjlbMapper getDrwbzjjlbDao() {
		return drwbzjjlbDao;
	}

	public void setDrwbzjjlbDao(DrwbzjjlbMapper drwbzjjlbDao) {
		this.drwbzjjlbDao = drwbzjjlbDao;
	}

}
