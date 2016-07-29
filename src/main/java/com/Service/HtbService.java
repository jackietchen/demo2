package com.Service;

import java.util.List;

import com.Pojo.Htb;

public interface HtbService {
    int deleteByPrimaryKey(Integer htzblsh);

    int insert(Htb record);

    int insertSelective(Htb record);

    Htb selectByPrimaryKey(Integer htzblsh);

    List<Htb> selectByGcbid(Integer gcbid);
    
    int updateByPrimaryKeySelective(Htb record);

    int updateByPrimaryKey(Htb record);
}