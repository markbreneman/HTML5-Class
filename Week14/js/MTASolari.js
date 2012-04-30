var Trainstatus = {

		init: function(e){
		$.get("http://www.itp.nyu.edu/~mbb395/HTML5-Spring2012/Week14/MTAStatusPuller.php", function(xhr){
			//console.log(xhr);
			var obj = JSON.parse(xhr);
/* 			console.log(obj); */
			})
		window.setInterval("Trainstatus.fetch.retrieve()", 500);			
		},
		
		fetch:{
		retrieve:function(e){
		$.get("http://www.itp.nyu.edu/~mbb395/HTML5-Spring2012/Week14/MTAStatusPuller.php", function(xhr){
			var obj = JSON.parse(xhr);
/* 			console.log(obj.subway.line[0].status); */
			var Trainstatus123=obj.subway.line[0].status;
/* 			var Trainstatus456=obj.subway.line[1].status; */
			var Trainstatus123split=Trainstatus123.split("");			
/* 			console.log(Trainstatus123split[2]); */
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			console.log(front)
			for  (i=0;i<=Trainstatus123split.length;i++){
			elementA=front[i];
			elementB=frontbottom[i];	
			elementA.innerHTML=Trainstatus123split[i];
			elementB.innerHTML=Trainstatus123split[i];
			}
			})
		}},
		
				
	}
	
    
window.addEventListener("load", Trainstatus.init, false); // Add and event listener when the window finishes loading; call the function init.



	
