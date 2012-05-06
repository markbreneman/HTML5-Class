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
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			var rear=document.getElementsByClassName("rearletter");
			var back=document.getElementsByClassName("backletter");
/* 			console.log(String.fromCharCode(Trainstatus123split[1].charCodeAt(0) - 1)); */
/* 			console.log(rear,back);			 */
			for  (i=0;i<Trainstatus123split.length;i++){
				elementA=front[i];
				elementB=frontbottom[i];	
				elementA.innerHTML=Trainstatus123split[i];
				elementB.innerHTML=Trainstatus123split[i];
				elementC=rear[i];
				elementD=back[i];
				elementC.innerHTML=String.fromCharCode(Trainstatus123split[i].charCodeAt(0) + 1);
				elementD.innerHTML=String.fromCharCode(Trainstatus123split[i].charCodeAt(0) + 1);
			}
			
			var Trainstatus456=currentStatus.subway.line[1].status;
			var Trainstatus456split=Trainstatus456.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			var rear=document.getElementsByClassName("rearletter");
			var back=document.getElementsByClassName("backletter");
			

			for  (i=0;i<Trainstatus456split.length;i++){
			var j=i+14;
			elementA=front[j];
			elementB=frontbottom[j];	
			elementA.innerHTML=Trainstatus456split[i];
			elementB.innerHTML=Trainstatus456split[i];
			elementC=rear[j];
			elementD=back[j];
			elementC.innerHTML=String.fromCharCode(Trainstatus456split[i].charCodeAt(0) + 1);
			elementD.innerHTML=String.fromCharCode(Trainstatus456split[i].charCodeAt(0) + 1);
			}
			
			var Trainstatus7=currentStatus.subway.line[2].status;
			var Trainstatus7split=Trainstatus7.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			var rear=document.getElementsByClassName("rearletter");
			var back=document.getElementsByClassName("backletter");

			for  (i=0;i<Trainstatus7split.length;i++){
			var k=i+28;
			elementA=front[k];
			elementB=frontbottom[k];	
			elementA.innerHTML=Trainstatus7split[i];
			elementB.innerHTML=Trainstatus7split[i];
			elementC=rear[k];
			elementD=back[k];
			elementC.innerHTML=String.fromCharCode(Trainstatus7split[i].charCodeAt(0) + 1);
			elementD.innerHTML=String.fromCharCode(Trainstatus7split[i].charCodeAt(0) + 1);

			}
			
			var TrainstatusACE=currentStatus.subway.line[3].status;
			var TrainstatusACEsplit=TrainstatusACE.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			var rear=document.getElementsByClassName("rearletter");
			var back=document.getElementsByClassName("backletter");

			for  (i=0;i<TrainstatusACEsplit.length;i++){
			var l=i+42;
			elementA=front[l];
			elementB=frontbottom[l];	
			elementA.innerHTML=TrainstatusACEsplit[i];
			elementB.innerHTML=TrainstatusACEsplit[i];
			elementC=rear[l];
			elementD=back[l];
			elementC.innerHTML=String.fromCharCode(TrainstatusACEsplit[i].charCodeAt(0) + 1);
			elementD.innerHTML=String.fromCharCode(TrainstatusACEsplit[i].charCodeAt(0) + 1);

			}

			
			var TrainstatusBDFM=currentStatus.subway.line[4].status;
			var TrainstatusBDFMsplit=TrainstatusBDFM.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			var rear=document.getElementsByClassName("rearletter");
			var back=document.getElementsByClassName("backletter");

			for  (i=0;i<TrainstatusBDFMsplit.length;i++){
			var m=i+56;
			elementA=front[m];
			elementB=frontbottom[m];	
			elementA.innerHTML=TrainstatusBDFMsplit[i];
			elementB.innerHTML=TrainstatusBDFMsplit[i];
			elementC=rear[m];
			elementD=back[m];
			elementC.innerHTML=String.fromCharCode(TrainstatusBDFMsplit[i].charCodeAt(0) + 1);
			elementD.innerHTML=String.fromCharCode(TrainstatusBDFMsplit[i].charCodeAt(0) + 1);
			}
			
			

			var TrainstatusG=currentStatus.subway.line[5].status;
			var TrainstatusGsplit=TrainstatusG.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			var rear=document.getElementsByClassName("rearletter");
			var back=document.getElementsByClassName("backletter");
			

			for  (i=0;i<TrainstatusGsplit.length;i++){
			var n=i+70;
			elementA=front[n];
			elementB=frontbottom[n];	
			elementA.innerHTML=TrainstatusGsplit[i];
			elementB.innerHTML=TrainstatusGsplit[i];
			elementC=rear[n];
			elementD=back[n];
			elementC.innerHTML=String.fromCharCode(TrainstatusGsplit[i].charCodeAt(0) + 1);
			elementD.innerHTML=String.fromCharCode(TrainstatusGsplit[i].charCodeAt(0) + 1);
			}
			
			
			var TrainstatusJZ=currentStatus.subway.line[6].status;
			var TrainstatusJZsplit=TrainstatusJZ.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			var rear=document.getElementsByClassName("rearletter");
			var back=document.getElementsByClassName("backletter");

			for  (i=0;i<TrainstatusJZsplit.length;i++){
			var o=i+84;
			elementA=front[o];
			elementB=frontbottom[o];	
			elementA.innerHTML=TrainstatusJZsplit[i];
			elementB.innerHTML=TrainstatusJZsplit[i];
			elementC=rear[o];
			elementD=back[o];
			elementC.innerHTML=String.fromCharCode(TrainstatusJZsplit[i].charCodeAt(0) + 1);
			elementD.innerHTML=String.fromCharCode(TrainstatusJZsplit[i].charCodeAt(0) + 1);
			}
			
			
			var TrainstatusL=currentStatus.subway.line[7].status;
			var TrainstatusLsplit=TrainstatusL.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			var rear=document.getElementsByClassName("rearletter");
			var back=document.getElementsByClassName("backletter");

			for  (i=0;i<TrainstatusLsplit.length;i++){
			var p=i+98;
			elementA=front[p];
			elementB=frontbottom[p];	
			elementA.innerHTML=TrainstatusLsplit[i];
			elementB.innerHTML=TrainstatusLsplit[i];
			elementC=rear[p];
			elementD=back[p];
			elementC.innerHTML=String.fromCharCode(TrainstatusLsplit[i].charCodeAt(0) + 1);
			elementD.innerHTML=String.fromCharCode(TrainstatusLsplit[i].charCodeAt(0) + 1);
			}
						
			
			var TrainstatusNQR=currentStatus.subway.line[8].status;
			var TrainstatusNQRsplit=TrainstatusNQR.split("");			
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			var rear=document.getElementsByClassName("rearletter");
			var back=document.getElementsByClassName("backletter");

			for  (i=0;i<TrainstatusNQRsplit.length;i++){
			var q=i+112;
			elementA=front[q];
			elementB=frontbottom[q];	
			elementA.innerHTML=TrainstatusNQRsplit[i];
			elementB.innerHTML=TrainstatusNQRsplit[i];
			elementC=rear[q];
			elementD=back[q];
			elementC.innerHTML=String.fromCharCode(TrainstatusNQRsplit[i].charCodeAt(0) + 1);
			elementD.innerHTML=String.fromCharCode(TrainstatusNQRsplit[i].charCodeAt(0) + 1);
			}
			
		
			var TrainstatusS=currentStatus.subway.line[9].status;
			var TrainstatusSsplit=TrainstatusS.split("");	
				
			var front=document.getElementsByClassName("frontletter");
			var frontbottom=document.getElementsByClassName("frontbottomletter");
			var rear=document.getElementsByClassName("rearletter");
			var back=document.getElementsByClassName("backletter");

			for  (i=0;i<TrainstatusSsplit.length;i++){
			var r=i+126;
			console.log(TrainstatusSsplit[1]);	
			elementA=front[r];
			elementB=frontbottom[r];	
			elementA.innerHTML=TrainstatusSsplit[i];
			elementB.innerHTML=TrainstatusSsplit[i];
			elementC=rear[r];
			elementD=back[r];
			elementC.innerHTML=String.fromCharCode(TrainstatusSsplit[i].charCodeAt(0) + 1);
			elementD.innerHTML=String.fromCharCode(TrainstatusSsplit[i].charCodeAt(0) + 1);
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


