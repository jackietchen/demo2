package com.Service;

import com.Pojo.Mhxtdlmmb;

public interface MhxtdlmmbService {
	int deleteByPrimaryKey(Long lsh);

    int insert(Mhxtdlmmb record);

    int insertSelective(Mhxtdlmmb record);

    Mhxtdlmmb selectByPrimaryKey(Long lsh);
    
    Mhxtdlmmb selectAll();
    
    int updateByPrimaryKeySelective(Mhxtdlmmb record);

    int updateByPrimaryKey(Mhxtdlmmb record);
}
