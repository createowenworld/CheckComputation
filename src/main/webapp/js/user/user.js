$(function () {
	var url = "getUserInfo";
	getUserInfo(url);
})


function getUserInfo (url) {
	debugger;
	/*$.ajax({
		type: "POST",
		contentType: "application/json",
		url: "getUserInfo",
		dataType: 'json',
		success: function(result)
		{
			var Curedata = $.extend(true, [],result);
			if(Curedata.code == "0")
			{
				InitTable (Curedata);
			}
			else
			{
				alert(Curedata.msg);
			}
		}
	});*/
	InitTable(url);
}
//绑定查询事件
$("#search").on("click",function () {
	var keyword = $.trim($("#keyword").val());
	var url = "getUserInfo?keyword=" + decodeURIComponent(keyword);
	getUserInfo(url);
});

/**
 * 初始化表格
 */
function InitTable (url) {
	$('#ShowTable').dataTable({
		sDom: "Tflt<'row DTTTFooter'<'col-sm-6'i><'col-sm-6'p>>",
		oTableTools: {"aButtons": []},
		language: {
			"sProcessing": "&lt;img src=’./assets/loading.gif’ /&gt;",
			"sZeroRecords": "没有找到符合条件的数据，请输入准确的查询条件进行查询。",
			"search": "",
			"sLengthMenu": "每页显示 _MENU_条",
			"sInfo": "当前第 _START_ - _END_ 条　共计 _TOTAL_ 条",
			"sInfoEmpty": "没有记录",
			"sInfoFiltered": "(从 _MAX_ 条记录中过滤)",
			"oPaginate": {"sFirst": "首页","sPrevious": "前一页", "sNext": "后一页","sLast": "尾页"}
		},
		bProcessing: true,
		bServerSide: true,
		bPaginate: true, // 翻页功能
		bServerSide: true,//是否启用服务器分页
		bStateSave: true, // 状态保存
		bLengthChange: false, // 改变每页显示数据数量
		searching:false,//是否显示搜索框
		bFilter: false, // 过滤功能
		bSort: true, // 排序功能
		bSortClasses:true,//是否显示排序样式
		bInfo: true,// 页脚信息
		bAutoWidth: false,// 自动宽度
		bDestroy: true,
		iDisplayLength: 10, // 每页显示多少行
		ajax: url,
		columns:
			[
				{ data: "name",width:"16%"},
				{ data: "phone",width:"16%"},
				{ data: "account",width:"16%"},
				{ data: "role",width:"16%"},
				{ data: "create_time",width:"16%","mRender":function(data,type,full)
					{
						return data;
					}
				},
				{ data: "_id",width:"20%","mRender":function(data,type,full)
					{
					var ReturnHtml = " <a class='btn btn-primary btn-xs update' onclick='OpenEdit(\"" + data + "\");'><i class='fa fa-pencil-square-o' aria-hidden='true'></i>修改</a>";
					ReturnHtml += " <a class='btn btn-danger btn-xs delete' onclick='CommitDelete(\"" + data + "\");'><i class='fa fa-trash-o'></i>删除</a>";
					return ReturnHtml;
					}
				}
				]
	});
}
var FormBox = null;
/************************************************************************************************
 *  打开新建窗口
 ************************************************************************************************/
function OpenNew()
{
	FormBox = null;
	FormBox = bootbox.dialog({
		message: $("#myModal").html(),
		title: "新增用户",
		className: "modal-azure",
		buttons: {
			success: {
				label: "提交保存",
				className: "btn-azure",
				callback: function ()
				{
					var CommitData = {};
					FormBox.find("input").each(
							function()
							{
								CommitData[$(this).attr('id')]=$(this).val();
							}
					);
					FormBox.find("select").each(
							function()
							{
								CommitData[$(this).attr('id')]=$(this).val();
							}
					);
					if (CommitData["name"] == null || CommitData["name"] == "")
					{
						alert("名称不能为空！");
						return false;
					}
					debugger;
					checkInput();
					//提交前验证是否还有必填项未填
					if (FormBox.find(".bx-text").hasClass("error") || FormBox.find(".bx-text").hasClass("isNull")) {
						FormBox.find(".isNull").focus();
						alert("有必填项未填写，请继续填写完整");
						console.info(1);
						return false;
					}
					else
					{
						console.info(CommitData);
						$.ajax({
							cache: true,
							type: "POST",
							url:"addUser",
							contentType: "application/json",
							data:JSON.stringify(CommitData),
							error: function(request)
							{
								alert("Connection error...");
							},
							success: function(result)
							{
								var Curedata = $.extend(true, [],result);
								if(Curedata.code == 0)
								{
									InitTable("getUserInfo");
								}
								else
								{
									alert(Curedata.msg);
								}
							}
						});
					}
					
				}
			},
			"取消保存": {
				className: "btn-danger",
				callback: function () { }
			}
		}
	});
}
//删除用户
function CommitDelete (delid) {
	if(confirm("您确定要删除该用户吗？"))
	{
		//******************************************************************************************************
		var CommitUrl = "deleteUser?_id=" + delid;
		$.ajax({
			type: "POST",
			contentType: "application/json",
			url: CommitUrl,
			dataType: 'json',
			success: function(result)
			{
				var Curedata = $.extend(true, [],result);
				if(Curedata.code == 0)
				{
					InitTable("getUserInfo");
				}
				else
				{
					alert(Curedata.msg);
				}
			}
		});
		//******************************************************************************************************
	}
}

/************************************************************************************************
 * 打开修改窗口
 ************************************************************************************************/
function OpenEdit(editid)
{
	FormBox = null;
	FormBox = bootbox.dialog({
		message: $("#myModal").html(),
		title: "用户信息",
		className: "modal-azure",
		buttons: {
			success: {
				label: "提交保存",
				className: "btn-azure",
				callback: function ()
				{
					var CommitData = {};
					FormBox.find("input").each(
							function()
							{
								CommitData[$(this).attr('id')]=$(this).val();
							}
					);
					FormBox.find("select").each(
							function()
							{
								CommitData[$(this).attr('id')]=$(this).val();
							}
					);
					if (CommitData["name"] == null || CommitData["name"] == "")
					{
						alert("名称不能为空！");
						return false;
					}
					checkInput();
					//提交前验证是否还有必填项未填
					if (FormBox.find(".bx-text").hasClass("error") || FormBox.find(".bx-text").hasClass("isNull")) {
						FormBox.find(".isNull").focus();
						alert("有必填项未填写，请继续填写完整");
						return false;
					}
					else
					{
						CommitData['_id']=editid;
						
						$.ajax({
							cache: true,
							type: "POST",
							url:"updateUserById",
							contentType: "application/json",
							data:JSON.stringify(CommitData),
							error: function(request)
							{
								alert("Connection error...");
								FormBox.find("#account").removeAttr("readonly");    //去除readonly属性
							},
							success: function(result)
							{
								var Curedata = $.extend(true, [],result);
								if(Curedata.code == 0)
								{
									InitTable("getUserInfo");
									FormBox.find("#account").removeAttr("readonly");    //去除readonly属性
								}
								else
								{
									alert(Curedata.msg);
									FormBox.find("#account").removeAttr("readonly");    //去除readonly属性
								}
							}
						});
					}
					
				}
			},
			"取消保存": {
				className: "btn-danger",
				callback: function () {
					FormBox.find("#account").removeAttr("readonly");    //去除readonly属性
				}
			}
		}
	});
	FormBox.find("#account").attr({readonly: 'true' });
	//************************************************************************
	var ReaderUrl = "getUserById?_id=" + editid + "&timeStamp=" + Date.parse(new Date());
	AjaxToBoxCase(ReaderUrl,FormBox);
	//*************************************************************************
}
//非空验证@高玉玺
function checkInput() {
	FormBox.find(".bx-text").each(function (){
		if(this.id=="timestampcolumn"){
		}else{
			if (this.value == null || this.value == "") 
			{
				$(this).addClass("error");
			}
			else
			{
				$(this).removeClass("error isNull");
			}
		}
	});
}