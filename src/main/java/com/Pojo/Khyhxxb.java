package com.Pojo;

public class Khyhxxb {
    private Long lsh;

    private String yhbh;

    private String khyhqc;

    private Integer px;

    private String bz;

    public Long getLsh() {
        return lsh;
    }

    public void setLsh(Long lsh) {
        this.lsh = lsh;
    }

    public String getYhbh() {
        return yhbh;
    }

    public void setYhbh(String yhbh) {
        this.yhbh = yhbh == null ? null : yhbh.trim();
    }

    public String getKhyhqc() {
        return khyhqc;
    }

    public void setKhyhqc(String khyhqc) {
        this.khyhqc = khyhqc == null ? null : khyhqc.trim();
    }

    public Integer getPx() {
        return px;
    }

    public void setPx(Integer px) {
        this.px = px;
    }

    public String getBz() {
        return bz;
    }

    public void setBz(String bz) {
        this.bz = bz == null ? null : bz.trim();
    }
}