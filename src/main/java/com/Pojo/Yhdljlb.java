package com.Pojo;

import java.util.Date;

public class Yhdljlb {
    private Long lsh;

    private String xm;

    private String sfzh;

    private String szdw;

    private String sjhm;

    private Date dlsj;

    public Long getLsh() {
        return lsh;
    }

    public void setLsh(Long lsh) {
        this.lsh = lsh;
    }

    public String getXm() {
        return xm;
    }

    public void setXm(String xm) {
        this.xm = xm == null ? null : xm.trim();
    }

    public String getSfzh() {
        return sfzh;
    }

    public void setSfzh(String sfzh) {
        this.sfzh = sfzh == null ? null : sfzh.trim();
    }

    public String getSzdw() {
        return szdw;
    }

    public void setSzdw(String szdw) {
        this.szdw = szdw == null ? null : szdw.trim();
    }

    public String getSjhm() {
        return sjhm;
    }

    public void setSjhm(String sjhm) {
        this.sjhm = sjhm == null ? null : sjhm.trim();
    }

    public Date getDlsj() {
        return dlsj;
    }

    public void setDlsj(Date dlsj) {
        this.dlsj = dlsj;
    }
}