(function(){
	//define methods
	var methods = {
		init:function(options){
			var settings = $.extend({
				copy:"These are the default settings",
				background:"#CCC",
				color:"#000"
			},options);

			//default functionality here...
			var $target = $(this);
			//set html of div
			$target.html(settings.copy);
			$target.css({"background":settings.background,"color":settings.color});

		},
		appendDefaultText: function(){
			$(this).append(" Some default text has also been added. ");
		},
		appendText: function(txt){
			$(this).append(txt);
		}
	}

	//initialize plugin
	$.fn.methodPlugin = function(method){
		if(methods[method]){
			//call method
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		}
		else if (typeof(method)==='object' || !method){
			//call init as default
			return methods.init.apply( this, arguments );
		}
		else{
			//bad method passed.  throw error.
			console.log("There was an error calling the plugin.");
		}
	}

}());