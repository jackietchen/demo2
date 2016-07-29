package com.Service;

import java.util.Map;

import com.Pojo.Ygda;

public interface YgdaService {
	int deleteByPrimaryKey(String ygbh);

    int insert(Ygda record);

    int insertSelective(Ygda record);

    Ygda selectByPrimaryKey(String ygbh);
    
    Ygda selectByLogin(Ygda record);

    int updateByPrimaryKeySelective(Ygda record);

    int updateByPrimaryKey(Ygda record);
}
