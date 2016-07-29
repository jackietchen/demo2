package com.Service.impl;

import com.Dao.*;
import com.Pojo.Mhxtdlmmb;
import com.Service.MhxtdlmmbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("mhxtdlmmbImp")
public class MhxtdlmmbServiceImp implements MhxtdlmmbService {
	
	@Autowired
	private MhxtdlmmbMapper mhxtdlmmbDao;
	
	public int deleteByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.mhxtdlmmbDao.deleteByPrimaryKey(lsh);
	}

	public int insert(Mhxtdlmmb record) {
		// TODO Auto-generated method stub
		return this.mhxtdlmmbDao.insert(record);
	}

	public int insertSelective(Mhxtdlmmb record) {
		// TODO Auto-generated method stub
		return this.mhxtdlmmbDao.insertSelective(record);
	}

	public Mhxtdlmmb selectByPrimaryKey(Long lsh) {
		// TODO Auto-generated method stub
		return this.mhxtdlmmbDao.selectByPrimaryKey(lsh);
	}
	
	public Mhxtdlmmb selectAll(){
		// TODO Auto-generated method stub
		return this.mhxtdlmmbDao.selectAll();
	}
	
	public int updateByPrimaryKeySelective(Mhxtdlmmb record) {
		// TODO Auto-generated method stub
		return this.mhxtdlmmbDao.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Mhxtdlmmb record) {
		// TODO Auto-generated method stub
		return this.mhxtdlmmbDao.updateByPrimaryKey(record);
	}

	public MhxtdlmmbMapper getMhxtdlmmbDao() {
		return mhxtdlmmbDao;
	}

	public void setMhxtdlmmbDao(MhxtdlmmbMapper mhxtdlmmbDao) {
		this.mhxtdlmmbDao = mhxtdlmmbDao;
	}

}
