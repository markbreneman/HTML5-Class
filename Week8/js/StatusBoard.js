
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
				
								
//Twitter Pulling - Mark Commented		
var q // this is a global variable for the twitter search query

//Once the window has loaded this function is called
function init(e){
    var sign1 = document.getElementById("sign1"); // get the element with ID = sign 1
    sign1.addEventListener("click", getTwitterData, false); // add an event listener to that element, and when that element is clicked call the function getTwitterData.
    
   var sign2 = document.getElementById("sign2"); // get the element with ID = sign 1
    sign2.addEventListener("click", getTwitterData, false); // add an event listener to that element, and when that element is clicked call the function getTwitterData.
    
    var searchDivs = document.querySelectorAll(".twittersearchterm");
    for (var i = 0; i < searchDivs.length; i++){
        var searchDiv = searchDivs[i];
        searchDiv.addEventListener("click", searchClick, false);
        searchDiv.addEventListener("click", popFunction, false);
    }

}

//This function creates a script element, and its source att. to search twitter.  This is the way to get around cross domain scripting. The callback function at the end of the URL calls the function GotBackTwitterData in this JS file.
function getTwitterData(){
    var s = document.createElement("script"); // Create a script element
	s.setAttribute("src", "http://search.twitter.com/search.json?q=philadelphia&callback=gotBackTwitterData");//Set it's attribute and call function
	document.body.appendChild(s);//append it to the body
}

//This function handles the data received from Twitter; it gets passed a JSON object and puts the JSON data into a DIV
function gotBackTwitterData(json){
 	var html = "";//create variable with a string result
    var results = json.results; //create a variable which holds the json results 


	//Parsing the JSON Results 
    for (var i = 0; i < 5; i++){
        var result = results[i];
        console.log(results);
        //Go through and add the specific desired results to the string variable
/*         html += "<div class='tweet'><span class='user'>"+result.from_user+"</span>"+result.text+"</div><br>" */

/* html += "<div class='tweet'><a href='http://twitter.com/#!/"+result.from_user+"' target='_blank'><img src='"+result.profile_image_url+"' height='30px' /></a><span class='user'><a href='http://twitter.com/#!/"+result.from_user+"' target='_blank'>"+result.from_user+"</a></span>"+result.text+"</div>" */

    	html += "<div class='tweet'><a href='http://twitter.com/#!/"+result.from_user+"'><img src='"+ result.profile_image_url+"' height='30px'/></a><span class='user'><a href='http://twitter.com/#!/"+result.from_user+"'>"+result.from_user+"</a></span>"+": "+result.text+"</div><br>"
    
    }
    //add the results to the DIV found above
    if(q=="philadelphia"){
	var p = document.getElementById("twitterText1")   
	p.innerHTML = html;
	
    }
    else if(q=="new york"){
	var t = document.getElementById("twitterText2")   
    t.innerHTML = html;
    }
   }

//This function get the value of the attribute search="", and passes it to the function twittersearch
function searchClick(e){
	q = this.getAttribute("search"); 
    getTwitterSearch(q);
}

//This function takes a variable q and performs a twitter search with it.
function getTwitterSearch(q){
    var s = document.createElement("script");
    s.setAttribute("src", "http://search.twitter.com/search.json?q="+q+"&callback=gotBackTwitterData");   
    document.body.appendChild(s);
}

//This Function Appends the Twitter Search term to the URL and allow for users FWD and Back Nav.
function popFunction(e){
var stateObj = { state: "FauxURL" };
history.pushState(stateObj, "twittersearchterm", ""+q+"");
}


window.addEventListener("load", init, false); // Add and event listener when the window finishes loading; call the function init.

window.addEventListener("popState", popFunction, false);

	
