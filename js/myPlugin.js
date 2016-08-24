(function(){
	$.fn.myPlugin = function(options,callback){

		//set the default settings and override with the options parameter
		var settings = $.extend({
			copy:"These are the default settings",
			background:"#CCC",
			color:"#000",
			complete:function(){}
		},options);

		var $target = $(this);

		//set html of div
		$target.html(settings.copy);
		$target.css({"background":settings.background,"color":settings.color});

		//callback
		if(typeof(callback)=="function"){
			callback();
		}

		//complete function
		if(typeof(settings.complete)=="function"){
			settings.complete();
		}
	}
}());