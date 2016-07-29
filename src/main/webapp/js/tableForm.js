var table = "table.insert-tab";
var btn = ".switchForm";

$(function () {

	(function(){
		var $table = $(table);
		var $btn = $(btn);
		$table.find("tbody").hide();
		$table.first().find("tbody").show();
		$btn.each(function(){
			$(this).click(function(){
				var _tbody = $(this).closest(table).find("tbody");
				if( _tbody.is(":hidden") ){
					$table.find("tbody").hide();
					_tbody.show();
					flagForm();
				}else{
					_tbody.hide();
					flagForm();
				}
				
				scrollToForm($(this));
			});
		});
		flagForm();
	})();
	function flagForm(){
		$(table).each(function(){
			if( $(this).find("tbody").is(":hidden") ){
				$(this).find(btn).html("+");
			}else{
				$(this).find(btn).html("-");
			}
		});
	}
	function scrollToForm(t){
		$("html,body").animate({scrollTop: t.closest(table).offset().top}, 300);
	}
	$(".nextForm").each(function(index){
		$(this).click(function(){
			$(table).find("tbody").hide();
			$(this).closest(table).next("table.insert-tab").find("tbody").show();
			flagForm();
			scrollToForm($(this).closest(table).next("table.insert-tab"));
		});
	});
	



	$(table).on("click", ".deleteLine", function(){
	  
	    if ($(this).attr("data-zhichengzhengshu") == "职称证书情况")
	    {
	       
	        var zhichengid = $(this).attr("data-id");
	      
	            $.post("ygxx/zczssc",
	            {
	                lsh: zhichengid
	            }, function (data) {
	            	//var data=eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    return;
	                } else {
	                    alert("删除成功");
	                   
	                    return;
	                }
	            });
	       
	        $(this).closest("tr").remove();
	    }
	    if ($(this).attr("data-zhichengzhengshu") == "学位证书情况") {
	        var xueweiid = $(this).attr("data-id");	   
	            $.post("ygxx/xwzssc",
	            {	           
	                lsh: xueweiid
	            }, function (data) {
	            	//var data=eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    return;
	                } else {
	                    alert("删除成功");
	                    return;
	                }
	            });
	        $(this).closest("tr").remove();
	    }
	    if ($(this).attr("data-xuelizhengshu") == "学历证书情况") {	      
	        var xueliiid = $(this).attr("data-id");	  
	            $.post("ygxx/xlzssc",
	            {
	                lsh: xueliiid
	            }, function (data) {
	            	//var data=eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    return;
	                } else {
	                    alert("删除成功");
	                    return;
	                }
	            });
	        $(this).closest("tr").remove();
	    }
	    if ($(this).attr("data-peixunjjxjy") == "培训及继续教育情况") {
	        var peixunid = $(this).attr("data-id");
	            $.post("ygxx/pxjjxjysc",
	            {
	                lsh: peixunid
	            }, function (data) {
	            	//var data=eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    return;
	                } else {
	                    alert("删除成功");
	                    return;
	                }
	            });

	        
	        $(this).closest("tr").remove();
	    }
	    if ($(this).attr("data-gzllqk") == "参加工作以来的工作履历情况") {

	        var gzllid = $(this).attr("data-id");
	        $.post("ygxx/gzllxxsc",
	        {
	            lsh: gzllid
	        }, function (data) {
	            //var data=eval('(' + data + ')');
	            if (data.status == "success") {
	            	alert("删除成功");
	                return;
	            } else {
	                alert("删除成功");
	                return;
	            }
	        });
			$(this).closest("tr").remove();
	    }
	    if ($(this).attr("data-cydgzxmyj") == "参与的工作项目业绩") {
	        var xmyjid = $(this).attr("data-id");
	            $.post("ygxx/gzxmyjsc",{
	                lsh: xmyjid
	            }, function (data) {

	                if (data.status == "success") {
	                    alert("删除成功");
	                    return;
	                } else {
	                    alert("删除成功");
	                    return;
	                }
	            });

	        
	        $(this).closest("tr").remove();
	    }
	    if ($(this).attr("data-yfzrhtyj") == "在本企业以负责人合同业绩") {
	        var yfzrhtyjid = $(this).attr("data-id");
	            $.post("ygxx/htyjxxsc",{
	                lsh: yfzrhtyjid
	            }, function (data) {
	            	//var data = eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    return;
	                } else {
	                    alert("删除成功");
	                    return;
	                }
	            });        
	        $(this).closest("tr").remove();
	    }
	    //相关荣誉奖项情况 
	    if ($(this).attr("data-xgryjxqk") == "相关荣誉奖项情况") {
	        var xgryjxid = $(this).attr("data-id");
	            $.post("ygxx/ygxgrysc",{
	                lsh: xgryjxid
	            }, function (data) {
	            	//var data= eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    return;
	                } else {
	                    alert("删除成功");
	                    return;
	                }
	            });	        
	        $(this).closest("tr").remove();
	    }

	    //个人执业证书情况 
	    if ($(this).attr("data-grzyzsqk") == "个人执业证书情况") {

	        if ($(this).attr("data-yjbgf") != 15)
	        {
	            alert("您无权删除！");
	            return;
	        }
	        var grzyzsqkid = $(this).attr("data-id");
	            $.post("ygxx/zyzgzssc",{
	                id: grzyzsqkid,
	            }, function (data) {
	            	//var data= eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    grzyzsqk_search();
	                    return;
	                } else {
	                    alert("删除失败");
	                    return;
	                }
	            });
	    }
	    //父母情况 
	    if ($(this).attr("data-fumuqk") == "父母情况") {	        
	        var fmid = $(this).attr("data-id");
	            $.post("ygxx/fmqkxxsc",{
	                lsh: fmid
	            }, function (data) {
	            	//var data = eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    fumuqk_search();
	                    return;
	                } else {
	                    alert("删除失败");
	                    return;
	                }
	            });	        
	        //$(this).closest("tr").remove();
	    }
	    //配偶情况 
	    if ($(this).attr("data-peiouqk") == "配偶情况") {
	        var poid = $(this).attr("data-id");	    
	            $.post("ygxx/poqkxxsc",{
	                lsh: poid
	            }, function (data) {
	            	//var data = eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    peiouqk_search();
	                    return;
	                } else {
	                    alert("删除失败");
	                    return;
	                }
	            });	        
	        //$(this).closest("tr").remove();
	    }
	    //子女情况 
	    if ($(this).attr("data-zinvqk") == "子女情况") {
	        var znid = $(this).attr("data-id");
	            $.post("ygxx/znqkxxsc",{
	                lsh: znid
	                
	            }, function (data) {
	            	//var data = eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    zinvqk_search();
	                    return;
	                } else {
	                    alert("删除失败");
	                    return;
	                }
	            });	        
	        //$(this).closest("tr").remove();
	    }
	    //紧急情况联系人与联系地址 
	    if ($(this).attr("data-jjlxrqk") == "紧急情况联系人与联系地址") {
	        var jjid = $(this).attr("data-id");
	            $.post("ygxx/jjlxrxxsc",{
	                lsh: jjid
	            }, function (data) {
	            	//var data = eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    jjlxrxxb_search();
	                    return;
	                } else {
	                    alert("删除失败");
	                    return;
	                }
	            });

	        
	        //$(this).closest("tr").remove();
	    }
	    //工资卡信息 
	    if ($(this).attr("data-gzkxx") == "工资卡信息") {
	        var xxid = $(this).attr("data-id");

	            $.post("ygxx/gzkxxsc",{
	                lsh: xxid
	            }, function (data) {
	            	//var data = eval('(' + data + ')');
	                if (data.status == "success") {
	                    alert("删除成功");
	                    gzkxxb_search();
	                    return;
	                } else {
	                    alert("删除失败");
	                    return;
	                }
	            });

	        
	        //$(this).closest("tr").remove();
	    }
	});
	$(document).scroll(function () {
		var top = $(document).scrollTop();
		if( top >= $(".topbar-wrap").height() ){
			$(".progress").css({"position": "fixed", "top": "0", "z-index": "9999"});
		} else {
			$(".progress").css({"position": "static", "top": "auto"});
		}
	})

	
	//学历证书
	$(".xuelizsqk").click(function () {
	    dialog({
	        title: '学历证书-添加',
	        content: '<label class="form-group"><span>学校名称: </span><input type="text" class="common-text btn100 xuelizsqk1" style="width:350px"  id="xxmc"/><label style="color:red">*</label></label><label class="form-group xuelizsqk2"><span>请选择学历: </span><select class="common-text btn100 xuelizsqk2xl"  style="width:350px" id="xl"><option value="">请选择学历</option><option value="5">高中、中专</option><option value="10">大专</option><option value="15">本科</option><option value="20">硕士研究生</option><option value="25">MBA、EMBA</option><option value="30">工硕</option><option value="35">博士</option><option value="40">博士后</option></select><label style="color:red">*</label></label><label class="form-group"><span>学制（年）:</span><input type="text" class="common-text btn100 xuelizsqk3" style="width:350px" id="xzn"/><label style="color:red">*</label></label><label class="form-group"><span>请选择学习形式: </span><select class="common-text btn100" style="width:350px" id="xxxs"><option value="0">请选择</option><option value="5">全日制</option><option value="10">在职</option><option value="15">自考</option><option value="20">党校</option><option value="25">函授</option><option value="30">其它</option></select><label style="color:red">*</label></label><label class="form-group"><span>所学专业: </span><input type="text" class="common-text btn100 xuelizsqk5" style="width:350px" id="sxzy"/><label style="color:red">*</label></label><label class="form-group"><span>校（院）长: </span><input type="text" class="common-text btn100 xuelizsqk6" style="width:350px" id="xyz"/><label style="color:red">*</label></label><label class="form-group"><span>起止时间: </span><input type="text"  onclick="WdatePicker()" class="common-text btn50 xuelizsqk7" style="width:175px" id="kssj"/><input type="text"  onclick="WdatePicker()" class="common-text btn50 xuelizsqk8" style="width:175px" id="jssj"/><label style="color:red">*</label></label><label class="form-group"><span>证书编号: </span><input type="text" class="common-text btn100 xuelizsqk9" style="width:350px" id="zsbh"/><label style="color:red">*</label></label><label class="form-group"><span>发证日期: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 xuelizsqk10" style="width:350px" id="fzrq"/><label style="color:red">*</label></label><label class="form-group"><span>电子注册码: </span><input type="text" class="common-text btn100 xuelizsqk11" style="width:350px" id="dzzcm"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 xuelizsqk12" style="width:350px" id="bz"/></label>',
	        okValue: '保存',
	        ok: function () {
	            if (!$(".xuelizsqk1").val()) {
	                alert("请填写学校名称！");
	                return false; 
	            } else if (!$(".xuelizsqk5").val())
	            {
	                alert("请填所学专业名称！");
	                return false;
	            } else if (!$(".xuelizsqk6").val())
	            {
	                alert("请填校（院）长名称！");
	                return false;
	            }
	            else if (!$(".xuelizsqk7").val())
	                {
	                    alert("请选择起止时间！");
	                    return false;
	            }
	           else if (!$(".xuelizsqk8").val()) {
	                alert("请选择起止时间！");
	                return false;
	           }
	           else if (!$(".xuelizsqk9").val()) {
	               alert("请填写证书编号！");
	               return false;
	           }
	           else if (!$(".xuelizsqk10").val()) {
	               alert("请选择发证日期！");
	               return false;
	           }
	           else if (!$(".xuelizsqk2xl").val())
	           {
	               alert("请选择学历");
	               return false;
	           }
	           else if (!$(".xuelizsqk3").val()) 
	           {
	               alert("请填写学制（年）");
	               return false;
	           }
	   
	            else {

	                var xxmc = document.getElementById("xxmc").value;
	                var xl = document.getElementById("xl").value;
	           
	                var xzn = document.getElementById('xzn').value;
	                var xxxs = document.getElementById("xxxs").value;
	                var sxzy = document.getElementById("sxzy").value;
	                var xyz = document.getElementById("xyz").value;
	                var qssj = document.getElementById("kssj").value;
	                var jssj = document.getElementById("jssj").value;
	                var zsbh = document.getElementById("zsbh").value;
	                var fzrq = document.getElementById("fzrq").value;
	                var dzzcm = document.getElementById("dzzcm").value;
	                var bz = document.getElementById("bz").value;
	                if (dzzcm == "")
	                {
	                    dzzcm = 'null';
	                }
	                if (bz == "")
	                {
	                    bz = 'null';
	                }
	                $.post("ygxx/xlzsdj",
	                {
	                    ssyg: localStorage.getItem("ygbh"),
	                    xxmc: xxmc,//
	                    xl: xl,//
	                    xz: xzn,
	                    xxxs: xxxs,
	                    sxzy: sxzy,
	                    xzh: xyz,
	                    qssj: qssj,
	                    jssj: jssj,
	                    zsbh: zsbh,
	                    fzrq: fzrq,
	                    dzzcm: dzzcm,
	                    bz: bz
	                }, function (data) {
	                	//var data=eval('(' + data + ')');
	                    if (data.status == "success") {
	                        alert("提交成功");
	                        xlzsqk();//学历证书情况
	                        return;
	                    } else {
	                        alert("提交失败");
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
	})
    //学位证书
	$(".xueweizsqk").click(function(){
		dialog({
		    title: '学位证书-添加',
		    content: '<label class="form-group"><span>学校名称: </span><input type="text" class="common-text btn100 xueweizsqk1" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>请选择学位: </span><select class="common-text btn100"  style="width:350px" id="xwxw_aa"><option value="0">请选择学位</option><option value="5">博士后学位</option><option value="10">博士学位</option><option value="15">硕士学位</option><option value="20">学士学位</option><option value="25">无学位</option></select><label style="color:red">*</label></label><label class="form-group"><span>学位名称: </span><input type="text" class="common-text btn100 xueweizsqk3"  style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>所学专业: </span><input type="text" class="common-text btn100 xueweizsqk4"  style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>学位评定委员会主席: </span><input type="text" class="common-text btn100 xueweizsqk5"  style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>证书编号: </span><input type="text" class="common-text btn100 xueweizsqk6"  style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>发证日期: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 xueweizsqk7"  style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 xueweizsqk8"  style="width:350px"/></label>',
		    okValue: '保存',
		    ok: function () {
		    	if( !$(".xueweizsqk1").val() ){
		    		alert("请填写学校名称！");
		    		return false;
		    	}
		    	if (!$(".xueweizsqk3").val()) {
		    	    alert("请填写学位名称！");
		    	    return false;
		    	}
		    	if (!$(".xueweizsqk4").val()) {
		    	    alert("请填写所学专业！");
		    	    return false;
		    	}
		    	if (!$(".xueweizsqk5").val()) {
		    	    alert("请填写学位评定委员会主席！");
		    	    return false;
		    	}
		    	if (!$(".xueweizsqk6").val()) {
		    	    alert("请填写证书编号！");
		    	    return false;
		    	}
		    	if (!$(".xueweizsqk7").val()) {
		    	    alert("请填写发证日期！");
		    	    return false;
		    	}
		    	if(document.getElementById("xwxw_aa").value==0)
		    	{
		    	    alert("请选择学位！");
		    	    return false;
		    	}
		    	else {
		    	    var xxmc = $(".xueweizsqk1").val();//学校名称
		    	    var xwmc = $(".xueweizsqk3").val();//学位名称
		    	    var sxzy = $(".xueweizsqk4").val();//所学专业
		    	    var xwpdwyh = $(".xueweizsqk5").val();//学位评定委员会主席
		    	    var zsbh = $(".xueweizsqk6").val();//证书编号
		    	    var fzrq = $(".xueweizsqk7").val();//发证日期
		    	    var bz = $(".xueweizsqk8").val();//备注
		    	    var xw = document.getElementById("xwxw_aa").value;//学位	    	  
		    	    if (bz == "") {
		    	        bz = '';
		    	    }
		    	    $.post("ygxx/xwzsdj",
		    	    {
		    	        ssyg: localStorage.getItem("ygbh"),
		    	        xxmc: xxmc,//
		    	        xw: xw,//
		    	        xwmc: xwmc,
		    	        sxzy: sxzy,
		    	        xwpdwyhzx: xwpdwyh,
		    	        zsbh: zsbh,
		    	        fzrq: fzrq,
		    	        bz: bz
		    	    }, function (data) {
		    	    	//var data =eval('(' + data + ')');
		    	        if (data.status == "success") {
		    	            alert("提交成功");
		    	            xueweizsqk();//学历证书情况
		    	            return;
		    	        } else {
		    	            alert("提交失败");
		    	            return;
		    	        }

		    	    });
					this.close().remove();
			        return false;
		        }
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
	})
    //职称证书
	$(".zhichengzsqk").click(function(){
		dialog({
		    title: '职称证书-添加',
		    content: '<label class="form-group"><span>请选择职称: </span><select class="common-text btn100 zczc" id="zcselect"   style="width:350px"  ><option value="0">请选择学位</option><option value="5">教授级高工</option><option value="10">高级工程师(非农委)</option><option value="15">农委高工</option><option value="20">工程师（非农委）</option><option value="22">农委工程师</option><option value="25">助理工程师</option><option value="30">高级经济师</option><option value="35">经济师</option><option value="36">助理经济师</option><option value="37">高级会计师</option><option value="38">会计师</option><option value="39">助理会计师</option><option value="40">高级政工师</option><option value="41">政工师</option><option value="42">助理政工师</option><option value="43">高级统计师</option> <option value="44">统计师</option><option value="45">助理统计师</option><option value="46">高级审计师</option><option value="47">审计师</option><option value="48">助理审计师</option><option value="49">研究员</option><option value="50">副研究员</option><option value="51">助理研究员</option><option value="52">高级实验师</option><option value="53">实验师</option><option value="54">助理实验师</option><option value="55">技师</option><option value="56">一级律师</option><option value="57">二级律师</option><option value="58">三级律师</option><option value="59">助理律师</option><option value="60">高级编辑</option><option value="61">主任编辑</option><option value="62">编辑</option><option value="63">助理编辑</option><option value="69">其它</option><option value="70">无职称</option></select><label style="color:red">*</label></label><label class="form-group"><span>职称专业: </span><input type="text" class="common-text btn100 zhichengzsqk2"  style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>钢印单位全称: </span><input type="text" class="common-text btn100 zhichengzsqk3"  style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>职称评审委员会全称: </span><input type="text" class="common-text btn100 zhichengzsqk4"  style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>制（发）证机构: </span><input type="text" class="common-text btn100 zhichengzsqk5"  style="width:350px"/></label><label class="form-group"><span>证书编号: </span><input type="text" class="common-text btn100 zhichengzsqk6"  style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>评审编号: </span><input type="text" class="common-text btn100 zhichengzsqk7"  style="width:350px"/></label><label class="form-group"><span>通过（批准）日期: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 zhichengzsqk8"  style="width:350px"/></label><label class="form-group"><span>有效期至: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 zhichengzsqk9"  style="width:350px"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 zhichengzsqk10"  style="width:350px"/></label>',
		    okValue: '保存',
		    ok: function () {
		        if (!$(".zhichengzsqk2").val()) {
		    		alert("请填写职称专业！");
		    		return false;
		        } else if (!$(".zhichengzsqk3").val()) {
		            alert("请填写钢印单位全称！");
		            return false;
		        }
		        else if (!$(".zhichengzsqk4").val()) {
		            alert("请填写职称评审委员会全称！");
		            return false;
		        }
		        else if (!$(".zhichengzsqk5").val()) {
		            alert("请填写制（发）证机构！");
		            return false;
		        }
		        else if (!$(".zhichengzsqk6").val()) {
		            alert("请填写证书编号！");
		            return false;
		        }
		        else if (!$(".zhichengzsqk7").val()) {
		            alert("请填写评审编号！");
		            return false;
		        }
		        else if (!$(".zhichengzsqk8").val()) {
		            alert("请填写通过（批准）日期！");
		            return false;
		        }
		        else if (!$(".zhichengzsqk9").val()) {
		            alert("请填写有效期至！");
		            return false;
		        }		       
		        else {		  
		            zczc = $("#zcselect").val();
		            zczy = $(".zhichengzsqk2").val();
		            zcgydwqc = $(".zhichengzsqk3").val();
		            zczcpswyhqc = $(".zhichengzsqk4").val();
		            zczzjg = $(".zhichengzsqk5").val();
		            zczsbh = $(".zhichengzsqk6").val();
		            zcpsbh = $(".zhichengzsqk7").val();
		            zctgrq = $(".zhichengzsqk8").val();
		            zcyxqz = $(".zhichengzsqk9").val();
		            zcbz = $(".zhichengzsqk10").val();
		            if (zczc == 0)
		            {
		                alert("请选择职称");
		                return false;
		            }
		            $.post("ygxx/zczsdj",
		            {
		                zc:zczc,
		                ssyg: localStorage.getItem("ygbh"),
		                zy: zczy,
		                gydwqc: zcgydwqc,
		                zcpswyhqc: zczcpswyhqc,
		                zzjg: zczzjg,
		                zsbh: zczsbh,
		                psbh: zcpsbh,
		                tgrq: zctgrq,
		                yxqz: zcyxqz,		             
		                bz: zcbz
		            }, function (data) {
		            	//var data =eval('(' + data + ')');
		                if (data.status == "success") {
		                    alert("提交成功");
		                    zczsqk();//职称证书情况
		                    return;
		                } else {
		                    alert("提交失败");
		                    return;
		                }
		            });
	    			this.close().remove();
			        return false;
		        }
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
	})
    //培训及继续教育情况
	$(".peixunjjxjyqk").click(function(){
		dialog({
		    title: '培训及继续教育情况-添加',
		    content: '<label class="form-group"><span>起始时间: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 peixunjjxjyqk1" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>结束时间: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 peixunjjxjyqk7" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>培训机构: </span><input type="text" class="common-text btn100 peixunjjxjyqk2" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>培训（学习）内容: </span><input type="text" class="common-text btn100 peixunjjxjyqk3" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>证书名称: </span><input type="text" class="common-text btn100 peixunjjxjyqk4" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>证书编号: </span><input type="text" class="common-text btn100 peixunjjxjyqk5" style="width:350px"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 peixunjjxjyqk6" style="width:350px"/></label>',
		    okValue: '保存',
		    ok: function () {
		    	if( !$(".peixunjjxjyqk1").val() ){
		    		alert("请填写起始时间！");
		    		return false;
		    	}
		    	else if (!$(".peixunjjxjyqk7").val()) {
		    	    alert("请填写结束时间！");
		    	    return false;
		    	}
		    	else if (!$(".peixunjjxjyqk2").val()) {
		    	    alert("请填写培训机构！");
		    	    return false;
		    	}
		    	else if (!$(".peixunjjxjyqk3").val()) {
		    	    alert("请填写培训（学习）内容！");
		    	    return false;
		    	}
		    	else if (!$(".peixunjjxjyqk4").val()) {
		    	    alert("请填写证书名称！");
		    	    return false;
		    	}
		    	else {
		    	
		    	        var pxqssj = $(".peixunjjxjyqk1").val();
		    	        var pxjssj = $(".peixunjjxjyqk7").val();
		    	        var pxpxjg = $(".peixunjjxjyqk2").val();
		    	        var pxpxnr = $(".peixunjjxjyqk3").val();
		    	        var pxzsmc = $(".peixunjjxjyqk4").val();
		    	        var pxzsbh = $(".peixunjjxjyqk5").val();
		    	        var pxbz = $(".peixunjjxjyqk6").val();
		    	        if(pxzsbh=="")
		    	        {
		    	            pxzsbh = null;
		    	        }
		    	        if(pxbz=="")
		    	        {
		    	            pxbz = null;
		    	        }

		    	        $.post("ygxx/pxjjxjydj",{
		    	            yg: localStorage.getItem("ygbh"),
		    	            qssj: pxqssj,//
		    	            jssj: pxjssj,//
		    	            pxjg: pxpxjg,
		    	            pxnr: pxpxnr,
		    	            zsmc: pxzsmc,
		    	            zsbh: pxzsbh,
		    	            bz: pxbz
		    	        }, function (data) {
		    	        	//var data=eval('(' + data + ')');
		    	            if (data.status == "success") {
		    	                alert("提交成功");
		    	                peixunjjxjyqk();//学历证书情况
		    	                return;
		    	            } else {
		    	                alert("提交失败");
		    	                return;
		    	            }

		    	        });
		    	    this.close().remove();
			        return false;
		        }
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
	})
    //参加工作以来的工作履历情况
	$(".canjiagzyldgzllqk").click(function(){
		dialog({
		    title: '参加工作以来的工作履历情况-添加',
		    content: '<label class="form-group"><span>工作单位: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk1" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>起止时间: </span><input type="text"  onclick="WdatePicker()" class="common-text btn50 canjiagzyldgzllqk2" style="width:175px"/><input type="text"  onclick="WdatePicker()" class="common-text btn50 canjiagzyldgzllqk3" style="width:175px"/><label style="color:red">*</label></label><label class="form-group"><span>请选择职称: </span><select class="common-text btn100 zczc" id="gzllselect" style="width:350px"><option value="">请选择</option><option value="5">教授级高工</option><option value="10">高级工程师(非农委)</option><option value="15">农委高工</option><option value="20">工程师（非农委）</option><option value="22">农委工程师</option><option value="25">助理工程师</option><option value="30">高级经济师</option><option value="35">经济师</option><option value="36">助理经济师</option><option value="37">高级会计师</option><option value="38">会计师</option><option value="39">助理会计师</option><option value="40">高级政工师</option><option value="41">政工师</option><option value="42">助理政工师</option><option value="43">高级统计师</option> <option value="44">统计师</option><option value="45">助理统计师</option><option value="46">高级审计师</option><option value="47">审计师</option><option value="48">助理审计师</option><option value="49">研究员</option><option value="50">副研究员</option><option value="51">助理研究员</option><option value="52">高级实验师</option><option value="53">实验师</option><option value="54">助理实验师</option><option value="55">技师</option><option value="56">一级律师</option><option value="57">二级律师</option><option value="58">三级律师</option><option value="59">助理律师</option><option value="60">高级编辑</option><option value="61">主任编辑</option><option value="62">编辑</option><option value="63">助理编辑</option><option value="69">其它</option><option value="70">无职称</option></select><label style="color:red">*</label></label><label class="form-group"><span>职务岗位: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk5" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>从事工作专业: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk6" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>证明人: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk7" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>证明人电话: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk8" style="width:350px"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk9" style="width:350px"/></label>',
		    okValue: '保存',
		    ok: function () {
		    	if( !$(".canjiagzyldgzllqk1").val() ){
		    	    alert("请填写工作单位！");
		    		return false;
		    	}
		    	else if (!$(".canjiagzyldgzllqk2").val()) {
		    	    alert("请填写起始时间！");
		    	    return false;
		    	}
		    	else if (!$(".canjiagzyldgzllqk5").val()) {
		    	    alert("请填写职务岗位！");
		    	    return false;
		    	}
		    	else if (!$(".canjiagzyldgzllqk6").val()) {
		    	    alert("请填写从事工作专业！");
		    	    return false;
		    	}
		    	else if (!$(".canjiagzyldgzllqk7").val()) {
		    	    alert("请填写证明人！");
		    	    return false;
		    	}
		    	else {
		    	    if (document.getElementById("gzllselect").value == "")
		    	    {
		    	        alert("请选择职称");
		    	        return;
		    	    }
		    
		    	        var gzllgzdw=$(".canjiagzyldgzllqk1").val();
		    	        var gzllqssj = $(".canjiagzyldgzllqk2").val();
		    	        var gzlljssj = $(".canjiagzyldgzllqk3").val();
		    	        var gzllzc = document.getElementById("gzllselect").value;
		    	        var gzllzw = $(".canjiagzyldgzllqk5").val();
		    	        var gzllcsgzzy = $(".canjiagzyldgzllqk6").val();
		    	        var gzllzmr = $(".canjiagzyldgzllqk7").val();
		    	        var gzllzmrdh = $(".canjiagzyldgzllqk8").val();
		    	        var gzllbz = $(".canjiagzyldgzllqk9").val();

		    	        if (gzllzmrdh == "") {
		    	            gzllzmrdh = null;
		    	        }
		    	        if (gzllbz == "") {
		    	            gzllbz = null;
		    	        }
		    	 
		    	        if (gzlljssj == "")
		    	        {
		    	            gzlljssj = null;
		    	        }
		    	        
		    	        if (gzllzc == 0)
		    	        {
		    	            alert("请选择职称");
		    	            return false;
		    	        }
		    	    
		    	     
		    	        $.post("ygxx/gzllxxdj",
		    	        {
		    	            yg: localStorage.getItem("ygbh"),
		    	            gzdw: gzllgzdw,
		    	            qssj: gzllqssj,//
		    	            jssj: gzlljssj,
		    	            zc: gzllzc,
		    	            zw: gzllzw,
		    	            csgzzy: gzllcsgzzy,
		    	            zmr: gzllzmr,
		    	            zmrdh: gzllzmrdh,
                            bz:gzllbz
		    	        }, function (data) {
		    	        	//var data = eval('(' + data + ')');
		    	            if (data.status == "success") {
		    	                alert("提交成功");
		    	                gzllxxqk();
		    	                return;
		    	            } else {
		    	                alert("提交失败");
		    	                return;
		    	            }

		    	        });
		    	   
	    			this.close().remove();
			        return false;
		        }
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
	})
   //进入本企业，参与的工作项目业绩
	$(".jinrubqycydgzxmyj").click(function(){
		dialog({
		    title: '进入本企业参与的工作项目业绩-添加',
		  //  content: '<label class="form-group"><span>起止时间: </span><input type="date" class="common-text btn50 jinrubqycydgzxmyj1"/><input type="date" class="common-text btn50 jinrubqycydgzxmyj2"/></label><label class="form-group"><span>项目名称: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj3"/></label><label class="form-group"><span>工作专业: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj4"/></label><label class="form-group"><span>担任职务: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj5"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj6"/></label>',
		    content: $('#canyudegongzuoxiangmuyeji').html(),
		    okValue: '保存',
		    ok: function () {
		    	if( !$(".jinrubqycydgzxmyj1").val() ){
		    		alert("请填写起始时间！");
		    		return false;
		    	}
		    	else if (!$(".jinrubqycydgzxmyj3").val())
		    	{
		    	    alert("请填写项目名称！");
		    	    return false;
		    	}
		    	else if (!$(".jinrubqycydgzxmyj4").val())
		    	{
		    	    alert("请填写工作专业！");
		    	    return false;
		    	}
		    	else if (!$(".jinrubqycydgzxmyj5").val())
		    		{
		    		    alert("请填写担任职务！");
		    		    return false;
		    		}
		    	else {
		    	 
		    	    var jsjs=$(".jinrubqycydgzxmyj2").val();
		    	    if(jsjs=="")
		    	    {
		    	        jsjs="无";
		    	    }
		    	        var xmyjqssj = $(".jinrubqycydgzxmyj1").val();
		    	        var xmyjjssj = jsjs;
		    	        var xmyjxmmc = $(".jinrubqycydgzxmyj3").val();
		    	      
		    	        var xmyjgzzy = $(".jinrubqycydgzxmyj4").val();
		    	        var xmyjdrzw = $(".jinrubqycydgzxmyj5").val();
		    	        var xmyjbz = $(".jinrubqycydgzxmyj6").val();
		    	        var csgc = document.getElementById("sd_aa").value;

		    	        //if (xmyjjssj == "") {
		    	        //    xmyjjssj = 'NULL';
		    	        //}
		    	        if (xmyjbz == "") {
		    	            xmyjbz = "无";
		    	        }

		    	        if (xmyjjssj == "")
		    	        {
		    	            xmyjjssj = "无";
		    	        }
		    	        if (csgc == "")
		    	        {
		    	            alert("请选择或者筛选参与项目");
		    	            return false;
		    	        }

		    	        $.post("ygxx/gzxmyjdj",{
		    	            yg: localStorage.getItem("ygbh"),
		    	            qssj: xmyjqssj,
		    	            jssj: xmyjjssj,
		    	            xmmc: xmyjxmmc,
		    	            gzzy: xmyjgzzy,
		    	            drzw: xmyjdrzw,
		    	            bz: xmyjbz,
		    	            csgc:csgc
		    	        }, function (data) {
		    	        	//var data = eval('(' + data + ')');
		    	            if (data.status == "success") {
		    	                alert("提交成功");
		    	                cydgzxmyj_search();
		    	                return;
		    	            } else {
		    	                alert("提交失败");
		    	                return;
		    	            }

		    	        });
		    	    
	    			this.close().remove();
			    	return false;
		    	}
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
		xmyjhetong();
	})

    //在本企业以负责人（总监、总代）中标通知书业绩

	$(".zaibenqyyfzrzbtzsyj").click(function () {
	    dialog({
	        title: '在本企业以负责人（总监、总代）中标通知书业绩-添加',
	        content: '<label class="form-group"><span>报建编号: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj3"/></label><label class="form-group"><span>发包方式: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj3"/></label><label class="form-group"><span>项目名称: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj4"/></label><label class="form-group"><span>计费额(万元): </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj5"/></label><label class="form-group"><span>中标额(万元): </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj6"/></label><label class="form-group"><span>服务周期(天): </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj5"/></label><label class="form-group"><span>起止日期: </span><input type="text" class="common-text btn50 jinrubqycydgzxmyj1"/><input type="text" class="common-text btn50 jinrubqycydgzxmyj2"/></label><label class="form-group"><span>发包单位: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj6"/></label><label class="form-group"><span>监督备案单位: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj6"/></label><label class="form-group"><span>签发日期: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj6"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 jinrubqycydgzxmyj6"/></label>',
	        okValue: '保存',
	        ok: function () {
	            if (!$(".jinrubqycydgzxmyj1").val()) {
	                alert("请填写！");
	                return false;
	            } else {
	                addLine($(".zaibenqyyfzrzbtzsyj"), '<tr><td align=center>', '</td><td><input type=text class=\'common-text btn50\' disabled="disabled" value=\''+ $(".jinrubqycydgzxmyj1").val() + '\'/><input type=text class=\'common-text btn50\' disabled="disabled" value=\''+ $(".jinrubqycydgzxmyj2").val() + '\'/></td><td><input type=text class=\'common-text btn100\' disabled="disabled" value=\''+ $(".jinrubqycydgzxmyj3").val() + '\'/></td><td><input type=text class=\'common-text btn100\' disabled="disabled" value=\''+ $(".jinrubqycydgzxmyj4").val() + '\'/></td><td><input type=text class=\'common-text btn100\' disabled="disabled" value=\''+ $(".jinrubqycydgzxmyj5").val() + '\'/></td><td><input type=text class=\'common-text btn100\' disabled="disabled" value=\''+ $(".jinrubqycydgzxmyj6").val() + '\'/></td><td><a class=editor href=javascript:;>编辑</a><a class=deleteLine href=\'javascript:;\'>删除</a></td></tr>');
	                this.close().remove();
	                
	                return false;
	            }
	        },
	        cancelValue: '取消',
	        cancel: function () { }
	    }).showModal();
	  
	})
    //在本企业以负责人（总监、总代）合同业绩
	$(".zaibenqyyjfzrhtyj").click(function () {
		dialog({
		    title: '在本企业以负责人（总监、总代）合同业绩-添加',
		    content: $('#jinrubqycydgzxmyj').html(),
		    okValue: '保存',
		    ok: function () {
		    	if( !$(".zaibenqyyjfzrhtyj1").val() ){
		    		alert("请填写合同编号！");
		    		return false;
		    	}
		    	else if (!$(".zaibenqyyjfzrhtyj2").val())
		    	{
		    	    alert("请填写项目名称！");
		    	    return false;
		    	}
		    	else if (!$(".zaibenqyyjfzrhtyj2").val()) {
		    	    alert("请填写项目名称！");
		    	    return false;
		    	}
		    	else if (!$(".zaibenqyyjfzrhtyj4").val()) {
		    	    alert("合同额不能为空！");
		    	    return false;
		    	}
		    	else if (!$(".zaibenqyyjfzrhtyj5").val()) {
		    	    alert("合同开工日期不能为空！");
		    	    return false;
		    	}
		    	else if (!$(".zaibenqyyjfzrhtyj6").val()) {
		    	    alert("合同竣工日期不能为空！");
		    	    return false;
		    	}
		    	else if (!$(".zaibenqyyjfzrhtyj7").val()) {
		    	    alert("甲方单位1建设单位不能为空！");
		    	    return false;
		    	}
		    	else if (!$(".zaibenqyyjfzrhtyj8").val()) {
		    	    alert("甲方单位2项目管理不能为空！");
		    	    return false;
		    	}
		    	else {
		    	        if (document.getElementById("sd_a").value == "")
		    	        {
		    	            alert("选择或筛选项目名称");
		    	            return false;
		    	        }
		    	            var ht = document.getElementById("sd_a").value;
		    	        var htbh = $(".zaibenqyyjfzrhtyj1").val();
		    	        var xmmc = $(".zaibenqyyjfzrhtyj2").val();
		    	        var xmzy = document.getElementById("htyjselect").value;
		    	        var the = $(".zaibenqyyjfzrhtyj4").val();
		    	        var htkgrq = $(".zaibenqyyjfzrhtyj5").val();
		    	        var htjgrq=$(".zaibenqyyjfzrhtyj6").val();
		    	        var jfdw1=$(".zaibenqyyjfzrhtyj7").val();
		    	        var jfdw2 = $(".zaibenqyyjfzrhtyj8").val();
		    	        $.post("ygxx/htyjxxdj",{
		    	            yg: localStorage.getItem("ygbh"),
		    	            ht: ht,
		    	            htbh: htbh,//
		    	            xmmc: xmmc,
		    	            xmzy: xmzy,
		    	            the: the,
		    	            htkgrq: htkgrq,
		    	            htjgrq: htjgrq,
		    	            jfdw1:jfdw1,
		    	            jfdw2:jfdw2 
		    	        }, function (data) {
		    	        	//var data= eval('(' + data + ')');
		    	            if (data.status =="success") {
		    	                alert("提交成功");
		    	                htyj_search();
		    	                return;
		    	            } else {
		    	                alert("提交失败");
		    	                return;
		    	            }
		    	        });
	    			this.close().remove();
			    	return false;
		    	}
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
		xmyjhetongs();
	})
 

   
 

    //相关荣誉奖项情况
	$(".xiangguanryjxqk").click(function () {
	    //rymc();
		dialog({
		    title: '相关荣誉奖项情况-添加',
		    content: $('#rongyumingcheng_a').html(),//'<label class="form-group"><span>荣誉: </span><select class="common-text btn100 " id="xgryjxselect" ></select></label>',
		    okValue: '保存',
		    ok: function () {
		    	        $.post("ygxx/ygxgrydj",{
		    	            yg: localStorage.getItem("ygbh"),
		    	            ry: document.getElementById("xgryjxselect").value
		    	        }, function (data) {
		    	        	//var data = eval('(' + data + ')');
		    	            if (data.status == "success") {
		    	                alert("添加成功");
		    	                ryjxxxb_search();
		    	                return;
		    	            } else {
		    	                alert("添加失败");
		    	                return;
		    	            }
		    	        });
		    	    
	    			this.close().remove();
			    	return false;
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
	})
    //荣誉名称
	function rymc()
	{
	   
	    $.api.auth({
	        method: 'ryjxxxb.search',

	        jg: localStorage.getItem("gsbh"), 

	        type: 'before'//Before and after


	    }, function (data) {
	        $("#xgryjxselect").html("");
	        for (var i = 0; i < data.items.length; i++) {
	            $("#xgryjxselect").append(
                       
                    '<option value=""></option><option value="' + data.items[i].lsh + '">' + data.items[i].rymc + '</option>'

                                );
	        }
	    });
	}
    //个人执业证书情况
	$(".gerenzyzsqk").click(function () {
	  
	    dialog({
	        title: '个人执业证书情况-添加',
	        content: '<label class="form-group"><span>请选择证书类别: </span><select class="common-text btn100 " id="grzyzsselect"  style="width:350px"></select><label style="color:red">*</label></label><label class="form-group"><span>颁证机构: </span><input type="text" class="common-text btn100 gerenzyzsqk2" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>发证日期: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 gerenzyzsqk3" style="width:350px"/><label style="color:red">*</label></label><label class="form-group"><span>有效期: </span><input type="radio"  name="rady" value="1"/>有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio"  name="rady" value="2"/>无<label style="color:red">*</label></label><label class="form-group"><span>有效期至: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 gerenzyzsqk4"/></label><label class="form-group"><span>请选择执业印章（卡）: </span><select class="common-text btn100 " id="zyyzkselect"  style="width:350px"><option value="5">有</option><option value="10">无</option><option value="15">其他</option></select><label style="color:red">*</label></label><label class="form-group"><span>证书编号: </span><input type="text" class="common-text btn100 gerenzyzsqk5" style="width:350px"/></label><label class="form-group"><span>资格证号: </span><input type="text" class="common-text btn100 gerenzyzsqk6" style="width:350px"/></label><label class="form-group"><span>注册号: </span><input type="text" class="common-text btn100 gerenzyzsqk7" style="width:350px"/></label><label class="form-group"><span>所学专业: </span><input type="text" class="common-text btn100 gerenzyzsqk8" style="width:350px"/></label><label class="form-group"><span>注册专业一: </span><input type="text" class="common-text btn100 gerenzyzsqk9" style="width:350px"/></label><label class="form-group"><span>注册专业二: </span><input type="text" class="common-text btn100 gerenzyzsqk10" style="width:350px"/></label><label class="form-group"  style="display:none"><span>原件保管方: </span><input type="text" class="common-text btn100 gerenzyzsqk11" style="width:350px"/></label><label class="form-group"><span>请选择保管状态: </span><select class="common-text btn100 " id="bgztselect"  style="width:350px"><option value="0">请选择</option><option value="5">在库</option><option value="10">外借</option><option value="15">长期外挂</option><option value="20">迁出</option></select><label style="color:red">*</label></label><label class="form-group"><span>借用人(单位): </span><input type="text" class="common-text btn100 gerenzyzsqk12" style="width:350px"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 gerenzyzsqk13" style="width:350px"/></label>',
		    okValue: '保存',
		    ok: function () {
		        if (!$(".gerenzyzsqk2").val()) {
		    		alert("请填写颁证机构！");
		    		return false;
		        }
		        else if (!$(".gerenzyzsqk3").val()) {
		            alert("请填写发证日期！");
		            return false;
		        }
		        else {
		            var yxq = $("input[name='rady']:checked").val();//选中的value
		            if (yxq == "")
		            {
		                alert("请选择有效期！");
		                return false; 
		            }
		            if (yxq == "1" && $(".gerenzyzsqk4").val() == "")
		            {
		                alert("请填写有效期至");
		                return false;
		            }
		            var bgzt = document.getElementById("bgztselect").value;
		            if (bgzt == "0")
		            {
		                alert("请选择保管状态");
		                return false;
		            }
		            if ((bgzt == "10" || bgzt == "15") && !$(".gerenzyzsqk12").val())
		            {
		                alert("请填写借用人（单位）！");
		                return false;
		            }
		            if (document.getElementById("grzyzsselect").value == "")
		            {
		                alert("请选择证书类别");
		                return;
		            }
		         
		                var zslb = document.getElementById("grzyzsselect").value;
		                var zczsbh = $(".gerenzyzsqk5").val();
		                if (zczsbh == "")
		                {
		                    zczsbh = null;
		                }
		                var zgzh = $(".gerenzyzsqk6").val();
		                if (zgzh == "")
		                {
		                    zgzh = null;
		                }
		                var zch = $(".gerenzyzsqk7").val();
		                if (zch == "")
		                {
		                    zch = null;
		                }
		                var sxzy = $(".gerenzyzsqk8").val();
		                if (sxzy == "")
		                {
		                    sxzy = null;
		                }
		                var zczy1 = $(".gerenzyzsqk9").val();
		                if (zczy1 == "")
		                {
		                    zczy1 = null;
		                }
		                var zczy2 = $(".gerenzyzsqk10").val();
		                if (zczy2 == "")
		                {
		                    zczy2 = null;
		                }
		                var bzjg = $(".gerenzyzsqk2").val();
		                var qfrq = $(".gerenzyzsqk3").val();
		                yxq = $("input[name='rady']:checked").val();//选中的value
		                var outdate = $(".gerenzyzsqk4").val();
		                if (outdate == "")
		                {
		                    outdate = null;
		                }
		                var zyyz = document.getElementById("zyyzkselect").value;
		                var yjbgf = "15";
		                var bgbm = null;
		                var bgzt = document.getElementById("bgztselect").value;
		                var jyr = $(".gerenzyzsqk12").val();
		                if (jyr == "")
		                {
		                    jyr = null;
		                }
		                var bz = $(".gerenzyzsqk13").val();
		                if (bz == "")
		                {
		                    bz = null;
		                }
		                if (yxq != 1 && yxq != 2)
		                {
		                    alert("请选择是否有有效期");
		                    return false;
		                }
		                $.post("ygxx/zyzgzsdj",{
		                    ssyg: localStorage.getItem("ygbh"),
		                  	zslb:zslb,
		                    zczsbh:zczsbh,
		                    zgzh:zgzh,
		                    zch:zch,
		                    sxzy:sxzy,
		                    zczy1:zczy1,
		                    zczy2:zczy2,
		                    bzjg:bzjg,
		                    qfrq:qfrq,
		                    yxq:yxq,
		                    outdate:outdate,
		                    zyyz:zyyz,
		                    yjbgf:yjbgf,
		                    bgbm:bgbm,
		                    bgzt:bgzt,
		                    jyr:jyr,
		                    bz:bz
		                }, function (data) {
		                	//var data=eval('(' + data + ')');
		                    if (data.status == "success") {
		                        alert("添加成功");
		                        grzyzsqk_search();
		                        return;
		                    } else {
		                        alert("添加失败");
		                        return;
		                    }
		                });
		            this.close().remove();
			        return false;
		    	}
		    },
		    cancelValue: '取消',
		    cancel: function (){}
	    }).showModal();
	    zslb_search();
	})
	function zslb_search()
	{
		var yg=eval('(' + localStorage.getItem("yg") + ')');
	    $.post("ygxx/zyzslbqk",{
	        jg:yg.szjg
	    }, function (data) {
	    	//var data = eval('(' + data + ')');
	        $("#grzyzsselect").html("");
	        if(data.status=="success")
	        for (var i = 0; i < data.items.length; i++) {
	            $("#grzyzsselect").append(
                    '<option value="' + data.items[i].lsh + '">' + data.items[i].zslb + '</option>'
                                );
	        }
	    });
	}
    //父母情况
	$(".fumuqk").click(function(){
		dialog({
		    title: '父母情况-添加',
		    content: '<label class="form-group"><span>姓名: </span><input type="text" class="common-text btn100 fumuqk1"/></label><label class="form-group"><span>身份证号码: </span><input type="text" class="common-text btn100 fumuqk2"  maxlength="18" /></label><label class="form-group"><span>请选择关系: </span><select class="common-text btn100 fumuqk3" id="fumuqka"><option value="1">父亲</option><option value="2">母亲</option></select></label><label class="form-group"><span>出生年月: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 fumuqk4"/></label><label class="form-group"><span>文化程度: </span><input type="text" class="common-text btn100 fumuqk5"/></label><label class="form-group"><span>请选择政治面貌: </span><select class="common-text btn100 fumuqk6" id="fumuzzmm"><option value="1">中共党员（含预备）</option><option value="2">民主党派</option><option value="3">群众</option><option value="4">共青团员</option></select></label><label class="form-group"><span>户籍所在地: </span><input type="text" class="common-text btn100 fumuqk7"/></label><label class="form-group"><span>工作单位: </span><input type="text" class="common-text btn100 fumuqk8"/></label><label class="form-group"><span>职务: </span><input type="text" class="common-text btn100 fumuqk9"/></label><label class="form-group"><span>手机号码: </span><input type="text" class="common-text btn100 fumuqk10"  maxlength="11" /></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 fumuqk11"/></label>',
		    okValue: '保存',
		    ok: function () {
		    	if( !$(".fumuqk1").val() ){
		    		alert("请填写姓名！");
		    		return false;
		    	}
		    
		    	else {
		    	    var xm = $(".fumuqk1").val();
		    	    var sfzhm = $(".fumuqk2").val();
		    	    var gx = document.getElementById("fumuqka").value;//关系
		    	    var csny = $(".fumuqk4").val();
		    	    var whcd = $(".fumuqk5").val();
		    	    var zzmm = document.getElementById("fumuzzmm").value;
		    	    var hjszd = $(".fumuqk7").val();
		    	    var gzdw = $(".fumuqk8").val();
		    	    var zw = $(".fumuqk9").val();
		    	    var sjhm = $(".fumuqk10").val();
		    	    var bz = $(".fumuqk11").val();
		    	    if (csny == "")
		    	    {
		    	        csny = null;
		    	    }
		    	    if (whcd == "")
		    	    {
		    	        whcd = null;
		    	    }
		    	    if (hjszd == "")
		    	    {
		    	        hjszd = null;
		    	    }
		    	    if (gzdw == "")
		    	    {
		    	        gzdw = null;
		    	    }
		    	    if (zw == "")
		    	    {
		    	        zw = null;
		    	    }
		    	    if (sjhm == "")
		    	    {
		    	        sjhm = null;
		    	    }
		    	    if (bz == "")
		    	    {
		    	        bz = null;
		    	    }
		    	    if (sfzhm == "")
		    	    {
		    	        sfzhm = null;
		    	    }
		    	 
		    	        $.post("ygxx/fmqkxxdj",{
		    	            yg:localStorage.getItem("ygbh"),
                            xm:xm,
                            sfzhm:sfzhm,
                            gx:gx,
                            csny:csny,
                            whcd:whcd,
                            zzmm:zzmm,
                            hjszd:hjszd,
                            gzdw:gzdw,
                            zw:zw,
                            sjhm:sjhm,
                            bz:bz
		    	        }, function (data) {
		    	        	//var data = eval('(' + data + ')');
		    	            if(data.status=="success")
		    	            {
		    	                alert("添加成功");
		    	                fumuqk_search();
		    	                return;
		    	            }else
		    	            {
		    	                alert("添加失败");
		    	                return;
		    	            }
		    	        });
		    	    
	    			//addLine($(".fumuqk"), '<tr><td><input type="text" class="common-text btn100" disabled="disabled" value="'+$(".fumuqk1").val()+'"/></td><td><input type="text" class="common-text btn100" disabled="disabled" value="'+$(".fumuqk2").val()+'"/></td><td><input type="text" class="common-text btn100" disabled="disabled" value="'+$(".fumuqk3").val()+'"/></td><td><input type="text" class="common-text btn100" disabled="disabled" value="'+$(".fumuqk4").val()+'"/></td><td><input type="text" class="common-text btn100" disabled="disabled" value="'+$(".fumuqk5").val()+'"/></td><td><input type="text" class="common-text btn100" disabled="disabled" value="'+$(".fumuqk6").val()+'"/></td><td><input type="text" class="common-text btn100" disabled="disabled" value="'+$(".fumuqk7").val()+'"/></td><td><input type="text" class="common-text btn100" disabled="disabled" value="'+$(".fumuqk8").val()+'"/></td><td><input type="text" class="common-text btn100" disabled="disabled" value="'+$(".fumuqk9").val()+'"/></td><td><input type="text" class="common-text btn100" disabled="disabled" value="'+$(".fumuqk10").val()+'"/></td><td><input type="text" class="common-text btn100" disabled="disabled" value="'+$(".fumuqk11").val()+'"/></td><td><a class=editor href=javascript:;>编辑</a><a class="deleteLine" href="javascript:;">删除</a></td></tr>');
			        this.close().remove();
			    	return false;
		    	}
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
	})

	//配偶情况
	$(".peiouqk").click(function(){
		dialog({
		    title: '配偶情况-添加',
		    content: '<label class="form-group"><span>姓名: </span><input type="text" class="common-text btn100 peiouqk1"/></label><label class="form-group"><span>身份证号码: </span><input type="text" class="common-text btn100 peiouqk2" maxlength="18"/></label><label class="form-group"><span>婚姻登记时间: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 peiouqk3"/></label><label class="form-group"><span>出生年月: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 peiouqk4"/></label><label class="form-group"><span>文化程度: </span><input type="text" class="common-text btn100 peiouqk5"/></label><label class="form-group"><span>请选择政治面貌: </span><select class="common-text btn100 peiouqk6" id="peiouqkzzmm"><option value="1">中共党员（含预备）</option><option value="2">民主党派</option><option value="3">群众</option><option value="4">共青团员</option></select></label><label class="form-group"><span>户籍所在地: </span><input type="text" class="common-text btn100 peiouqk7"/></label><label class="form-group"><span>工作单位: </span><input type="text" class="common-text btn100 peiouqk8"/></label><label class="form-group"><span>职务: </span><input type="text" class="common-text btn100 peiouqk9"/></label><label class="form-group"><span>手机号码: </span><input type="text" class="common-text btn100 peiouqk10"maxlength="11"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 peiouqk11"/></label>',
		    okValue: '保存',
		    ok: function () {
		    	if( !$(".peiouqk1").val() ){
		    		alert("请填写姓名！");
		    		return false;
		    	} else {
		    
		    	    var xm = $(".peiouqk1").val();
		    	    var sfzhm = $(".peiouqk2").val();
		    	    var hydjsj = $(".peiouqk3").val();
		    	    var csny = $(".peiouqk4").val();
		    	    var whcd = $(".peiouqk5").val();
		    	    var zzmm = document.getElementById("peiouqkzzmm").value;
		    	    var hjszd = $(".peiouqk7").val();
		    	    var gzdw = $(".peiouqk8").val();
		    	    var zw = $(".peiouqk9").val();
		    	    var sjhm = $(".peiouqk10").val();
		    	    var bz = $(".peiouqk11").val();
                    
		    	    if (sfzhm == "")
		    	    {
		    	        sfzhm = null;
		    	    }
		    	    if (hydjsj == "")
		    	    {
		    	        hydjsj = null;
		    	    }
		    	    if (csny == "")
		    	    {
		    	        csny = null;
		    	    }
		    	    if (whcd == "")
		    	    {
		    	        whcd = null;
		    	    }
		    	    if (hjszd == "")
		    	    {
		    	        hjszd = null;
		    	    }
		    	    if (gzdw == "")
		    	    {
		    	        gzdw = null;
		    	    }
		    	    if (zw == "")
		    	    {
		    	        zw = null;
		    	    }
		    	    if (sjhm == "")
		    	    {
		    	        sjhm = null;
		    	    }
		    	    if (bz == "")
		    	    {
		    	        bz = null;
		    	    }
		    	    $.post("ygxx/poqkxxdj",{
		    	        yg: localStorage.getItem("ygbh"),
		    	        xm:xm,
		    	        sfzhm:sfzhm,
		    	        hydjsj:hydjsj,
		    	        csny:csny,
		    	        whcd:whcd,
		    	        zzmm:zzmm,
		    	        hjszd:hjszd,
		    	        gzdw:gzdw,
		    	        zw:zw,
		    	        sjhm:sjhm,
		    	        bz:bz
		    	    }, function (data) {
		    	    	//var data = eval('(' + data + ')');
		    	        if (data.status == "success") {
		    	            alert("添加成功");
		    	            peiouqk_search();
		    	            return;
		    	        } else {
		    	            alert("添加失败");
		    	            return;
		    	        }
		    	    });
		    	    this.close().remove();
			    	return false;
		    	}
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
	})
    //子女情况
	$(".zinvqk").click(function () {

		dialog({
		    title: '子女情况-添加',
		    content: '<label class="form-group"><span>姓名: </span><input type="text" class="common-text btn100 zinvqk1"/></label><label class="form-group"><span>身份证号码: </span><input type="text" class="common-text btn100 zinvqk2"  maxlength="18"/></label><label class="form-group"><span>性别: </span><input type="radio" class="common-text btn100 zinvqk3" value="1" style="width:50px" name="rdozn"/>男<input type="radio" class="common-text btn100 zinvqk10" value="2" style="width:50px"  name="rdozn"/>女</label><label class="form-group"><span>出生年月: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 zinvqk4"/></label><label class="form-group"><span>请选择教育就职情况: </span><select class="common-text btn100 zinvqk5" id="znselect"><option value="1">学龄前儿童</option><option value="2">在校生</option><option value="3">已毕业参加工作</option></select></label><label class="form-group"><span>户籍所在地: </span><input type="text" class="common-text btn100 zinvqk6"/></label><label class="form-group"><span>在读学校: </span><input type="text" class="common-text btn100 zinvqk7"/></label><label class="form-group"><span>工作单位: </span><input type="text" class="common-text btn100 zinvqk8"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 zinvqk9"/></label>',
		    okValue: '保存',
		    ok: function () {
		    	if( !$(".zinvqk1").val() ){
		    		alert("请填写姓名！");
		    		return false;
		    	} else {
		    	    var xm = $(".zinvqk1").val();
		    	    var sfzhm = $(".zinvqk2").val();
		    	 
		    	    var xb = $("input[name='rdozn']:checked").val();//选中的value
		    	    var csny = $(".zinvqk4").val();
		    	    var jyjzqk = document.getElementById("znselect").value;
		    	    var hjszd = $(".zinvqk6").val();
		    	    var zdxx = $(".zinvqk7").val();
		    	    var gzdw = $(".zinvqk8").val();
		    	    var bz = $(".zinvqk9").val();
		    	    if (xb != 1 && xb != 2)
		    	    {
		    	        alert("请选择性别！");
		    	        return false;
		    	    }
		    	   
		    	        if (sfzhm == "")
		    	        {
		    	            sfzhm = null;
		    	        }
		    	        if (csny == "")
		    	        {
		    	            csny = null;
		    	        }
		    	        if (hjszd == "")
		    	        {
		    	            hjszd = null;
		    	        }
		    	        if (zdxx == "")
		    	        {
		    	            zdxx = null;
		    	        }
		    	        if (gzdw == "")
		    	        {
		    	            gzdw = null;
		    	        }
		    	        if (bz == "")
		    	        {
		    	            bz = null;
		    	        }
		    	        $.post("ygxx/znqkxxdj",{
		    	            yg: localStorage.getItem("ygbh"),
		    	            xm:xm,
		    	            sfzhm:sfzhm,
		    	            xb:xb,
		    	            csny:csny,
		    	            jyjzqk:jyjzqk,
		    	            hjszd:hjszd,
		    	            zdxx:zdxx,
		    	            gzdw:gzdw,
		    	            bz:bz
		    	        }, function (data) {
		    	        	//var data = eval('(' + data + ')');
		    	            if (data.status == "success") {
		    	                alert("添加成功");
		    	                zinvqk_search();
		    	                return;
		    	            } else {
		    	                alert("添加失败");
		    	                return;
		    	            }
		    	        });
		    	    this.close().remove();
			    	return false;
		    	}
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
	})
	
    //紧急情况联系人与联系地址
	$(".jinjiqklxrylxdz").click(function(){
		dialog({
		    title: '紧急情况联系人与联系地址-添加',
		    content: '<label class="form-group"><span>姓名: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz1"/></label><label class="form-group"><span>性别: </span><input type="radio" class="common-text btn100 jinjiqklxrylxdz2" style="width:60px" name="jjlxr" value="1"/>男<input type="radio" class="common-text btn100 jinjiqklxrylxdz8" style="width:60px" name="jjlxr" value="2"/>女</label><label class="form-group"><span>住址: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz3"/></label><label class="form-group"><span>邮编: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz4"/></label><label class="form-group"><span>固定电话: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz5"/></label><label class="form-group"><span>手机号码: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz6" maxlength="11"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz7"/></label>',
		    okValue: '保存',
		    ok: function () {
		    	if( !$(".jinjiqklxrylxdz1").val() ){
		    		alert("请填写姓名！");
		    		return false;
		    	}
		    	else if (!$(".jinjiqklxrylxdz3").val())
		    	{
		    	    alert("请填写住址！");
		    	    return false;
		    	}
		    	else if (!$(".jinjiqklxrylxdz6").val()) {
		    	    alert("请填写手机号码！");
		    	    return false;
		    	}
		    	else {
		    	    var xm = $(".jinjiqklxrylxdz1").val();
		    	    var xb = $("input[name='jjlxr']:checked").val();//选中的value
		    	    var zz = $(".jinjiqklxrylxdz3").val();
		    	    var yb = $(".jinjiqklxrylxdz4").val();
		    	    var gddh = $(".jinjiqklxrylxdz5").val();
		    	    var sjhm = $(".jinjiqklxrylxdz6").val();
		    	    var bz = $(".jinjiqklxrylxdz7").val();
		    	    if (xb != 1 && xb != 2)
		    	    {
		    	        alert("请选择性别！");
		    	        return false;
		    	    }
		    	    
		    	        if (yb == "")
		    	        {
		    	            yb = null;
		    	        }
		    	        if (gddh == "")
		    	        {
		    	            gddh = null;
		    	        }
		    	        if (bz == "")
		    	        {
		    	            bz = null;
		    	        }
		    	        $.post("ygxx/jjlxrxxdj",{
		    	            yg: localStorage.getItem("ygbh"),
		    	            xm:xm,
		    	            xb:xb,
		    	            zz:zz,
		    	            yb:yb,
		    	            gddh:gddh,
		    	            sjhm:sjhm,
		    	            bz:bz
		    	        }, function (data) {
		    	        	//var data = eval('(' + data + ')');
		    	            if (data.status == "success") {
		    	                alert("添加成功");
		    	                jjlxrxxb_search();
		    	                return;
		    	            } else {
		    	                alert("添加失败");
		    	                return;
		    	            }
		    	        });
		    	    
	    			this.close().remove();
			    	return false;
		    	}
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
	})

    //工资卡信息
	$(".gongzikxx").click(function () {
	    
		dialog({
		    title: '工资卡信息-添加',
		    content: '<label class="form-group"><span>姓名: </span><input type="text" class="common-text btn100 gongzikxx1"/></label><label class="form-group"><span>请选择开户银行（全称）: </span><select class="common-text btn100 gongzikxx2" id="khyhselect"></select></label><label class="form-group"><span>账户（卡）号: </span><input type="text" class="common-text btn100 gongzikxx3"/></label><label class="form-group"><span>状态: </span><input type="radio" class="common-text btn100 gongzikxx4" name="gzrad"  style="width:50px"  checked="checked" value="1"/>在用<input type="radio" class="common-text btn100 gongzikxx6" name="gzrad" style="width:50px" value="2"/>弃用</label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 gongzikxx5"/></label>',
		    okValue: '保存',
		    ok: function () {
		    	if( !$(".gongzikxx1").val() ){
		    		alert("请填写姓名！");
		    		return false;
		    	}
		    	else if (!$(".gongzikxx3").val())
		    	{
		    	    alert("请填写账户卡号！");
		    	    return false;
		    	}
		    	else {
		    	  
		    	    //工资卡添加
		    
		    	        var xm = $(".gongzikxx1").val();
		    	        var khyh = document.getElementById("khyhselect").value;
		    	        var zhkh = $(".gongzikxx3").val();
		    	        var zt = $("input[name='gzrad']:checked").val();//选中的value
		    	        var bz = $(".gongzikxx5").val();
		    	        if (bz == "") {
		    	            bz = null;
		    	        }
		    	        $.post("ygxx/gzkxxdj",{
		    	            yg: localStorage.getItem("ygbh"),
		    	            xm: xm,
		    	            khyh: khyh,
		    	            zhkh: zhkh,
		    	            zt: zt,
		    	            bz: bz
		    	        }, function (data) {
		    	        	//var data = eval('(' + data + ')');
		    	            if (data.status == "success") {
		    	                alert("添加成功");
		    	                gzkxxb_search();
		    	                return;
		    	            } else {
		    	                alert("添加失败");
		    	                return;
		    	            }
		    	        });
		    	    
		    	 
	    			this.close().remove();
			    	return false;
		    	}
		    },
		    cancelValue: '取消',
		    cancel: function (){}
		}).showModal();
		khyhxxb_search();
	});
	function khyhxxb_search()
	{
	    $.get("ygxx/khyhxxqk",
	     function (data) {
	    	//var data = eval('(' + data + ')');
	        $("#khyhselect").html("");
	        for (var i = 0; i < data.items.length; i++) {
	            $("#khyhselect").append(

                    '<option value="' + data.items[i].lsh + '">' + data.items[i].khyhqc + '</option>'

                                );
	        }
	    });
	}
});
    function setProgress(wrap, len){
        var len2 = 0;
        wrap.find("input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],input[type='file'],textarea,select").each(function(){
            if( $(this).val() ){
                len2++;
            }
        });
        var radioList = getRadiolist(wrap);
        var checkboxList = getCheckboxlist(wrap);
        for( i in radioList ){
            if( $("input[type='radio'][name='"+radioList[i]+"']").is(":checked") ){
                len2++;
            }
        }
        for( i in checkboxList ){
            if( $("input[type='checkbox'][name='"+checkboxList[i]+"']").is(":checked") ){
                len2++;
            }
        }
        $(".progress .bar").css({"width": (len2*100/len)+"%"}).attr("title", (len2*100/len)+"%");
    }
    function getRadiolist(wrap){
        var _radioList = [];
        var _list = [];
        if( wrap.find("input[type='radio']").length != 0 ){
            wrap.find("input[type='radio']").each(function(){
                _radioList.push( $(this).attr("name") );
            });
            for(var i in _radioList){
                if( _list.indexOf(_radioList[i]) == -1 ){
                    _list.push(_radioList[i]);
                }
            }
        }
        return _list;
    }
    function getCheckboxlist(wrap){
        var _checkboxList = [];
        var _list = [];
        if( wrap.find("input[type='checkbox']").length != 0 ){
            wrap.find("input[type='checkbox']").each(function(){
                _checkboxList.push( $(this).attr("name") );
            });
            for(var i in _checkboxList){
                if( _list.indexOf(_checkboxList[i]) == -1 ){
                    _list.push(_checkboxList[i]);
                }
            }
        }
        return _list;
    }
    function getInputLength(wrap){
        var _length = wrap.find("input[type='text'],input[type='password'],input[type='datetime'],input[type='datetime-local'],input[type='date'],input[type='month'],input[type='time'],input[type='week'],input[type='number'],input[type='email'],input[type='url'],input[type='search'],input[type='tel'],input[type='color'],input[type='file'],textarea,select").length;
        var _radioList = [];
        var _checkboxList = [];
        var _list = [];
        if( wrap.find("input[type='radio'], input[type='checkbox']").length == 0 ){
            return _length;
        }else{
            wrap.find("input[type='radio']").each(function(){
                _radioList.push( $(this).attr("name") );
            });
            wrap.find("input[type='checkbox']").each(function(){
                _checkboxList.push( $(this).attr("name") );
            });
            for(var i in _radioList){
                if( _list.indexOf(_radioList[i]) == -1 ){
                    _list.push(_radioList[i]);
                }
            }
            for(var i in _checkboxList){
                if( _list.indexOf(_checkboxList[i]) == -1 ){
                    _list.push(_checkboxList[i]);
                }
            }
            _length += _list.length;
            return _length;
        }
    }

    // beforeString:前缀字符串   afterString:后缀字符串
    function addLine(t, beforeString, afterString){
        var _tr = $(t).closest(table).find("tr");
        var _order = parseInt(_tr.eq(_tr.length-2).find("td:first-child").html()) + 1;
        //console.log(_tr.length);
        if(beforeString){
            if(afterString){
                _tr.last().before(beforeString+_order+afterString);
            }else{
                _tr.last().before(beforeString);
            }
        }else{
            _tr.last().before("<tr>"+$(t).closest(table).find("tr").eq(3).html()+"</tr>");
        }
    }
    function addLine2(t, beforeString, afterString){
        var _tr = $(t).closest(table).find("tr");
        var _order = parseInt(_tr.eq(_tr.length-2).find("td:first-child").html()) + 1;
        //console.log(_tr.length);
        if(beforeString){
            if(afterString){
                _tr.eq(_tr.length-2).before(beforeString+_order+afterString);
            }else{
                _tr.eq(_tr.length-2).before(beforeString);
            }
        }else{
            _tr.eq(_tr.length-2).before("<tr>"+$(t).closest(table).find("tr").eq(3).html()+"</tr>");
        }
    }


//参加工作以来的工作履历情况
function editorgzllxxb(mod, val, c1, c2, c3, c4, c5, c6, c7, c8, c9) {
    
    dialog({
        title: mod + '修改提示',
        content: '<label class="form-group"><span>工作单位: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk1" value="' + c1 + '"/></label><label class="form-group"><span>起止时间: </span><input type="text"  onclick="WdatePicker()" class="common-text btn50 canjiagzyldgzllqk2" value="' + c2 + '"/><input type="text"  onclick="WdatePicker()" class="common-text btn50 canjiagzyldgzllqk3"   value="' + c3 + '"/></label><label class="form-group"><span>职称: </span><select class="common-text btn100 zczc" id="gzllselect"  ><option value="5">教授级高工</option><option value="10">高级工程师(非农委)</option><option value="15">农委高工</option><option value="20">工程师（非农委）</option><option value="22">农委工程师</option><option value="25">助理工程师</option><option value="30">高级经济师</option><option value="35">经济师</option><option value="36">助理经济师</option><option value="37">高级会计师</option><option value="38">会计师</option><option value="39">助理会计师</option><option value="40">高级政工师</option><option value="41">政工师</option><option value="42">助理政工师</option><option value="43">高级统计师</option> <option value="44">统计师</option><option value="45">助理统计师</option><option value="46">高级审计师</option><option value="47">审计师</option><option value="48">助理审计师</option><option value="49">研究员</option><option value="50">副研究员</option><option value="51">助理研究员</option><option value="52">高级实验师</option><option value="53">实验师</option><option value="54">助理实验师</option><option value="55">技师</option><option value="56">一级律师</option><option value="57">二级律师</option><option value="58">三级律师</option><option value="59">助理律师</option><option value="60">高级编辑</option><option value="61">主任编辑</option><option value="62">编辑</option><option value="63">助理编辑</option><option value="69">其它</option><option value="70">无职称</option></select></label><label class="form-group"><span>职务岗位: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk5" value="' + c5 + '"/></label><label class="form-group"><span>从事工作专业: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk6" value="' + c6 + '"/></label><label class="form-group"><span>证明人: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk7" value="' + c7 + '"/></label><label class="form-group"><span>证明人电话: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk8" value="' + c8 + '"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 canjiagzyldgzllqk9" value="' + c9 + '"/></label>',
        okValue: '保存',
        ok: function () {
            if (!$(".canjiagzyldgzllqk1").val()) {
                                alert("请填写工作单位！");
                                return false;
                            }
                            else if (!$(".canjiagzyldgzllqk2").val()) {
                                alert("请填写起始时间！");
                                return false;
                            }
                            else if (!$(".canjiagzyldgzllqk5").val()) {
                                alert("请填写职务岗位！");
                                return false;
                            }
                            else if (!$(".canjiagzyldgzllqk6").val()) {
                                alert("请填写从事工作专业！");
                                return false;
                            }
                            else if (!$(".canjiagzyldgzllqk7").val()) {
                                alert("请填写证明人！");
                                return false;
                            }
         

                            else {
                                var jsjs = $(".canjiagzyldgzllqk3").val();
                                if (jsjs == ""||jsjs==null||jsjs=="null")
                                {
                                    jsjs = null;
                                }
                                $.post("ygxx/gzllxxgx",{
                                    lsh: val,
                                    gzdw: $(".canjiagzyldgzllqk1").val(),
                                    qssj: $(".canjiagzyldgzllqk2").val(),
                                    jssj: jsjs,
                                    zc: document.getElementById("gzllselect").value,
                                    zw: $(".canjiagzyldgzllqk5").val(),
                                    csgzzy: $(".canjiagzyldgzllqk6").val(),
                                    zmr: $(".canjiagzyldgzllqk7").val(),
                                    zmrdh: $(".canjiagzyldgzllqk8").val(),
                                    bz: $(".canjiagzyldgzllqk9").val()
                                   	}, function (data) {
                                   		//var data = eval('(' + data + ')');
                                        if (data.status == "success") {
                                            alert("修改成功");
                                            gzllxxqk();
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

	var s = document.getElementById('gzllselect');

    //根据文本取到值
    for (var i = 0, len = s.options.length; i < len; i++) {

        if (s.options[i].value == c4) {
            document.getElementById("gzllselect").value = s.options[i].value;
            // 就是你要的值.
        }
    }

}

//培训及继续教育情况
function editorpxjjyqk(mod, val, p1, p2, p3, p4, p5, p6,p7) {

    dialog({
        title: mod + '修改提示',
        content: '<label class="form-group"><span>起始时间: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 peixunjjxjyqk1" value="' + p1 + '" style="width:350px"/></label><label class="form-group"><span>结束时间: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 peixunjjxjyqk7" value="' + p2 + '"  style="width:350px"/></label><label class="form-group"><span>培训机构: </span><input type="text" class="common-text btn100 peixunjjxjyqk2" value="' + p3 + '"  style="width:350px"/></label><label class="form-group"><span>培训（学习）内容: </span><input type="text" class="common-text btn100 peixunjjxjyqk3" value="' + p4 + '"  style="width:350px"/></label><label class="form-group"><span>证书名称: </span><input type="text" class="common-text btn100 peixunjjxjyqk4" value="' + p5 + '"  style="width:350px"/></label><label class="form-group"><span>证书编号: </span><input type="text" class="common-text btn100 peixunjjxjyqk5" value="' + p6 + '"  style="width:350px"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 peixunjjxjyqk6" value="' + p7 + '"  style="width:350px"/></label>',
        okValue: '保存',
        ok: function () {

            if (!$(".peixunjjxjyqk1").val()) {
                alert("请填写起始时间！");
                return false;
            }
            else if (!$(".peixunjjxjyqk7").val()) {
                alert("请填写结束时间！");
                return false;
            }
            else if (!$(".peixunjjxjyqk2").val()) {
                alert("请填写培训机构！");
                return false;
            }
            else if (!$(".peixunjjxjyqk3").val()) {
                alert("请填写培训（学习）内容！");
                return false;
            }
            else if (!$(".peixunjjxjyqk4").val()) {
                alert("请填写证书名称！");
                return false;
            }

            else {
              
              
                    var pxqssj = $(".peixunjjxjyqk1").val();
                    var pxjssj = $(".peixunjjxjyqk7").val();
                    var pxpxjg = $(".peixunjjxjyqk2").val();
                    var pxpxnr = $(".peixunjjxjyqk3").val();
                    var pxzsmc = $(".peixunjjxjyqk4").val();
                    var pxzsbh = $(".peixunjjxjyqk5").val();
                    var pxbz = $(".peixunjjxjyqk6").val();
                    if (pxzsbh == "") {
                        pxzsbh = null;
                    }
                    if (pxbz == "") {
                        pxbz = null;
                    }

                    $.post("ygxx/pxjjxjygx",
                    {
                        lsh: val,
                        qssj: pxqssj,
                        jssj: pxjssj,
                        pxjg: pxpxjg,
                        pxnr: pxpxnr,
                        zsmc: pxzsmc,
                        zsbh: pxzsbh,
                        bz: pxbz,
                    }, function (data) {
                    	//var data=eval('(' + data + ')');
                        if (data.status == "success") {
                            alert("修改成功");
                            peixunjjxjyqk();
                            return;
                        } else {
                            alert("修改失败");
                            return;
                        }

                    });
                this.close().remove();
                progress();
                return false;
            }
        },
        cancelValue: '取消',
        cancel: function () { }
    }).showModal();
}
//职称证书情况
function editorzczsqk(mod, val, cc1, cc2, cc3,cc4,cc5, cc6, cc7,cc8,cc9,cc10) {

    dialog({
        title: mod + '修改提示',
        content: '<label class="form-group"><span>职称: </span><select class="common-text btn100 zczc"   style="width:350px" id="zcselect" value="' + cc1 + '"  ><option value="0">请选择学位</option><option value="5">教授级高工</option><option value="10">高级工程师(非农委)</option><option value="15">农委高工</option><option value="20">工程师（非农委）</option><option value="22">农委工程师</option><option value="25">助理工程师</option><option value="30">高级经济师</option><option value="35">经济师</option><option value="36">助理经济师</option><option value="37">高级会计师</option><option value="38">会计师</option><option value="39">助理会计师</option><option value="40">高级政工师</option><option value="41">政工师</option><option value="42">助理政工师</option><option value="43">高级统计师</option> <option value="44">统计师</option><option value="45">助理统计师</option><option value="46">高级审计师</option><option value="47">审计师</option><option value="48">助理审计师</option><option value="49">研究员</option><option value="50">副研究员</option><option value="51">助理研究员</option><option value="52">高级实验师</option><option value="53">实验师</option><option value="54">助理实验师</option><option value="55">技师</option><option value="56">一级律师</option><option value="57">二级律师</option><option value="58">三级律师</option><option value="59">助理律师</option><option value="60">高级编辑</option><option value="61">主任编辑</option><option value="62">编辑</option><option value="63">助理编辑</option><option value="69">其它</option><option value="70">无职称</option></select></label><label class="form-group"><span>职称专业: </span><input type="text" class="common-text btn100 zhichengzsqk2"  style="width:350px" value="' + cc2 + '"/></label><label class="form-group"><span>钢印单位全称: </span><input type="text" class="common-text btn100 zhichengzsqk3"  style="width:350px" value="' + cc3 + '"/></label><label class="form-group"><span>职称评审委员会全称: </span><input type="text" class="common-text btn100 zhichengzsqk4" style="width:350px" value="' + cc4 + '"/></label><label class="form-group"><span>制（发）证机构: </span><input type="text" class="common-text btn100 zhichengzsqk5"  style="width:350px" value="' + cc5 + '"/></label><label class="form-group"><span>证书编号: </span><input type="text" class="common-text btn100 zhichengzsqk6" value="' + cc6 + '"  style="width:350px"/></label><label class="form-group"><span>评审编号: </span><input type="text" class="common-text btn100 zhichengzsqk7"  style="width:350px" value="' + cc7 + '"/></label><label class="form-group"><span>通过（批准）日期: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 zhichengzsqk8" value="' + cc8 + '"  style="width:350px"/></label><label class="form-group"><span>有效期至: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 zhichengzsqk9" value="' + cc9 + '"  style="width:350px"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 zhichengzsqk10" value="' + cc10 + '"  style="width:350px"/></label>',
        okValue: '保存',
        ok: function () {

            if (!$(".zhichengzsqk2").val()) {
                alert("请填写职称专业！");
                return false;
            } else if (!$(".zhichengzsqk3").val()) {
                alert("请填写钢印单位全称！");
                return false;
            }
            else if (!$(".zhichengzsqk4").val()) {
                alert("请填写职称评审委员会全称！");
                return false;
            }
            else if (!$(".zhichengzsqk5").val()) {
                alert("请填写制（发）证机构！");
                return false;
            }
            else if (!$(".zhichengzsqk6").val()) {
                alert("请填写证书编号！");
                return false;
            }
            else if (!$(".zhichengzsqk7").val()) {
                alert("请填写评审编号！");
                return false;
            }
            else if (!$(".zhichengzsqk8").val()) {
                alert("请填写通过（批准）日期！");
                return false;
            }
            else if (!$(".zhichengzsqk9").val()) {
                alert("请填写有效期至！");
                return false;
            }


            else {
              
                    if (document.getElementById("zcselect").value == "0")
                    {
                        alert("请选择职称！");
                        return false;
                    }
                    var bz = "";
                    if ($(".zhichengzsqk10").val() == "") {
                        bz = null;
                    } else {
                        bz = $(".zhichengzsqk10").val();
                    }
                                $.post("ygxx/zczsgx",
                                {
                                    zc: document.getElementById("zcselect").value,
                                    zy: $(".zhichengzsqk2").val(),
                                    gydwqc: $(".zhichengzsqk3").val(),
                                    zcpswyhqc: $(".zhichengzsqk4").val(),
                                    zzjg: $(".zhichengzsqk5").val(),
                                    zsbh: $(".zhichengzsqk6").val(),
                                    psbh: $(".zhichengzsqk7").val(),
                                    tgrq: $(".zhichengzsqk8").val(),
                                    yxqz: $(".zhichengzsqk9").val(),
                                    bz: bz,
                                    lsh: val
                                }, function (data) {
                                	//var data=eval('(' + data + ')');
                                    if (data.status == "success") {
                                        alert("修改成功");
                                        zczsqk();
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

    //
    var s = document.getElementById('zcselect');

    //根据文本取到值
    for (var i = 0, len = s.options.length; i < len; i++) {

        if (s.options[i].value == cc1) {
            document.getElementById("zcselect").value = s.options[i].value;
            // 就是你要的值.
        }
    }
}
//学位证书情况
function editorxwzsqk(mod, val, xw1, xw2, xw3, xw4, xw5, xw6,xw7,xw8) {

    dialog({
        title: mod + '修改提示',
        content: '<label class="form-group"><span>学校名称: </span><input type="text" class="common-text btn100 xueweizsqk1" value="' + xw1 + '"/></label><label class="form-group"><span>学位: </span><select class="common-text btn100" id="xwxw_a" value="' + xw2 + '"><option value="0">请选择学位</option><option value="5">博士后学位</option><option value="10">博士学位</option><option value="15">硕士学位</option><option value="20">学士学位</option><option value="25">无学位</option></select></label><label class="form-group"><span>学位名称: </span><input type="text" class="common-text btn100 xueweizsqk3" value="' + xw3 + '"/></label><label class="form-group"><span>所学专业: </span><input type="text" class="common-text btn100 xueweizsqk4" value="' + xw4 + '"/></label><label class="form-group"><span>学位评定委员会主席: </span><input type="text" class="common-text btn100 xueweizsqk5" value="' + xw5 + '"/></label><label class="form-group"><span>证书编号: </span><input type="text" class="common-text btn100 xueweizsqk6" value="' + xw6 + '"/></label><label class="form-group"><span>发证日期: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 xueweizsqk7" value="' + xw7 + '"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 xueweizsqk8" value="' + xw8 + '"/></label>',
        okValue: '保存',
        ok: function () {

            if (!$(".xueweizsqk1").val()) {
                alert("请填写学校名称！");
                return false;
            }
            if (!$(".xueweizsqk3").val()) {
                alert("请填写学位名称！");
                return false;
            }
            if (!$(".xueweizsqk4").val()) {
                alert("请填写所学专业！");
                return false;
            }
            if (!$(".xueweizsqk5").val()) {
                alert("请填写学位评定委员会主席！");
                return false;
            }
            if (!$(".xueweizsqk6").val()) {
                alert("请填写证书编号！");
                return false;
            }
            if (!$(".xueweizsqk7").val()) {
                alert("请填写发证日期！");
                return false;
            }


            else {
            
                    var bz = "";
                    if ($(".xueweizsqk8").val() == "")
                    {
                        bz = "";
                    } else
                    {
                        bz = $(".xueweizsqk8").val();
                    }                               
                    $.post("ygxx/xwzsgx",
                                {
                                    lsh: val,
                                    xxmc: $(".xueweizsqk1").val(),
                                    xw: document.getElementById("xwxw_a").value,
                                    xwmc: $(".xueweizsqk3").val(),
                                    sxzy: $(".xueweizsqk4").val(),
                                    xwpdwyhzx: $(".xueweizsqk5").val(),
                                    zsbh: $(".xueweizsqk6").val(),
                                    fzrq: $(".xueweizsqk7").val(),
                                    bz: bz
                                }, function (data) {
                                	//var data=eval('(' + data + ')');
                                    if (data.status == "success") {
                                        alert("修改成功");
                                        xueweizsqk();
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


    var s = document.getElementById('xwxw_a');

    //根据文本取到值
    for (var i = 0, len = s.options.length; i < len; i++) {

        if (s.options[i].value == xw2) {
            document.getElementById("xwxw_a").value = s.options[i].value;
            // 就是你要的值.
        }
    }
}
// 学历证书情况
function editorxlzsqk(mod, val, xl1, xl2, xl3, xl4, xl5, xl6, xl7, xl8, xl9, xl10, xl11, xl12) {
    //职称证书


    dialog({
        title: mod + '修改提示',
        content: '<label class="form-group"><span>学校名称: </span><input type="text" class="common-text btn100 xuelizsqk1" value="' + xl1 + '"  id="xxmc_xl"/></label><label class="form-group xuelizsqk2"><span>学历: </span><select class="common-text btn100" id="xl" value="' + xl2 + '"><option value="5">高中、中专</option><option value="10">大专</option><option value="15">本科</option><option value="20">硕士研究生</option><option value="25">MBA、EMBA</option><option value="30">工硕</option><option value="35">博士</option><option value="40">博士后</option></select></label><label class="form-group"><span>学制（年）:</span><input type="text" class="common-text btn100 xuelizsqk3" value="' + xl3 + '" id="xzn"/></label><label class="form-group"><span>学习形式: </span><select class="common-text btn100" id="xxxs" value="' + xl4 + '"><option value="5">全日制</option><option value="10">在职</option><option value="15">自考</option><option value="20">党校</option><option value="25">函授</option><option value="30">其它</option></select></label><label class="form-group"><span>所学专业: </span><input type="text" class="common-text btn100 xuelizsqk5" value="' + xl5 + '" id="sxzy"/></label><label class="form-group"><span>校（院）长: </span><input type="text" class="common-text btn100 xuelizsqk6" value="' + xl6 + '" id="xyz"/></label><label class="form-group"><span>起止时间: </span><input type="text"  onclick="WdatePicker()" class="common-text btn50 xuelizsqk7" value="' + xl7 + '" id="kssj"/><input type="text"  onclick="WdatePicker()" class="common-text btn50 xuelizsqk8" value="' + xl8 + '" id="jssj"/></label><label class="form-group"><span>证书编号: </span><input type="text" class="common-text btn100 xuelizsqk9" value="' + xl9 + '" id="zsbh"/></label><label class="form-group"><span>发证日期: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 xuelizsqk10" value="' + xl10 + '" id="fzrq"/></label><label class="form-group"><span>电子注册码: </span><input type="text" class="common-text btn100 xuelizsqk11" value="' + xl11 + '" id="dzzcm"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 xuelizsqk12" id="bz" value="' + xl12 + '"/></label>',
        okValue: '保存',
        ok: function () {

            if (!$(".xuelizsqk1").val()) {
                alert("请填写学校名称！");
                return false;
            }
            else if (!$(".xuelizsqk3").val()) {
                alert("请填写学年制！");
                return false;
            }
            else if (!$(".xuelizsqk5").val()) {
                alert("请填所学专业名称！");
                return false;
            } else if (!$(".xuelizsqk6").val()) {
                alert("请填校（院）长名称！");
                return false;
            }
            else if (!$(".xuelizsqk7").val()) {
                alert("请选择起止时间！");
                return false;
            }
            else if (!$(".xuelizsqk8").val()) {
                alert("请选择起止时间！");
                return false;
            }
            else if (!$(".xuelizsqk9").val()) {
                alert("请填写证书编号！");
                return false;
            }
            else if (!$(".xuelizsqk10").val()) {
                alert("请选择发证日期！");
                return false;
            }


            else {
          
                    if (document.getElementById("xl").value == "0")
                    {
                        alert("请选择学历");
                        return false;
                    }
                    if (document.getElementById("xxxs").value == "0")
                    {
                        alert("请选择学习形式");
                        return false;
                    }
                    var dzzcms = "";
                    if ($(".xuelizsqk11").val() == "") {
                        dzzcms = "无";
                    } else {
                        dzzcms = $(".xuelizsqk11").val();
                    }
                    var bzs = "";
                    if ($(".xuelizsqk12").val() == "") {
                        bzs = "无";
                    } else {
                        bzs = $(".xuelizsqk12").val();
                    }
                    $.post("ygxx/xlzsgx",
                    {
                        lsh :val,
                        xxmc: $(".xuelizsqk1").val(),
                        xl :document.getElementById("xl").value ,
                        xzn: $(".xuelizsqk3").val(),
                        xxxs: document.getElementById("xxxs").value,
                        sxzy: $(".xuelizsqk5").val(),
                        xyz: $(".xuelizsqk6").val(),
                        qssj: $(".xuelizsqk7").val(),
                        jssj: $(".xuelizsqk8").val(),
                        zsbh: $(".xuelizsqk9").val(),
                        fzrq: $(".xuelizsqk10").val(),
                        dzzcm: dzzcms,
                        bz: bzs
                    }, 
                    function (data) {
                    	//var data=eval('(' + data + ')');
                        if (data.status == "success") {
                            xlzsqk();
                            alert("修改成功");

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


    var s = document.getElementById('xl');

    //根据文本取到值
    for (var i = 0, len = s.options.length; i < len; i++) {

        if (s.options[i].value == xl2) {
            document.getElementById("xl").value = s.options[i].value;
            // 就是你要的值.
        }
    }


    var ss = document.getElementById('xxxs');

    //根据文本取到值
    for (var i = 0, len = ss.options.length; i < len; i++) {

        if (ss.options[i].value == xl4) {
            document.getElementById("xxxs").value = ss.options[i].value;
            // 就是你要的值.
        }
    }
}
function xl_sea()
{
    var zc = document.getElementById('xxmc_xl');

    //根据文本取到值
    for (var kk = 0, len = zc.options.length; kk < len; kk++) {

        if (zc.options[kk].value == xl) {
            document.getElementById("xxmc_xl").value = zc.options[kk].value;
            // 就是你要的值.
        }
    }
}
//个人执业证书情况
var dzzgx = "";
function editorgrzyzsqk(mod, val, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12,g13,g14,g15,g16) {
    dzzgx = g1;
    if (g12 != 15)
    {
        alert("您无权修改！");
        return;
    }
    zslb_searcha();
    dialog({
        title: mod + '修改提示',
        content: '<label class="form-group"><span>证书类别: </span><select class="common-text btn100 " id="grzyzsselect_a" style="width:350px" ></select></label><label class="form-group"><span>颁证机构: </span><input type="text" class="common-text btn100 gerenzyzsqk22" value="' + g2 + '"  style="width:350px"/></label><label class="form-group"><span>发证日期: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 gerenzyzsqk33" value="' + g3 + '"  style="width:350px"/></label><label class="form-group"><span>有效期: </span><input type="radio"  name="radyy" value="1"/>有&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio"  name="radyy" value="2"/>无</label><label class="form-group"><span>有效期至: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 gerenzyzsqk44"  style="width:350px" value="' + g4 + '"/></label><label class="form-group"><span>执业印章（卡）: </span><select class="common-text btn100 " id="zyyzkselectt"   style="width:350px"><option value="5">有</option><option value="10">无</option><option value="15">其他</option></select></label><label class="form-group"><span>证书编号: </span><input type="text" class="common-text btn100 gerenzyzsqk55" value="' + g5 + '"  style="width:350px"/></label><label class="form-group"><span>资格证号: </span><input type="text" class="common-text btn100 gerenzyzsqk66"  style="width:350px" value="' + g6 + '"/></label><label class="form-group"><span>注册号: </span><input type="text" class="common-text btn100 gerenzyzsqk77"  style="width:350px" value="' + g7 + '"/></label><label class="form-group"><span>所学专业: </span><input type="text" class="common-text btn100 gerenzyzsqk88" value="' + g8 + '"  style="width:350px"/></label><label class="form-group"><span>注册专业一: </span><input type="text" class="common-text btn100 gerenzyzsqk99" value="' + g9 + '"  style="width:350px"/></label><label class="form-group"><span>注册专业二: </span><input type="text" class="common-text btn100 gerenzyzsqk100" value="' + g10 + '"  style="width:350px"/></label><label class="form-group"  style="display:none"><span>原件保管方: </span><input type="text" class="common-text btn100 gerenzyzsqk111" value="' + g11 + '"  style="width:350px"/></label><label class="form-group"><span>保管状态: </span><select class="common-text btn100 " id="bgztselectt"  style="width:350px" ><option value="0">请选择</option><option value="5">在库</option><option value="10">外借</option><option value="15">长期外挂</option><option value="20">迁出</option></select></label><label class="form-group"><span>借用人(单位): </span><input type="text" class="common-text btn100 gerenzyzsqk122" id="jyr122"  style="width:350px"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 gerenzyzsqk133" id="bz133"  style="width:350px"/></label>',
        okValue: '保存',
        ok: function () {

            if (!$(".gerenzyzsqk22").val()) {
                alert("请填写颁证机构！");
                return false;
            }
            else if (!$(".gerenzyzsqk33").val()) {
                alert("请填写发证日期！");
                return false;
            }
            else {
                var yxq = $("input[name='radyy']:checked").val();//选中的value
                if (yxq == "") {
                    alert("请选择有效期！");
                    return false;
                }
                if (yxq == "1" && $(".gerenzyzsqk44").val() == "") {
                    alert("请填写有效期至");
                }
                var bgzt = document.getElementById("bgztselectt").value;
                if (bgzt == "0") {
                    alert("请选择保管状态");
                    return false;
                }
                if (bgzt == "10" || bgzt == "15" && !$(".gerenzyzsqk122").val()) {
                    alert("请填写借用人（单位）！");
                    return false;
                }
                    var zslb = document.getElementById("grzyzsselect_a").value;
                    var zczsbh = $(".gerenzyzsqk55").val();
                    if (zczsbh == "") {
                        zczsbh = "无";
                    }
                    var zgzh = $(".gerenzyzsqk66").val();
                    if (zgzh == "") {
                        zgzh = "无";
                    }
                    var zch = $(".gerenzyzsqk77").val();
                    if (zch == "") {
                        zch = "无";
                    }
                    var sxzy = $(".gerenzyzsqk88").val();
                    if (sxzy == "") {
                        sxzy = "无";
                    }
                    var zczy1 = $(".gerenzyzsqk99").val();
                    if (zczy1 == "") {
                        zczy1 = "无";
                    }
                    var zczy2 = $(".gerenzyzsqk100").val();
                    if (zczy2 == "") {
                        zczy2 = "无";
                    }
                    var bzjg = $(".gerenzyzsqk22").val();
                    var qfrq = $(".gerenzyzsqk33").val();
                    yxq = $("input[name='radyy']:checked").val();//选中的value
                    var outdate = $(".gerenzyzsqk44").val();
                    if (outdate == "" || outdate == "null") {
                        outdate = "无";
                    }
                    var zyyz = document.getElementById("zyyzkselectt").value;
                    var yjbgf = "15";
                    var bgbm = "null";
                    var bgzt = document.getElementById("bgztselectt").value;
                    var jyr = $(".gerenzyzsqk122").val();
                    if (jyr == "") {
                        jyr = "无";
                    }
                    var bz = $(".gerenzyzsqk133").val();
                    if (bz == "") {
                        bz = "无";
                    }
                    $.post("ygxx/zyzgzsgx",
                    {
                        zslb: zslb,
                        zczsbh: zczsbh,
                        zgzh: zgzh,
                        zch: zch,
                        sxzy: sxzy,
                        zczy1: zczy1,
                        zczy2: zczy2,
                        bzjg: bzjg,
                        qfrq: qfrq,
                        yxq: yxq,
                        outdate: outdate,
                        zyyz: zyyz,
                        yjbgf: yjbgf,
                        bgbm: bgbm,
                        bgzt: bgzt,
                        jyr: jyr,
                        bz: bz,
                        id:val,
                    }, function (data) {
                    	//var data= eval('(' + data + ')');
                        if (data.status == "success") {
                            alert("修改成功");
                            grzyzsqk_search();
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
    //
    var temp = g13;
    var rad = document.getElementsByName("radyy");

    for (var i = 0; i < rad.length; i++) {
        if (rad[i].value == temp) {
            rad[i].checked = true;
            ;
        }
    }
    
    var s = document.getElementById('bgztselectt');

    //根据文本取到值
    for (var i = 0, len = s.options.length; i < len; i++) {

        if (s.options[i].value == g14) {
            document.getElementById("bgztselectt").value = s.options[i].value;
            // 就是你要的值.
        }
    }
    document.getElementById("jyr122").value = g15;
    document.getElementById("bz133").value = g16;
   
}

function zslb_searcha() {
	var yg=eval('(' + localStorage.getItem("yg") + ')');
    $.post("ygxx/zyzslbqk",{
        jg: yg.szjg
        }, function (data) {
        	//var data= eval('(' + data + ')');
       	 	$("#grzyzsselect_a").html("");
       	 	if(data.status=="success")
        	for (var i = 0; i < data.items.length; i++) {
            $("#grzyzsselect_a").append( 
                '<option value="' + data.items[i].lsh + '">' + data.items[i].zslb + '</option>'

                            );
        }
        //关系
        var s = document.getElementById('grzyzsselect_a');
        ;
        //根据文本取到值
        for (var i = 0, len = s.options.length; i < len; i++) {
            
            if (s.options[i].value == dzzgx) {
                document.getElementById("grzyzsselect_a").value = s.options[i].value;
                // 就是你要的值.
            }
        }
    });
}

//父母情况
function editorfumuqk(mod, val, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11) {

   
    dialog({
        title: mod + '修改提示',
        content: '<label class="form-group"><span>姓名: </span><input type="text" class="common-text btn100 fumuqk11" value="' + f1 + '"/></label><label class="form-group"><span>身份证号码: </span><input type="text" class="common-text btn100 fumuqk22"  maxlength="18" value="' + f2 + '" /></label><label class="form-group"><span>关系: </span><select class="common-text btn100 fumuqk33" id="fumuqkaa" value="' + f3 + '"><option value="1">父亲</option><option value="2">母亲</option></select></label><label class="form-group"><span>出生年月: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 fumuqk44" value="' + f4 + '"/></label><label class="form-group"><span>文化程度: </span><input type="text" class="common-text btn100 fumuqk55" value="' + f5 + '"/></label><label class="form-group"><span>政治面貌: </span><select class="common-text btn100 fumuqk66" id="fumuzzmmm" value="' + f6 + '"><option value="1">中共党员（含预备）</option><option value="2">民主党派</option><option value="3">群众</option><option value="4">共青团员</option></select></label><label class="form-group"><span>户籍所在地: </span><input type="text" class="common-text btn100 fumuqk77" value="' + f7 + '"/></label><label class="form-group"><span>工作单位: </span><input type="text" class="common-text btn100 fumuqk88" value="' + f8 + '"/></label><label class="form-group"><span>职务: </span><input type="text" class="common-text btn100 fumuqk99" value="' + f9 + '"/></label><label class="form-group"><span>手机号码: </span><input type="text" class="common-text btn100 fumuqk100" value="' + f10 + '" maxlength="11" /></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 fumuqk111" value="' + f11 + '"/></label>',
        okValue: '保存',
        ok: function () {

            if (!$(".fumuqk11").val()) {
                alert("请填写姓名！");
                return false;
            }

            else {
                var xm = $(".fumuqk11").val();
                var sfzhm = $(".fumuqk22").val();
                var gx = document.getElementById("fumuqkaa").value;//关系
                var csny = $(".fumuqk44").val();
                var whcd = $(".fumuqk55").val();
                var zzmm = document.getElementById("fumuzzmmm").value;
                var hjszd = $(".fumuqk77").val();
                var gzdw = $(".fumuqk88").val();
                var zw = $(".fumuqk99").val();
                var sjhm = $(".fumuqk100").val();
                var bz = $(".fumuqk111").val();
                if (csny == "" || csny == "null") {
                    csny = null;
                }
                if (whcd == "" || whcd == "null") {
                    whcd = null;
                }
                if (hjszd == "" || hjszd == "null") {
                    hjszd = null;
                }
                if (gzdw == "" || gzdw == "null") {
                    gzdw = null;
                }
                if (zw == "" || zw == "null") {
                    zw = null;
                }
                if (sjhm == "" || sjhm == "null") {
                    sjhm = null;
                }
                if (bz == "" || bz == "null") {
                    bz = null;
                }
                if (sfzhm == "" || sfzhm == "null")
                {
                    sfzhm = null;
                }
              
                    $.post("ygxx/fmqkxxgx",{
                        lsh:val,
                        xm: xm,
                        sfzhm: sfzhm,
                        gx: gx,
                        csny: csny,
                        whcd: whcd,
                        zzmm: zzmm,
                        hjszd: hjszd,
                        gzdw: gzdw,
                        zw: zw,
                        sjhm: sjhm,
                        bz: bz
                    }, function (data) {
                    //	var data = eval('(' + data + ')');
                        if (data.status == "success") {
                            alert("修改成功");
                            fumuqk_search();
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
    //关系
    var s = document.getElementById('fumuqkaa');

    //根据文本取到值
    for (var i = 0, len = s.options.length; i < len; i++) {

        if (s.options[i].value == f3) {
            document.getElementById("fumuqkaa").value = s.options[i].value;
            // 就是你要的值.
        }
    }
    //政治面貌
    var ss = document.getElementById('fumuzzmmm');

    //根据文本取到值
    for (var i = 0, len = ss.options.length; i < len; i++) {

        if (ss.options[i].value == f6) {
            document.getElementById("fumuzzmmm").value = ss.options[i].value;
            // 就是你要的值.
        }
    }
}
//配偶情况
function editorpeiouqk(mod, val, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {

    dialog({
        title: mod + '修改提示',
        content: '<label class="form-group"><span>姓名: </span><input type="text" class="common-text btn100 peiouqk11" value="' + p1 + '"/></label><label class="form-group"><span>身份证号码: </span><input type="text" class="common-text btn100 peiouqk22" maxlength="18" value="' + p2 + '"/></label><label class="form-group"><span>婚姻登记时间: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 peiouqk33" value="' + p3 + '"/></label><label class="form-group"><span>出生年月: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 peiouqk44" value="' + p4 + '"/></label><label class="form-group"><span>文化程度: </span><input type="text" class="common-text btn100 peiouqk55" value="' + p5 + '"/></label><label class="form-group"><span>政治面貌: </span><select class="common-text btn100 peiouqk66" id="peiouqkzzmm_a" value="' + p6 + '"><option value="1">中共党员（含预备）</option><option value="2">民主党派</option><option value="3">群众</option><option value="4">共青团员</option></select></label><label class="form-group"><span>户籍所在地: </span><input type="text" class="common-text btn100 peiouqk77" value="' + p7 + '"/></label><label class="form-group"><span>工作单位: </span><input type="text" class="common-text btn100 peiouqk88" value="' + p8 + '"/></label><label class="form-group"><span>职务: </span><input type="text" class="common-text btn100 peiouqk99" value="' + p9 + '"/></label><label class="form-group"><span>手机号码: </span><input type="text" class="common-text btn100 peiouqk100"maxlength="11" value="' + p10 + '"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 peiouqk111" value="' + p11 + '"/></label>',
        okValue: '保存',
        ok: function () {

            if (!$(".peiouqk11").val()) {
                alert("请填写姓名！");
                return false;
            } else {
              
                    var xm = $(".peiouqk11").val();
                    var sfzhm = $(".peiouqk22").val();
                    var hydjsj = $(".peiouqk33").val();
                    var csny = $(".peiouqk44").val();
                    var whcd = $(".peiouqk55").val();
                    var zzmm = document.getElementById("peiouqkzzmm_a").value;
                    var hjszd = $(".peiouqk77").val();
                    var gzdw = $(".peiouqk88").val();
                    var zw = $(".peiouqk99").val();
                    var sjhm = $(".peiouqk100").val();
                    var bz = $(".peiouqk111").val();

                    if (sfzhm == "" || sfzhm == "null") {
                        sfzhm = "无";
                    }
                    if (hydjsj == "" || hydjsj == "null") {
                        hydjsj = "无";
                    }
                    if (csny == "" || csny == "null") {
                        csny = "无";
                    }
                    if (whcd == "" || whcd == "null") {
                        whcd = "无";
                    }
                    if (hjszd == "" || hjszd == "null") {
                        hjszd = "无";
                    }
                    if (gzdw == "" || gzdw == "null") {
                        gzdw = "无";
                    }
                    if (zw == "" || zw == "null") {
                        zw = "无";
                    }
                    if (sjhm == "" || sjhm == "null") {
                        sjhm = "无";
                    }
                    if (bz == "" || bz == "null") {
                        bz = "无";
                    }
                    $.post("ygxx/poqkxxgx",{
                        lsh: val,
                        xm: xm,
                        sfzhm: sfzhm,
                        hydjsj: hydjsj,
                        csny: csny,
                        whcd: whcd,
                        zzmm: zzmm,
                        hjszd: hjszd,
                        gzdw: gzdw,
                        zw: zw,
                        sjhm: sjhm,
                        bz: bz
                    }, function (data) {
                    //	var data = eval('(' + data + ')');
                        if (data.status == "success") {
                            alert("修改成功");
                            peiouqk_search();
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
    //
    var s = document.getElementById('peiouqkzzmm_a');

    //根据文本取到值
    for (var i = 0, len = s.options.length; i < len; i++) {

        if (s.options[i].value == p6) {
            document.getElementById("peiouqkzzmm_a").value = s.options[i].value;
            // 就是你要的值.
        }
    }
}
//子女情况
function editorzinvqk(mod, val, z1, z2, z3, z4, z5, z6, z7, z8, z9) {
  
    
    dialog({
        title: mod + '修改提示',
        content: '<label class="form-group"><span>姓名: </span><input type="text" class="common-text btn100 zinvqk11" value="' + z1 + '"/></label><label class="form-group"><span>身份证号码: </span><input type="text" class="common-text btn100 zinvqk22"  value="' + z2 + '"/></label><label class="form-group"><span>性别: </span><input type="radio" class="common-text btn100 zinvqk33" value="1" style="width:50px" name="rdozn_a"/>男<input type="radio" class="common-text btn100 zinvqk100" value="2" style="width:50px"  name="rdozn_a"/>女</label><label class="form-group"><span>出生年月: </span><input type="text"  onclick="WdatePicker()" class="common-text btn100 zinvqk44"  value="' + z4 + '"/></label><label class="form-group"><span>教育就职情况: </span><select class="common-text btn100 zinvqk55" id="znselect_a"  value="' + z5 + '"><option value="1">学龄前儿童</option><option value="2">在校生</option><option value="3">已毕业参加工作</option></select></label><label class="form-group"><span>户籍所在地: </span><input type="text" class="common-text btn100 zinvqk66"  value="' + z6 + '"/></label><label class="form-group"><span>在读学校: </span><input type="text" class="common-text btn100 zinvqk77"  value="' + z7 + '"/></label><label class="form-group"><span>工作单位: </span><input type="text" class="common-text btn100 zinvqk88"  value="' + z8 + '"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 zinvqk99"  value="' + z9 + '"/></label>',
        okValue: '保存',
        ok: function () {

            if (!$(".zinvqk11").val()) {
                alert("请填写姓名！");
                return false;
            } else {
                var xm = $(".zinvqk11").val();
                var sfzhm = $(".zinvqk22").val();

                var xb = $("input[name='rdozn_a']:checked").val();//选中的value
                var csny = $(".zinvqk44").val();
                var jyjzqk = document.getElementById("znselect_a").value;
                var hjszd = $(".zinvqk66").val();
                var zdxx = $(".zinvqk77").val();
                var gzdw = $(".zinvqk88").val();
                var bz = $(".zinvqk99").val();
                if (xb != 1 && xb != 2) {
                    alert("请选择性别！");
                    return false;
                }
               
                if (sfzhm == "" || sfzhm=="null") {
                        sfzhm = null;
                    }
                if (csny == "" || csny == "null") {
                        csny = null;
                    }
                if (hjszd == "" || hjszd == "null") {
                        hjszd = null;
                    }
                if (zdxx == "" || zdxx == "null") {
                        zdxx = null;
                    }
                if (gzdw == "" || gzdw == "null") {
                        gzdw = null;
                    }
                if (bz == "" || bz == "null") {
                        bz = null;
                    }
                    $.post("ygxx/znqkxxgx",{
                        lsh: val,
                        xm: xm,
                        sfzhm: sfzhm,
                        xb: xb,
                        csny: csny,
                        jyjzqk: jyjzqk,
                        hjszd: hjszd,
                        zdxx: zdxx,
                        gzdw: gzdw,
                        bz: bz
                    }, function (data) {
                    	//var data = eval('(' + data + ')');
                        if (data.status == "success") {
                            alert("修改成功");
                            zinvqk_search();
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
    //性别
    var temp = z3;
    var rad = document.getElementsByName("rdozn_a");

    for (var i = 0; i < rad.length; i++) {
        if (rad[i].value == temp) {
            rad[i].checked = true;
        }
    }
    //教育就职情况
    var s = document.getElementById('znselect_a');

    //根据文本取到值
    for (var i = 0, len = s.options.length; i < len; i++) {

        if (s.options[i].value == z5) {
            document.getElementById("znselect_a").value = s.options[i].value;
            // 就是你要的值.
        }
    }
}


//紧急情况联系人与联系地址
function editorjjlxrqk(mod, val, j1, j2, j3, j4, j5, j6, j7) {
    dialog({
        title: mod + '修改提示',
        content: '<label class="form-group"><span>姓名: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz11" value="' + j1 + '"/></label><label class="form-group"><span>性别: </span><input type="radio" class="common-text btn100 jinjiqklxrylxdz22" style="width:60px" name="jjlxra" value="1"/>男<input type="radio" class="common-text btn100 jinjiqklxrylxdz88" style="width:60px" name="jjlxra" value="2"/>女</label><label class="form-group"><span>住址: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz33" value="' + j3 + '"/></label><label class="form-group"><span>邮编: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz44"  value="' + j4 + '"/></label><label class="form-group"><span>固定电话: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz55"  value="' + j5 + '"/></label><label class="form-group"><span>手机号码: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz66"  value="' + j6 + '" maxlength="11"/></label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 jinjiqklxrylxdz77"  value="' + j7 + '"/></label>',
        okValue: '保存',
        ok: function () {

            if (!$(".jinjiqklxrylxdz11").val()) {
                alert("请填写姓名！");
                return false;
            }
            else if (!$(".jinjiqklxrylxdz33").val()) {
                alert("请填写住址！");
                return false;
            }
            else if (!$(".jinjiqklxrylxdz66").val()) {
                alert("请填写手机号码！");
                return false;
            }
            else {
                var xm = $(".jinjiqklxrylxdz11").val();
                var xb = $("input[name='jjlxra']:checked").val();//选中的value
                var zz = $(".jinjiqklxrylxdz33").val();
                var yb = $(".jinjiqklxrylxdz44").val();
                var gddh = $(".jinjiqklxrylxdz55").val();
                var sjhm = $(".jinjiqklxrylxdz66").val();
                var bz = $(".jinjiqklxrylxdz77").val();
                if (xb != 1 && xb != 2) {
                    alert("请选择性别！");
                    return false;
                }
              
                    if (yb == "") {
                        yb = "无";
                    }
                    if (gddh == "") {
                        gddh = "无";
                    }
                    if (bz == "") {
                        bz = "无";
                    }
                    $.post("ygxx/jjlxrxxgx",{
                        lsh: val,
                        xm: xm,
                        xb: xb,
                        zz: zz,
                        yb: yb,
                        gddh: gddh,
                        sjhm: sjhm,
                        bz: bz
                    }, function (data) {
                    	//var data = eval('(' + data + ')');
                        if (data.status == "success") {
                            alert("添加成功");
                            jjlxrxxb_search();
                            return;
                        } else {
                            alert("添加失败");
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

    //性别
    var temp =j2;
    var rad = document.getElementsByName("jjlxra");

    for (var i = 0; i < rad.length; i++) {
        if (rad[i].value == temp) {
            rad[i].checked = true;
            ;
        }
    }
}

//工资卡信息
var khyh = "";
function editorgzkxx(mod, val, j1, j2, j3, j4, j5) {
    khyh = j2;
    
    dialog({
        title: mod + '修改提示',
        content: '<label class="form-group"><span>姓名: </span><input type="text" class="common-text btn100 gongzikxx11" value="'+j1+'"/></label><label class="form-group"><span>开户银行（全称）: </span><select class="common-text btn100 gongzikxx2" id="khyhselecta" value="'+j2+'"></select></label><label class="form-group"><span>账户（卡）号: </span><input type="text" class="common-text btn100 gongzikxx33" value="'+j3+'"/></label><label class="form-group"><span>状态: </span><input type="radio" class="common-text btn100 gongzikxx44" name="gzradd"  style="width:50px"   value="1"/>在用<input type="radio" class="common-text btn100 gongzikxx6" name="gzradd" style="width:50px" value="2"/>弃用</label><label class="form-group"><span>备注: </span><input type="text" class="common-text btn100 gongzikxx55" value="'+j5+'"/></label>',
        okValue: '保存',
        ok: function () {

            if (!$(".gongzikxx11").val()) {
                alert("请填写姓名！");
                return false;
            }
            else if (!$(".gongzikxx33").val()) {
                alert("请填写账户卡号！");
                return false;
            }
            else {
                var xm = $(".gongzikxx11").val();
                var khyh = document.getElementById("khyhselecta").value;
                var zhkh = $(".gongzikxx33").val();
                var zt = $("input[name='gzradd']:checked").val();//选中的value
                var bz = $(".gongzikxx55").val();
            
                    if (bz == "") {
                        bz = "无";
                    }
                    $.post("ygxx/gzkxxgx",{
                        lsh: val,
                        yg:localStorage.getItem("ygbh"),
                        xm: xm,
                        khyh: khyh,
                        zhkh: zhkh,
                        zt: zt,
                        bz: bz
                    }, function (data) {
                    	//var data = eval('(' + data + ')');
                        if (data.status == "success") {
                            alert("修改成功");
                            gzkxxb_search();
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
    //性别
    khyhxxb_search();
    var temp =j4;
    var rad = document.getElementsByName("gzradd");

    for (var i = 0; i < rad.length; i++) {
        if (rad[i].value == temp) {
            rad[i].checked = true;
            ;
        }
    }
}

function khyhxxb_search() {
    $.get("ygxx/khyhxxqk",
    	function (data) {
    		//var data = eval('(' + data + ')');
        $("#khyhselecta").html("");
        for (var i = 0; i < data.items.length; i++) {
            $("#khyhselecta").append(
                '<option value="' + data.items[i].lsh + '">' + data.items[i].khyhqc + '</option>'
            );
        }
            var s = document.getElementById('khyhselecta');

            //根据文本取到值
            for (var i = 0, len = s.options.length; i < len; i++) {

                if (s.options[i].value == khyh) {
                    document.getElementById("khyhselecta").value = s.options[i].value;
                    // 就是你要的值.
                }
            }
    });
}