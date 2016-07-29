package com.Service.impl;

import com.Pojo.Ygdzzjxxb;
import com.Service.YgdzzjxxbService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Dao.*;

@Service("ygdzzjxxbImp")
public class YgdzzjxxbServiceImp implements YgdzzjxxbService {

	@Autowired
	private YgdzzjxxbMapper ygdzzjxxbDao;
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.ygdzzjxxbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Ygdzzjxxb record) {
		// TODO Auto-generated method stub
		return this.ygdzzjxxbDao.insert(record);
	}

	public int insertSelective(Ygdzzjxxb record) {
		// TODO Auto-generated method stub
		return this.ygdzzjxxbDao.insertSelective(record);
	}

	public Ygdzzjxxb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.ygdzzjxxbDao.selectByPrimaryKey(lsh);
	}

	public List<Ygdzzjxxb> selectByYg(String yg){
		return this.ygdzzjxxbDao.selectByYg(yg);
	}
	
	public int updateByPrimaryKeySelective(Ygdzzjxxb record) {
		// TODO Auto-generated method stub
		return this.ygdzzjxxbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Ygdzzjxxb record) {
		// TODO Auto-generated method stub
		return this.ygdzzjxxbDao.updateByPrimaryKey(record);
	}

	public YgdzzjxxbMapper getYgdzzjxxbDao() {
		return ygdzzjxxbDao;
	}

	public void setYgdzzjxxbDao(YgdzzjxxbMapper ygdzzjxxbDao) {
		this.ygdzzjxxbDao = ygdzzjxxbDao;
	}

}
