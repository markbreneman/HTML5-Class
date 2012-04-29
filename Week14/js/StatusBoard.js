var Trainstatus = {
	init: function(e){

		var s = document.createElement("script");
		s.setAttribute("src","http://mta.info/status/serviceStatus.txt");
		document.body.appendChild(s);
		}	
	}
    
window.addEventListener("load", Trainstatus.init, false); // Add and event listener when the window finishes loading; call the function init.



	
