var Trainstatus = {

		init: function(e){
		
		var xhr = new XMLHttpRequest();
		xhr.addEventListener("readystatechange", function(){
			if (xhr.readyState == 4 && xhr.status == 200){
				currentStatus = JSON.parse(xhr.responseText);
				Trainstatus.inserttext();
			}
		});
		xhr.open("get", "http://www.itp.nyu.edu/~mbb395/HTML5-Spring2012/Week14/MTAStatusPuller.php", true);
		xhr.send();
		window.setInterval("Trainstatus.fetch.retrieve()", 500); //Set Retrieval of New data		
		
		
		},

		inserttext:function(e)
		{
/* 			console.log(currentStatus); */

			var Trainstatus123= currentStatus.subway.line[0].status; 
			var Trainstatus123split=Trainstatus123.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<Trainstatus123split.length;i++){
				elementA=front[i];
				elementB=frontbottom[i];	
				elementA.innerHTML=Trainstatus123split[i];
				elementB.innerHTML=Trainstatus123split[i];
			}
			
			var Trainstatus456=currentStatus.subway.line[1].status;
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
			
			var Trainstatus7=currentStatus.subway.line[2].status;
			var Trainstatus7split=Trainstatus7.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<Trainstatus7split.length;i++){
			var k=i+24;
			elementA=front[k];
			elementB=frontbottom[k];	
			elementA.innerHTML=Trainstatus7split[i];
			elementB.innerHTML=Trainstatus7split[i];
			}
			
			var TrainstatusACE=currentStatus.subway.line[3].status;
			var TrainstatusACEsplit=TrainstatusACE.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<TrainstatusACEsplit.length;i++){
			var l=i+36;
			elementA=front[l];
			elementB=frontbottom[l];	
			elementA.innerHTML=TrainstatusACEsplit[i];
			elementB.innerHTML=TrainstatusACEsplit[i];
			}

			
			var TrainstatusBDFM=currentStatus.subway.line[4].status;
			var TrainstatusBDFMsplit=TrainstatusBDFM.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<TrainstatusBDFMsplit.length;i++){
			var m=i+48;
			elementA=front[m];
			elementB=frontbottom[m];	
			elementA.innerHTML=TrainstatusBDFMsplit[i];
			elementB.innerHTML=TrainstatusBDFMsplit[i];
			}
			
			

			var TrainstatusG=currentStatus.subway.line[5].status;
			var TrainstatusGsplit=TrainstatusG.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<TrainstatusGsplit.length;i++){
			var n=i+60;
			elementA=front[n];
			elementB=frontbottom[n];	
			elementA.innerHTML=TrainstatusGsplit[i];
			elementB.innerHTML=TrainstatusGsplit[i];
			}
			
			
			var TrainstatusJZ=currentStatus.subway.line[6].status;
			var TrainstatusJZsplit=TrainstatusJZ.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<TrainstatusJZsplit.length;i++){
			var o=i+72;
			elementA=front[o];
			elementB=frontbottom[o];	
			elementA.innerHTML=TrainstatusJZsplit[i];
			elementB.innerHTML=TrainstatusJZsplit[i];
			}
			
			
			var TrainstatusL=currentStatus.subway.line[7].status;
			var TrainstatusLsplit=TrainstatusL.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<TrainstatusLsplit.length;i++){
			var p=i+84;
			elementA=front[p];
			elementB=frontbottom[p];	
			elementA.innerHTML=TrainstatusLsplit[i];
			elementB.innerHTML=TrainstatusLsplit[i];
			}
						
			
			var TrainstatusNQR=currentStatus.subway.line[8].status;
			var TrainstatusNQRsplit=TrainstatusNQR.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<TrainstatusNQRsplit.length;i++){
			var q=i+96;
			elementA=front[q];
			elementB=frontbottom[q];	
			elementA.innerHTML=TrainstatusNQRsplit[i];
			elementB.innerHTML=TrainstatusNQRsplit[i];
			}
			
		
			var TrainstatusS=currentStatus.subway.line[9].status;
			var TrainstatusSsplit=TrainstatusS.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			for  (i=0;i<TrainstatusSsplit.length;i++){
			var r=i+108;
			elementA=front[r];
			elementB=frontbottom[r];	
			elementA.innerHTML=TrainstatusLsplit[i];
			elementB.innerHTML=TrainstatusLsplit[i];
			}
			
			
			
		},
		
		
		fetch:{
		retrieve:function(e){
			var xhr = new XMLHttpRequest();
			xhr.addEventListener("readystatechange", function(){
				if (xhr.readyState == 4 && xhr.status == 200){
					newStatus = JSON.parse(xhr.responseText);
				}
			});
			xhr.open("get", "http://www.itp.nyu.edu/~mbb395/HTML5-Spring2012/Week14/MTAStatusPuller.php", true);
			xhr.send();			
		}
		
		},
		
}    
		
		
window.addEventListener("load", Trainstatus.init, false); // Add and event listener when the window finishes loading; call the function init.


