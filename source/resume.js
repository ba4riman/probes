$(document).ready(function(){
	$(".block-question__lists > div").each(function(){
		$(this).data("height", $(this).height());
		$(this).data("padding-top", $(this).css("padding-top"));
		$(this).data("padding-bottom", $(this).css("padding-bottom"));
	});
	$(".block-question__lists > div:not(:first)").hide();
	$(".block-question__lists > li").addClass("active");
	$(".block-question__lists > li").click(function(){
		$(".block-question__lists > div:visible").animate({
			height: "toggle",
			"padding-top": "toggle",
			"padding-bottom": "toggle"
		}, 1000);
		$(this).next().animate({
			height: "toggle",
			"padding-top": "toggle",
			"padding-bottom": "toggle"
		}, 1000);
	});
});