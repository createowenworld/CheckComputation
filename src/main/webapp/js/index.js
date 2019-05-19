$(function () {
	getUserInfo();
})
function getUserInfo () {
	debugger;
	$.ajax({
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
	});
}

/**
 * 初始化表格
 */
function InitTable (Curedata) {
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
		data: Curedata.data,
		columns:
			[
				{ data: "_id",width:80,"mRender":function(data,type,full)
					{
					var ReturnHtml = "<a class='btn btn-danger btn-xs delete' onclick='CommitDelete(\"" + data + "\");'><i class='fa fa-trash-o'></i>删除任务</a>";
					return ReturnHtml;
					}
				},
				{ data: "srcrolename"},
				{ data: "srcroutinename",width:150},
				{ data: "tasktype",width:100},
				{ data: "taskstate",width:100},
				{ data: "remark",width:300,"mRender":function(data,type,full)
					{
					if(full.tasktype == "定时同步任务")
					{
						if(full.taskstate == "未启动")
						{
							var ReturnHtml = "<a class='btn btn-success btn-xs delete' onclick='DataChangeTaskStart(\"" + full._id + "\");'><i class='fa fa-play'></i>启动任务</a>";
							return ReturnHtml;
						}
						else
						{
							var ReturnHtml = "<a class='btn btn-danger btn-xs delete' onclick='DataChangeTaskStop(\"" + full._id + "\");'><i class='fa fa-stop'></i>停止任务</a>";
							return ReturnHtml;
						}
					}
					else if(full.tasktype == "手动同步任务")
					{
						var ReturnHtml = "<a class='btn btn-azure btn-xs delete' onclick='DataChangeManualSync(\"" + full._id + "\");'><i class='fa fa-exchange'></i>开始同步</a>";
						ReturnHtml = ReturnHtml + "&nbsp;<a class='btn btn-azure btn-xs delete' onclick='DataChangeManualExport(\"" + full._id + "\");'><i class='fa fa-table'></i>导出到Excel</a>";
						return ReturnHtml;
					}
					else if(full.tasktype == "手动导出任务")
					{
						var ReturnHtml = "<a class='btn btn-warning btn-xs delete' onclick='DataChangeManualExport(\"" + full._id + "\");'><i class='fa fa-table'></i>手动导出</a>";
						return ReturnHtml;
					}
					else
					{
						return "";
					}
					}
				}
				]
	});
}
