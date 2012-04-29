
//Testing for the longer term of splitting up tweets and getting the animation

/*
var alphabet= "abcdefghijklmnopqrstuvwxyz";
var integers= "0123456789";
console.log(alphabet.split(""));
console.log(integers.split(""));
*/

/*
var s = "overpopulation";
for (var i = 0; i < s.length; i++) {
    console.log(s.charAt(i));
}
*/

//Main Header Lettering

(function($){
	function injector(t, splitter, klass, after) {
		var a = t.text().split(splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
			});	
			t.empty().append(inject);
		}
	}
	
	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},
		
		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);


				$(function() {
					
					var $word		= $(".letter-container h2 a"),
						lettering 	= $word.lettering();
					
					// extend the lettering plugin	
					var extensionPlugin 	= {
						wrapper	: function() {
							var $w	= this;
							$w.children('span').each( function(i) {
								var $el	= $(this),
									t 	= $el.text();
								
								if( t !== ' ' ) {	
									var $newStruc	= $('<div class="twrap"><div class="tbg"><span>' + t + '</span></div><div class="tup"><div class="tfront"><span>' + t + '</span></div><div class="tback"><span>' + t + '</span></div></div><div class="tdown"><span>' + t + '</span></div></div>');
									
									$newStruc.insertAfter( $el );
									$el.remove();
								}
								
							});
						}
					};
					$.extend( true, lettering, extensionPlugin );
					lettering.wrapper();	
				});
				
								

	
