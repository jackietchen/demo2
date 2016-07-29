$(function () {
	var y= localStorage.getItem("yg");
	var yg = eval('(' + y + ')');
	$.get("ygxx/province",function(data,status){		
		//var obj = eval('(' + data + ')');//由JSON字符串转换为JSON对象	
		var obj=data;
		if("success"==status)
		{
			if("success"==obj.status){
				for (var i = 0; i < obj.data.length; i++) {
			        $("#jiguan").append(
			             ' <option value=' + obj.data[i].no + '>' + obj.data[i].name + '</option>'
			            );
			    };
			    $("#jiguan").val(yg.jg);
			}
		 }
	});	
	
	$("#usernames").val(yg.xm);
	$("input[type=radio][name='sex1'][value="+yg.xb+"]").attr("checked",true);
	$("#minzu").val(yg.minzu);
	$("#mobile").val(localStorage.getItem("userphone"));
	$("#sfzh").val(yg.sfzh);
	$("#szbm").val(localStorage.getItem("szjg"));
	var time1 = new Date(yg.csny);
	//time.setHours(0, -time.getTimezoneOffset(), 0, 0);
	time1 = time1.toISOString().split("T")[0];
	$("#csrq").val(time1);
	$("input[type=radio][name='marry'][value="+yg.hyzk+"]").attr("checked",true);
	$("input[type=radio][name='political'][value="+yg.zzmm+"]").attr("checked",true);
	$("#shengao").val(yg.sg);
	$("#tizhong").val(yg.tz);
	$("input[type=radio][name='size'][value="+yg.fzxh+"]").attr("checked",true);
	$("input[type=radio][name='residence'][value="+yg.fkxz+"]").attr("checked",true);
	$("input[type=radio][name='sort'][value="+yg.rycategory+"]").attr("checked",true);
	$("#hjdz").val(yg.hjdz);
	$("#xjzd").val(yg.xjzd);
	$("input[type=radio][name='post'][value="+yg.dqzc+"]").attr("checked",true);
	$("input[type=radio][name='education'][value="+yg.xl+"]").attr("checked",true);
	$("input[type=radio][name='degree'][value="+yg.xw+"]").attr("checked",true);
	$("input[type=radio][name='note1'][value="+yg.zszctdw+"]").attr("checked",true);
	$("input[type=radio][name='note2'][value="+yg.xzjljl+"]").attr("checked",true);
	$("input[type=radio][name='note3'][value="+yg.xsfzjl+"]").attr("checked",true);
	$("input[type=radio][name='note4'][value="+yg.wfxwjl+"]").attr("checked",true);
	$("input[type=radio][name='rada'][value="+yg.rzqsbzt+"]").attr("checked",true);
	$("#rzqdgjjzh").val(yg.rzqgjjzh);
	var time2 = new Date(yg.cjgzsj);
	time2 = time2.toISOString().split("T")[0];
	$("#cjgzsj").val(time2);
	var time3 = new Date(yg.rzsj);
	time3 = time3.toISOString().split("T")[0];
	$("#jrbqysj").val(time3);
	//alert(yg.ygzp);
	//$("#preview")[0].src="images/YGFile/101010张三丰.jpeg";
	$("#preview")[0].src="data:image/jpeg;base64,"+yg.ygzp;
});

$(function () {
	var y= localStorage.getItem("ygbh");
	$.get("ygxx/jzzxx",
	{
		ygbh:y
	},
	function(data,status){		
		//var obj = eval('(' + data + ')');//由JSON字符串转换为JSON对象	
		var obj=data;
		if("success"==obj.status){
			var jzzxx=JSON.stringify(obj.data);
			localStorage.setItem("jzzxx",jzzxx);
			$("input[type=radio][name='papers'][value="+obj.data.jyshjzz+"]").attr("checked",true);
			$("input[type=radio][name='papers sort'][value="+obj.data.jzzlb+"]").attr("checked",true);
			var time4 = new Date(obj.data.ccslsj);
			time4 = time4.toISOString().split("T")[0];
			var time5 = new Date(obj.data.yxqz);
			time5 = time5.toISOString().split("T")[0];
			if(obj.data.jyshjzz==5)
			{
				$("#ccsljzzsj").val(time4);
				$("#jzzyxq").val(time5);
			}
			$("#jzddz").val(obj.data.jzddz);
		}
	});
	//学历信息
	xlzsqk();
	//学位信息
	xueweizsqk();
	//职称证书信息
	zczsqk();
	//培训和再教育
	peixunjjxjyqk();
	//从事过的行业
	csgdhyjlbxx();
	
	//从事工作工作履历
	gzllxxqk();

	//担任外部专家
	drwbzjjlbqk();
	
	//中标记录
	zbtzsxxqk();
	
	//个人执业证书信息
	grzyzsqk_search();
	
	//党组织关系
	brdzzgx_search();
	
	//语言和计算机能力
	yyjjsjnl_search();
});

function grjbxx_click()
{
	var yg= localStorage.getItem("ygbh");
	$.post("ygxx/jbxxdj",
	{
		ygbh:yg,
		xb:$("input[name='sex1']:checked").val(),
		minzu:$("#minzu").val(),
		userphone:$("#mobile").val(),
		sfzh:$("#sfzh").val(),
		csny:$("#csrq").val(),
		hyzk:$("input[name='marry']:checked").val(),
		zzmm:$("input[name='political']:checked").val(),
		sg:$("#shengao").val(),
		tz:$("#tizhong").val(),
		fzxh:$("input[name='size']:checked").val(),
		fkxz:$("input[name='residence']:checked").val(),
		rycategory:$("input[name='sort']:checked").val(),
		hjdz:$("#hjdz").val(),
		xjzd:$("#xjzd").val(),
		dqzc:$("input[name='post']:checked").val(),
		xl:$("input[name='education']:checked").val(),
		xw:$("input[name='degree']:checked").val(),
		zszctdw:$("input[name='note1']:checked").val(),
		xzjljl:$("input[name='note2']:checked").val(),
		xsfzjl:$("input[name='note3']:checked").val(),
		wfxwjl:$("input[name='note4']:checked").val(),
		rzqsbzt:$("input[name='rada']:checked").val(),
		rzqgjjzh:$("#rzqdgjjzh").val(),
		cjgzsj:$("#cjgzsj").val(),
		rzsj:$("#jrbqysj").val(),
		jg:$("#jiguan").val()
	},
	function(data,status){
		//alert("成功");
		//var user = eval('(' + data + ')');//由JSON字符串转换为JSON对象
		var user=data;
		if("success"==status)
		{
			if(user.status=="success")
			{
				alert("保存成功");
				var y=JSON.stringify(user.data);
				localStorage.setItem("yg",y);
				localStorage.setItem("xm", user.data.xm);
				localStorage.setItem("userphone",user.data.mobile);
			}
			else
			{
				alert("信息有误，请重新检查");
			}
		}
				 
	});
};
//根据选取类型进行清空处理
function jzz_radio(val) {
    if (val == 10 || val == 15) {
        var jzz_rad = document.getElementsByName("papers sort");
        for (var i = 0; i < jzz_rad.length; i++) {
            jzz_rad[i].checked = false;
        }
        $("#ccsljzzsj").val(null);
        $("#jzzyxq").val(null);
        $("#jzddz").val(null);
    }
};

function jzzxxb_update(){
	var a=$("input[name='papers']:checked").val();
	if(a!=5&&a!=15&&a!=10&&a!=20){
		//alert("111111");
		return ;
	}
	var jzzxx = eval('(' + localStorage.getItem("jzzxx") + ')');
	//alert(jzzxx.lsh);
	$.post("ygxx/jzzxxdj",
	{
		lsh:jzzxx.lsh,
		yg:jzzxx.yg,
		jyshjzz:$("input[name='papers']:checked").val(),
		jzzlb:$("input[name='papers sort']:checked").val(),
		ccslsj:$("#ccsljzzsj").val(),
		yxqz:$("#jzzyxq").val(),
		jzddz:$("#jzddz").val()
	},
	function(data){
		//var obj = eval('(' + data + ')');
		var obj=data;
		if(obj.status=="success")
		{
			alert("大成功");
		}
	});
};
//学历证书信息遍历
function xlzsqk() {
    $.post("ygxx/xlzsqk",
        {
        	ygbh:localStorage.getItem("ygbh")
        },
        function (data) {
	        $("#xl_a").html("");
	        //var data=eval('(' + data + ')');
	        var xl = data.items.length;
	        for (var i = 0; i < data.items.length; i++) {
	            var titles = "'学历证书情况'";
	            var xxmcs = "'" + data.items[i].xxmc + "'";
	            var xls = "'" + data.items[i].xl + "'";
	            var xzs = "'" + data.items[i].xz + "'";
	            var xxxss = "'" + data.items[i].xxxs + "'";
	            var sxzys = "'" + data.items[i].sxzy + "'";
	            var xzhs = "'" + data.items[i].xzh + "'";
	            var time1 = new Date(data.items[i].qssj);
				time1 = time1.toISOString().split("T")[0];
	            var qssjs = "'" + time1 + "'";
	            var time2 = new Date(data.items[i].jssj);
				time2 = time2.toISOString().split("T")[0];
	            var jssj = "'" + time2 + "'";
	            var zsbhs = "'" + data.items[i].zsbh + "'";
	            var time3 = new Date(data.items[i].fzrq);
				time3 = time3.toISOString().split("T")[0];
	            var fzrqs = "'" + time3 + "'";
	            var dzzcms = "'" + data.items[i].dzzcm + "'";
	            var bzs = "'" + data.items[i].bz + "'";
	            var bz_bz = "";
	            var dzz_cm = "";
	            if (data.items[i].bz == "null") {
	                bz_bz = "";
	            } else {
	                bz_bz = data.items[i].bz;
	            }
	            if (data.items[i].dzzcm == "null") {
	                dzz_cm = "";
	            } else {
	                dzz_cm = data.items[i].dzzcm;
	            }
	
	            var xl_sd = "";
	            if (data.items[i].xl == 5) {
	                xl_sd = "高中、中专";
	            }
	            if (data.items[i].xl == 10) {
	                xl_sd = "大专";
	            }
	            if (data.items[i].xl == 15) {
	                xl_sd = "本科";
	            }
	            if (data.items[i].xl == 20) {
	                xl_sd = "硕士研究生";
	            }
	            if (data.items[i].xl == 25) {
	                xl_sd = "MBA、EMBA";
	            }
	            if (data.items[i].xl == 30) {
	                xl_sd = "工硕";
	            }
	            if (data.items[i].xl == 35) {
	                xl_sd = "博士";
	            }
	            if (data.items[i].xl == 40) {
	                xl_sd = "博士后";
	            }
	            var xxxs_sd = "";
	            if (data.items[i].xxxs == 5) {
	                xxxs_sd = "全日制";
	            }
	            if (data.items[i].xxxs == 10) {
	                xxxs_sd = "在职";
	            }
	            if (data.items[i].xxxs == 15) {
	                xxxs_sd = "自考";
	            }
	            if (data.items[i].xxxs == 20) {
	                xxxs_sd = "党校";
	            }
	            if (data.items[i].xxxs == 25) {
	                xxxs_sd = "函授";
	            }
	            if (data.items[i].xxxs == 30) {
	                xxxs_sd = "其它";
	            }
	            $("#xl_a").append(
	                                        '<tr><td align="center">' + (i + 1) + '</td>' +
	                                       ' <td><input type="text" class="common-text btn100 xxmc" disabled="disabled" value="' + data.items[i].xxmc + '" /></td>' +
	                                       ' <td>' +
	                                           '  <input type="text" class="common-text btn100 xxmc_xl" disabled="disabled" value="' + xl_sd + '" /><div class="DivSelect" style="display:none"><select class="common-text btn100 xl" disabled="disabled" id="xlzsqka' + i + '"   value="' + data.items[i].xl + '" >' +
	
	                                                '<option value="0">请选择学历</option>' +
	                                              ' <option value="5">高中、中专</option>' +
	                                                 '<option value="10">大专</option>' +
	                                                 '<option value="15">本科</option>' +
	                                            '<option value="20">硕士研究生</option>' +
	                                         '<option value="25">MBA、EMBA</option>' +
	                                         '<option value="30">工硕</option>' +
	                                         '<option value="35">博士</option>' +
	                                             '<option value="40">博士后</option>' +
	                                             '</select></div>' +
	                                         '</td>' +
	                                         '<td><input type="text" class="common-text btn100 xz" disabled="disabled" value="' + data.items[i].xz + '" /><input type="text" class="common-text btn100 lsh" disabled="disabled" style="display:none;" value="' + data.items[i].lsh + '" /><input type="text" class="common-text btn100 xltitle" disabled="disabled" style="display:none;" value="学历证书情况" /></td>' +
	                                         //'<td><input type="text" class="common-text btn100 xxxs" disabled="disabled"  value="' + data.items[i].xxxs + '"/></td>' +
	                                        ' <td><input type="text" class="common-text btn100 xxxs_sdsd" disabled="disabled" value="' + xxxs_sd + '" /><select class="common-text btn100 xxxs"  style="display:none" disabled="disabled"  id="xxxsa' + i + '"  value="' + data.items[i].xxxs + '">' +
	                                        '<option value="0">请选择</option>' +
	
	                                        '<option value="5">全日制</option>' +
	                                        '<option value="10">在职</option>' +
	                                            '<option value="15">自考</option>' +
	                                                '<option value="20">党校</option>' +
	                                                    '<option value="25">函授</option>' +
	                                                        '<option value="30">其它</option>' +
	                                                            '</select></td>' +
	                                         '<td><input type="text" class="common-text btn100 sxzy" disabled="disabled"  value="' + data.items[i].sxzy + '"/></td>' +
	                                         '<td><input type="text" class="common-text btn100 xzh" disabled="disabled"  value="' + data.items[i].xzh + '"/></td>' +
	                                         '<td>' +
	                                           '<input type="text" class="common-text btn50 fl qssj" disabled="disabled"  value="' + time1 + '"/>' +
	                                             '<input type="text" class="common-text btn50 fl jssj" disabled="disabled"  value="' + time2 + '"/>' +
	                                         '</td>' +
	                                         '<td><input type="text" class="common-text btn100 zsbh" disabled="disabled"  value="' + data.items[i].zsbh + '"/></td>' +
	                                         '<td><input type="text" class="common-text btn100 fzrq" disabled="disabled"  value="' + time3 + '" /></td>' +
	                                         '<td><input type="text" class="common-text btn100 dzzcm" disabled="disabled"  value="' + dzz_cm + '"/></td>' +
	                                         '<td><input type="text" class="common-text btn100 bz" disabled="disabled"  value="' + bz_bz + '"/></td>' +
	                                         '<td>' +
	                                           '<a class="editor" href="javascript:;" onclick="editorxlzsqk(' + titles + ', ' + data.items[i].lsh + ',' + xxmcs + ',' + xls + ',' + xzs + ',' + xxxss + ',' + sxzys + ',' + xzhs + ',' + qssjs + ',' + jssj + ',' + zsbhs + ',' + fzrqs + ',' + dzzcms + ',' + bzs + ')">修改</a>' +
	                                             '<a class="deleteLine" href="javascript:;" data-id="' + data.items[i].lsh + '" data-xuelizhengshu="学历证书情况">删除</a>' +
	                                         '</td></tr> '
	            );



	            //学历
	/*            	
	            var s = document.getElementById('xlzsqka' + i);
	
	            //根据文本取到值
	            for (var k = 0, len = s.options.length; k < len; k++) {
	
	                if (s.options[k].value == data.items[i].xl) {
	                    document.getElementById("xlzsqka" + i).value = s.options[k].value;
	                    // 就是你要的值.
	                }
	            }
	            //学习形式
	
	            var xs = document.getElementById('xxxsa' + i);
	
	            //根据文本取到值
	            for (var kk = 0, len = xs.options.length; kk < len; kk++) {
	
	                if (xs.options[kk].value == data.items[i].xxxs) {
	                    document.getElementById("xxxsa" + i).value = xs.options[kk].value;
	                    // 就是你要的值.
	                }
	            }
	            
	            */
	        }
	});
};
//学位证书情况
function xueweizsqk() {
    $.post("ygxx/xwzsqk",
    {
        ygbh: localStorage.getItem("ygbh"),
    }, function (data) {
    	//var data=eval('(' + data + ')');
    	$("#xueweia").html("");
    	var xw_xwzs = data.items.length;
        for (var i = 0; i < data.items.length; i++) {
            var xxmcs = "'" + data.items[i].xxmc + "'";
            var xws = "'" + data.items[i].xw + "'";
            var xwmcs = "'" + data.items[i].xwmc + "'";
            var sxzys = "'" + data.items[i].sxzy + "'";
            var xwpdwyhzxs = "'" + data.items[i].xwpdwyhzx + "'";
            var zsbhs = "'" + data.items[i].zsbh + "'";
            var time1 = new Date(data.items[i].fzrq);
			time1 = time1.toISOString().split("T")[0];
            var fzrqs = "'" + time1 + "'";
            var bzs = "'" + data.items[i].bz + "'";
            var titles = "'学位证书情况'";

            var xwzs_sd = "";
            if (data.items[i].xw == 5) {
                xwzs_sd = "博士后学位";
            }
            if (data.items[i].xw == 10) {
                xwzs_sd = "博士学位";
            }
            if (data.items[i].xw == 15) {
                xwzs_sd = "硕士学位";
            }
            if (data.items[i].xw == 20) {
                xwzs_sd = "学士学位";
            }
            if (data.items[i].xw == 25) {
                xwzs_sd = "无学位";
            }
            $("#xueweia").append(
                                    '<tr>' +
                                        '<td align="center">' + (i + 1) + '</td>' +
                                        '<td><input type="text" class="common-text btn100 xwxxmc" disabled= disabled  value="' + data.items[i].xxmc + '"/><input type="text" class="common-text btn100 xwlsh" disabled= disabled style="display:none"  value="' + data.items[i].lsh + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 xwxxmc_sd" disabled= disabled  value="' + xwzs_sd + '"/><select class="common-text btn100 xwxwxw" style="display:none"  disabled= "disabled"  id="xwxwzs' + i + '" value="' + data.items[i].xw + '">' +
                                            '<option value="0">请选择学位</option>' +
                                            '<option value="5">博士后学位</option>' +
                                            '<option value="10">博士学位</option>' +
                                            '<option value="15">硕士学位</option>' +
                                            '<option value="20">学士学位</option>' +
                                            '<option value="25">无学位</option>' +
                                            '</select></td>' +
                                        '<td><input type="text" class="common-text btn100 xwxwmc" disabled= disabled value="' + data.items[i].xwmc + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 xwsxzy" disabled= disabled value="' + data.items[i].sxzy + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 xwxwpdwyhzx" disabled= disabled value="' + data.items[i].xwpdwyhzx + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 xwzsbn" disabled= disabled  value="' + data.items[i].zsbh + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 xwfzrq" disabled= disabled  value="' + time1 + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 xwbz" disabled= disabled  value="' + data.items[i].bz + '" /></td>' +
                                        '<td>' +
                                            '<a class="editor" href="javascript:;" onclick="editorxwzsqk(' + titles + ', ' + data.items[i].lsh + ',' + xxmcs + ',' + xws + ',' + xwmcs + ',' + sxzys + ',' + xwpdwyhzxs + ',' + zsbhs + ',' + fzrqs + ',' + bzs + ')">修改</a>' +
                                            '<a class="deleteLine" href="javascript:;" data-id="' + data.items[i].lsh + '" data-zhichengzhengshu="学位证书情况">删除</a>' +
                                        '</td>' +
                                   ' </tr>'
                );
        }
    });
};
//职称证书信息
function zczsqk() {
    $.post("ygxx/zczsqk",{
        ygbh: localStorage.getItem("ygbh")
    }, function (data) {
        $("#zczsqka").html("");
        //var data=eval('(' + data + ')');
        zczsqk_count = data.items.length;
        for (var i = 0; i < data.items.length; i++) {

            var zcs = "'" + data.items[i].zc + "'";
            var zys = "'" + data.items[i].zy + "'";
            var gydwqcs = "'" + data.items[i].gydwqc + "'";
            var zcpswyhqcs = "'" + data.items[i].zcpswyhqc + "'";
            var zzjgs = "'" + data.items[i].zzjg + "'";
            var zsbhs = "'" + data.items[i].zsbh + "'";
            var psbhs = "'" + data.items[i].psbh + "'";
            var time1 = new Date(data.items[i].tgrq);
			time1 = time1.toISOString().split("T")[0];
            var tgrqs = "'" + time1 + "'";
            var time2 = new Date(data.items[i].yxqz);
			time2 = time2.toISOString().split("T")[0];
            var yxqzs = "'" + time2 + "'";
            var bzs = "'" + data.items[i].bz + "'";
            var titles = "'职称证书情况'";
            var zc_sd = "";
            if (data.items[i].zc == 5) {
                zc_sd = "教授级高工";
            }
            if (data.items[i].zc == 10) {
                zc_sd = "高级工程师(非农委)";
            }
            if (data.items[i].zc == 15) {
                zc_sd = "农委高工";
            }
            if (data.items[i].zc == 20) {
                zc_sd = "工程师（非农委）";
            }
            if (data.items[i].zc == 22) {
                zc_sd = "农委工程师";
            }
            if (data.items[i].zc == 25) {
                zc_sd = "助理工程师";
            }
            if (data.items[i].zc == 30) {
                zc_sd = "高级经济师";
            }
            if (data.items[i].zc == 35) {
                zc_sd = "经济师";
            }
            if (data.items[i].zc == 36) {
                zc_sd = "助理经济师";
            }
            if (data.items[i].zc == 37) {
                zc_sd = "高级会计师";
            }
            if (data.items[i].zc == 38) {
                zc_sd = "会计师";
            }
            if (data.items[i].zc == 39) {
                zc_sd = "助理会计师";
            }
            if (data.items[i].zc == 40) {
                zc_sd = "高级政工师";
            }
            if (data.items[i].zc == 41) {
                zc_sd = "政工师";
            }
            if (data.items[i].zc == 42) {
                zc_sd = "助理政工师";
            }
            if (data.items[i].zc == 43) {
                zc_sd = "高级统计师";
            }
            if (data.items[i].zc == 44) {
                zc_sd = "统计师";
            }
            if (data.items[i].zc == 45) {
                zc_sd = "助理统计师";
            }
            if (data.items[i].zc == 46) {
                zc_sd = "高级审计师";
            }
            if (data.items[i].zc == 47) {
                zc_sd = "审计师";
            }
            if (data.items[i].zc == 48) {
                zc_sd = "助理审计师";
            }
            if (data.items[i].zc == 49) {
                zc_sd = "研究员";
            }
            if (data.items[i].zc == 50) {
                zc_sd = "副研究员";
            }
            if (data.items[i].zc == 51) {
                zc_sd = "助理研究员";
            }
            if (data.items[i].zc == 52) {
                zc_sd = "高级实验师";
            }
            if (data.items[i].zc == 53) {
                zc_sd = "实验师";
            }
            if (data.items[i].zc == 54) {
                zc_sd = "助理实验师";
            }
            if (data.items[i].zc == 55) {
                zc_sd = "技师";
            }
            if (data.items[i].zc == 56) {
                zc_sd = "一级律师";
            }
            if (data.items[i].zc == 57) {
                zc_sd = "二级律师";
            }
            if (data.items[i].zc == 58) {
                zc_sd = "三级律师";
            }
            if (data.items[i].zc == 59) {
                zc_sd = "助理律师";
            }
            if (data.items[i].zc == 60) {
                zc_sd = "高级编辑";
            }
            if (data.items[i].zc == 61) {
                zc_sd = "主任编辑";
            }
            if (data.items[i].zc == 62) {
                zc_sd = "编辑";
            }
            if (data.items[i].zc == 63) {
                zc_sd = "助理编辑";
            }
            if (data.items[i].zc == 69) {
                zc_sd = "其它";
            }
            if (data.items[i].zc == 70) {
                zc_sd = "无职称";
            }
            $("#zczsqka").append(
                    '<tr>' +
                                       '<td align="center">' + (i + 1) + '</td>' +
                                          '<td><input type="text" class="common-text btn100 zczczyz_sd" disabled= disabled  value="' + zc_sd + '" /><select class="common-text btn100 zczcz"  style="display:none" disabled= "disabled"  id="xwxw_zc' + i + '" value="' + data.items[i].zc + '">' +
                                          '</select></td>' +


                                        '<td><input type="text" class="common-text btn100 zczczyz" disabled= disabled  value="' + data.items[i].zy + '" /><input type="text" class="common-text btn100 zclsh" disabled= disabled style="display:none;" value="' + data.items[i].lsh + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100 zcgydwmcz" disabled= disabled  value="' + data.items[i].gydwqc + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100 zczcpswyhmcz" disabled= disabled   value="' + data.items[i].zcpswyhqc + '"  /></td>' +
                                        '<td><input type="text" class="common-text btn100 zczzjgz" disabled= disabled   value="' + data.items[i].zzjg + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 zczsbhz" disabled= disabled  value="' + data.items[i].zsbh + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 zcpsbhz" disabled= disabled  value="' + data.items[i].psbh + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100 zctgrqz" disabled= disabled   value="' + time1 + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100 zcyxqzz" disabled= disabled  value="' + time2 + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100 zcbzz" disabled= disabled  value="' + data.items[i].bz + '" /></td>' +
                                        '<td><a class="editor" href="javascript:;" onclick="editorzczsqk(' + titles + ', ' + data.items[i].lsh + ',' + zcs + ',' + zys + ',' + gydwqcs + ',' + zcpswyhqcs + ',' + zzjgs + ',' + zsbhs + ',' + psbhs + ',' + tgrqs + ',' + yxqzs + ',' + bzs + ')">修改</a><a class="deleteLine" href="javascript:;" data-id="' + data.items[i].lsh + '" data-zhichengzhengshu="职称证书情况" >删除</a></td>' +
                                    '</tr> '

                );
        }
    });
};

//培训及继续教育情况
function peixunjjxjyqk() {
    $.post("ygxx/pxjjxjyqk",
    	{
    		ygbh: localStorage.getItem("ygbh"),
        }, function (data) {
        $("#peixunjjxjyqka").html("")
        //var data=eval('(' + data + ')');
        for (var i = 0; i < data.items.length; i++) {
            var titles = "'培训及继续教育情况'";
            var time1 = new Date(data.items[i].qssj);
			time1 = time1.toISOString().split("T")[0];
            var qssjs = "'" + time1 + "'";
            var time2 = new Date(data.items[i].jssj);
			time2 = time2.toISOString().split("T")[0];
            var jssjs = "'" + time2 + "'";
            var pxjgs = "'" + data.items[i].pxjg + "'";
            var pxnrs = "'" + data.items[i].pxnr + "'";
            var zsmcs = "'" + data.items[i].zsmc + "'";
            var zsbhs = "'" + data.items[i].zsbh + "'";
            var bzs = "'" + data.items[i].bz + "'";
            $("#peixunjjxjyqka").append(
                 ' <tr>' +
                                        '<td align="center">' + (i + 1) + '</td>' +
                                        '<td><input type="text" class="common-text btn100 peixunqssj" disabled= disabled value="' + time1 + '" style="width:150px" /><input type="text" class="common-text btn100 peixunjssj" disabled= disabled value="' + time2 + '"  style="width:150px"/></td>' +
                                        '<td><input type="text" class="common-text btn100 peixunpxjg" disabled= disabled value="' + data.items[i].pxjg + '" /><input type="text" class="common-text btn100 peixunlsh" style="display:none" disabled= disabled value="' + data.items[i].lsh + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100 peixunpxnr" disabled= disabled value="' + data.items[i].pxnr + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 peixunzsmc" disabled= disabled value="' + data.items[i].zsmc + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 peixunzsbn" disabled= disabled value="' + data.items[i].zsbh + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 peixunbz" disabled= disabled value="' + data.items[i].bz + '"/></td>' +
                                        '<td><a class="editor" href="javascript:;" onclick="editorpxjjyqk(' + titles + ', ' + data.items[i].lsh + ',' + qssjs + ',' + jssjs + ',' + pxjgs + ',' + pxnrs + ',' + zsmcs + ',' + zsbhs + ',' + bzs + ')">修改</a><a class="deleteLine" href="javascript:;" data-id="' + data.items[i].lsh + '" data-peixunjjxjy="培训及继续教育情况">删除</a></td>' +
                                    '</tr>'
                );
        }
    });
};


//从事过行业的信息
function csgdhyjlbxx()
{
	$.post("ygxx/csgdhyjlbqk",
			{
				yg:localStorage.getItem("ygbh")
			},
			function (data)
			{
				//var data=eval('(' + data + ')');
				if(data.status=="success")
				{
					//alert("取到了");
					for (var i = 0; i < data.items.length; i++) {

	                    if (data.items[i].hy == 5) {
	                        c_jsdw = 5;
	                        document.getElementById("chkjsdw").checked = true;
	                    }
	                    if (data.items[i].hy == 10) {
	                        c_sheji = 10;
	                        document.getElementById("chksj").checked = true;
	                    }
	                    if (data.items[i].hy == 15) {
	                        c_shigong = 15;
	                        document.getElementById("chksg").checked = true;
	                    }
	                    if (data.items[i].hy == 20) {
	                        c_jianli = 20;
	                        document.getElementById("chkjl").checked = true;
	                    }
	                    if (data.items[i].hy == 25) {
	                        c_tzkz = 25;
	                        document.getElementById("chktzkz").checked = true;
	                    }
	                    if (data.items[i].hy == 30) {
	                        c_jggz = 30;
	                        document.getElementById("chkjggz").checked = true;
	                    }
	                    if (data.items[i].hy == 35) {
	                        c_kccl = 35;
	                        document.getElementById("chkkccl").checked = true;
	                    }
	                    if (data.items[i].hy == 40) {
	                        qita = 40;
	                        document.getElementById("chkqt").checked = true;
	                    }
	                }
				}
				
			}
			);
};


//从事行业更新处理
function csgdhyjlbgx()
{
	if (document.getElementById("chkjsdw").checked == false && document.getElementById("chksj").checked == false && document.getElementById("chksg").checked == false && document.getElementById("chkjl").checked == false && document.getElementById("chktzkz").checked == false && document.getElementById("chkjggz").checked == false && document.getElementById("chkkccl").checked == false && document.getElementById("chkqt").checked == false) {
        alert("请选择从事过的行业！");
        return;
    }
	$.post("ygxx/csgdhyjlbsc",
			{
				yg:localStorage.getItem("ygbh")
			},
			function (data)
			{
				$("input[name='cshy']:checked").each(function(){   
					$.post("ygxx/csgdhyjlbdj",
	    	                {
	    	                    yg:localStorage.getItem("ygbh"),
	    	                    hy:$(this).val()
	    	                }, function (data) {
	    	                });
					
					});   
				
	            alert("提交成功");
			}
		);
};

//工作履历信息表
var gzll_count = "";
function gzllxxqk() {
    $.post("ygxx/gzllxxqk",{
        yg: localStorage.getItem("ygbh")
        }, function (data) {
        $("#gzlla").html("");
        //var data=eval('(' + data + ')');
        gzll_count = data.items.length;
        for (var i = 0; i < data.items.length; i++) {
            var gzdws = "'" + data.items[i].gzdw + "'";
            var time1 = new Date(data.items[i].qssj);
			time1 = time1.toISOString().split("T")[0];
            var qssjs = "'" + time1 + "'";
            var time2 = new Date(data.items[i].jssj);
			time2 = time2.toISOString().split("T")[0];
			if(time2=="1970-01-01")
			{
				time2="至今";
				var jssjs = null;
			}else
				{
					jssjs="'"+time2+"'";
				}
            var zcs = "'" + data.items[i].zc + "'";
            var zws = "'" + data.items[i].zw + "'";
            var csgzzys = "'" + data.items[i].csgzzy + "'";
            var zmrs = "'" + data.items[i].zmr + "'";
            var zmrdhs = "'" + data.items[i].zmrdh + "'";
            var bzs = "'" + data.items[i].bz + "'";
            var titles = "'工作以来先后从事过的行业'";
            var jsjs = "";
            if (data.items[i].jssj == null) {
                jsjs = "至今";
            } else {
                jsjs = data.items[i].jssj;
            }
            var zc_sd = "";
            if (data.items[i].zc == 5) {
                zc_sd = "教授级高工";
            }
            if (data.items[i].zc == 10) {
                zc_sd = "高级工程师(非农委)";
            }
            if (data.items[i].zc == 15) {
                zc_sd = "农委高工";
            }
            if (data.items[i].zc == 20) {
                zc_sd = "工程师（非农委）";
            }
            if (data.items[i].zc == 22) {
                zc_sd = "农委工程师";
            }
            if (data.items[i].zc == 25) {
                zc_sd = "助理工程师";
            }
            if (data.items[i].zc == 30) {
                zc_sd = "高级经济师";
            }
            if (data.items[i].zc == 35) {
                zc_sd = "经济师";
            }
            if (data.items[i].zc == 36) {
                zc_sd = "助理经济师";
            }
            if (data.items[i].zc == 37) {
                zc_sd = "高级会计师";
            }
            if (data.items[i].zc == 38) {
                zc_sd = "会计师";
            }
            if (data.items[i].zc == 39) {
                zc_sd = "助理会计师";
            }
            if (data.items[i].zc == 40) {
                zc_sd = "高级政工师";
            }
            if (data.items[i].zc == 41) {
                zc_sd = "政工师";
            }
            if (data.items[i].zc == 42) {
                zc_sd = "助理政工师";
            }
            if (data.items[i].zc == 43) {
                zc_sd = "高级统计师";
            }
            if (data.items[i].zc == 44) {
                zc_sd = "统计师";
            }
            if (data.items[i].zc == 45) {
                zc_sd = "助理统计师";
            }
            if (data.items[i].zc == 46) {
                zc_sd = "高级审计师";
            }
            if (data.items[i].zc == 47) {
                zc_sd = "审计师";
            }
            if (data.items[i].zc == 48) {
                zc_sd = "助理审计师";
            }
            if (data.items[i].zc == 49) {
                zc_sd = "研究员";
            }
            if (data.items[i].zc == 50) {
                zc_sd = "副研究员";
            }
            if (data.items[i].zc == 51) {
                zc_sd = "助理研究员";
            }
            if (data.items[i].zc == 52) {
                zc_sd = "高级实验师";
            }
            if (data.items[i].zc == 53) {
                zc_sd = "实验师";
            }
            if (data.items[i].zc == 54) {
                zc_sd = "助理实验师";
            }
            if (data.items[i].zc == 55) {
                zc_sd = "技师";
            }
            if (data.items[i].zc == 56) {
                zc_sd = "一级律师";
            }
            if (data.items[i].zc == 57) {
                zc_sd = "二级律师";
            }
            if (data.items[i].zc == 58) {
                zc_sd = "三级律师";
            }
            if (data.items[i].zc == 59) {
                zc_sd = "助理律师";
            }
            if (data.items[i].zc == 60) {
                zc_sd = "高级编辑";
            }
            if (data.items[i].zc == 61) {
                zc_sd = "主任编辑";
            }
            if (data.items[i].zc == 62) {
                zc_sd = "编辑";
            }
            if (data.items[i].zc == 63) {
                zc_sd = "助理编辑";
            }
            if (data.items[i].zc == 69) {
                zc_sd = "其它";
            }
            if (data.items[i].zc == 70) {
                zc_sd = "无职称";
            }
            $("#gzlla").append(
                                        '<tr>' +
                                        '<td align="center">' + (i + 1) + '</td>' +
                                        '<td><input type="text" class="common-text btn100 gzllgzdws" disabled= disabled  value="' + data.items[i].gzdw + '"/><input type="text" class="common-text btn100 gzlllshs" disabled= disabled  style="display:none" value="' + data.items[i].lsh + '"/></td>' +
                                        '<td>' +
                                            '<input type="text" class="common-text btn50 fl gzllqssjs" disabled= disabled  value="' + time1 + '"/>' +
                                            '<input type="text" class="common-text btn50 fl gzlljssjs" disabled= disabled value="' + time2 + '" />' +
                                        '</td>' +
                                      
                                          '<td><input type="text" class="common-text btn100 gzllzws_sds" disabled= disabled  value="' + zc_sd + '" /><select class="common-text btn100 gzllzcs" style="display:none" disabled= "disabled"  id="gzllzc_a' + i + '" value="' + data.items[i].zc + '">' +

'</select></td>' +
                                        '<td><input type="text" class="common-text btn100 gzllzws" disabled= disabled  value="' + data.items[i].zw + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100 gzllcsgzzys" disabled= disabled  value="' + data.items[i].csgzzy + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 gzllzmrs" disabled= disabled  value="' + data.items[i].zmr + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 gzllzmrdhs" disabled= disabled  value="' + data.items[i].zmrdh + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 gzllbzs" disabled= disabled  value="' + data.items[i].bz + '"/></td>' +
                                        '<td><a class="editor" href="javascript:;" onclick="editorgzllxxb(' + titles + ', ' + data.items[i].lsh + ',' + gzdws + ',' + qssjs + ',' + jssjs + ',' + zcs + ',' + zws + ',' + csgzzys + ',' + zmrs + ',' + zmrdhs + ',' + bzs + ')">修改</a><a class="deleteLine"  href="javascript:;"  data-id="' + data.items[i].lsh + '" data-gzllqk="参加工作以来的工作履历情况">删除</a></td>' +
                                    '</tr>'


                );
        }
    });
};
//外部专家否清空选项
function wbzj_chk(val) {
    if (val == 2) {
        var jzz_rad = document.getElementById("chkpbzj").checked = false;

        var jzz_rad = document.getElementById("chkzxlzzj").checked = false;
        var jzz_rad = document.getElementById("chkskzj").checked = false;
        var jzz_rad = document.getElementById("chkjsl").checked = false;
        var jzz_rad = document.getElementById("chkqita").checked = false;
        document.getElementById("txtmaoshu").value = "";
    }


}

//工作以来曾经或现在担任过外部专家情况
function drwbzjjlbqk() {
    $.post("ygxx/drwbzjjlqk",
    {
        yg: localStorage.getItem("ygbh")
    }, function (data) {
    	//var data = eval('(' + data + ')');
        var temp = data.items[0].drgwbzj;
        dr_wbzj = data.items[0].drgwbzj;
        var rad_wbzj = document.getElementsByName("wbzj");
        for (var i = 0; i < rad_wbzj.length; i++) {
            if (rad_wbzj[i].value == temp) {
                rad_wbzj[i].checked = true;
            }
        }
        if (data.items[0].pbzj == 1) {
            document.getElementById("chkpbzj").checked = true;
        }
        if (data.items[0].zxlzzj == 1) {
            document.getElementById("chkzxlzzj").checked = true;
        }
        if (data.items[0].skzj == 1) {
            document.getElementById("chkskzj").checked = true;
        }
        if (data.items[0].jsl == 1) {
            document.getElementById("chkjsl").checked = true;
        }
        if (data.items[0].qt == 1) {
            document.getElementById("chkqita").checked = true;
        }
        document.getElementById("txtmaoshu").value = data.items[0].drzjms;
    });
};

//工作以来曾经或现在担任过外部专家情况  修改
function wbzj_update() {
    var zhuanjia = $("input[name='wbzj']:checked").val();//选中的value
    var pbzj = "";
    var zxlzzj = "";
    var skzj = "";
    var jsl = "";
    var qt = "";
    var drzjms = "";
    if (document.getElementById("chkpbzj").checked == true) {
        pbzj = 1;
    } else {
        pbzj = 2;
    }
    if (document.getElementById("chkzxlzzj").checked == true) {
        zxlzzj = 1;
    } else {
        zxlzzj = 2;
    }
    if (document.getElementById("chkskzj").checked == true) {
        skzj = 1;
    } else {
        skzj = 2;
    }
    if (document.getElementById("chkjsl").checked == true) {
        jsl = 1;
    } else {
        jsl = 2;
    }
    if (document.getElementById("chkqita").checked == true) {
        qt = 1;
    } else {
        qt = 2;
    }
    drzjms = document.getElementById("txtmaoshu").value;
    if (drzjms == "") {
        drzjms = null;
    }

    if (zhuanjia == 1 && pbzj == 2 && zxlzzj == 2 && skzj == 2 && jsl == 2 && qt == 2) {
        alert("请选择您工作以来曾经或现在担任过的外部专家工作！");
        return;
    }

    $.post("ygxx/drwbzjjlgx",
    {
        yg: localStorage.getItem("ygbh"),
        drgwbzj: zhuanjia,
        pbzj: pbzj,
        zxlzzj: zxlzzj,
        skzj: skzj,
        jsl: jsl,
        qt: qt,
        drzjms: drzjms
    }, function (data) {
    	//var data=eval('(' + data + ')');
        if (data.status == "success") {
            alert("修改成功");
            return;
        } else {
            alert("修改失败");
            return;
        }
    });
};

//在本企业以负责人（总监、总代）中标通知书业绩 显示
function zbtzsxxqk() {  
    $.post("ygxx/zbtzsxxqk",{
        yg: localStorage.getItem("ygbh")
    }, function (data) {
        //var data = eval('(' + data + ')');
        $("#zbtzsyja").html("")
        if(data.status=="success")        	
        for (var i = 0; i < data.items.length; i++) {
            var fs = "";
            if (data.items[i].fbfs == "5") {
                fs = "公开招标";
            }
            if (data.items[i].fbfs == "10") {
                fs = "直接委托";
            }
            if (data.items[i].fbfs == "15") {
                fs = "邀请招标";
            }
            var time1 = new Date(data.items[i].qssj);
			time1 = time1.toISOString().split("T")[0];
            var time2 = new Date(data.items[i].jssj);
			time2 = time2.toISOString().split("T")[0];
			if(time2=="1970-01-01")
			{
				time2="至今";
				var jssjs = null;
			}else
				{
					jssjs="'"+time2+"'";
				}
			var time3 = new Date(data.items[i].qfsj);
			time3 = time3.toISOString().split("T")[0];
            $("#zbtzsyja").append(

                   '<tr>' +
                                        '<td align="center">' + (i + 1) + '</td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  value="' + data.items[i].bjbh + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  value="' + fs + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  value="' + data.items[i].xmmc + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  value="' + data.items[i].jfe + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100"  disabled= disabled value="' + data.items[i].zbe + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  value="' + data.items[i].fwzq + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" style="width:90px" disabled= disabled value="' + time1 + '"/><input type="text" class="common-text btn100"  style="width:90px" disabled= disabled  value="' + time2 + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  value="' + data.items[i].fbdw + '"/></td>' +
                                       ' <td><input type="text" class="common-text btn100" disabled= disabled  value="' + data.items[i].jdbadw + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled value="' + time3 + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled value="' + data.items[i].bz + '" /></td>' +

                                    '</tr>'
                );
        }
    });
};

//个人执业证书情况
function grzyzsqk_search() {
    $.post("ygxx/zyzgzsqk",{
        yg: localStorage.getItem("ygbh")
        }, function (data) {
        	//var data = eval('(' + data + ')');
        var zy = "";
        $("#grzyzsqk_a").html("");
        if(data.status=="success")
        for (var i = 0; i < data.items.length; i++) {
        	
            var outdate = "";
            if (data.items[i].outdate == null||data.items[i].outdate == "") {
                outdate = "";
            } else {
            	var time2 = new Date(data.items[i].outdate);
    			time2 = time2.toISOString().split("T")[0];
                outdate = "'" +time2+ "'";
            }
            var zslb = "'" + data.items[i].zslb + "'";
            var bzjg = "'" + data.items[i].bzjg + "'";
            var time1 = new Date(data.items[i].qfrq);
			time1 = time1.toISOString().split("T")[0];
            var qfrq = "'" + time1 + "'";
            var outdates = "'" + data.items[i].outdate + "'";
            var zczsbh = "'" + data.items[i].zczsbh + "'";
            var zgzh = "'" + data.items[i].zgzh + "'";
            var zch = "'" + data.items[i].zch + "'";
            var sxzy = "'" + data.items[i].sxzy + "'";
            var zczy1 = "'" + data.items[i].zczy1 + "'";
            var zczy2 = "'" + data.items[i].zczy2 + "'";
            var yjbgf = "'" + data.items[i].yjbgf + "'";
            var titles = "'个人执业证书情况'";
            var yxq = "'" + data.items[i].yxq + "'";
            var bgzt = "'" + data.items[i].bgzt + "'";
            var jyr = "'" + data.items[i].jyr + "'";
            var bz = "'" + data.items[i].bz + "'";
            var pinjie = data.items[i].yjbgf;
            if (pinjie == 5) {
                pinjie = "公司保管";
            }
            if (pinjie == 10) {
                pinjie = "部门保管";
            }
            if (pinjie == 15) {
                pinjie = "个人保管";
            }
            $("#grzyzsqk_a").append(
                       '<tr>' +
                                        '<td align="center" width="10px"  ><span style="width:10px">' + (i + 1) + '</span></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled value="' + data.zslbs[i].zslb + '" /><select class="common-text btn100 " style="display:none" disabled=disabled id="zyzsselect' + i + '" style="width:110px"  value="' + data.items[i].zslb + '" ></select></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  id="bzjg' + i + '" value="' + data.items[i].bzjg + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  id="fzrq' + i + '" value="' + time1 + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  id="yxqz' + i + '" value="' + time2 + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  id="zsbh' + i + '" value="' + data.items[i].zczsbh + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  id="zgzh' + i + '" value="' + data.items[i].zgzh + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  id="zch' + i + '" value="' + data.items[i].zch + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  id="sxzy' + i + '" value="' + data.items[i].sxzy + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  id="zczyy' + i + '" value="' + data.items[i].zczy1 + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  id="zczye' + i + '" value="' + data.items[i].zczy2 + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled= disabled  id="yjbgf' + i + '" value="' + pinjie + '"/></td>' +
                                        '<td><a class="editor" href="javascript:;" onclick="editorgrzyzsqk(' + titles + ', ' + data.items[i].id + ',' + zslb + ',' + bzjg + ',' + qfrq + ',' + outdate + ',' + zczsbh + ',' + zgzh + ',' + zch + ',' + sxzy + ',' + zczy1 + ',' + zczy2 + ',' + yjbgf + ', ' + data.items[i].yjbgf + ',' + yxq + ',' + bgzt + ',' + jyr + ',' + bz + ')">修改</a><a class="deleteLine" href="javascript:;" data-id="' + data.items[i].id + '" data-grzyzsqk="个人执业证书情况" data-yjbgf="' + data.items[i].yjbgf + '">删除</a></td>' +
                                    '</tr>'

                );
        }
    });
};

//本人党组织关系情况
function brdzzgx_search() {
    $.post("ygxx/jdzzxxqk",{
    	yg: localStorage.getItem("ygbh")
    }, function (data) {
    	//var data = eval('(' + data + ')');
        var temp = data.items[0].dylb;
        dy_lb = data.items[0].dylb;
        var rad = document.getElementsByName("sorts");
        for (var i = 0; i < rad.length; i++) {
            if (rad[i].value == temp) {
                rad[i].checked = true;
            }
        }
        if(temp!=20)
        {
        	document.getElementById("dssdzz").value = data.items[0].ssdzz;
        	var time1 = new Date(data.items[0].djsqsrq);
			time1 = time1.toISOString().split("T")[0];
        	document.getElementById("djrdsqzyrq").value = time1;
        	var time2 = new Date(data.items[0].pzrq);
			time2 = time2.toISOString().split("T")[0];
        	if(temp!=5)
        		document.getElementById("dpzzzrq").value = time2;
	        document.getElementById("dqtqksm").value = data.items[0].qtqksm;
        }
    });
}
//本人党组织关系情况  修改
function brdzzgx_update() {
    var dylb = $("input[name='sorts']:checked").val();//选中的value
    var ssdzz = document.getElementById("dssdzz").value;
    var jrdsqzyrq = document.getElementById("djrdsqzyrq").value;
    var pzzzrq = document.getElementById("dpzzzrq").value;
    var qtqksm = document.getElementById("dqtqksm").value;
    if (dylb != 5 && dylb != 10 && dylb != 15 && dylb != 20) {
        alert("请选择党员类别！");
        return;
    }

    if ((dylb == 5 || dylb == 10 || dylb == 15) && ssdzz == "") {
        alert("请填写所属党组织！");
        return;
    }

    if ((dylb == 10 || dylb == 15) && pzzzrq == "") {
        alert("请填写批准转正日期！");
        return;
    }
    if (ssdzz == "") {
        ssdzz = null;
    }
    if (jrdsqzyrq == "") {
        jrdsqzyrq = null;
    }
    if (pzzzrq == "") {
        pzzzrq = null;
    }
    if (qtqksm == "") {
        qtqksm = null;
    }

    $.post("ygxx/jdzzxxgx",{
        yg: localStorage.getItem("ygbh"),
        dylb: dylb,
        ssdzz: ssdzz,
        jrdsqzyrq: jrdsqzyrq,
        pzzzrq: pzzzrq,
        qtqksm: qtqksm
    }, function (data) {
    	//var data = eval('(' + data + ')');
        if (data.status == "success") {
            alert("修改成功");
            return;
        } else {
            alert("修改失败");
            return;
        }
    });
}
function dzzgx_rao(val) {
    if (val == 20) {
        document.getElementById("dssdzz").value = "";
        document.getElementById("djrdsqzyrq").value = "";
        document.getElementById("dpzzzrq").value = "";
        document.getElementById("dqtqksm").value = "";
    }
}
//语言及计算机能力
function yyjjsjnl_search() {
    $.post("ygxx/yyjpcnlqk",{
        yg: localStorage.getItem("ygbh")
    }, function (data) {
    	//var data = eval('(' + data + ')');
        document.getElementById("wyyz_a").value = data.items[0].wyyz;
        document.getElementById("wysp_a").value = data.items[0].wysp;
        document.getElementById("jsjnl_a").value = data.items[0].jsjnl;
        document.getElementById("pthsp_a").value = data.items[0].pthsp;
        jsj_nl = data.items[0].jsjnl;
    });
}
//语言及计算机能力  修改
function yyjjsjnl_update() {
    var wyyz = document.getElementById("wyyz_a").value;
    var wysp = document.getElementById("wysp_a").value;
    var pthsp = document.getElementById("pthsp_a").value;
    var jsjnl = document.getElementById("jsjnl_a").value;
    if (wyyz == "" || wysp == "" || jsjnl == "" || pthsp == "") {
        alert("请把信息填写完整！");
        return;
    }
    $.post("ygxx/yyjpcnlgx",{
        yg: localStorage.getItem("ygbh"),
        wyyz: wyyz,
        wysp: wysp,
        jsjnl: jsjnl,
        pthsp: pthsp
    }, function (data) {
    	//var data = eval('(' + data + ')');
        if (data.status == "success") {
            alert("修改成功");
            return;
        } else {
            alert("修改失败");
            return;
        }
    });
}


//特长及兴趣爱好
function tcjxqah_search() {
    $.post("ygxx/tcjxqahqk",{
        yg: localStorage.getItem("ygbh")
    }, function (data) {
    	//var data = eval('(' + data + ')');
        document.getElementById("tc_a").value = data.items[0].tc;
        document.getElementById("xqah_a").value = data.items[0].xqah;
        xq_ah = data.items[0].xqah;
    });
}
//特长及兴趣爱好  修改
function tcjxqah_update() {
    var tc_a = document.getElementById("tc_a").value;
    var xqah_a = document.getElementById("xqah_a").value;
    if (tc_a == "" || xqah_a == "") {
        alert("请把信息填写完整！");
        return;
    }
    $.post("ygxx/tcjxqahgx",
    		{
        yg: localStorage.getItem("ygbh"),
        tc: tc_a,
        xqah: xqah_a
    }, function (data) {
    	//var data = eval('(' + data + ')');
        if (data.status == "success") {
            alert("修改成功");
            return;
        } else {
            alert("修改失败");
            return;
        }
    });
}


//本人健康状况
function jkzkb_search() {
    $.post("ygxx/jkzkqk",{
        yg: localStorage.getItem("ygbh")
    }, function (data) {
        //曾患的重大疾病
    	//var data = eval('(' + data + ')');
        var temp = data.items[0].zdjb;
        var rad = document.getElementsByName("illness1");
        for (var i = 0; i < rad.length; i++) {
            if (rad[i].value == temp) {
                rad[i].checked = true;
            }
        }
        document.getElementById("chzdjb_a").value = data.items[0].jbsm1;
        //有无心脏病史
        var tempa = data.items[0].xzbs;
        var rada = document.getElementsByName("illness2");

        for (var i = 0; i < rada.length; i++) {
            if (rada[i].value == tempa) {
                rada[i].checked = true;

            }
        }
        document.getElementById("ywxzbs_a").value = data.items[0].jbsm2;
        //有无高血压病史
        var tempb = data.items[0].gxybs;
        var radb = document.getElementsByName("illness3");

        for (var i = 0; i < radb.length; i++) {
            if (radb[i].value == tempb) {
                radb[i].checked = true;
            }
        }
        document.getElementById("ywgxybs_a").value = data.items[0].jbsm3;
        //有无传染病史
        var tempc = data.items[0].crbs;
        var radc = document.getElementsByName("illness4");
        for (var i = 0; i < radc.length; i++) {
            if (radc[i].value == tempc) {
                radc[i].checked = true;
            }
        }
        document.getElementById("ywcrbs_a").value = data.items[0].jbsm4;
        //有无精神类疾病
        var tempd = data.items[0].jsljb;
        var radd = document.getElementsByName("illness5");

        for (var i = 0; i < radd.length; i++) {
            if (radd[i].value == tempd) {
                radd[i].checked = true;
            }
        }
        document.getElementById("ywjsljb_a").value = data.items[0].jbsm5;
        //有无中风病史
        var tempe = data.items[0].zfbs;
        var rade = document.getElementsByName("illness6");

        for (var i = 0; i < rade.length; i++) {
            if (rade[i].value == tempe) {
                rade[i].checked = true;
            }
        }
        document.getElementById("ywzfbs_a").value = data.items[0].jbsm6;
        document.getElementById("yqzjb_a").value = data.items[0].yqzjb;
        var time1 = new Date(data.items[0].sctjsj);
		time1 = time1.toISOString().split("T")[0];
        document.getElementById("sctjsj_a").value = time1;
        tj_sj = data.items[0].sctjsj;
    });
};
//本人健康状况  修改
function jkzkb_update() {
    var zdjb = $("input[name='illness1']:checked").val();//选中的value 曾患的重大疾病
    var xzbs = $("input[name='illness2']:checked").val();//选中的value  有无心脏病史
    var gxybs = $("input[name='illness3']:checked").val();//选中的value 有无高血压病史
    var crbs = $("input[name='illness4']:checked").val();//选中的value 有无传染病史
    var jsljb = $("input[name='illness5']:checked").val();//选中的value 有无精神类疾病
    var zfbs = $("input[name='illness6']:checked").val();//选中的value 有无中风病史
    var zdjb_name = document.getElementById("chzdjb_a").value;
    var xzbs_name = document.getElementById("ywxzbs_a").value;
    var gxybs_name = document.getElementById("ywgxybs_a").value;
    var crbs_name = document.getElementById("ywcrbs_a").value;
    var jsljb_name = document.getElementById("ywjsljb_a").value;
    var zfbs_name = document.getElementById("ywzfbs_a").value;
    if (zdjb == 1 && zdjb_name == "") {
        alert("请把曾患的重大疾病填写完整！");
        return;
    }
    if (xzbs == 1 && xzbs_name == "") {
        alert("请把有无心脏病史填写完整！");
        return;
    }
    if (gxybs == 1 && gxybs_name == "") {
        alert("请把有无高血压病史填写完整！");
        return;
    }
    if (crbs == 1 && crbs_name == "") {
        alert("请把有无传染病史填写完整！");
        return;
    }
    if (jsljb == 1 && jsljb_name == "") {
        alert("请把有无精神类疾病填写完整！");
        return;
    }
    if (zfbs == 1 && zfbs_name == "") {
        alert("请把有无中风病史填写完整！");
        return;
    }
    var yqzjb = document.getElementById("yqzjb_a").value;
    var sctjsj = document.getElementById("sctjsj_a").value;
    if (yqzjb == "") {
        alert("请把已确诊疾病填写完整");
        return;
    }
    if (sctjsj == "") {
        alert("请把上次体检时间填写完整");
        return;
    }
    if (zdjb_name == "") {
        zdjb_name = null;
    }
    if (xzbs_name == "") {
        xzbs_name = null;
    }
    if (gxybs_name == "") {
        gxybs_name = null;
    }
    if (crbs_name == "") {
        crbs_name = null;
    }
    if (jsljb_name == "") {
        jsljb_name = null;
    }
    if (zfbs_name == "") {
        zfbs_name = null;
    }
    $.post("ygxx/jkzkgx",{
        yg: localStorage.getItem("ygbh"),
        zdjb: zdjb,
        zdjb_name: zdjb_name,
        xzbs: xzbs,
        xzbs_name: xzbs_name,
        gxybs: gxybs,
        gxybs_name: gxybs_name,
        crbs: crbs,
        crbs_name: crbs_name,
        jsljb: jsljb,
        jsljb_name: jsljb_name,
        zfbs: zfbs,
        zfbs_name: zfbs_name,
        yqzjb: yqzjb,
        sctjsj: sctjsj
    }, function (data) {
    	//var data = eval('(' + data + ')');
        if (data.status == "success") {
            alert("修改成功");
            return;
        } else {
            alert("修改失败");
            return;
        }
    });
};



//父母情况
function fumuqk_search() {
    $.post("ygxx/fmqkxxqk",{
        yg: localStorage.getItem("ygbh")
    }, function (data) {
    	//var data = eval('(' + data + ')');
        $("#fumuqk").html("");
        if(data.status=="success"){
        fu_count = data.items.length;
        if (data.items.length >= 2) {
            document.getElementById("addfmqk").style.display = "none";
        } else {
            document.getElementById("addfmqk").style.display = "black";
        }
        for (var i = 0; i < data.items.length; i++) {

            var titles = "'父母情况'";
            var xm = "'" + data.items[i].xm + "'";
            var sfzhm = "'" + data.items[i].sfzhm + "'";
            var gx = "'" + data.items[i].gx + "'";
            var time1 = new Date(data.items[0].csny);
    		time1 = time1.toISOString().split("T")[0];
            var csny = "'" + time1 + "'";
            var whcd = "'" + data.items[i].whcd + "'";
            var zzmm = "'" + data.items[i].zzmm + "'";
            var hjszd = "'" + data.items[i].hjszd + "'";
            var gzdw = "'" + data.items[i].gzdw + "'";
            var zw = "'" + data.items[i].zw + "'";
            var sjhm = "'" + data.items[i].sjhm + "'";
            var bz = "'" + data.items[i].bz + "'";
            var bcsny = time1;
            if (bcsny == null || bcsny == "null") {
                bcsny = "";
            }
            var fumu = "";
            if (data.items[i].gx == 1) {
                fumu = "父亲";
            }
            if (data.items[i].gx == 2) {
                fumu = "母亲";
            }
            var zhengzhi = "";
            if (data.items[i].zzmm == 1) {
                zhengzhi = "中共党员（含预备）";
            }
            if (data.items[i].zzmm == 2) {
                zhengzhi = "民主党派";
            }
            if (data.items[i].zzmm == 3) {
                zhengzhi = "群众";
            }
            if (data.items[i].zzmm == 4) {
                zhengzhi = "共青团员";
            }
            $("#fumuqk").append(

                      '<tr>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].xm + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + data.items[i].sfzhm + '"/></td>' +
                                        '<td  style="width:150px"><input type="text" class="common-text btn100" disabled="disabled"  style="width:50px"  value="' + fumu + '"/><select class="common-text btn100" disabled="disabled" style="display:none" id="fmqkselect' + i + '" value="' + data.items[i].gx + '"></select></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + bcsny + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + data.items[i].whcd + '" /></td>' +
                                        '<td  style="width:150px"><input type="text" class="common-text btn100" disabled="disabled"  value="' + zhengzhi + '" /><select class="common-text btn100" style="display:none" disabled="disabled" value="' + data.items[i].zzmm + '" id="fmzzms' + i + '"></select></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].hjszd + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].gzdw + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].zw + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].sjhm + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].bz + '"/></td>' +
                                        '<td><a class="editor" href="javascript:;" onclick="editorfumuqk(' + titles + ', ' + data.items[i].lsh + ',' + xm + ',' + sfzhm + ',' + gx + ',' + csny + ',' + whcd + ',' + zzmm + ',' + hjszd + ',' + gzdw + ',' + zw + ',' + sjhm + ',' + bz + ')">修改</a><a class="deleteLine" href="javascript:;"   data-id="' + data.items[i].lsh + '" data-fumuqk="父母情况">删除</a></td>' +
                                    '</tr>'

                                                );





        }
        }
    });
};
//配偶情况
function peiouqk_search() {
    $.post("ygxx/poqkxxqk",{
        yg: localStorage.getItem("ygbh")
        }, function (data) {
        	//var data = eval('(' + data + ')');
        $("#peiouqk").html("");
        if(data.status=="success"){
        po_count = data.items.length;
        if (data.items.length > 0) {
            document.getElementById("addpoqk").style.display = "none";
        }
        
        for (var i = 0; i < data.items.length; i++) {
            var titles = "'配偶情况'";
            var xm = "'" + data.items[i].xm + "'";
            var sfzhm = "'" + data.items[i].sfzhm + "'";
            
            var time1 = new Date(data.items[i].csny);
    		time1 = time1.toISOString().split("T")[0];
            var csny = "'" + time1 + "'";
            var whcd = "'" + data.items[i].whcd + "'";
            var zzmm = "'" + data.items[i].zzmm + "'";
            var hjszd = "'" + data.items[i].hjszd + "'";
            var gzdw = "'" + data.items[i].gzdw + "'";
            var zw = "'" + data.items[i].zw + "'";
            var sjhm = "'" + data.items[i].sjhm + "'";
            var bz = "'" + data.items[i].bz + "'";
            var time2 = new Date(data.items[i].hydjsj);
    		time2= time2.toISOString().split("T")[0];
            var hy_djsj = time2;

            if (hy_djsj == null || hy_djsj == "null") {
                hy_djsj = "";

            }
            var hydjsj = "'" + time2 + "'";
            var cs_ny = time1;
            if (cs_ny == "null" || cs_ny == null) {
                cs_ny = "";
            }

            var zhengzhi = "";
            if (data.items[i].zzmm == 1) {
                zhengzhi = "中共党员（含预备）";
            }
            if (data.items[i].zzmm == 2) {
                zhengzhi = "民主党派";
            }
            if (data.items[i].zzmm == 3) {
                zhengzhi = "群众";
            }
            if (data.items[i].zzmm == 4) {
                zhengzhi = "共青团员";
            }
            $("#peiouqk").append(

               '<tr>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].xm + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].sfzhm + '"  /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"   value="' + hy_djsj + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + cs_ny + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + data.items[i].whcd + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + zhengzhi + '" /><select class="common-text btn100" disabled="disabled" style="display:none" id="peiouselect' + i + '"  value="' + data.items[i].zzmm + '"></select></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].hjszd + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].gzdw + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].zw + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].sjhm + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].bz + '"/></td>' +
                                        '<td><a class="editor" href="javascript:;" onclick="editorpeiouqk(' + titles + ', ' + data.items[i].lsh + ',' + xm + ',' + sfzhm + ',' + hydjsj + ',' + csny + ',' + whcd + ',' + zzmm + ',' + hjszd + ',' + gzdw + ',' + zw + ',' + sjhm + ',' + bz + ')">编辑</a><a class="deleteLine" href="javascript:;"  data-id="' + data.items[i].lsh + '" data-peiouqk="配偶情况">删除</a></td>' +
                                    '</tr>'
                                                );
        }
        }
    });
};

//子女情况
function zinvqk_search() {
    $.post("ygxx/znqkxxqk",{
        yg: localStorage.getItem("ygbh")
    }, function (data) {
    	//var data = eval('(' + data + ')');
        var xingbie = "";
        var csrq = "";
        $("#znqk_a").html("");
        if(data.status=="success")
        for (var i = 0; i < data.items.length; i++) {

            if (data.items[i].xb == "1") {
                xingbie = "男";
            } else if (data.items[i].xb == "2") {
                xingbie = "女";
            }

            if (data.items[i].csny == null) {
                csrq = "";
            } else {
                csrq = data.items[i].csny;
            }
            var xm = "'" + data.items[i].xm + "'";
            var sfzhm = "'" + data.items[i].sfzhm + "'";
            var xbxb = "'" + data.items[i].xb + "'";
            var time2 = new Date(data.items[i].csny);
    		time2= time2.toISOString().split("T")[0];
            var birth = "'" + time2 + "'";
            var jyjzqk = "'" + data.items[i].jyjzqk + "'";
            var hjszd = "'" + data.items[i].hjszd + "'";
            var zdxx = "'" + data.items[i].zdxx + "'";
            var gzdw = "'" + data.items[i].gzdw + "'";
            var bz = "'" + data.items[i].bz + "'";
            var titles = "'子女情况'";
            var jyjz = "";
            if (data.items[i].jyjzqk == 1) {
                jyjz = "学龄前儿童";
            }
            if (data.items[i].jyjzqk == 2) {
                jyjz = "在校生";
            }
            if (data.items[i].jyjzqk == 3) {
                jyjz = "已毕业参加工作";
            }
            $("#znqk_a").append(
                       '<tr>' +
                                       ' <td><input type="text" class="common-text btn100" disabled="disabled" style="width:100px" value="' + data.items[i].xm + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  style="width:200px"  value="' + data.items[i].sfzhm + '"  /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  style="width:30px" value="' + xingbie + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + time2 + '" /></td>' +

                                        '<td style="width:120px"><input type="text" class="common-text btn100" disabled="disabled"  value="' + jyjz + '" /><select class="common-text btn100" disabled="disabled" style="display:none" id="znselecta' + i + '"  value="' + data.items[i].jyjzqk + '" ></select></td>' +
                                           '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + data.items[i].hjszd + '" /></td>' +
                                      '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + data.items[i].zdxx + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + data.items[i].gzdw + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + data.items[i].bz + '" /></td>' +
                                        '<td><a class="editor" href="javascript:;" onclick="editorzinvqk(' + titles + ', ' + data.items[i].lsh + ',' + xm + ',' + sfzhm + ',' + xbxb + ',' + birth + ',' + jyjzqk + ',' + hjszd + ',' + zdxx + ',' + gzdw + ',' + bz + ')">修改</a><a class="deleteLine" href="javascript:;" data-id="' + data.items[i].lsh + '" data-zinvqk="子女情况">删除</a></td>' +
                                    '</tr>'
                                                );
        }
    });
};
//紧急情况联系人与联系地址
function jjlxrxxb_search() {
    $.post("ygxx/jjlxrxxqk",{
        yg: localStorage.getItem("ygbh")
    }, function (data) {
    	//var data = eval('(' + data + ')');
        var xingbie = "";
        var csrq = "";
        $("#jjqklxra").html("");
        if(data.status=="success"){
	        jj_qk = data.items.length;
	        for (var i = 0; i < data.items.length; i++) {
	            var xingb = "";
	            if (data.items[i].xb == 1) {
	                xingb = "男";
	            }
	            if (data.items[i].xb == 2) {
	                xingb = "女";
	            }
	            var titles = "'紧急情况联系人与联系地址'";
	            var xm = "'" + data.items[i].xm + "'";
	            var xingbie = "'" + data.items[i].xb + "'";
	            var zz = "'" + data.items[i].zz + "'";
	            var yb = "'" + data.items[i].yb + "'";
	            var gddh = "'" + data.items[i].gddh + "'";
	            var sjhm = "'" + data.items[i].sjhm + "'";
	            var bz = "'" + data.items[i].bz + "'";
	            $("#jjqklxra").append(
	
	                   ' <tr>' +
	                                        '<td><input type="text" class="common-text btn100" disabled="disabled" style="width:100px" value="' + data.items[i].xm + '" /></td>' +
	                                        '<td><input type="text" class="common-text btn100" disabled="disabled" style="width:30px" value="' + xingb + '"/></td>' +
	                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].zz + '"/></td>' +
	                                        '<td><input type="text" class="common-text btn100" disabled="disabled" style="width:100px"  value="' + data.items[i].yb + '"/></td>' +
	                                       ' <td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].gddh + '"/></td>' +
	                                       ' <td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].sjhm + '"/></td>' +
	                                       ' <td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].bz + '"/></td>' +
	                                       ' <td><a class="editor" href="javascript:;" onclick="editorjjlxrqk(' + titles + ', ' + data.items[i].lsh + ',' + xm + ',' + xingbie + ',' + zz + ',' + yb + ',' + gddh + ',' + sjhm + ',' + bz + ')">修改</a><a class="deleteLine" href="javascript:;" data-id="' + data.items[i].lsh + '" data-jjlxrqk="紧急情况联系人与联系地址">删除</a></td>' +
	                                    '</tr>'
	                                                );
	        }
        }
    });
};
//工资卡信息
function gzkxxb_search() {
    $.post("ygxx/gzkxxqk",{
        yg: localStorage.getItem("ygbh")
    }, function (data) {
    	//var data = eval('(' + data + ')');
        $("#gzkxx_a").html("");
        if(data.status=="success")
        for (var i = 0; i < data.items.length; i++) {
            var titles = "'工资卡信息'";
            var xm = "'" + data.items[i].xm + "'";
            var khyh = "'" + data.items[i].khyh + "'";
            var zhkh = "'" + data.items[i].zhkh + "'";
            var zt = "'" + data.items[i].zt + "'";
            var bz = "'" + data.items[i].bz + "'";
            var zhuangtai = "";
            if (data.items[i].zt == 1) {
                zhuangtai = "在用";
            } else {
                zhuangtai = "弃用";
            }
            $("#gzkxx_a").append(
                     '<tr>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" style=" width:100px"  value="' + data.items[i].xm + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + data.khyh[i].khyhqc + '"/><select class="common-text btn100" style="display:none" disabled="disabled" id="gzkxxselect' + i + '" value="' + data.items[i].khyh + '" ></select></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" value="' + data.items[i].zhkh + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled" style="width:50px"  value="' + zhuangtai + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100" disabled="disabled"  value="' + data.items[i].bz + '"/></td>' +
                                        '<td><a class="editor" href="javascript:;" onclick="editorgzkxx(' + titles + ', ' + data.items[i].lsh + ',' + xm + ',' + khyh + ',' + zhkh + ',' + zt + ',' + bz + ')">修改</a><a class="deleteLine" href="javascript:;"  data-id="' + data.items[i].lsh + '" data-gzkxx="工资卡信息">删除</a></td>' +
                                    '</tr>'
                                                );
        }
    });
};



//进入本企业，参与的工作项目业绩
function xmyjhetong() {
    $.api.auth({
        method: 'htb.bydepno',

        depno: localStorage.getItem("depno"),


        type: 'before'//Before and after


    }, function (data) {


        for (var i = 0; i < data.items.length; i++) {

            $("#makeupCoSe").append(

      '    <option value=""></option> <option value="' + data.items[i].gcbid + '">' + data.items[i].gcmc + '</option>'

                                                );
        }
    });
};
function xmyjhetonglike() {
    if (document.getElementById("makeupCo").value == "") {
        alert("请输入项目名称");
        return false;
    }
    var ygbh=localStorage.getItem("ygbh");
    $.post("ygxx/gclike",{
        ygbh: ygbh,
        gcmc: document.getElementById("makeupCo").value
    }, function (data) {
    	//var data = eval('(' + data + ')');
        $("#makeupCoSe").html("");
        if(data.status=="success")
        	$("#makeupCoSe").append('<option value=""></option>');
        for (var i = 0; i < data.items.length; i++) {
            $("#makeupCoSe").append(
      '<option value="' + data.items[i].gcbid + '">' + data.items[i].gcmc + '</option>');
        }
    });
};


function xmyjhetonglikes() {
	var ygbh=localStorage.getItem("ygbh");
	$.post("ygxx/gclike",{
        ygbh: ygbh,
        gcmc: document.getElementById("makeupCoss").value
    }, function (data) {
    	//var data = eval('(' + data + ')');
        $("#makeupCoSes").html("");
        if(data.status=="success")
        for (var i = 0; i < data.items.length; i++) {

            $("#makeupCoSes").append(

      '   <option value=""></option><option value="' + data.items[i].gcbid + '">' + data.items[i].gcmc + '</option>'

                                                );
        }
    });
};

function show_htmc() {

    document.getElementById('makeupCo').value = $("#makeupCoSe").find("option:selected").text();
    document.getElementById("sd_aa").value = document.getElementById("makeupCoSe").value;
    document.getElementById("gzxm_mc").value = $("#makeupCoSe").find("option:selected").text();// $("#makeupCoSe").find("option:selected").text();

};

function show_htmcs() {

    document.getElementById('makeupCos').value = $("#makeupCoSes").find("option:selected").text();
    document.getElementById("sd_aaa").value = document.getElementById("makeupCoSes").value;
    document.getElementById("dgzxmyj3").value = $("#makeupCoSes").find("option:selected").text();// $("#makeupCoSe").find("option:selected").text();

};


//进入本企业，参与的工作项目业绩  修改
function editorcydegzxmyj(lsh) {

    dialog({
        title: '修改提示',
        content: $('#canyudegongzuoxiangmuyejiupdate').html(),
        okValue: '保存',
        ok: function () {

            if (!$(".jinrubqycydgzxmyj1").val()) {
                alert("请填写起始时间！");
                return false;
            }
            else if (!$(".jinrubqycydgzxmyj3").val()) {
                alert("请填写项目名称！");
                return false;
            }
            else if (!$(".jinrubqycydgzxmyj4").val()) {
                alert("请填写工作专业！");
                return false;
            }
            else if (!$(".jinrubqycydgzxmyj5").val()) {
                alert("请填写担任职务！");
                return false;
            }

            else {



                var yjjsjs = $(".jinrubqycydgzxmyj2").val();
                if (yjjsjs == "") {
                    yjjsjs = "无";
                }

                var xmyjqssj = $(".jinrubqycydgzxmyj1").val();
                var xmyjjssj = yjjsjs;
                var xmyjxmmc = $(".jinrubqycydgzxmyj3").val();

                var xmyjgzzy = $(".jinrubqycydgzxmyj4").val();
                var xmyjdrzw = $(".jinrubqycydgzxmyj5").val();
                var xmyjbz = $(".jinrubqycydgzxmyj6").val();

                var csgc = document.getElementById("sd_aaa").value;
                if (csgc == "") {
                    alert("请选择或筛选项目名称");
                    return;
                }
                if (xmyjbz == "") {
                    xmyjbz = "null";
                }
                if (xmyjjssj == "") {
                    xmyjjssj = "null";
                }
                $.post("ygxx/gzxmyjgx",{
                    qssj: xmyjqssj,
                    jssj: xmyjjssj,
                    xmmc: xmyjxmmc,
                    gzzy: xmyjgzzy,
                    drzw: xmyjdrzw,
                    bz: xmyjbz,
                    lsh: lsh,
                    csgc: csgc
                }, function (data) {
                	//var data = eval('(' + data + ')');
                    if (data.status == "success") {
                        alert("修改成功");
                        cydgzxmyj_search();
                        return;
                    } else {
                        alert("修改失败");
                        return;
                    }

                });
                this.close().remove();
                return false;
            }
        },
        cancelValue: '取消',
        cancel: function () { }
    }).showModal();
    $.post("ygxx/gzxmyjcx",{
        lsh: lsh
    }, function (data) {
    	//var data = eval('(' + data + ')');
    	var time1 = new Date(data.items.qssj);
		time1= time1.toISOString().split("T")[0];
        document.getElementById("jinrubqycydgzxmyj1").value = time1;
        var time2 = new Date(data.items.jssj);
		time2= time2.toISOString().split("T")[0];
        document.getElementById("jinrubqycydgzxmyj2").value = time2;
        document.getElementById("dgzxmyj3").value = data.items.xmmc;
        document.getElementById("jinrubqycydgzxmyj4").value = data.items.gzzy;
        document.getElementById("jinrubqycydgzxmyj5").value = data.items.drzw;
        document.getElementById("jinrubqycydgzxmyj6").value = data.items.bz;
        document.getElementById("makeupCos").value = data.items.xmmc;
        document.getElementById("sd_aaa").value = data.items.csgc;
    });
};

//在本企业以负责人（总监、总代）合同业绩

function xmyjhetongs() {
	var yg= eval('(' + localStorage.getItem("yg") + ')');
    $.post("ygxx/gccqk",{
        xm: yg.xm
    }, function (data) {
    	//var data = eval('(' + data + ')');
    	if(data.status=="success")
    	{
    		$("#makeupCoSess").append('<option value=""></option>');
	        for (var i = 0; i < data.items.length; i++) {
	            $("#makeupCoSess").append('<option value="' + data.items[i].gcbid + '">' + data.items[i].gcmc + '</option>');
	        }
    	}
    });
};
function xmyjhetonglikess() {
	var yg= eval('(' + localStorage.getItem("yg") + ')');
	
    $.post("ygxx/gclikes",{
        xm: yg.xm,
        gcmc: document.getElementById("makeupCoss").value
    }, function (data) {
    	//var data = eval('(' + data + ')');
        $("#makeupCoSess").html("");
        $("#makeupCoSess").append('<option value=""></option>');
        if(data.status=="success")
        for (var i = 0; i < data.items.length; i++) {
            $("#makeupCoSess").append(
            		'<option value="' + data.items[i].gcbid + '">' + data.items[i].gcmc + '</option>'
                                      );
        }
    });
};
function show_htmcss() {
    document.getElementById('makeupCoss').value = $("#makeupCoSess").find("option:selected").text();
    document.getElementById("sd_a").value = document.getElementById("makeupCoSess").value;
    ads();
};
function ads() {
    var gcbid = document.getElementById("sd_a").value;

    if (gcbid != "") {
        $.post("ygxx/htcx",{
            gcbid: gcbid
        }, function (data) {
        	//var data = eval('(' + data + ')');
        	if(data.status=="success")
        	{
	            document.getElementById("ht_htbh").value = data.htb.htbh;
	            document.getElementById("ht_xmmc").value = data.items.gcmc;
	            document.getElementById("ht_hte").value = data.htb.htjlf;
	            var time1 = new Date(data.htb.htkgrq);
	    		time1= time1.toISOString().split("T")[0];
	    		var time2 = new Date(data.htb.htjgrq);
	    		time2= time2.toISOString().split("T")[0];
	            document.getElementById("ht_kgrq").value = time1;
	            document.getElementById("ht_jgrq").value = time2;
	            document.getElementById("ht_jsdwa").value = data.items.yzdw;
	            document.getElementById("ht_jsdwb").value = data.items.jsdw;
        	}
        });
    }
    else {
        alert("选择或筛选项目名称");
        return;
    }

};

function show_htmcsss() {
    document.getElementById('makeupCosss').value = $("#xgryjxselect").find("option:selected").text();
    //ads();
};
//荣誉名称检索
function rymc_searchds() {
    if (document.getElementById("makeupCosss").value == "") {
        alert("请输入荣誉名称");
        return;
    }
    var yg=eval('(' + localStorage.getItem("yg") + ')');
    $.post("ygxx/ryjxxxlike",{
        jg: yg.szjg,
        rymc: document.getElementById("makeupCosss").value
    }, function (data) {
    	//var data = eval('(' + data + ')');
        $("#xgryjxselect").html("");
        if(data.status=="success"){
        	$("#xgryjxselect").append('<option value=""></option>');
        	for (var i = 0; i < data.items.length; i++) {
        		$("#xgryjxselect").append('<option value="' + data.items[i].lsh + '">' + data.items[i].rymc + '</option>');
        	}
        }
    });
};

//进入本企业，参与的工作项目业绩 显示
function cydgzxmyj_search() {
    $.post("ygxx/gzxmyjqk",{
        yg: localStorage.getItem("ygbh")
    }, function (data) {
    	//var data = eval('(' + data + ')');
        $("#cydgzxmyja").html("");
        if(data.status=="success")
        for (var i = 0; i < data.items.length; i++) {
            var titles = "'参与的工作项目业绩'";
            var time1 = new Date(data.items[i].qssj);
    		time1= time1.toISOString().split("T")[0];
            var qssj = "'" + time1 + "'";
            var time2 = new Date(data.items[i].jssj);
    		time2= time2.toISOString().split("T")[0];
            var jssj = "'" + data.items[i].jssj + "'";
            var xmmc = "'" + data.items[i].xmmc + "'";
            var gzzy = "'" + data.items[i].gzzy + "'";
            var drzw = "'" + data.items[i].drzw + "'";
            var bz = "'" + data.items[i].bz + "'";
            var titles_titles = "";
            var lsh_lshs = "";
            var qssj_qssj = "";
            var jssj_jssj = "";
            var xmmc_xmmc = "";
            var gzzy_gzzy = "";
            var drzw_drzw = "";
            var bz_bz = "";
            if (data.items[i].jssj == null||data.items[i].jssj == "") {
                jsjs = '至今';
            } else {

                jsjs = time2;
            }
            $("#cydgzxmyja").append(
                '<tr>' +
                                        '<td align="center">' + (i + 1) + '</td>' +
                                        '<td>' +
                                            '<input type="text" class="common-text btn50 fl xmyjqssjs" disabled= disabled  value="' + time1 + '"/>' +
                                           '<input type="text" class="common-text btn50 fl xmyjjssjs" disabled= disabled  value="' + time2 + '"/>' +
                                        '</td>' +
                                        '<td><input type="text" class="common-text btn100 xmyjxmmcs" disabled= disabled  value="' + data.items[i].xmmc + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 xmyjgzzys" disabled= disabled  value="' + data.items[i].gzzy + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 xmyjdrzws" disabled= disabled  value="' + data.items[i].drzw + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100 xmyjbzs" disabled= disabled  value="' + data.items[i].bz + '"/></td>' +
                                      //'<td><a class="editor" href="javascript:;" onclick="editorcydegzxmyj(' + titles + ', ' + data.items[i].lsh + ',' + qssj + ',' + jssj + ',' + xmmc + ',' + gzzy + ',' + drzw + ',' + bz + ')">修改</a><a class="deleteLine" href="javascript:;" data-id="' + data.items[i].lsh + '" data-cydgzxmyj="参与的工作项目业绩">删除</a></td>' +
                                        '<td><a class="editor" href="javascript:;" onclick="editorcydegzxmyj(' + data.items[i].lsh + ')">修改</a><a class="deleteLine" href="javascript:;" data-id="' + data.items[i].lsh + '" data-cydgzxmyj="参与的工作项目业绩">删除</a></td>' +
                                    '</tr>'
                );
        }
    });
};


//在本企业以负责人（总监、总代）合同业绩 显示
function htyj_search() {
    $.post("ygxx/htyjxxqk",{
    	yg: localStorage.getItem("ygbh")
    }, function (data) {
    	//var data = eval('(' + data + ')');
        var zy = "";
        $("#htyj_a").html("");
        if(data.status=="success")
        for (var i = 0; i < data.items.length; i++) {
            if (data.items[i].xmzy == "1") {
                zy = "房屋建筑";
            }
            if (data.items[i].xmzy == "4") {
                zy = "河道堤防泵闸";
            }
            if (data.items[i].xmzy == "7") {
                zy = "农林工程";
            }
            if (data.items[i].xmzy == "10") {
                zy = "道路桥梁";
            }
            if (data.items[i].xmzy == "13") {
                zy = "港口与航道";
            }
            if (data.items[i].xmzy == "16") {
                zy = "市政公用";
            }
            if (data.items[i].xmzy == "19") {
                zy = "水运工程";
            }
            if (data.items[i].xmzy == "22") {
                zy = "船舶工程";
            }
            if (data.items[i].xmzy == "25") {
                zy = "技术咨询";
            }
            if (data.items[i].xmzy == "28") {
                zy = "机电安装设备";
            }
            if (data.items[i].xmzy == "31") {
                zy = "水土保持监理";
            }
            if (data.items[i].xmzy == "34") {
                zy = "移民监理";
            }
            if (data.items[i].xmzy == "37") {
                zy = "设施养护";
            }
            if (data.items[i].xmzy == "40") {
                zy = "轨交设备安装";
            }
            if (data.items[i].xmzy == "43") {
                zy = "圈围吹填";
            }
            if (data.items[i].xmzy == "46") {
                zy = "水利水电";
            }
            if (data.items[i].xmzy == "49") {
                zy = "轨道交通";
            }
            if (data.items[i].xmzy == "52") {
                zy = "其它";
            }
            
            var time1 = new Date(data.items[i].htkgrq);
    		time1= time1.toISOString().split("T")[0];
    		var time2 = new Date(data.items[i].htjgrq);
    		time2= time2.toISOString().split("T")[0];
            $("#htyj_a").append(
                        '<tr>' +
                                        '<td align="center">' + (i + 1) + '</td>' +
                                        '<td><input type="text" class="common-text btn100"  disabled= disabled value="' + data.items[i].htbh + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100"  disabled= disabled  value="' + data.items[i].xmmc + '" /></td>' +

                                        '<td><input type="text" class="common-text btn100"  disabled= disabled   value="' + zy + '" /></td>' +
                                        '<td><input type="text" class="common-text btn100"  disabled= disabled   value="' + data.items[i].the + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100"  disabled= disabled    value="' + time1 + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100"  disabled= disabled    value="' + time2 + '"/></td>' +
                                          '<td><input type="text" class="common-text btn100"  disabled= disabled   value="' + data.items[i].jfdw1 + '"/></td>' +
                                        '<td><input type="text" class="common-text btn100"  disabled= disabled    value="' + data.items[i].jfdw2 + '"/></td>' +
                                        '<td><a class="deleteLine" href="javascript:;" data-id="' + data.items[i].lsh + '" data-yfzrhtyj="在本企业以负责人合同业绩">删除</a></td>' +
                                    '</tr>'
                );
        }
    });
};
//相关荣誉奖项情况
function ryjxxxb_search() {
    $.post("ygxx/ygxgryqk",{
        yg: localStorage.getItem("ygbh")
    }, function (data) {
    	//var data = eval('(' + data + ')');
        var zy = "";
        var dxlb = "";
        $("#xgryjxqk_a").html("");
        if(data.status=="success")
        for (var i = 0; i < data.ryjxs.length; i++) {
            if (data.ryjxs[i].dxlb == "5") {
                dxlb = "个人";
            }
            if (data.ryjxs[i].dxlb == "10") {
                dxlb = "项目";
            }
            if (data.ryjxs[i].dxlb == "15") {
                dxlb = "集体";
            }
            if (data.ryjxs[i].dxlb == "20") {
                dxlb = "公司";
            }
            var fw = "";
            if (data.ryjxs[i].fw == 1) {
                fw = "发文 ";
            }
            var jz = "";
            if (data.ryjxs[i].jz == 1) {
                jz = "奖状 ";
            }
            var jb = "";
            if (data.ryjxs[i].jb == 1) {
                jb = "奖杯 ";
            }
            var jp = "";
            if (data.ryjxs[i].jp == 1) {
                jp = "奖牌 ";
            }
            var qt = "";
            if (data.ryjxs[i].qt == 1) {
                qt = "其他";
            }
            var zmcl = fw + jz + jb + jp + qt;
            var time1 = new Date(data.ryjxs[i].bfsj);
    		time1= time1.toISOString().split("T")[0];
            $("#xgryjxqk_a").append(
                     '<tr>' +
                                        '<td align="center">' + (i + 1) + '</td>' +
                                       ' <td><input type="text" class="common-text"  disabled= disabled    value="' + dxlb + '"  /></td>' +
                                        '<td><input type="text" class="common-text"   disabled= disabled  value="' + data.ryjxs[i].rymc + '"/></td>' +
                                        '<td><input type="text" class="common-text"   disabled= disabled  value="' + data.ryjxs[i].bjzzqc + '"/></td>' +
                                        '<td><input type="text" class="common-text"  disabled= disabled  value="' + time1 + '"/></td>' +
                                        '<td><input type="text" class="common-text"  disabled= disabled  value="' + zmcl + '"/></td>' +
                                        '<td><a class="deleteLine" href="javascript:;"  data-id="' + data.items[i].lsh + '" data-xgryjxqk="相关荣誉奖项情况">删除</a></td>' +
                                    '</tr>'
                );
        }
    });
};
//图片上传
function selectImage(file) {
    if (!file.files || !file.files[0]) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function (evt) {
        document.getElementById('preview').src = evt.target.result;
        var image = evt.target.result;
        alert(image.length);
       /* $.ajax({
            url: "ygxx/upload",
            type: "post",
            dataType: "html",
            data: "files=" + image + "&pic_arr=" + localStorage.getItem("ygbh"),// + "_" + localStorage.getItem("name"),
			success: function (data) {
			var suc = eval('(' + data + ')');
			//image = suc.Pic;
			image_pic = "http://172.16.0.105:8003/Photo/" + suc.Pic + ".jpeg";

			},
			error: function () {

			}
		});*/
        $.post("ygxx/upload",
            {
        		files:image,
        		ygbh:localStorage.getItem("ygbh"),
        		xm:localStorage.getItem("xm")
        	},
			function (data) {
			//var suc = eval('(' + data + ')');
			//image = suc.Pic;
			//image_pic = "http://172.16.0.105:8003/Photo/" + suc.Pic + ".jpeg";
			});
	}
	reader.readAsDataURL(file.files[0]);
};
function trydemo()
{
};

