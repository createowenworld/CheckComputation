$(function () {
	loadworkHtml();
});

$(".left").on("click", "a", function () {
	$(".left a").removeClass("active");
	$(this).addClass("active");
	loadworkHtml();
});

/**
 * 加载工作区域
 */
var loadworkHtml = function () {
	$(".right").load($(".left").find(".active").attr("work"));
};