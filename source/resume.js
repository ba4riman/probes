$(document).ready(function(){
	$(".block-question__list > .block-question__list-answer:not(:first)").hide();
	$(".block-question__list > .block-question__list-question").click(function(){
		$(".block-question__list > .block-question__list-answer:visible").animate({
			height: "hide",
			padding: "hide",
		}, 500);
		$(this).next().animate({
			height: "show",
			padding: "show",
		}, 500);
	});
});