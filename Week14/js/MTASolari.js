var Trainstatus = {

		init: function(e){
		$.get("http://www.itp.nyu.edu/~mbb395/HTML5-Spring2012/Week14/MTAStatusPuller.php", function(xhr){
			//console.log(xhr);
		    obj = JSON.parse(xhr);
			console.log(obj);
			})
		window.setInterval("Trainstatus.fetch.retrieve()", 500);			
		},

		fetch:{
		retrieve:function(e){
		$.get("http://www.itp.nyu.edu/~mbb395/HTML5-Spring2012/Week14/MTAStatusPuller.php", function(xhr){
			var fetched = JSON.parse(xhr);
/* 			console.log(obj.subway.line[0].status); */
			var Trainstatus123=fetched.subway.line[0].status;
/* 			var Trainstatus456=fetched.subway.line[1].status; */
			var Trainstatus123split=Trainstatus123.split("");			
/* 			console.log(Trainstatus123split[2]); */
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
/* 			console.log(front) */
			for  (i=0;i<Trainstatus123split.length;i++){
			elementA=front[i];
			elementB=frontbottom[i];	
			elementA.innerHTML=Trainstatus123split[i];
			elementB.innerHTML=Trainstatus123split[i];
			}
			
			var Trainstatus456=fetched.subway.line[1].status;
			var Trainstatus456split=Trainstatus456.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<Trainstatus456split.length;i++){
			var j=i+12;
			elementA=front[j];
			elementB=frontbottom[j];	
			elementA.innerHTML=Trainstatus456split[i];
			elementB.innerHTML=Trainstatus456split[i];
			}
			
			
			
			var TrainstatusACE=fetched.subway.line[3].status;
			var TrainstatusACEsplit=TrainstatusACE.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<TrainstatusACEsplit.length;i++){
			var k=i+24;
			elementA=front[k];
			elementB=frontbottom[k];	
			elementA.innerHTML=TrainstatusACEsplit[i];
			elementB.innerHTML=TrainstatusACEsplit[i];
			}

			var TrainstatusNQR=fetched.subway.line[8].status;
			var TrainstatusNQRsplit=TrainstatusNQR.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<TrainstatusNQRsplit.length;i++){
			var l=i+36;
			elementA=front[l];
			elementB=frontbottom[l];	
			elementA.innerHTML=TrainstatusNQRsplit[i];
			elementB.innerHTML=TrainstatusNQRsplit[i];
			}
			
			
			})
		}},


	}

    
window.addEventListener("load", Trainstatus.init, false); // Add and event listener when the window finishes loading; call the function init.


