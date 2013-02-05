// Java Script
$(document).ready(function(e) {

// MENU ANIMATE

	$("#menu").animate({
		marginTop:"0px",
		width: "52px"
	},4000);
	$("#menu").animate({
		marginTop:"0px",
		width: "250px"
	},1000);
	
	



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