$(function () {
	$("#login").on("click",login);
});

var login = function () {
//	序列化获得表单数据，结果为：user_id=12&user_name=John&user_age=20
	debugger;
	var username = $.trim($("#username").val());
	var password = $.trim($("#password").val());
	if (!username || !password) {
		$("#tipMsg").html("用户名或密码不能为空！");
		return;
	}
	if (password.length < 5) {
		$("#tipMsg").html("密码长度不符合要求！");
		return;
	}
	var data = {
			username : username,
			password : password
	}
	$.ajax({
		type:"post",
		data: JSON.stringify(data),
		contentType:"application/json",
		cache:false,//false是不缓存，true为缓存
		async:true,//true为异步，false为同步
		url:'index',
		beforeSend:function(){
			console.log(data);
		},
		success:function(result){
			//请求成功时
			if (result.code == 0) {
				window.location.href = "toLogin";
			} else {
				$("#tipMsg").html(result.msg);
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