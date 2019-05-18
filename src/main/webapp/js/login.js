$(function () {
	$("#login").on("click",login);
});

var login = function () {
//	序列化获得表单数据，结果为：user_id=12&user_name=John&user_age=20
	debugger;
	var data=$('#loginFrom').serialize();
//	submitData是解码后的表单数据，结果同上
	var submitData=decodeURIComponent(data,true);
	console.log(submitData);
	var data = {
			username : "fsfsf",
			password : "33333"
	}
	$.ajax({
		type:"post",
		data: JSON.stringify(data),
		contentType:"application/json",
		cache:false,//false是不缓存，true为缓存
		async:true,//true为异步，false为同步
		url:'index',
		beforeSend:function(){
			console.log(submitData);
		},
		success:function(result){
			//请求成功时
			if (result.code == 0) {
				window.location.href = "toLogin";
			}
		},
		complete:function(){
			console.log(111);
		},
		error:function(error){
			//请求失败时
			alert("请求出错！");
		}
	})

}