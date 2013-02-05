// Java Script
$(document).ready(function(e) {

// MENU ANIMATE

	$("#menu").animate({
		marginTop:"0px",
		width: "54px"
	},4000);
	$("#menu").animate({
		marginTop:"0px",
		width: "250px"
	},1000);
	

	$("#realizacao").delay(7000).animate({
		opacity:"0.9",
	},2000);
	
	$("#logo").delay(4000).animate({
		marginTop: "100"
	},4000);
	
	$("#data").delay(4000).animate({
			marginTop: "300"
		},4000);

});

$(function(){
	$("*[rel=tooltip]").hover(function(e) { 
		$("body").append('<div class="tooltip">'+$(this).attr('te')+ '</div>');
		
	$('.tooltip').css({
		top : e.pageY + 10,
		left : e.pageX + 10,
		});
		
		},function(){
		$('.tooltip').remove();
		})/*.mousemove(function(e){
		$('.tooltip').css({
		top : e.pageY + 30,
		left : e.pageX + 20,
			})
			
		});*/
});