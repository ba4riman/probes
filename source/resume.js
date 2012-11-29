$(document).ready(function(){
	$(".block-question__lists > div:not(:first)").hide();
	$(".block-question__lists > li").click(function(){
		$(".block-question__lists > div:visible").animate({
			height: "hide",
			padding: "hide",
		}, 500);
		$(this).next().animate({
			height: "show",
			padding: "show",
		}, 500);
	});
});