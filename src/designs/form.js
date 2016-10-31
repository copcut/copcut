$(document).click(function(event){
	var target = $(event.target);
	if(target.is("#logIn")){
		$("#logForm").show();
	}
	else if((target.is("#logForm"))){
		console.log(target);
		$("#logForm").hide();
	}
	if(target.is("#signUp")){
		$("#signForm").show();
	}
	else if(!(target.is("#signForm"))){
		$("#signForm").hide();
	}
});