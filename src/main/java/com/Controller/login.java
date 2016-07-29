package com.Controller;

import com.Service.*;

import sun.misc.BASE64Encoder;

import com.Pojo.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/user")
public class login {

	@Resource(name="unitImp")
	private UnitService unitImp;

	@Resource(name="mhxtdlmmbImp")
	private MhxtdlmmbService mhxtdlmmbImp;

	@Resource(name="ygdaImp")
	private YgdaService ygdaImp;

	@RequestMapping(value="/unit", method = RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> getUnitList(){
		System.out.println("test1");
		List<Unit> list;
		list = this.unitImp.selectAll();
		Map<String, Object> modelMap = new HashMap<String, Object>(3);
		modelMap.put("total", list.size());
		modelMap.put("data", list);
		modelMap.put("status", "success");
		System.out.println("test2");
		return modelMap;

	}

	@RequestMapping(value="/login", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> Login(HttpServletRequest request,HttpServletResponse response) throws Exception
	{
		Map<String, Object> modelMap = new HashMap<String, Object>(3);
		Ygda yg=new Ygda();
		String xm= request.getParameter("username");
		String sfzh=request.getParameter("usercode");
		String szjg=request.getParameter("usertype");
		String password=request.getParameter("password");
		String pw=this.mhxtdlmmbImp.selectAll().getDlmm();
		System.out.println(pw);
		yg.setXm(xm);
		yg.setSfzh(sfzh);
		yg.setSzjg(szjg);
		Ygda y = this.ygdaImp.selectByLogin(yg);
		if(pw.equals(password)&&y!=null)
		{
			System.out.println(this.unitImp.selectByPrimaryKey(y.getSzjg()).getName());
			String jg=this.unitImp.selectByPrimaryKey(y.getSzjg()).getName();
			System.out.println(y.getYgbh());
			String ygzp= "D:/YG_File/Photo/"+y.getYgzp()+".jpeg";
			InputStream in = null;
			byte[] data = null;
			//读取图片字节数组
			try
			{
				in = new FileInputStream(ygzp);
				data = new byte[in.available()];
				in.read(data);
				in.close();
			}
			catch (IOException e)
			{
				e.printStackTrace();
			}
			//对字节数组Base64编码
			BASE64Encoder encoder = new BASE64Encoder();
			ygzp = encoder.encode(data);//返回Base64编码过的字节数组字符串
			y.setYgzp(ygzp);
			modelMap.put("szjg", jg);
			modelMap.put("data", y);
			modelMap.put("status", "success");
			return modelMap;
		}
		else
		{
			modelMap.put("status", "error");
			return modelMap;
		}
	}





	public UnitService getUnitImp() {
		return unitImp;
	}

	public void setUnitImp(UnitService unitImp) {
		this.unitImp = unitImp;
	}

	public MhxtdlmmbService getMhxtdlmmbImp() {
		return mhxtdlmmbImp;
	}

	public void setMhxtdlmmbImp(MhxtdlmmbService mhxtdlmmbImp) {
		this.mhxtdlmmbImp = mhxtdlmmbImp;
	}

	public YgdaService getYgdaImp() {
		return ygdaImp;
	}

	public void setYgdaImp(YgdaService ygdaImp) {
		this.ygdaImp = ygdaImp;
	}
}
