package com.Controller;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import com.Service.*;
import com.Pojo.*;

import java.io.File;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/ygxx")
public class Ygxx {
	@Resource(name="provinceImp")
	private ProvinceService provinceImp;

	@Resource(name="ygdaImp")
	private YgdaService ygdaImp;

	@Resource(name="jzzxxbImp")
	private JzzxxbService jzzxxbImp;

	@Resource(name="xlzsbImp")
	private XlzsbService xlzsbImp;

	@Resource(name="xwzsbImp")
	private XwzsbService xwzsbImp;

	@Resource(name="zczsbImp")
	private ZczsbService zczsbImp;

	@Resource(name="pxjjxjybImp")
	private PxjjxjybService pxjjxjybImp;

	@Resource(name="csgdhyjlbImp")
	private CsgdhyjlbService csgdhyjlbImp;

	@Resource(name="gzllxxbImp")
	private GzllxxbService gzllxxbImp;

	@Resource(name="drwbzjjlbImp")
	private DrwbzjjlbService drwbzjjlbImp;

	@Resource(name="gzxmyjbImp")
	private GzxmyjbService gzxmyjbImp;

	@Resource(name="zbtzsxxbImp")
	private ZbtzsxxbService zbtzsxxbImp;

	@Resource(name="htyjxxbImp")
	private HtyjxxbService htyjxxbImp;

	@Resource(name="ygxgrybImp")
	private YgxgrybService ygxgrybImp;

	@Resource(name="ryjbxxbImp")
	private RyjbxxbService ryjbxxbImp;

	@Resource(name="ryjxxxbImp")
	private RyjxxxbService ryjxxxbImp;

	@Resource(name="zyzgzsbImp")
	private ZyzgzsbService zyzgzsbImp;

	@Resource(name="zyzslbbImp")
	private ZyzslbbService zyzslbbImp;

	@Resource(name="jdzzxxbImp")
	private JdzzxxbService jdzzxxbImp;

	@Resource(name="yyjpcnlbImp")
	private YyjpcnlbService yyjpcnlbImp;

	@Resource(name="tcjxqahbImp")
	private TcjxqahbService tcjxqahbImp;

	@Resource(name="jkzkbImp")
	private JkzkbService jkzkbImp;

	@Resource(name="fmqkxxbImp")
	private FmqkxxbService fmqkxxbImp;

	@Resource(name="poqkxxbImp")
	private PoqkxxbService poqkxxbImp;

	@Resource(name="znqkxxbImp")
	private ZnqkxxbService znqkxxbImp;

	@Resource(name="jjlxrxxbImp")
	private JjlxrxxbService jjlxrxxbImp;

	@Resource(name="gzkxxbImp")
	private GzkxxbService gzkxxbImp;

	@Resource(name="khyhxxbImp")
	private KhyhxxbService khyhxxbImp;

	@Resource(name="gcbImp")
	private GcbService gcbImp;

	@Resource(name="htbImp")
	private HtbService htbImp;

	@Resource(name="unitImp")
	private UnitService unitImp;

	@Resource(name="deptImp")
	private DeptService deptImp;

	@Resource(name="kqdyImp")
	private KqdyService kqdyImp;

	@Resource(name="yhdljlbImp")
	private YhdljlbService yhdljlbImp;

	@Resource(name="mhxtdlmmbImp")
	private MhxtdlmmbService mhxtdlmmbImp;

	@Resource(name="ygdzzjxxbImp")
	private YgdzzjxxbService ygdzzjxxbImp;

	@Resource(name="bgjzlxxbImp")
	private BgjzlxxbService bgjzlxxbImp;
	
	/*
	@Resource(name="")
	private Service Imp;
	*/

	//省份列表
	@RequestMapping(value="/province", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> province()
	{
		List<Province> list;
		Map<String,Object> map=new HashMap<String, Object>();
		list=this.provinceImp.selectAll();
		if(list.size()>0)
		{
			map.put("data", list);
			map.put("status", "success");
			return map;
		}
		else{
			map.put("status", "error");
			return map;
		}
	}

	//基本信息
	@RequestMapping(value="/jbxxdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> jbxxdj(HttpServletRequest request,HttpServletResponse response) throws Exception
	{
		String ygbh=request.getParameter("ygbh");
		int xb=Integer.parseInt(request.getParameter("xb"));
		String minzu=request.getParameter("minzu");
		String userphone=request.getParameter("userphone");
		String sfzh=request.getParameter("sfzh");
		String csny=request.getParameter("csny");
		int hyzk=Integer.parseInt(request.getParameter("hyzk"));
		int zzmm=Integer.parseInt(request.getParameter("zzmm"));
		int sg=Integer.parseInt(request.getParameter("sg"));
		int tz=Integer.parseInt(request.getParameter("tz"));
		int fzxh=Integer.parseInt(request.getParameter("fzxh"));
		String fkxz=request.getParameter("fkxz");
		String rycategory=request.getParameter("rycategory");
		String hjdz=request.getParameter("hjdz");
		String xjzd=request.getParameter("xjzd");
		int dqzc=Integer.parseInt(request.getParameter("dqzc"));
		int xl=Integer.parseInt(request.getParameter("xl"));
		int xw=Integer.parseInt(request.getParameter("xw"));
		int zszctdw=Integer.parseInt(request.getParameter("zszctdw"));
		int xzjljl=Integer.parseInt(request.getParameter("xzjljl"));
		int xsfzjl=Integer.parseInt(request.getParameter("xsfzjl"));
		int wfxwjl=Integer.parseInt(request.getParameter("wfxwjl"));
		int rzqsbzt=Integer.parseInt(request.getParameter("rzqsbzt"));
		String rzqgjjzh=request.getParameter("rzqgjjzh");
		String cjgzsj=request.getParameter("cjgzsj");
		String rzsj=request.getParameter("rzsj");
		int jg=Integer.parseInt(request.getParameter("jg"));
		Ygda yg= this.ygdaImp.selectByPrimaryKey(ygbh);
		Map<String,Object> map=new HashMap<String, Object>();
		if (yg!=null) {
			yg.setXb(xb);
			yg.setMinzu(minzu);
			yg.setMobile(userphone);
			yg.setCsny(Timestamp.valueOf(csny+" 12:00:00"));
			yg.setHyzk(hyzk);
			yg.setZzmm(zzmm);
			yg.setSg(sg);
			yg.setTz(tz);
			yg.setFzxh(fzxh);
			yg.setFkxz(fkxz);
			yg.setRycategory(rycategory);
			yg.setHjdz(hjdz);
			yg.setXjzd(xjzd);
			yg.setDqzc(dqzc);
			yg.setXl(xl);
			yg.setXw(xw);
			yg.setZszctdw(zszctdw);
			yg.setXzjljl(xzjljl);
			yg.setXsfzjl(xsfzjl);
			yg.setWfxwjl(wfxwjl);
			yg.setRzqsbzt(rzqsbzt);
			yg.setRzqgjjzh(rzqgjjzh);
			yg.setCjgzsj(Timestamp.valueOf(cjgzsj+ " 12:00:00"));
			yg.setRzsj(Timestamp.valueOf(rzsj+" 12:00:00"));
			yg.setJg(jg);
			Timestamp time= new Timestamp(System.currentTimeMillis());;
			yg.setNewupdate(time);
			this.ygdaImp.updateByPrimaryKey(yg);
			String ygzp= "D:/YG_File/Photo/"+yg.getYgzp()+".jpeg";

			InputStream in = null;
			byte[] data = null;
			//读取图片字节数组
			in = new FileInputStream(ygzp);
			data = new byte[in.available()];
			in.read(data);
			in.close();
			//对字节数组Base64编码
			BASE64Encoder encoder = new BASE64Encoder();
			ygzp = encoder.encode(data);//返回Base64编码过的字节数组字符串
			yg.setYgzp(ygzp);
			//request.getLocalAddr();
			System.out.println(request.getLocalPort());
			System.out.println("大成功！！！");
			map.put("data", yg);
			map.put("status", "success");
		} else {
			map.put("status", "error");
		}
		return map;
	}

	//居住证
	@RequestMapping(value="/jzzxx", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> jzzxx(HttpServletRequest request,HttpServletResponse response)
	{
		String ygbh=request.getParameter("ygbh");
		Jzzxxb jzzxx=this.jzzxxbImp.selectByYgbh(ygbh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(jzzxx!=null)
		{
			map.put("data", jzzxx);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/jzzxxdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> jzzxxdj(HttpServletRequest request,HttpServletResponse response)
	{
		Jzzxxb jzzxxb=new Jzzxxb();
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String yg= request.getParameter("yg");
		int jyshjzz=Integer.parseInt(request.getParameter("jyshjzz"));
		Map<String,Object> map=new HashMap<String, Object>();
		jzzxxb.setLsh(lsh);
		jzzxxb.setYg(yg);
		jzzxxb.setJyshjzz(jyshjzz);
		System.out.println(jyshjzz);
		if(jyshjzz==10||jyshjzz==15)
		{
			this.jzzxxbImp.updateByPrimaryKey(jzzxxb);
			map.put("data", jzzxxb);
			map.put("status", "success");
		}
		else if(jyshjzz==5){
			int jzzlb=Integer.parseInt(request.getParameter("jzzlb"));
			String ccslsj=request.getParameter("ccslsj");
			String yxqz=request.getParameter("yxqz");
			String jzddz=request.getParameter("jzddz");
			jzzxxb.setJzzlb(jzzlb);
			jzzxxb.setCcslsj(Timestamp.valueOf(ccslsj+ " 12:00:00"));
			jzzxxb.setYxqz(Timestamp.valueOf(yxqz+ " 12:00:00"));
			jzzxxb.setJzddz(jzddz);
			this.jzzxxbImp.updateByPrimaryKey(jzzxxb);
			map.put("data", jzzxxb);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	//学历信息
	@RequestMapping(value="/xlzsqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> xlzsqk(HttpServletRequest request,HttpServletResponse response)
	{
		String ygbh=request.getParameter("ygbh");
		List<Xlzsb> list=this.xlzsbImp.selectBySsyg(ygbh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/xlzsgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> xlzsgx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String xxmc=request.getParameter("xxmc");
		int xl=Integer.parseInt(request.getParameter("xl"));
		String xzn = request.getParameter("xzn");
		int xxxs = Integer.parseInt(request.getParameter("xxxs"));
		String sxzy = request.getParameter("sxzy");
		String xyz = request.getParameter("xyz");
		String qssj = request.getParameter("qssj");
		String jssj = request.getParameter("jssj");
		String zsbh = request.getParameter("zsbh");
		String fzrq = request.getParameter("fzrq");
		String dzzcm = request.getParameter("dzzcm");
		String bz = request.getParameter("bz");
		Xlzsb xlzs=this.xlzsbImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(xlzs!=null)
		{
			xlzs.setXxmc(xxmc);
			xlzs.setXl(xl);
			xlzs.setXz(xzn);
			xlzs.setXxxs(xxxs);
			xlzs.setSxzy(sxzy);
			xlzs.setXzh(xyz);
			xlzs.setQssj(Timestamp.valueOf(qssj+" 12:00:00"));
			xlzs.setJssj(Timestamp.valueOf(jssj+" 12:00:00"));
			xlzs.setZsbh(zsbh);
			xlzs.setFzrq(Timestamp.valueOf(fzrq+" 12:00:00"));
			xlzs.setDzzcm(dzzcm);
			xlzs.setBz(bz);
			int rows=this.xlzsbImp.updateByPrimaryKey(xlzs);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/xlzsdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> xlzsdj(HttpServletRequest request,HttpServletResponse response)
	{
		String ssyg=request.getParameter("ssyg");
		String xxmc=request.getParameter("xxmc");
		int xl=Integer.parseInt(request.getParameter("xl"));
		String xzn = request.getParameter("xz");
		int xxxs = Integer.parseInt(request.getParameter("xxxs"));
		String sxzy = request.getParameter("sxzy");
		String xzh = request.getParameter("xzh");
		String qssj = request.getParameter("qssj");
		String jssj = request.getParameter("jssj");
		String zsbh = request.getParameter("zsbh");
		String fzrq = request.getParameter("fzrq");
		String dzzcm = request.getParameter("dzzcm");
		String bz = request.getParameter("bz");
		Xlzsb xlzs=new Xlzsb();
		xlzs.setSsyg(ssyg);
		xlzs.setXxmc(xxmc);
		xlzs.setXl(xl);
		xlzs.setXz(xzn);
		xlzs.setXxxs(xxxs);
		xlzs.setSxzy(sxzy);
		xlzs.setXzh(xzh);
		xlzs.setQssj(Timestamp.valueOf(qssj+" 12:00:00"));
		xlzs.setJssj(Timestamp.valueOf(jssj+" 12:00:00"));
		xlzs.setZsbh(zsbh);
		xlzs.setFzrq(Timestamp.valueOf(fzrq+" 12:00:00"));
		xlzs.setDzzcm(dzzcm);
		xlzs.setBz(bz);
		int rows=this.xlzsbImp.insert(xlzs);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/xlzssc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> xlzssc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh= Long.parseLong(request.getParameter("lsh"));
		int rows =this.xlzsbImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	//学位信息
	@RequestMapping(value="/xwzsqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> xwzsqk(HttpServletRequest request,HttpServletResponse response)
	{
		String ygbh=request.getParameter("ygbh");
		List<Xwzsb> list=this.xwzsbImp.selectBySsyg(ygbh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/xwzsgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> xwzsgx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String xxmc=request.getParameter("xxmc");
		int xw=Integer.parseInt(request.getParameter("xw"));
		String xwmc = request.getParameter("xwmc");
		String sxzy = request.getParameter("sxzy");
		String xwpdwyhzx =request.getParameter("xwpdwyhzx");
		String zsbh = request.getParameter("zsbh");
		String fzrq = request.getParameter("fzrq");
		String bz = request.getParameter("bz");
		Xwzsb xwzs=this.xwzsbImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(xwzs!=null)
		{
			xwzs.setXxmc(xxmc);
			xwzs.setXw(xw);
			xwzs.setXwmc(xwmc);
			xwzs.setSxzy(sxzy);
			xwzs.setXwpdwyhzx(xwpdwyhzx);
			xwzs.setZsbh(zsbh);
			xwzs.setFzrq(Timestamp.valueOf(fzrq+" 12:00:00"));
			xwzs.setBz(bz);
			int rows=this.xwzsbImp.updateByPrimaryKey(xwzs);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/xwzsdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> xwzsdj(HttpServletRequest request,HttpServletResponse response)
	{
		String ssyg=request.getParameter("ssyg");
		String xxmc=request.getParameter("xxmc");
		int xw=Integer.parseInt(request.getParameter("xw"));
		String xwmc = request.getParameter("xwmc");
		String sxzy = request.getParameter("sxzy");
		String xwpdwyhzx =request.getParameter("xwpdwyhzx");
		String zsbh = request.getParameter("zsbh");
		String fzrq = request.getParameter("fzrq");
		String bz = request.getParameter("bz");
		Xwzsb xwzs=new Xwzsb();
		xwzs.setSsyg(ssyg);
		xwzs.setXxmc(xxmc);
		xwzs.setXw(xw);
		xwzs.setXwmc(xwmc);
		xwzs.setSxzy(sxzy);
		xwzs.setXwpdwyhzx(xwpdwyhzx);
		xwzs.setZsbh(zsbh);
		xwzs.setFzrq(Timestamp.valueOf(fzrq+" 12:00:00"));
		xwzs.setBz(bz);
		int rows=this.xwzsbImp.insert(xwzs);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/xwzssc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> xwzssc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh= Long.parseLong(request.getParameter("lsh"));
		int rows =this.xwzsbImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}


	//职称证书信息
	@RequestMapping(value="/zczsqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> zczsqk(HttpServletRequest request,HttpServletResponse response)
	{
		String ygbh=request.getParameter("ygbh");
		List<Zczsb> list=this.zczsbImp.selectBySsyg(ygbh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/zczsgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> zczsgx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String zy=request.getParameter("zy");
		int zc=Integer.parseInt(request.getParameter("zc"));
		String gydwqc = request.getParameter("gydwqc");
		String zcpswyhqc = request.getParameter("zcpswyhqc");
		String zzjg = request.getParameter("zzjg");
		String zsbh = request.getParameter("zsbh");
		String psbh = request.getParameter("psbh");
		String tgrq = request.getParameter("tgrq");
		String yxqz = request.getParameter("yxqz");
		String bz = request.getParameter("bz");
		Zczsb zczs=this.zczsbImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(zczs!=null)
		{
			zczs.setZy(zy);
			zczs.setZc(zc);
			zczs.setGydwqc(gydwqc);
			zczs.setZcpswyhqc(zcpswyhqc);
			zczs.setZzjg(zzjg);
			zczs.setZsbh(zsbh);
			zczs.setPsbh(psbh);
			if(tgrq==null||"".equals(tgrq))
				zczs.setTgrq(null);
			else
				zczs.setTgrq(Timestamp.valueOf(tgrq+" 12:00:00"));
			if(yxqz==null||"".equals(yxqz))
				zczs.setYxqz(null);
			else
				zczs.setYxqz(Timestamp.valueOf(yxqz+" 12:00:00"));
			zczs.setBz(bz);
			int rows=this.zczsbImp.updateByPrimaryKey(zczs);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/zczsdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> zczsdj(HttpServletRequest request,HttpServletResponse response)
	{
		String ssyg=request.getParameter("ssyg");
		String zy=request.getParameter("zy");
		int zc=Integer.parseInt(request.getParameter("zc"));
		String gydwqc = request.getParameter("gydwqc");
		String zcpswyhqc = request.getParameter("zcpswyhqc");
		String zzjg = request.getParameter("zzjg");
		String zsbh = request.getParameter("zsbh");
		String psbh = request.getParameter("psbh");
		String tgrq = request.getParameter("tgrq");
		String yxqz = request.getParameter("yxqz");
		String bz = request.getParameter("bz");
		Zczsb zczs=new Zczsb();
		zczs.setSsyg(ssyg);
		zczs.setZy(zy);
		zczs.setZc(zc);
		zczs.setGydwqc(gydwqc);
		zczs.setZcpswyhqc(zcpswyhqc);
		zczs.setZzjg(zzjg);
		zczs.setZsbh(zsbh);
		zczs.setPsbh(psbh);
		if(tgrq==null||"".equals(tgrq))
			zczs.setTgrq(null);
		else
			zczs.setTgrq(Timestamp.valueOf(tgrq+" 12:00:00"));
		if(yxqz==null||"".equals(yxqz))
			zczs.setYxqz(null);
		else
			zczs.setYxqz(Timestamp.valueOf(yxqz+" 12:00:00"));
		zczs.setBz(bz);
		int rows=this.zczsbImp.insert(zczs);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/zczssc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> zczssc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh= Long.parseLong(request.getParameter("lsh"));
		int rows =this.zczsbImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}



	//培训及继续教育信息
	@RequestMapping(value="/pxjjxjyqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> pxjjxjyqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("ygbh");
		List<Pxjjxjyb> list=this.pxjjxjybImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/pxjjxjygx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> pxjjxjygx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String qssj=request.getParameter("qssj");
		String jssj = request.getParameter("jssj");
		String pxjg = request.getParameter("pxjg");
		String pxnr = request.getParameter("pxnr");
		String zsmc = request.getParameter("zsmc");
		String zsbh = request.getParameter("zsbh");
		String bz = request.getParameter("bz");
		Pxjjxjyb pxjjxjy=this.pxjjxjybImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(pxjjxjy!=null)
		{
			pxjjxjy.setQssj(Timestamp.valueOf(qssj+" 12:00:00"));
			pxjjxjy.setJssj(Timestamp.valueOf(jssj+" 12:00:00"));
			pxjjxjy.setPxjg(pxjg);
			pxjjxjy.setPxnr(pxnr);
			pxjjxjy.setZsmc(zsmc);
			pxjjxjy.setZsbh(zsbh);
			pxjjxjy.setBz(bz);
			int rows=this.pxjjxjybImp.updateByPrimaryKey(pxjjxjy);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/pxjjxjydj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> pxjjxjydj(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		String qssj=request.getParameter("qssj");
		String jssj = request.getParameter("jssj");
		String pxjg = request.getParameter("pxjg");
		String pxnr = request.getParameter("pxnr");
		String zsmc = request.getParameter("zsmc");
		String zsbh = request.getParameter("zsbh");
		String bz = request.getParameter("bz");
		Pxjjxjyb pxjjxjy=new Pxjjxjyb();
		pxjjxjy.setYg(yg);
		pxjjxjy.setQssj(Timestamp.valueOf(qssj+" 12:00:00"));
		pxjjxjy.setJssj(Timestamp.valueOf(jssj+" 12:00:00"));
		pxjjxjy.setPxjg(pxjg);
		pxjjxjy.setPxnr(pxnr);
		pxjjxjy.setZsmc(zsmc);
		pxjjxjy.setZsbh(zsbh);
		pxjjxjy.setBz(bz);
		int rows=this.pxjjxjybImp.insert(pxjjxjy);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/pxjjxjysc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> pxjjxjysc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh= Long.parseLong(request.getParameter("lsh"));
		int rows =this.pxjjxjybImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}



	//从事过的行业
	@RequestMapping(value="/csgdhyjlbqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> csgdhyjlbqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Csgdhyjlb> list=this.csgdhyjlbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/csgdhyjlbdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> csgdhyjlbdj(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		int hy=Integer.parseInt(request.getParameter("hy"));
		Csgdhyjlb cs=new Csgdhyjlb();
		cs.setYg(yg);
		cs.setHy(hy);
		int rows= this.csgdhyjlbImp.insert(cs);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/csgdhyjlbsc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> csgdhyjlbsc(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		int rows= this.csgdhyjlbImp.deleteByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}




	//从事过的工作履历
	@RequestMapping(value="/gzllxxqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzllxxqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Gzllxxb> list=this.gzllxxbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gzllxxgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzllxxgx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String gzdw=request.getParameter("gzdw");
		String qssj = request.getParameter("qssj");
		String jssj = request.getParameter("jssj");
		int zc = Integer.parseInt(request.getParameter("zc"));
		String zw = request.getParameter("zw");
		String csgzzy = request.getParameter("csgzzy");
		String zmr = request.getParameter("zmr");
		String zmrdh = request.getParameter("zmrdh");
		String bz = request.getParameter("bz");
		Gzllxxb gzllxx=this.gzllxxbImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(gzllxx!=null)
		{
			gzllxx.setGzdw(gzdw);
			gzllxx.setQssj(Timestamp.valueOf(qssj+" 12:00:00"));
			if(jssj==null||"".equals(jssj))
				gzllxx.setJssj(null);
			else
				gzllxx.setJssj(Timestamp.valueOf(jssj+" 12:00:00"));
			gzllxx.setZc(zc);
			gzllxx.setZw(zw);
			gzllxx.setCsgzzy(csgzzy);
			gzllxx.setZmr(zmrdh);
			gzllxx.setZmrdh(zmrdh);
			gzllxx.setBz(bz);
			int rows=this.gzllxxbImp.updateByPrimaryKey(gzllxx);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gzllxxdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzllxxdj(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		String gzdw=request.getParameter("gzdw");
		String qssj = request.getParameter("qssj");
		String jssj = request.getParameter("jssj");
		int zc = Integer.parseInt(request.getParameter("zc"));
		String zw = request.getParameter("zw");
		String csgzzy = request.getParameter("csgzzy");
		String zmr = request.getParameter("zmr");
		String zmrdh = request.getParameter("zmrdh");
		String bz = request.getParameter("bz");
		Gzllxxb gzllxx=new Gzllxxb();
		gzllxx.setYg(yg);
		gzllxx.setGzdw(gzdw);
		gzllxx.setQssj(Timestamp.valueOf(qssj+" 12:00:00"));
		if(jssj==null||"".equals(jssj))
			gzllxx.setJssj(null);
		else
			gzllxx.setJssj(Timestamp.valueOf(jssj+" 12:00:00"));
		gzllxx.setZc(zc);
		gzllxx.setZw(zw);
		gzllxx.setCsgzzy(csgzzy);
		gzllxx.setZmr(zmrdh);
		gzllxx.setZmrdh(zmrdh);
		gzllxx.setBz(bz);
		int rows=this.gzllxxbImp.insert(gzllxx);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gzllxxsc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzllxxsc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh= Long.parseLong(request.getParameter("lsh"));
		int rows =this.gzllxxbImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}


	//外部专家
	@RequestMapping(value="/drwbzjjlqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> drwbzjjlqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Drwbzjjlb> list=this.drwbzjjlbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/drwbzjjlgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> drwbzjjlgx(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		int drgwbzj=Integer.parseInt(request.getParameter("drgwbzj"));
		int pbzj = Integer.parseInt(request.getParameter("pbzj"));
		int zxlzzj = Integer.parseInt(request.getParameter("zxlzzj"));
		int skzj = Integer.parseInt(request.getParameter("skzj"));
		int jsl = Integer.parseInt(request.getParameter("jsl"));
		int qt = Integer.parseInt(request.getParameter("qt"));
		String drzjms = request.getParameter("drzjms");
		List<Drwbzjjlb> list=this.drwbzjjlbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			Drwbzjjlb drwbzjjl=list.get(0);
			drwbzjjl.setDrgwbzj(drgwbzj);
			drwbzjjl.setPbzj(pbzj);
			drwbzjjl.setZxlzzj(zxlzzj);
			drwbzjjl.setSkzj(skzj);
			drwbzjjl.setJsl(jsl);
			drwbzjjl.setQt(qt);
			drwbzjjl.setDrzjms(drzjms);
			int rows=this.drwbzjjlbImp.updateByPrimaryKey(drwbzjjl);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	//项目业绩
	@RequestMapping(value="/gzxmyjqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzxmyjqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Gzxmyjb> list=this.gzxmyjbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gzxmyjcx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzxmyjcx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		Gzxmyjb gzxmyj=this.gzxmyjbImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(gzxmyj!=null)
		{
			map.put("items", gzxmyj);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/htcx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> htcx(HttpServletRequest request,HttpServletResponse response)
	{
		int gcbid=Integer.parseInt(request.getParameter("gcbid"));
		Gcb gc=this.gcbImp.selectByPrimaryKey(gcbid);
		List<Htb> list=this.htbImp.selectByGcbid(gcbid);
		Map<String,Object> map=new HashMap<String, Object>();
		if(gc!=null&&list.size()>0)
		{
			map.put("items", gc);
			map.put("htb",list.get(0));
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gcqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gcqk(HttpServletRequest request,HttpServletResponse response)
	{
		String depno=request.getParameter("depno");
		List<Gcb> list=this.gcbImp.selectByDepNo(depno);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gccqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gccqk(HttpServletRequest request,HttpServletResponse response)
	{
		String xm=request.getParameter("xm");
		List<Gcb> list=this.gcbImp.selectByXmfzr(xm);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gclike", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gclike(HttpServletRequest request,HttpServletResponse response)
	{
		String ygbh=request.getParameter("ygbh");
		String gcmc=request.getParameter("gcmc");
		Ygda yg=this.ygdaImp.selectByPrimaryKey(ygbh);
		Kqdy kqdy=this.kqdyImp.selectByPrimaryKey((int)((long)yg.getSzdy()));
		Gcb gc=new Gcb();
		System.out.println(kqdy.getDeptno());
		gc.setDepNo(kqdy.getDeptno());
		gc.setGcmc(gcmc);
		List<Gcb> list=this.gcbImp.selectByLike(gc);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gclikes", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gclikes(HttpServletRequest request,HttpServletResponse response)
	{
		String xm=request.getParameter("xm");
		String gcmc=request.getParameter("gcmc");
		Gcb gc=new Gcb();
		gc.setXmfzr(xm);
		gc.setGcmc(gcmc);
		List<Gcb> list=this.gcbImp.selectByLikes(gc);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}


	@RequestMapping(value="/gzxmyjdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzxmyjdj(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		String qssj=request.getParameter("qssj");
		String jssj=request.getParameter("jssj");
		long csgc=Long.parseLong(request.getParameter("csgc"));
		String xmmc=request.getParameter("xmmc");
		String gzzy=request.getParameter("gzzy");
		String drzw=request.getParameter("drzw");
		String bz=request.getParameter("bz");
		Gzxmyjb gzxmyj=new Gzxmyjb();
		gzxmyj.setYg(yg);
		gzxmyj.setQssj(Timestamp.valueOf(qssj+" 12:00:00"));
		if(jssj==null||"".equals(jssj))
			gzxmyj.setJssj(null);
		else
			gzxmyj.setJssj(Timestamp.valueOf(jssj+" 12:00:00"));
		gzxmyj.setCsgc(csgc);
		gzxmyj.setXmmc(xmmc);
		gzxmyj.setGzzy(gzzy);
		gzxmyj.setDrzw(drzw);
		gzxmyj.setBz(bz);
		int rows=this.gzxmyjbImp.insert(gzxmyj);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gzxmyjgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzxmyjgx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String qssj=request.getParameter("qssj");
		String jssj=request.getParameter("jssj");
		long csgc=Long.parseLong(request.getParameter("csgc"));
		String xmmc=request.getParameter("xmmc");
		String gzzy=request.getParameter("gzzy");
		String drzw=request.getParameter("drzw");
		String bz=request.getParameter("bz");
		Gzxmyjb gzxmyj=this.gzxmyjbImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(gzxmyj!=null)
		{
			gzxmyj.setQssj(Timestamp.valueOf(qssj+" 12:00:00"));
			if(jssj==null||"".equals(jssj))
				gzxmyj.setJssj(null);
			else
				gzxmyj.setJssj(Timestamp.valueOf(jssj+" 12:00:00"));
			gzxmyj.setCsgc(csgc);
			gzxmyj.setXmmc(xmmc);
			gzxmyj.setGzzy(gzzy);
			gzxmyj.setDrzw(drzw);
			gzxmyj.setBz(bz);
			int rows=this.gzxmyjbImp.updateByPrimaryKey(gzxmyj);
			if(rows>0)
			{
				map.put("status", "success");
			}
			else{
				map.put("status", "error");
			}
		}
		else
		{
			map.put("status","error");
		}

		return map;
	}


	@RequestMapping(value="/gzxmyjsc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzxmyjsc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		int rows=this.gzxmyjbImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	//中标通知书
	@RequestMapping(value="/zbtzsxxqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> zbtzsxxqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Zbtzsxxb> list=this.zbtzsxxbImp.selectByZbfzr(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	//合同业绩负责人身份
	@RequestMapping(value="/htyjxxqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> htyjxxqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Htyjxxb> list=this.htyjxxbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}


	@RequestMapping(value="/htyjxxdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> htyjxxdj(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		long ht=Long.parseLong(request.getParameter("ht"));
		String htbh=request.getParameter("htbh");
		String xmmc=request.getParameter("xmmc");
		int xmzy=Integer.parseInt(request.getParameter("xmzy"));
		double the=Double.parseDouble(request.getParameter("the"));
		String htkgrq=request.getParameter("htkgrq");
		String htjgrq=request.getParameter("htjgrq");
		String jfdw1=request.getParameter("jfdw1");
		String jfdw2=request.getParameter("jfdw2");
		Htyjxxb htyjxx=new Htyjxxb();
		htyjxx.setYg(yg);
		htyjxx.setHt(ht);
		htyjxx.setHtbh(htbh);
		htyjxx.setXmmc(xmmc);
		htyjxx.setXmzy(xmzy);
		htyjxx.setThe(the);
		htyjxx.setHtkgrq(Timestamp.valueOf(htkgrq+" 12:00:00"));
		if(htjgrq==null||"".equals(htjgrq))
			htyjxx.setHtjgrq(null);
		else
			htyjxx.setHtjgrq(Timestamp.valueOf(htjgrq+" 12:00:00"));
		htyjxx.setJfdw1(jfdw1);
		htyjxx.setJfdw2(jfdw2);

		int rows=this.htyjxxbImp.insert(htyjxx);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}


	@RequestMapping(value="/htyjxxsc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> htyjxxsc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		int rows=this.htyjxxbImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}
	//荣誉信息
	@RequestMapping(value="/ryjxxxlike", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> ryjxxxlike(HttpServletRequest request,HttpServletResponse response)
	{
		String jg=request.getParameter("jg");
		String rymc=request.getParameter("rymc");
		Ryjxxxb ryjxxx=new Ryjxxxb();
		ryjxxx.setJg(jg);
		ryjxxx.setRymc(rymc);
		List<Ryjxxxb> list=this.ryjxxxbImp.selectByLike(ryjxxx);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}


	@RequestMapping(value="/ygxgrydj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> ygxgrydj(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		long ry=Long.parseLong(request.getParameter("ry"));
		Ygxgryb ygxgry=new Ygxgryb();
		ygxgry.setYg(yg);
		ygxgry.setRy(ry);
		int rows=this.ygxgrybImp.insert(ygxgry);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/ygxgryqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> ygxgryqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Ygxgryb> list =this.ygxgrybImp.selectByYg(yg);
		List<Ryjxxxb> ryjx=new ArrayList<Ryjxxxb>();
		//List<Ryjbxxb> ryjb=new ArrayList<Ryjbxxb>();
		for(int i =0;i<list.size();i++)
		{
			Ygxgryb ygxgry=list.get(i);
			Ryjxxxb ryjxxx=this.ryjxxxbImp.selectByPrimaryKey(ygxgry.getRy());
			ryjx.add(ryjxxx);
			//Ryjbxxb ryjbxx=this.ryjbxxbImp.selectByPrimaryKey(ryjxxx.getRyjb());
			//ryjb.add(ryjbxx);
		}
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("ryjxs",ryjx);
			map.put("items", list);
			//map.put("ryjbs", ryjb);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/ygxgrysc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> ygxgrysc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		int rows=this.ygxgrybImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}


	//执业证书
	@RequestMapping(value="/zyzgzsqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> zyzgzsqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Zyzgzsb> list=this.zyzgzsbImp.selectBySsyg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		List<Zyzslbb> lb=new ArrayList<Zyzslbb>();
		if(list.size()>0)
		{
			for(int i=0;i<list.size();i++)
			{
				Zyzgzsb zy=list.get(i);
				lb.add(this.zyzslbbImp.selectByPrimaryKey((long) zy.getZslb()));
			}
			map.put("zslbs", lb);
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/zyzgzsgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> zyzgzsgx(HttpServletRequest request,HttpServletResponse response)
	{
		int id=Integer.parseInt(request.getParameter("id"));
		String zch=request.getParameter("zch");
		String zczsbh = request.getParameter("zczsbh");
		String zgzh = request.getParameter("zgzh");
		int zslb = Integer.parseInt(request.getParameter("zslb"));
		String sxzy = request.getParameter("sxzy");
		String zczy1 = request.getParameter("zczy1");
		String zczy2 = request.getParameter("zczy2");
		String bzjg = request.getParameter("bzjg");
		String qfrq = request.getParameter("qfrq");
		int yxq = Integer.parseInt(request.getParameter("yxq"));
		String outdate = request.getParameter("outdate");
		int zyyz = Integer.parseInt(request.getParameter("zyyz"));
		int yjbgf = Integer.parseInt(request.getParameter("yjbgf"));
		String bgbm = request.getParameter("bgbm");
		int bgzt = Integer.parseInt(request.getParameter("bgzt"));
		String jyr = request.getParameter("jyr");
		String bz = request.getParameter("bz");
		Zyzgzsb zyzgzs=this.zyzgzsbImp.selectByPrimaryKey(id);
		Map<String,Object> map=new HashMap<String, Object>();
		if(zyzgzs!=null)
		{
			zyzgzs.setZch(zch);
			zyzgzs.setZczsbh(zczsbh);
			zyzgzs.setZgzh(zgzh);
			zyzgzs.setZslb(zslb);
			zyzgzs.setSxzy(sxzy);
			zyzgzs.setZczy1(zczy1);
			zyzgzs.setZczy2(zczy2);
			zyzgzs.setBzjg(bzjg);
			zyzgzs.setQfrq(Timestamp.valueOf(qfrq+" 12:00:00"));
			zyzgzs.setYxq(yxq);
			//zyzgzs.setOutdate(outdate);
			zyzgzs.setZyyz(zyyz);
			zyzgzs.setYjbgf(yjbgf);
			zyzgzs.setBgbm(bgbm);
			zyzgzs.setBgzt(bgzt);
			zyzgzs.setJyr(jyr);
			zyzgzs.setBz(bz);
			if(outdate==null||"".equals(outdate))
				zyzgzs.setOutdate(null);
			else
				zyzgzs.setOutdate(Timestamp.valueOf(outdate+" 12:00:00"));
			int rows=this.zyzgzsbImp.updateByPrimaryKey(zyzgzs);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/zyzgzsdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> zyzgzsdj(HttpServletRequest request,HttpServletResponse response)
	{
		String ssyg=request.getParameter("ssyg");
		String zch=request.getParameter("zch");
		String zczsbh = request.getParameter("zczsbh");
		String zgzh = request.getParameter("zgzh");
		int zslb = Integer.parseInt(request.getParameter("zslb"));
		String sxzy = request.getParameter("sxzy");
		String zczy1 = request.getParameter("zczy1");
		String zczy2 = request.getParameter("zczy2");
		String bzjg = request.getParameter("bzjg");
		String qfrq = request.getParameter("qfrq");
		int yxq = Integer.parseInt(request.getParameter("yxq"));
		String outdate = request.getParameter("outdate");
		int zyyz = Integer.parseInt(request.getParameter("zyyz"));
		int yjbgf = Integer.parseInt(request.getParameter("yjbgf"));
		String bgbm = request.getParameter("bgbm");
		int bgzt = Integer.parseInt(request.getParameter("bgzt"));
		String jyr = request.getParameter("jyr");
		String bz = request.getParameter("bz");
		Zyzgzsb zyzgzs=new Zyzgzsb();
		zyzgzs.setSsyg(ssyg);
		zyzgzs.setZch(zch);
		zyzgzs.setZczsbh(zczsbh);
		zyzgzs.setZgzh(zgzh);
		zyzgzs.setZslb(zslb);
		zyzgzs.setSxzy(sxzy);
		zyzgzs.setZczy1(zczy1);
		zyzgzs.setZczy2(zczy2);
		zyzgzs.setBzjg(bzjg);
		zyzgzs.setQfrq(Timestamp.valueOf(qfrq+" 12:00:00"));
		zyzgzs.setYxq(yxq);
		//zyzgzs.setOutdate(outdate);
		zyzgzs.setZyyz(zyyz);
		zyzgzs.setYjbgf(yjbgf);
		zyzgzs.setBgbm(bgbm);
		zyzgzs.setBgzt(bgzt);
		zyzgzs.setJyr(jyr);
		zyzgzs.setBz(bz);
		if(outdate==null||"".equals(outdate))
			zyzgzs.setOutdate(null);
		else
			zyzgzs.setOutdate(Timestamp.valueOf(outdate+" 12:00:00"));
		int rows=this.zyzgzsbImp.insert(zyzgzs);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/zyzgzssc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> zyzgzssc(HttpServletRequest request,HttpServletResponse response)
	{
		int id=Integer.parseInt(request.getParameter("id"));
		int rows =this.zyzgzsbImp.deleteByPrimaryKey(id);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}


	//执业证书类别
	@RequestMapping(value="/zyzslbqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> zyzslbqk(HttpServletRequest request,HttpServletResponse response)
	{
		String jg=request.getParameter("jg");
		List<Zyzslbb> list=this.zyzslbbImp.selectByJg(jg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	//党员信息
	@RequestMapping(value="/jdzzxxqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> jdzzxxqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Jdzzxxb> list=this.jdzzxxbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/jdzzxxgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> jdzzxxgx(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		int dylb=Integer.parseInt(request.getParameter("dylb"));
		String ssdzz = request.getParameter("ssdzz");
		String qtqksm = request.getParameter("qtqksm");
		String jrdsqzyrq = request.getParameter("jrdsqzyrq");
		String pzzzrq = request.getParameter("pzzzrq");
		List<Jdzzxxb> list=this.jdzzxxbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			Jdzzxxb jdzzxx=list.get(0);
			if(jrdsqzyrq==null||"".equals(jrdsqzyrq))
				jdzzxx.setDjsqsrq(null);
			else
				jdzzxx.setDjsqsrq(Timestamp.valueOf(jrdsqzyrq+" 12:00:00"));
			if(pzzzrq==null||"".equals(pzzzrq))
				jdzzxx.setPzrq(null);
			else
				jdzzxx.setPzrq(Timestamp.valueOf(jrdsqzyrq+" 12:00:00"));
			jdzzxx.setDylb(dylb);
			jdzzxx.setSsdzz(ssdzz);
			jdzzxx.setQtqksm(qtqksm);
			int rows=this.jdzzxxbImp.updateByPrimaryKey(jdzzxx);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}


	//语言及计算机能力
	@RequestMapping(value="/yyjpcnlqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> yyjpcnlqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Yyjpcnlb> list=this.yyjpcnlbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/yyjpcnlgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> yyjpcnlgx(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		//int dylb=Integer.parseInt(request.getParameter("dylb"));
		String wyyz = request.getParameter("wyyz");
		String wysp = request.getParameter("wysp");
		String jsjnl = request.getParameter("jsjnl");
		String pthsp = request.getParameter("pthsp");
		List<Yyjpcnlb> list=this.yyjpcnlbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			Yyjpcnlb yyjpcnl=list.get(0);/*
			if(jrdsqzyrq==null||"".equals(jrdsqzyrq))
				jdzzxx.setDjsqsrq(null);
			else
				jdzzxx.setDjsqsrq(Timestamp.valueOf(jrdsqzyrq+" 12:00:00"));
			 */
			yyjpcnl.setWyyz(wyyz);
			yyjpcnl.setWysp(wysp);
			yyjpcnl.setJsjnl(jsjnl);
			yyjpcnl.setPthsp(pthsp);
			int rows=this.yyjpcnlbImp.updateByPrimaryKey(yyjpcnl);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}
	//特长与爱好
	@RequestMapping(value="/tcjxqahqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> tcjxqahqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Tcjxqahb> list=this.tcjxqahbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/tcjxqahgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> tcjxqahgx(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		String tc = request.getParameter("tc");
		String xqah = request.getParameter("xqah");
		List<Tcjxqahb> list=this.tcjxqahbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			Tcjxqahb tcjxqah=list.get(0);/*
			if(jrdsqzyrq==null||"".equals(jrdsqzyrq))
				jdzzxx.setDjsqsrq(null);
			else
				jdzzxx.setDjsqsrq(Timestamp.valueOf(jrdsqzyrq+" 12:00:00"));
			 */
			tcjxqah.setTc(tc);
			tcjxqah.setXqah(xqah);
			int rows=this.tcjxqahbImp.updateByPrimaryKey(tcjxqah);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}


	//健康状况
	@RequestMapping(value="/jkzkqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> jkzkqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Jkzkb> list=this.jkzkbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/jkzkgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> jkzkgx(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		int zdjb = Integer.parseInt(request.getParameter("zdjb"));
		String zdjb_name = request.getParameter("zdjb_name");
		int xzbs = Integer.parseInt(request.getParameter("xzbs"));
		String xzbs_name = request.getParameter("xzbs_name");
		int gxybs = Integer.parseInt(request.getParameter("gxybs"));
		String gxybs_name = request.getParameter("gxybs_name");
		int crbs = Integer.parseInt(request.getParameter("crbs"));
		String crbs_name = request.getParameter("crbs_name");
		int jsljb = Integer.parseInt(request.getParameter("jsljb"));
		String jsljb_name = request.getParameter("jsljb_name");
		int zfbs = Integer.parseInt(request.getParameter("zfbs"));
		String zfbs_name = request.getParameter("zfbs_name");
		String yqzjb = request.getParameter("yqzjb");
		String sctjsj = request.getParameter("sctjsj");
		List<Jkzkb> list=this.jkzkbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			Jkzkb jkzk=list.get(0);/*
			if(jrdsqzyrq==null||"".equals(jrdsqzyrq))
				jdzzxx.setDjsqsrq(null);
			else
				jdzzxx.setDjsqsrq(Timestamp.valueOf(jrdsqzyrq+" 12:00:00"));
			 */
			jkzk.setZdjb(zdjb);
			jkzk.setJbsm1(zdjb_name);
			jkzk.setXzbs(xzbs);
			jkzk.setJbsm2(xzbs_name);
			jkzk.setGxybs(gxybs);
			jkzk.setJbsm3(gxybs_name);
			jkzk.setCrbs(crbs);
			jkzk.setJbsm4(crbs_name);
			jkzk.setJsljb(jsljb);
			jkzk.setJbsm5(jsljb_name);
			jkzk.setZfbs(zfbs);
			jkzk.setJbsm6(zfbs_name);
			jkzk.setYqzjb(yqzjb);
			jkzk.setSctjsj(Timestamp.valueOf(sctjsj+" 12:00:00"));
			int rows=this.jkzkbImp.updateByPrimaryKey(jkzk);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}


	//父母亲情况
	@RequestMapping(value="/fmqkxxqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> fmqkxxqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		System.out.println(yg);
		List<Fmqkxxb> list=this.fmqkxxbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			System.out.println("失败了吗");
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/fmqkxxgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> fmqkxxgx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String xm=request.getParameter("xm");
		String sfzhm = request.getParameter("sfzhm");
		Integer gx = Integer.parseInt(request.getParameter("gx"));
		//int zslb = Integer.parseInt(request.getParameter("zslb"));
		String csny = request.getParameter("csny");
		String whcd = request.getParameter("whcd");
		Integer zzmm = Integer.parseInt(request.getParameter("zzmm"));
		String hjszd = request.getParameter("hjszd");
		String gzdw = request.getParameter("gzdw");
		String zw = request.getParameter("zw");
		String sjhm = request.getParameter("sjhm");
		String bz = request.getParameter("bz");
		Fmqkxxb fmqkxx=this.fmqkxxbImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(fmqkxx!=null)
		{
			fmqkxx.setXm(xm);
			fmqkxx.setSfzhm(sfzhm);
			fmqkxx.setGx(gx);
			if(csny==null||"".equals(csny))
				fmqkxx.setCsny(null);
			else
				fmqkxx.setCsny(Timestamp.valueOf(csny+" 12:00:00"));
			fmqkxx.setWhcd(whcd);
			fmqkxx.setZzmm(zzmm);
			fmqkxx.setHjszd(hjszd);
			fmqkxx.setGzdw(gzdw);
			fmqkxx.setZw(zw);
			fmqkxx.setSjhm(sjhm);
			fmqkxx.setBz(bz);
			int rows=this.fmqkxxbImp.updateByPrimaryKey(fmqkxx);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/fmqkxxdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> fmqkxxdj(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		String xm=request.getParameter("xm");
		String sfzhm = request.getParameter("sfzhm");
		Integer gx = Integer.parseInt(request.getParameter("gx"));
		String csny = request.getParameter("csny");
		String whcd = request.getParameter("whcd");
		Integer zzmm = Integer.parseInt(request.getParameter("zzmm"));
		String hjszd = request.getParameter("hjszd");
		String gzdw = request.getParameter("gzdw");
		String zw = request.getParameter("zw");
		String sjhm = request.getParameter("sjhm");
		String bz = request.getParameter("bz");
		Fmqkxxb fmqkxx=new Fmqkxxb();
		fmqkxx.setYg(yg);
		fmqkxx.setXm(xm);
		fmqkxx.setSfzhm(sfzhm);
		fmqkxx.setGx(gx);
		if(csny==null||"".equals(csny))
			fmqkxx.setCsny(null);
		else
			fmqkxx.setCsny(Timestamp.valueOf(csny+" 12:00:00"));
		fmqkxx.setWhcd(whcd);
		fmqkxx.setZzmm(zzmm);
		fmqkxx.setHjszd(hjszd);
		fmqkxx.setGzdw(gzdw);
		fmqkxx.setZw(zw);
		fmqkxx.setSjhm(sjhm);
		fmqkxx.setBz(bz);
		int rows=this.fmqkxxbImp.insert(fmqkxx);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/fmqkxxsc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> fmqkxxsc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		int rows =this.fmqkxxbImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}




	//配偶情况
	@RequestMapping(value="/poqkxxqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> poqkxxqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Poqkxxb> list=this.poqkxxbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/poqkxxgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> poqkxxgx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String xm=request.getParameter("xm");
		String sfzhm = request.getParameter("sfzhm");
		String hydjsj = request.getParameter("hydjsj");
		//int zslb = Integer.parseInt(request.getParameter("zslb"));
		String csny = request.getParameter("csny");
		String whcd = request.getParameter("whcd");
		Integer zzmm = Integer.parseInt(request.getParameter("zzmm"));
		String hjszd = request.getParameter("hjszd");
		String gzdw = request.getParameter("gzdw");
		String zw = request.getParameter("zw");
		String sjhm = request.getParameter("sjhm");
		String bz = request.getParameter("bz");
		Poqkxxb poqkxx=this.poqkxxbImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(poqkxx!=null)
		{
			poqkxx.setXm(xm);
			poqkxx.setSfzhm(sfzhm);
			if(hydjsj==null||"".equals(hydjsj))
				poqkxx.setHydjsj(null);
			else
				poqkxx.setHydjsj(Timestamp.valueOf(hydjsj+" 12:00:00"));
			if(csny==null||"".equals(csny))
				poqkxx.setCsny(null);
			else
				poqkxx.setCsny(Timestamp.valueOf(csny+" 12:00:00"));
			poqkxx.setWhcd(whcd);
			poqkxx.setZzmm(zzmm);
			poqkxx.setHjszd(hjszd);
			poqkxx.setGzdw(gzdw);
			poqkxx.setZw(zw);
			poqkxx.setSjhm(sjhm);
			poqkxx.setBz(bz);
			int rows=this.poqkxxbImp.updateByPrimaryKey(poqkxx);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/poqkxxdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> poqkxxdj(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		String xm=request.getParameter("xm");
		String sfzhm = request.getParameter("sfzhm");
		String hydjsj = request.getParameter("hydjsj");
		String csny = request.getParameter("csny");
		String whcd = request.getParameter("whcd");
		Integer zzmm = Integer.parseInt(request.getParameter("zzmm"));
		String hjszd = request.getParameter("hjszd");
		String gzdw = request.getParameter("gzdw");
		String zw = request.getParameter("zw");
		String sjhm = request.getParameter("sjhm");
		String bz = request.getParameter("bz");
		Poqkxxb poqkxx=new Poqkxxb();
		poqkxx.setYg(yg);
		poqkxx.setXm(xm);
		poqkxx.setSfzhm(sfzhm);
		if(hydjsj==null||"".equals(hydjsj))
			poqkxx.setHydjsj(null);
		else
			poqkxx.setHydjsj(Timestamp.valueOf(hydjsj+" 12:00:00"));
		if(csny==null||"".equals(csny))
			poqkxx.setCsny(null);
		else
			poqkxx.setCsny(Timestamp.valueOf(csny+" 12:00:00"));
		poqkxx.setWhcd(whcd);
		poqkxx.setZzmm(zzmm);
		poqkxx.setHjszd(hjszd);
		poqkxx.setGzdw(gzdw);
		poqkxx.setZw(zw);
		poqkxx.setSjhm(sjhm);
		poqkxx.setBz(bz);
		int rows=this.poqkxxbImp.insert(poqkxx);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/poqkxxsc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> poqkxxsc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		int rows =this.poqkxxbImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}




	//子女情况
	@RequestMapping(value="/znqkxxqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> znqkxxqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Znqkxxb> list=this.znqkxxbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/znqkxxgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> znqkxxgx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String xm=request.getParameter("xm");
		String sfzhm = request.getParameter("sfzhm");
		Integer xb = Integer.parseInt(request.getParameter("xb"));
		//int zslb = Integer.parseInt(request.getParameter("zslb"));
		String csny = request.getParameter("csny");
		Integer jyjzqk = Integer.parseInt(request.getParameter("jyjzqk"));
		String hjszd = request.getParameter("hjszd");
		String zdxx = request.getParameter("zdxx");
		String gzdw = request.getParameter("gzdw");
		String bz = request.getParameter("bz");
		Znqkxxb znqkxx=this.znqkxxbImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(znqkxx!=null)
		{
			znqkxx.setXm(xm);
			znqkxx.setSfzhm(sfzhm);
			znqkxx.setXb(xb);
			if(csny==null||"".equals(csny))
				znqkxx.setCsny(null);
			else
				znqkxx.setCsny(Timestamp.valueOf(csny+" 12:00:00"));
			znqkxx.setJyjzqk(jyjzqk);
			znqkxx.setHjszd(hjszd);
			znqkxx.setZdxx(zdxx);
			znqkxx.setGzdw(gzdw);
			znqkxx.setBz(bz);
			int rows=this.znqkxxbImp.updateByPrimaryKey(znqkxx);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/znqkxxdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> znqkxxdj(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		String xm=request.getParameter("xm");
		String sfzhm = request.getParameter("sfzhm");
		Integer xb = Integer.parseInt(request.getParameter("xb"));
		//int zslb = Integer.parseInt(request.getParameter("zslb"));
		String csny = request.getParameter("csny");
		Integer jyjzqk = Integer.parseInt(request.getParameter("jyjzqk"));
		String hjszd = request.getParameter("hjszd");
		String zdxx = request.getParameter("zdxx");
		String gzdw = request.getParameter("gzdw");
		String bz = request.getParameter("bz");
		Znqkxxb znqkxx=new Znqkxxb();
		znqkxx.setYg(yg);
		znqkxx.setXm(xm);
		znqkxx.setSfzhm(sfzhm);
		znqkxx.setXb(xb);
		if(csny==null||"".equals(csny))
			znqkxx.setCsny(null);
		else
			znqkxx.setCsny(Timestamp.valueOf(csny+" 12:00:00"));
		znqkxx.setJyjzqk(jyjzqk);
		znqkxx.setHjszd(hjszd);
		znqkxx.setZdxx(zdxx);
		znqkxx.setGzdw(gzdw);
		znqkxx.setBz(bz);
		int rows=this.znqkxxbImp.insert(znqkxx);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/znqkxxsc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> znqkxxsc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		int rows =this.znqkxxbImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}



	//紧急联系人情况
	@RequestMapping(value="/jjlxrxxqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> jjlxrxxqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Jjlxrxxb> list=this.jjlxrxxbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/jjlxrxxgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> jjlxrxxgx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String xm=request.getParameter("xm");
		Integer xb = Integer.parseInt(request.getParameter("xb"));
		//int zslb = Integer.parseInt(request.getParameter("zslb"));
		String zz = request.getParameter("zz");
		String yb = request.getParameter("yb");
		String gddh = request.getParameter("gddh");
		String sjhm = request.getParameter("sjhm");
		String bz = request.getParameter("bz");
		Jjlxrxxb jjlxrxx=this.jjlxrxxbImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(jjlxrxx!=null)
		{
			jjlxrxx.setXm(xm);
			jjlxrxx.setXb(xb);
			jjlxrxx.setZz(zz);
			jjlxrxx.setYb(yb);
			jjlxrxx.setGddh(gddh);
			jjlxrxx.setSjhm(sjhm);
			jjlxrxx.setBz(bz);
			int rows=this.jjlxrxxbImp.updateByPrimaryKey(jjlxrxx);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/jjlxrxxdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> jjlxrxxdj(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		String xm=request.getParameter("xm");
		Integer xb = Integer.parseInt(request.getParameter("xb"));
		//int zslb = Integer.parseInt(request.getParameter("zslb"));
		String zz = request.getParameter("zz");
		String yb = request.getParameter("yb");
		String gddh = request.getParameter("gddh");
		String sjhm = request.getParameter("sjhm");
		String bz = request.getParameter("bz");
		Jjlxrxxb jjlxrxx=new Jjlxrxxb();
		jjlxrxx.setYg(yg);
		jjlxrxx.setXm(xm);
		jjlxrxx.setXb(xb);
		jjlxrxx.setZz(zz);
		jjlxrxx.setYb(yb);
		jjlxrxx.setGddh(gddh);
		jjlxrxx.setSjhm(sjhm);
		jjlxrxx.setBz(bz);
		int rows=this.jjlxrxxbImp.insert(jjlxrxx);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/jjlxrxxsc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> jjlxrxxsc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		int rows =this.jjlxrxxbImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}



	//工资卡情况
	@RequestMapping(value="/gzkxxqk", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzkxxqk(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		List<Gzkxxb> list=this.gzkxxbImp.selectByYg(yg);
		Map<String,Object> map=new HashMap<String, Object>();
		List<Khyhxxb> kh=new ArrayList<Khyhxxb>();
		if(list.size()>0)
		{
			for(int i=0;i<list.size();i++)
			{
				Gzkxxb gzkxx=list.get(i);
				kh.add(this.khyhxxbImp.selectByPrimaryKey(gzkxx.getKhyh()));
			}
			map.put("khyh", kh);
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gzkxxgx", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzkxxgx(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		String yg=request.getParameter("yg");
		String xm=request.getParameter("xm");
		Long khyh = Long.parseLong(request.getParameter("khyh"));
		String zhkh = request.getParameter("zhkh");
		Integer zt = Integer.parseInt(request.getParameter("zt"));
		String bz = request.getParameter("bz");
		if(zt==1)
		{
			List<Gzkxxb> list=this.gzkxxbImp.selectByYg(yg);
			for(int i=0;i<list.size();i++)
			{
				Gzkxxb gzk= list.get(i);
				gzk.setZt(2);
				this.gzkxxbImp.updateByPrimaryKey(gzk);
			}
		}
		Gzkxxb gzkxx=this.gzkxxbImp.selectByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(gzkxx!=null)
		{
			gzkxx.setXm(xm);
			gzkxx.setKhyh(khyh);
			gzkxx.setZhkh(zhkh);
			gzkxx.setZt(zt);
			gzkxx.setBz(bz);
			int rows=this.gzkxxbImp.updateByPrimaryKey(gzkxx);
			if(rows>0)
				map.put("status", "success");
			else
				map.put("status", "error");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gzkxxdj", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzkxxdj(HttpServletRequest request,HttpServletResponse response)
	{
		String yg=request.getParameter("yg");
		String xm=request.getParameter("xm");
		Long khyh = Long.parseLong(request.getParameter("khyh"));
		String zhkh = request.getParameter("zhkh");
		Integer zt = Integer.parseInt(request.getParameter("zt"));
		String bz = request.getParameter("bz");
		if(zt==1)
		{
			List<Gzkxxb> list=this.gzkxxbImp.selectByYg(yg);
			for(int i=0;i<list.size();i++)
			{
				Gzkxxb gzkxx= list.get(i);
				gzkxx.setZt(2);
				this.gzkxxbImp.updateByPrimaryKey(gzkxx);
			}
		}
		Gzkxxb gzkxx=new Gzkxxb();
		gzkxx.setYg(yg);
		gzkxx.setXm(xm);
		gzkxx.setKhyh(khyh);
		gzkxx.setZhkh(zhkh);
		gzkxx.setZt(zt);
		gzkxx.setBz(bz);
		int rows=this.gzkxxbImp.insert(gzkxx);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	@RequestMapping(value="/gzkxxsc", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> gzkxxsc(HttpServletRequest request,HttpServletResponse response)
	{
		long lsh=Long.parseLong(request.getParameter("lsh"));
		int rows =this.gzkxxbImp.deleteByPrimaryKey(lsh);
		Map<String,Object> map=new HashMap<String, Object>();
		if(rows>0)
		{
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	//银行卡类别
	@RequestMapping(value="/khyhxxqk", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> khyhxxqk(HttpServletRequest request,HttpServletResponse response)
	{
		List<Khyhxxb> list=this.khyhxxbImp.selectAll();
		Map<String,Object> map=new HashMap<String, Object>();
		if(list.size()>0)
		{
			map.put("items", list);
			map.put("status", "success");
		}
		else{
			map.put("status", "error");
		}
		return map;
	}

	//图片上传
	@RequestMapping(value="/upload", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> upload(HttpServletRequest request,HttpServletResponse response)
	{
		String files=request.getParameter("files");
		String ygbh=request.getParameter("ygbh");
		String xm=request.getParameter("xm");
		Ygda yg=this.ygdaImp.selectByPrimaryKey(ygbh);
		System.out.println(files.length());
		Map<String,Object> map=new HashMap<String, Object>();
		if (files != "")
		{
			//string url = HttpContext.Current.Request.Url.Host;//获取域名地址
			//int port = HttpContext.Current.Request.Url.Port;//获取端口号
			//拼接相对图片路径
			//string src = "http://" + url + ":" + port + "/D:/YG_File/Photo/";
			String s = files.replace("data:image/jpeg;base64,", "");
			s = s.replace("data:image/png;base64,", "");
			s = s.replace(" ", "+");//因sqlLITE存储过程中把加号截成了空格，所以现在把空格改成加号
			String img_arr = s;
			String pic = "";
			String pic_arrs=ygbh+"_"+xm;
			String fpath = "D:/YG_File/Photo";// System.Web.HttpContext.Current.Server.MapPath("./Uploadfiles/");//图片存储文件夹路径
			//string time = DateTime.Now.ToString("yyyyMMddhhmmssfff");
			String picturename = pic_arrs;   //文件名
			//String ExistsPath = fpath;
			File dir =new File(fpath);
			boolean d=false;
			if  (!dir.exists()&&!dir.isDirectory())
			{
				System.out.println("//不存在");
				d=dir.mkdir();
			}
			else
			{
				System.out.println("//目录存在");
				d=true;
			}
			if(d==true){
				String newFilePath = fpath +  "\\" + picturename+".jpeg"; //文件保存路径
				//newFilePath = newFilePath.replace("\\", "/");
				//copy_newFilePath = newFilePath;//保存临时储存
				File file=new File(newFilePath);
				if (file.exists())
				{
					//文件存在
					//continue;
				}
				BASE64Decoder decoder = new BASE64Decoder();
				try {
					byte[] arr=decoder.decodeBuffer(img_arr);
					//生成jpeg图片
					//String imgFilePath = "d://222.jpg";//新生成的图片
					OutputStream out = new FileOutputStream(newFilePath);
					out.write(arr);
					out.flush();
					out.close();
					yg.setYgzp(picturename);
					int rows=this.ygdaImp.updateByPrimaryKey(yg);
					System.out.println("大成功");
					if(rows>0)
						map.put("status", "success");
					else
						map.put("status", "error");
				} catch (Exception e) {
					// TODO: handle exception
					map.put("status", "error");
					e.printStackTrace();
				}
			}
		}
		return map;
	}

	//图片删除
	@RequestMapping(value="/updown", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> updown(HttpServletRequest request,HttpServletResponse response)
	{
		String files=request.getParameter("files");
		String ygbh=request.getParameter("ygbh");
		Ygda yg=this.ygdaImp.selectByPrimaryKey(ygbh);
		String xm=request.getParameter("xm");
		System.out.println(files.length());
		Map<String,Object> map=new HashMap<String, Object>();
		if (files != "")
		{
			//string url = HttpContext.Current.Request.Url.Host;//获取域名地址
			//int port = HttpContext.Current.Request.Url.Port;//获取端口号
			//拼接相对图片路径
			//string src = "http://" + url + ":" + port + "/D:/YG_File/Photo/";
			String s = files.replace("data:image/jpeg;base64,", "");
			s = s.replace("data:image/png;base64,", "");
			s = s.replace(" ", "+");//因sqlLITE存储过程中把加号截成了空格，所以现在把空格改成加号
			String img_arr = s;
			String pic = "";
			String pic_arrs=ygbh+"_"+xm;
			String fpath = "D:/YG_File/Photo";// System.Web.HttpContext.Current.Server.MapPath("./Uploadfiles/");//图片存储文件夹路径
			//string time = DateTime.Now.ToString("yyyyMMddhhmmssfff");
			String picturename = pic_arrs;   //文件名
			//String ExistsPath = fpath;
			File dir =new File(fpath);
			boolean d=false;
			if  (!dir.exists()&&!dir.isDirectory())
			{
				System.out.println("//不存在");
				d=dir.mkdir();
			}
			else
			{
				System.out.println("//目录存在");
				d=true;
			}
			if(d==true){
				String newFilePath = fpath +  "\\" + picturename+".jpeg"; //文件保存路径
				//newFilePath = newFilePath.replace("\\", "/");
				//copy_newFilePath = newFilePath;//保存临时储存
				File file=new File(newFilePath);
				if (file.exists())
				{
					//文件存在
					//continue;
				}
				BASE64Decoder decoder = new BASE64Decoder();
				try {
					byte[] arr=decoder.decodeBuffer(img_arr);
					//生成jpeg图片
					//String imgFilePath = "d://222.jpg";//新生成的图片
					OutputStream out = new FileOutputStream(newFilePath);
					System.out.println("成功？");
					out.write(arr);
					System.out.println("成功");
					out.flush();
					out.close();
					yg.setYgzp(picturename);
					int rows=this.ygdaImp.updateByPrimaryKey(yg);
					System.out.println("大成功");
					if(rows>0)
						map.put("status", "success");
					else
						map.put("status", "error");
				} catch (Exception e) {
					// TODO: handle exception
					map.put("status", "error");
					e.printStackTrace();
				}
			}
		}
		return map;
	}


	public ProvinceService getProvinceImp() {
		return provinceImp;
	}

	public void setProvinceImp(ProvinceService provinceImp) {
		this.provinceImp = provinceImp;
	}

	public YgdaService getYgdaImp() {
		return ygdaImp;
	}

	public void setYgdaImp(YgdaService ygdaImp) {
		this.ygdaImp = ygdaImp;
	}

	public JzzxxbService getJzzxxbImp() {
		return jzzxxbImp;
	}

	public void setJzzxxbImp(JzzxxbService jzzxxbImp) {
		this.jzzxxbImp = jzzxxbImp;
	}

	public XlzsbService getXlzsbImp() {
		return xlzsbImp;
	}

	public void setXlzsbImp(XlzsbService xlzsbImp) {
		this.xlzsbImp = xlzsbImp;
	}

	public XwzsbService getXwzsbImp() {
		return xwzsbImp;
	}

	public void setXwzsbImp(XwzsbService xwzsbImp) {
		this.xwzsbImp = xwzsbImp;
	}

	public CsgdhyjlbService getCsgdhyjlbImp() {
		return csgdhyjlbImp;
	}

	public void setCsgdhyjlbImp(CsgdhyjlbService csgdhyjlbImp) {
		this.csgdhyjlbImp = csgdhyjlbImp;
	}

	public PxjjxjybService getPxjjxjybImp() {
		return pxjjxjybImp;
	}

	public void setPxjjxjybImp(PxjjxjybService pxjjxjybImp) {
		this.pxjjxjybImp = pxjjxjybImp;
	}

	public ZczsbService getZczsbImp() {
		return zczsbImp;
	}

	public void setZczsbImp(ZczsbService zczsbImp) {
		this.zczsbImp = zczsbImp;
	}

	public GzllxxbService getGzllxxbImp() {
		return gzllxxbImp;
	}

	public void setGzllxxbImp(GzllxxbService gzllxxbImp) {
		this.gzllxxbImp = gzllxxbImp;
	}

	public DrwbzjjlbService getDrwbzjjlbImp() {
		return drwbzjjlbImp;
	}

	public void setDrwbzjjlbImp(DrwbzjjlbService drwbzjjlbImp) {
		this.drwbzjjlbImp = drwbzjjlbImp;
	}

	public GzxmyjbService getGzxmyjbImp() {
		return gzxmyjbImp;
	}

	public void setGzxmyjbImp(GzxmyjbService gzxmyjbImp) {
		this.gzxmyjbImp = gzxmyjbImp;
	}

	public ZbtzsxxbService getZbtzsxxbImp() {
		return zbtzsxxbImp;
	}

	public void setZbtzsxxbImp(ZbtzsxxbService zbtzsxxbImp) {
		this.zbtzsxxbImp = zbtzsxxbImp;
	}

	public HtyjxxbService getHtyjxxbImp() {
		return htyjxxbImp;
	}

	public void setHtyjxxbImp(HtyjxxbService htyjxxbImp) {
		this.htyjxxbImp = htyjxxbImp;
	}

	public YgxgrybService getYgxgrybImp() {
		return ygxgrybImp;
	}

	public void setYgxgrybImp(YgxgrybService ygxgrybImp) {
		this.ygxgrybImp = ygxgrybImp;
	}

	public RyjbxxbService getRyjbxxbImp() {
		return ryjbxxbImp;
	}

	public void setRyjbxxbImp(RyjbxxbService ryjbxxbImp) {
		this.ryjbxxbImp = ryjbxxbImp;
	}

	public RyjxxxbService getRyjxxxbImp() {
		return ryjxxxbImp;
	}

	public void setRyjxxxbImp(RyjxxxbService ryjxxxbImp) {
		this.ryjxxxbImp = ryjxxxbImp;
	}

	public ZyzgzsbService getZyzgzsbImp() {
		return zyzgzsbImp;
	}

	public void setZyzgzsbImp(ZyzgzsbService zyzgzsbImp) {
		this.zyzgzsbImp = zyzgzsbImp;
	}

	public ZyzslbbService getZyzslbbImp() {
		return zyzslbbImp;
	}

	public void setZyzslbbImp(ZyzslbbService zyzslbbImp) {
		this.zyzslbbImp = zyzslbbImp;
	}

	public JdzzxxbService getJdzzxxbImp() {
		return jdzzxxbImp;
	}

	public void setJdzzxxbImp(JdzzxxbService jdzzxxbImp) {
		this.jdzzxxbImp = jdzzxxbImp;
	}

	public YyjpcnlbService getYyjpcnlbImp() {
		return yyjpcnlbImp;
	}

	public void setYyjpcnlbImp(YyjpcnlbService yyjpcnlbImp) {
		this.yyjpcnlbImp = yyjpcnlbImp;
	}

	public TcjxqahbService getTcjxqahbImp() {
		return tcjxqahbImp;
	}

	public void setTcjxqahbImp(TcjxqahbService tcjxqahbImp) {
		this.tcjxqahbImp = tcjxqahbImp;
	}

	public JkzkbService getJkzkbImp() {
		return jkzkbImp;
	}

	public void setJkzkbImp(JkzkbService jkzkbImp) {
		this.jkzkbImp = jkzkbImp;
	}

	public FmqkxxbService getFmqkxxbImp() {
		return fmqkxxbImp;
	}

	public void setFmqkxxbImp(FmqkxxbService fmqkxxbImp) {
		this.fmqkxxbImp = fmqkxxbImp;
	}

	public PoqkxxbService getPoqkxxbImp() {
		return poqkxxbImp;
	}

	public void setPoqkxxbImp(PoqkxxbService poqkxxbImp) {
		this.poqkxxbImp = poqkxxbImp;
	}

	public ZnqkxxbService getZnqkxxbImp() {
		return znqkxxbImp;
	}

	public void setZnqkxxbImp(ZnqkxxbService znqkxxbImp) {
		this.znqkxxbImp = znqkxxbImp;
	}

	public JjlxrxxbService getJjlxrxxbImp() {
		return jjlxrxxbImp;
	}

	public void setJjlxrxxbImp(JjlxrxxbService jjlxrxxbImp) {
		this.jjlxrxxbImp = jjlxrxxbImp;
	}

	public GzkxxbService getGzkxxbImp() {
		return gzkxxbImp;
	}

	public void setGzkxxbImp(GzkxxbService gzkxxbImp) {
		this.gzkxxbImp = gzkxxbImp;
	}

	public KhyhxxbService getKhyhxxbImp() {
		return khyhxxbImp;
	}

	public void setKhyhxxbImp(KhyhxxbService khyhxxbImp) {
		this.khyhxxbImp = khyhxxbImp;
	}

	public GcbService getGcbImp() {
		return gcbImp;
	}

	public void setGcbImp(GcbService gcbImp) {
		this.gcbImp = gcbImp;
	}

	public HtbService getHtbImp() {
		return htbImp;
	}

	public void setHtbImp(HtbService htbImp) {
		this.htbImp = htbImp;
	}

	public UnitService getUnitImp() {
		return unitImp;
	}

	public void setUnitImp(UnitService unitImp) {
		this.unitImp = unitImp;
	}

	public DeptService getDeptImp() {
		return deptImp;
	}

	public void setDeptImp(DeptService deptImp) {
		this.deptImp = deptImp;
	}

	public KqdyService getKqdyImp() {
		return kqdyImp;
	}

	public void setKqdyImp(KqdyService kqdyImp) {
		this.kqdyImp = kqdyImp;
	}

	public YhdljlbService getYhdljlbImp() {
		return yhdljlbImp;
	}

	public void setYhdljlbImp(YhdljlbService yhdljlbImp) {
		this.yhdljlbImp = yhdljlbImp;
	}

	public MhxtdlmmbService getMhxtdlmmbImp() {
		return mhxtdlmmbImp;
	}

	public void setMhxtdlmmbImp(MhxtdlmmbService mhxtdlmmbImp) {
		this.mhxtdlmmbImp = mhxtdlmmbImp;
	}

	public YgdzzjxxbService getYgdzzjxxbImp() {
		return ygdzzjxxbImp;
	}

	public void setYgdzzjxxbImp(YgdzzjxxbService ygdzzjxxbImp) {
		this.ygdzzjxxbImp = ygdzzjxxbImp;
	}

	public BgjzlxxbService getBgjzlxxbImp() {
		return bgjzlxxbImp;
	}

	public void setBgjzlxxbImp(BgjzlxxbService bgjzlxxbImp) {
		this.bgjzlxxbImp = bgjzlxxbImp;
	}

}
