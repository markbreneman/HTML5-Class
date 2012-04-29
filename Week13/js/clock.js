window.addEventListener("load", init, false); // Add and event listener when the window finishes loading; call the function init.

	var clock=document.getElementById("Clock");
	var context = clock.getContext('2d');

function init(e){
	
// clear canvas and set new origin
    context.clearRect(0, 0, clock.width, clock.height);
    context.save();
    context.translate(clock.width / 2, clock.height / 2);

	drawclock();

	window.setInterval("drawclock()", 50);
      	
}


function drawclock(){

        
    //Get the Time
  var time    = new Date();
  var millis  = time.getMilliseconds() / 1000.0;
  var seconds = time.getSeconds();
  var minutes = time.getMinutes();
  var hours   = time.getHours();

	//DRAWING THE CLOCK Body
	var mainRadius=0.75 * (Math.min(clock.width, clock.height) / 2);
	var minorRadius=1.1;

	
	//Mainbody
	context.beginPath();
    context.fillStyle = "rgb(0,0,0)";
    context.arc(0, 0, minorRadius * mainRadius, 0, 2 * Math.PI, true);
    context.fill();
	context.save();
	
	//shadow	
	context.shadowColor   = "rgba(0,0,0,0.5)";
  	context.shadowOffsetX = minorRadius*.03;
  	context.shadowOffsetY = minorRadius*.03;
  	context.shadowBlur    = minorRadius*.06;
  	
  	//stroke
  	
  	context.beginPath();
    context.strokeStyle = "rgb(69,69,69)";
    context.lineWidth = .07 * mainRadius;
    context.arc(0,0, minorRadius*mainRadius, 0, 2 * Math.PI, true);
    context.stroke();
 	context.restore();
 	
 	
 	//Drawing the Dial
 	for (var i = 0; i < 60; i++) {
	context.save();
	context.rotate(i * Math.PI / 30);
	if ((i % 5) == 0) {
	
	  context.beginPath();
	  context.strokeStyle = "rgb(255,255,255)";
	  context.moveTo(0, -1.0 * mainRadius);
	  context.lineTo(0, -0.75 * mainRadius);
	  context.lineWidth = 0.07 * mainRadius;
	  context.stroke();    
	}
	
	else{
	  context.beginPath();
	  context.strokeStyle = "rgb(255,255,255)";
	  context.moveTo(0, -1.0 * mainRadius);
	  context.lineTo(0, -0.92 * mainRadius);
	  context.lineWidth = 0.026 * mainRadius;
	  context.stroke(); 

	}            
    context.restore(); }
    
    //Draw the Hour hand
    //shadow  
    context.save();
    context.rotate(hours * Math.PI / 6 + minutes * Math.PI / 360);
  	context.shadowColor   = "rgba(0,0,0,0.3)";
  	context.shadowOffsetX = mainRadius * .03;
  	context.shadowOffsetY = mainRadius * .03;
  	context.shadowBlur    = mainRadius * .04;
  	//Hand
	context.beginPath();
	context.fillStyle = 'rgb(255,255,255)';
	context.moveTo(-0.05 * mainRadius, -0.6 * mainRadius);
	context.lineTo(0.05 * mainRadius, -0.6 * mainRadius);
	context.lineTo(0.065 * mainRadius, 0.26 * mainRadius);
	context.lineTo(-0.065 * mainRadius,  0.26 * mainRadius);
	context.lineTo(-0.05 * mainRadius, -0.6 * mainRadius);
	context.fill();
    context.restore(); 	
    
    
    //Minute Hand
    context.save();
    context.rotate((minutes + seconds / 60) * Math.PI / 30);
    //Shadow
    context.shadowColor   = "rgba(0,0,0,0.3)";
  	context.shadowOffsetX = mainRadius * .03;
  	context.shadowOffsetY = mainRadius * .03;
  	context.shadowBlur    = mainRadius * .04;
    //Hand
	context.beginPath();
	context.fillStyle = 'rgb(255,255,255)';
	context.moveTo(-0.035 * mainRadius, -0.93 * mainRadius);
	context.lineTo(0.035 * mainRadius, -0.93 * mainRadius);
	context.lineTo(0.05 * mainRadius, 0.25 * mainRadius);
	context.lineTo(-0.05 * mainRadius,  0.25 * mainRadius);
	context.lineTo(-0.035 * mainRadius, -0.93 * mainRadius);
	context.fill();
    context.restore(); 	
    
    //SecondHand
    context.save();
    context.rotate(Math.min((seconds + millis) * (60.0 / 58.5), 60.0) * Math.PI / 30);

  	//Shadow
    context.shadowColor   = "rgba(0,0,0,0.3)";
  	context.shadowOffsetX = mainRadius * .03;
  	context.shadowOffsetY = mainRadius * .03;
  	context.shadowBlur    = mainRadius * .04;

	//Hand
	context.beginPath();
	context.strokeStyle = "rgb(200,0,0)";
	context.moveTo(0, -0.6 * mainRadius);
	context.lineTo(0, 0.35 * mainRadius);
	context.lineWidth = 0.026 * mainRadius;
	context.stroke();
		  
    context.beginPath();
    context.fillStyle = "rgb(200,0,0)";
    context.arc(0, -0.64 * mainRadius, 0.1 * mainRadius, 0, 2 * Math.PI, true);
    context.fill();
	context.restore();


}
       
