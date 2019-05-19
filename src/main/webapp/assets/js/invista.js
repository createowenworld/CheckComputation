window.onerror = function(sMessage, sUrl, sLine)
{
	var err = "";
	err += "错误提示:" + sMessage + "\n";
	err += "错误文件:" + sUrl + "\n";
	err += "错误号:" + sLine + "\n";
	alert(err);
	return true;
}

// ***************************************************************************************
// 将选择的容器内的对象转换为Json对象
function HtmlToModel(selector)
{
	var model =
	{};
	var sel = $(selector);
	// input
	sel.find('input').each(function()
	{
		var ct = $(this);
		var ctType = ct.attr('type');
		var ctid = ct.attr('id');
		if (ctid != null && ctid != "" && ctid != "undefined")
		{
			if (ctType == 'text' || ctType == 'hidden' || ctType == 'password')
			{
				var ctvalue = ct.val();
				if (ctid != null && ctid != "" && ctid != "undefined" && ctvalue != null && ctvalue != "")
				{
					model[ctid] = ctvalue;
				}
				else
				{
					model[ctid] = "";
				}
			}
		}
	});
	// textarea
	sel.find('textarea').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		var ctvalue = ct.val();
		if (ctid != null && ctid != "" && ctid != "undefined" && ctvalue != null && ctvalue != "")
		{
			model[ctid] = ctvalue;
		}
		else
		{
			model[ctid] = "";
		}
	});
	// select
	sel.find('select').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		var ctvalue = ct.val();
		if (ctid != null && ctid != "" && ctid != "undefined" && ctvalue != null && ctvalue != "")
		{
			model[ctid] = ctvalue;
		}
		else
		{
			model[ctid] = "";
		}
	});
	return model;
}
// ***************************************************************************************
// 清除红色记录颜色
function ClearSelecterColor(Selecter)
{
	var sel = $(Selecter);
	// input
	sel.find('input').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		var ctType = ct.attr('type');
		if (ctType == 'text')
		{
			var color2 = "#000000";
			ct.css(
			{
				"color" : color2
			});
		}
	});
	
	// textarea
	sel.find('textarea').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		var color2 = "#000000";
		ct.css(
		{
			"color" : color2
		});
	});
	// select
	sel.find('select').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		var color2 = "#000000";
		ct.css(
		{
			"color" : color2
		});
	});
}
// ***************************************************************************************
// 将修改过的内容变为红色。
function ShowLogColor(OldModel, NewModel, Selecter)
{
	var valtype = (typeof OldModel).toString();
	if (valtype == 'string')
	{
		OldModel = JsonToModel(OldModel);
	}
	valtype = (typeof NewModel).toString();
	if (valtype == 'string')
	{
		NewModel = JsonToModel(NewModel);
	}
	// 获取到每个字段，并判断其状态，将其更新到页面上。
	var sel = $(Selecter);
	// input
	sel.find('input').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		var ctType = ct.attr('type');
		if (ctType == 'text')
		{
			if (OldModel[ctid] != NewModel[ctid])
			{
				ct.val(NewModel[ctid]);
				// 设置为红色
				var color1 = "#D60F0F";
				ct.css(
				{
					"color" : color1
				});
				var LogTitle = "将原来的值[" + OldModel[ctid] + "]修改为了新的值[" + NewModel[ctid] + "]。";
				ct.attr(
				{
					title : LogTitle
				});
			}
			else
			{
				var color2 = "#000000";
				ct.css(
				{
					"color" : color2
				});
			}
		}
	});
	
	// textarea
	sel.find('textarea').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		if (OldModel[ctid] != NewModel[ctid])
		{
			ct.val(NewModel[ctid]);
			// 设置为红色
			var color1 = "#D60F0F";
			ct.css(
			{
				"color" : color1
			});
			var LogTitle = "将原来的值[" + OldModel[ctid] + "]修改为了新的值[" + NewModel[ctid] + "]。";
			ct.attr(
			{
				title : LogTitle
			});
		}
		else
		{
			var color2 = "#000000";
			ct.css(
			{
				"color" : color2
			});
		}
	});
	// select
	sel.find('select').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		if (OldModel[ctid] != NewModel[ctid])
		{
			ct.val(NewModel[ctid]);
			// 设置为红色
			var color1 = "#D60F0F";
			ct.css(
			{
				"color" : color1
			});
			var LogTitle = "将原来的值[" + OldModel[ctid] + "]修改为了新的值[" + NewModel[ctid] + "]。";
			ct.attr(
			{
				title : LogTitle
			});
		}
		else
		{
			var color2 = "#000000";
			ct.css(
			{
				"color" : color2
			});
		}
	});
}
// *******************************************************************************************
// SDAV:将Model填充到Html容器中。
function SubString(str, len)
{
	if (str != null && str.length > 0)
	{
		str = str.substr(0, len);
		return str;
	}
	return "";
}
function ModelToHtml(model, selector)
{
	HtmlControlClear(selector);// 先清空
	var sel = $(selector);
	// input
	sel.find('input').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		var ctType = ct.attr('type');
		if (ctType == 'text')
		{
			var WriteValue = "";
			var TextBoxClass = ct.attr('class');
			
			if (TextBoxClass == "TextBox")
			{
				ct.val(model[ctid]);
			}
			else if (TextBoxClass == "Date hasDatapicker")
			{
				ct.val(model[ctid]);
			}
			else if (TextBoxClass.indexOf("DateMonth") > -1)
			{
				ct.val(SubString(model[ctid], 7));
			}
			else if (TextBoxClass.indexOf("DateYear") > -1)
			{
				ct.val(SubString(model[ctid], 4));
			}
			else
			{
				ct.val(model[ctid]);
			}
		}
		if (ctType == 'hidden')
		{
			ct.val(model[ctid]);
		}
	});
	
	// textarea
	sel.find('textarea').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		ct.val(model[ctid]);
	});
	// select
	sel.find('select').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		var ctvalue = ct.val();
		ct.val(model[ctid])
	});
}
// *******************************************************************************************
// SDAV:清空选择的容器内的控件内容
function HtmlControlClear(selector)
{
	var sel = $(selector);
	// input
	sel.find('input').each(function()
	{
		var ct = $(this);
		var ctType = ct.attr('type');
		if (ctType = 'text')
		{
			ct.val("");
		}
		if (ctType = 'file')
		{
			ct.val("");
		}
		if (ctType = 'hidden')
		{
			ct.val("");
		}
	});
	sel.find('textarea').each(function()
	{
		var ct = $(this);
		var ctid = ct.attr('id');
		var ctvalue = ct.val("");
	});
}
// *******************************************************************************************
// 将json数据转为对象
function JsonToModel(jsondata)
{
	try
	{
		jsondata = jsondata.replace(/[\r\n]/g, " ");
		var table = eval("(" + jsondata + ")");
		return table;
	} catch (ex)
	{
		return null;
	}
}
// ********************************************************************************************
// 获取QueryString的数组
function getQueryString()
{
	var result = location.search.match(new RegExp("[\?\&][^\?\&]+=[^\?\&]+", "g"));
	for (var i = 0; i < result.length; i++)
	{
		result[i] = result[i].substring(1);
	}
	return result;
}
// 根据QueryString参数名称获取值
function getQueryStringByName(name)
{
	var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
	if (result == null || result.length < 1)
	{
		return "";
	}
	return result[1];
}
// 根据QueryString参数索引获取值
function getQueryStringByIndex(index)
{
	if (index == null)
	{
		return "";
	}
	var queryStringList = getQueryString();
	if (index >= queryStringList.length)
	{
		return "";
	}
	var result = queryStringList[index];
	var startIndex = result.indexOf("=") + 1;
	result = result.substring(startIndex);
	return result;
}
// ********************************************************************************************
// 请求一个Ajax地址，并将结果绑定到页面，用于单页面编辑
function AjaxToCase(ReaderUrl, FillCase)
{
	$.ajax(
	{
		type : "POST",
		contentType : "application/json",
		url : ReaderUrl,
		dataType : 'json',
		success : function(result)
		{
			var Curedata = $.extend(true, [], result);
			if (Curedata.state == "0")
			{
				ModelToHtml(Curedata.data[0], FillCase);
			}
			else
			{
				alert(Curedata.msg);
			}
		}
	});
}
// ********************************************************************************************
// 请求一个Ajax地址，并将结果绑定到页面，用于单页面编辑
function AjaxToBoxCase(ReaderUrl, FormBox)
{
	$.ajax(
	{
		type : "POST",
		contentType : "application/json",
		url : ReaderUrl,
		dataType : 'json',
		async:false,
		success : function(result)
		{
			var Curedata = $.extend(true, [], result);
			if (Curedata.state == "0")
			{
				FormBox.find("input").each(function()
				{
					FormBox.find("#" + $(this).attr('id')).val(Curedata.data[0][$(this).attr('id')]);
				});
				FormBox.find("select").each(function()
				{
					FormBox.find("#" + $(this).attr('id') + " option[value='" + Curedata.data[0][$(this).attr('id')] + "']").attr("selected", true);
				});
				//**xingshuai add by 201603092308 begin*********************/
				FormBox.find("textarea").each(function()
				{
					FormBox.find("#" + $(this).attr('id')).val(Curedata.data[0][$(this).attr('id')]);
				});
				//**xingshuai add by 201603092308 end***********************/
			}
			else
			{
				alert(Curedata.msg);
			}
		}
	});
}
//********************************************************************************************
/*************************************************************************
 * 请求一个Ajax地址，并将结果绑定到页面，用于单页面编辑,用于select的tex值
 **************************************************************************/
function AjaxToBoxCaseText(ReaderUrl, FormBox)
{
	$.ajax(
	{
		type : "POST",
		contentType : "application/json",
		url : ReaderUrl,
		dataType : 'json',
		success : function(result)
		{
			var Curedata = $.extend(true, [], result);
			if (Curedata.state == "0")
			{
				FormBox.find("input").each(function()
				{
					FormBox.find("#" + $(this).attr('id')).val(Curedata.data[0][$(this).attr('id')]);
				});
				FormBox.find("select").each(function()
				{
//					console.log(Curedata.data[0][$(this).attr('id')]);
					FormBox.find("#" + $(this).attr('id') + " option:contains('" + Curedata.data[0][$(this).attr('id')] + "')").attr("selected", true);
				});
				//**xingshuai add by 201603092308 begin*********************/
				FormBox.find("textarea").each(function()
				{
					FormBox.find("#" + $(this).attr('id')).val(Curedata.data[0][$(this).attr('id')]);
				});
				//**xingshuai add by 201603092308 end***********************/
			}
			else
			{
				alert(Curedata.msg);
			}
		}
	});
}
// ********************************************************************************************
// 序列化bootBox，用于存储
function SerializebootBox(FormBox)
{
	var CommitData =
	{};
	FormBox.find("input").each(function()
	{
		CommitData[$(this).attr('id')] = $(this).val();
	});
	FormBox.find("select").each(function()
	{
		CommitData[$(this).attr('id')] = $(this).val();
	});
	FormBox.find("textarea").each(function()
	{
		CommitData[$(this).attr('id')] = $(this).val();
	});
	return CommitData;
}
/*******************************************************************************
 * 获取页面参数
 ******************************************************************************/
function getUrlParam(name)
{
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");// 构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); //匹配目标参数
	if (r != null)
		return unescape(r[2]);
	return null; //返回参数值
}

/*******************************************************************************************
 * 兼容ie8的trim方法
 *******************************************************************************************/
String.prototype.trim = function ()  
{  
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}