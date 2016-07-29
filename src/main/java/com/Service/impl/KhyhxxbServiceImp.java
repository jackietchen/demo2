package com.Service.impl;

import com.Pojo.Khyhxxb;
import com.Service.KhyhxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;
@Service("khyhxxbImp")
public class KhyhxxbServiceImp implements KhyhxxbService {

	@Autowired
	private KhyhxxbMapper khyhxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.khyhxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Khyhxxb record) {
		// TODO Auto-generated method stub
		return this.khyhxxbDao.insert(record);
	}

	public int insertSelective(Khyhxxb record) {
		// TODO Auto-generated method stub
		return this.khyhxxbDao.insertSelective(record);
	}

	public Khyhxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.khyhxxbDao.selectByPrimaryKey(lsh);
	}

	public Khyhxxb selectByYhbh(String yhbh){
		return this.khyhxxbDao.selectByYhbh(yhbh);
	}
	
	public List<Khyhxxb> selectAll(){
		return this.khyhxxbDao.selectAll();
	}
	
	public int updateByPrimaryKeySelective(Khyhxxb record) {
		// TODO Auto-generated method stub
		return this.khyhxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Khyhxxb record) {
		// TODO Auto-generated method stub
		return this.khyhxxbDao.updateByPrimaryKey(record);
	}

	public KhyhxxbMapper getKhyhxxbDao() {
		return khyhxxbDao;
	}

	public void setKhyhxxbDao(KhyhxxbMapper khyhxxbDao) {
		this.khyhxxbDao = khyhxxbDao;
	}

}
