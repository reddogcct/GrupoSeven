//-------------------------------------------------------------- MENU HOME---------------------------------------------------------------- 

$(document).ready(function(e) {



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
		marginTop: "100px"
	},4000);
	
	$("#data").delay(4000).animate({
			marginTop: "390px",
			width: "380px",
			marginLeft: "20px"
			
		},4000);
		
	$("#aviao").delay(3000).animate({
		marginLeft: "340px"
		
	},5000);
	
		$("#text").delay(4000).animate({
		width: "386px"
		
	},2000);
	
// -------------------------------------------------------------- NAVEGACAO ----------------------------------------------------------------
            $(function() {
                $('ul a').bind('click',function(event){
                    var $anchor = $(this);
												$('html, body').stop().animate({
											scrollTop: $($anchor.attr('href')).offset().top
                    }, 7000,'');
                    event.preventDefault();
                });
            });

}); // close init function

// ------------------------------------------------------------- MENU ----------------------------------------------------------------


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

