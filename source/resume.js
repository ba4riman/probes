$(document).ready(function(){
	$(".block-question__lists > div").each(function(){
		$(this).data("height", $(this).height());
		$(this).data("padding-top", $(this).css("padding-top"));
		$(this).data("padding-bottom", $(this).css("padding-bottom"));
	});
	$(".block-question__lists > div:not(:first)").hide();
	$(".block-question__lists > li").click(function(){
		/*$(".block-question__lists > div").hide();
		$(this).next().show();*/
		$(".block-question__lists > div:visible").animate({
			height: 0,
			"padding-top": 0,
			"padding-bottom": 0
		}, 1000, function(){$(this).hide()});
		box = $(this).next().show();
		$(box).animate({
			height: $(box).data("height"),
			"padding-top": $(box).data("padding-top"),
			"padding-bottom": $(box).data("padding-bottom")
		}, 1000);
	});
});