$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	var navheight = parseInt($("#header").height());
	if(scroll>=navheight){
		$("#header").addClass("header");
		$("#logo").css("color","black");
	}
	else{
		$("#header").removeClass("header");
		$("#logo").css("color","white");
	}
})