package com.Service.impl;

import com.Pojo.Tcjxqahb;
import com.Service.TcjxqahbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("tcjxqahbImp")
public class TcjxqahbServiceImp implements TcjxqahbService {

	@Autowired
	private TcjxqahbMapper tcjxqahbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.tcjxqahbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Tcjxqahb record) {
		// TODO Auto-generated method stub
		return this.tcjxqahbDao.insert(record);
	}

	public int insertSelective(Tcjxqahb record) {
		// TODO Auto-generated method stub
		return this.tcjxqahbDao.insertSelective(record);
	}

	public Tcjxqahb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.tcjxqahbDao.selectByPrimaryKey(lsh);
	}

	public List<Tcjxqahb> selectByYg(String yg){
		return this.tcjxqahbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Tcjxqahb record) {
		// TODO Auto-generated method stub
		return this.tcjxqahbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Tcjxqahb record) {
		// TODO Auto-generated method stub
		return this.tcjxqahbDao.updateByPrimaryKey(record);
	}

	public TcjxqahbMapper getTcjxqahbDao() {
		return tcjxqahbDao;
	}

	public void setTcjxqahbDao(TcjxqahbMapper tcjxqahbDao) {
		this.tcjxqahbDao = tcjxqahbDao;
	}

}
