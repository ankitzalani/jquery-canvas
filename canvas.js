/**
 * 
 */
(function($) {
	$.fn.canvas = function(options) {
		this.ht
		
		var $container = this;

		var settings = $.extend({
			border : "2px solid blue",
			width : "100px",
			height : "100px",
			backgroundColor : "#EAEAEA"
		}, options);

		init = function() {
			$container.css("width", settings.width);
			$container.css("height", settings.height);
			$container.css("border", '1px solid #CCC');
		};

		isEditable = function() {
			return $container.is('.editable');
		};

		editable = function() {
			$container.css("background-color", settings.backgroundColor);
			$container.prop('contenteditable', true);
			$container.css("border", settings.border);
		};

		readonly = function() {
			$container.css("background-color", "white");
			$container.prop('contenteditable', false);
			$container.css("border", '1px solid #CCC');
		};

		init();
		
		$container.on('focusout',function(){
			console.log('focusout');
			readonly();
		});
		
		$container.on('click',function(){
			console.log('doubleclick');
			editable();
		});

		return this;
	};
}(jQuery));
