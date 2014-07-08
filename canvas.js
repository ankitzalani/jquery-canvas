/**
 * 
 */
(function($) {
	$.fn.canvas = function(options) {
		var $main = this;
		var temp = this.html();
		this.html('');
		$main.addClass("ui-canvas");

		$(
				"<div class='ui-canvas-sidebar-wrapper'><span class='ui-canvas-sidebar'>Canvas</span></div>")
				.appendTo($main);

		$("<div>").addClass("ui-canvas-header").appendTo($main);

		$("<div>").addClass("ui-canvas-container").appendTo($main);

		var $container = $('.ui-canvas-container', $main);
		var $sidebar = $('.ui-canvas-sidebar', $main);
		var $header = $('.ui-canvas-header', $main);

		$container.html(temp);
		var settings = $.extend({
			width : "100px",
			height : "100px",
			backgroundColor : "#EAEAEA"
		}, options);

		init = function() {
			header($header);
			fixDimention();

		};

		header = function(toolbar) {
			var table = document.createElement('table');
			var tr = document.createElement('tr');

			for ( var i = 1; i < 2; i++) {
				var td = document.createElement('td');
				td.innerHTML = "B";
				td.bind('click', function() {
					alert('asdf');
				});
				tr.appendChild(td);
			}

			table.appendChild(tr);
			toolbar.html(table);
		};

		toolbarButtonBold = function() {
			alert('bold');
		};

		fixDimention = function() {
			$main.css("width", settings.width);
			$main.css("height", settings.height);

			$header.css("width", $main.width() - $sidebar.height() - 8);
			$header.css("left", $sidebar.height() + 5);

			$container.css("width", $main.width() - $sidebar.height() - 8);
			$container.css("height", $main.height() - $header.height());
		};

		isEditable = function() {
			return $container.is('.editable');
		};

		editable = function() {
			$container.prop('contenteditable', true);
			$container.removeClass('readonly');
			$container.addClass('editable');
		};

		readonly = function() {
			$container.prop('contenteditable', false);
			$container.removeClass('editable');
			$container.addClass('readonly');
		};

		init();

		$container.on('focusout', function() {
			readonly();
		});

		$container.on('click', function() {
			editable();
		});

		return this;
	};
}(jQuery));
