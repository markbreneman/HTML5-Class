//Setting up Variables

var self = document.getElementById("self-");
/* console.log(self); */


var potato = document.getElementById("potato");
/* console.log(potato); */

var letters=document.querySelectorAll(".letter");
/* console.log(letters); */
	
	
	
//Adding Contestant Div
window.addEventListener("load",windowLoadListener,false);

function windowLoadListener(e){
	
var contestant=document.createElement("div");
document.body.appendChild(contestant)
contestant.id="contestant";

var contestantdiv = document.getElementById("contestant");

var fail=document.createElement("figure");
fail.id="Fail";
contestantdiv.appendChild(fail)

var guess=document.createElement("figure");
guess.id="Guess";
contestant.appendChild(guess)

}


//Setting up GuessButton

var solvebutton=document.getElementById("solvebutton");
solvebutton.addEventListener("click", solvebuttonClickListener,false);

function solvebuttonClickListener(e){
for( var i=0; i<letters.length;i++){
	var letter=letters[i];
	letter.classList.add("letterreveal");
	}
	var guessimage=document.getElementById("Guess");	
	guessimage.parentNode.removeChild(guessimage);
	
	}
	
//Creating the Spinning Wheel

 var colors = ["#B8D430", "#3AB745", "#029990", "#3501CB",
               "#2E2C75", "#673A7E", "#CC0071", "#F80120",
               "#F35B20", "#FB9A00", "#FFCC00", "#FEF200"];
  var money = ["$5000", "$600", "$500", "$300",
                     "$500", "$800", "$550", "$400",
                     "$300", "$900", "$500", "$300"];
  
  var startAngle = 0;
  var arc = Math.PI / 6;
  var spinTimeout = null;
  
  var spinArcStart = 10;
  var spinTime = 0;
  var spinTimeTotal = 0;
  
  var ctx;
  
  function draw() {
    drawRouletteWheel();
  }
  
  function drawRouletteWheel() {
    var canvas = document.getElementById("wheelcanvas");
    if (canvas.getContext) {
      var outsideRadius = 200;
      var textRadius = 160;
      var insideRadius = 60;
      
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,500,500);
      
      
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      
      ctx.font = '12px sans-serif';
      
      for(var i = 0; i < 12; i++) {
        var angle = startAngle + i * arc;
        ctx.fillStyle = colors[i];
        
        ctx.beginPath();
        ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
        ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill();
        ctx.save();
   
        ctx.shadowOffsetX = -1;
        ctx.shadowOffsetY = -1;
        ctx.shadowBlur    = 0;
        ctx.shadowColor   = "rgb(220,220,220)";
        ctx.fillStyle = "black";
        ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 250 + Math.sin(angle + arc / 2) * textRadius);
/*         ctx.rotate(angle + arc / 2 + Math.PI / 2); */
        ctx.rotate(angle+arc/2+Math.PI*2);
        ctx.textAlign="center";
        var text = money[i];
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
      } 
      
       ctx.beginPath();
	   ctx.arc(250, 250,insideRadius,0,Math.PI*2,true);
       ctx.fillStyle="rgb(255,255,255)";
	   ctx.fill();
       ctx.closePath();

      
      //Arrow
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
      ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
      ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
      ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
      ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
      ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
      ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
      ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
      ctx.fill();
    }
  }
  
  function spin() {
    spinAngleStart = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 1000;
    rotateWheel();
  }
  
  function rotateWheel() {
    spinTime += 30;
    if(spinTime >= spinTimeTotal) {
      stopRotateWheel();
      return;
    }
    var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 180);
    drawRouletteWheel();
    spinTimeout = setTimeout('rotateWheel()', 30);
  }
  
  function stopRotateWheel() {
    clearTimeout(spinTimeout);
    var degrees = startAngle * 180 / Math.PI + 90;
    var arcd = arc * 180 / Math.PI;
    var index = Math.floor((360 - degrees % 360) / arcd);
    ctx.save();
    ctx.font = '30px sans-serif';
    var text = money[index]
    ctx.fillStyle="black";
    ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 - 10);
    ctx.restore();
  }
  
  function easeOut(t, b, c, d) {
    var ts = (t/=d)*t;
    var tc = ts*t;
    return b+c*(tc + -3*ts + 3*t);
  }
  
  draw();


function letterPicker(e){
	//get the input of the textfield
	var letterPicker = document.getElementById("letter_picker").value;	
	console.log(letterPicker);
	
	//get the elements for each letter 	

	//letter s
	var s=document.querySelectorAll('[letter="s"]');
/* 	console.log(s); */
	var sletter=s[0].innerHTML;
/* 	console.log(sletter); */
	  if (letterPicker==sletter) {
	  for(var i = 0; i < s.length; i++) {
	  s[i].parentNode.classList.add("letterreveal");
	  }}
	  
  	//letter e	
	var e=document.querySelectorAll('[letter="e"]');
/* 	console.log(e); */
	var eletter=e[0].innerHTML;
/* 	console.log(eletter); */
  if (letterPicker==eletter) {
	  for(var i = 0; i < e.length; i++) {
	  e[i].parentNode.classList.add("letterreveal");
	  }}
	  
	//letter l	
	var l=document.querySelectorAll('[letter="l"]');
/* 	console.log(l); */
	var lletter=l[0].innerHTML;
/* 	console.log(lletter); */
	  if (letterPicker==lletter) {
	  for(var i = 0; i < l.length; i++) {
	  l[i].parentNode.classList.add("letterreveal");
	  }}


	//letter f	
	var f=document.querySelectorAll('[letter="f"]');
/* 	console.log(f); */
	var fletter=f[0].innerHTML;
/* 	console.log(fletter); */
	  if (letterPicker==fletter) {
	  for(var i = 0; i < f.length; i++) {
	  f[i].parentNode.classList.add("letterreveal");
	  }}
	
	//letter -	
	var hyphen=document.querySelectorAll('[letter="-"]');
/* 	console.log(hyphen); */
	var hyphenletter=hyphen[0].innerHTML;
/* 	console.log(hyphenletter); */
	 if (letterPicker==hyphenletter) {
	  for(var i = 0; i < hyphen.length; i++) {
	  hyphen[i].parentNode.classList.add("letterreveal");
	  }}

	
	//letter p	
	var p=document.querySelectorAll('[letter="p"]');
/* 	console.log(p); */
	var pletter=p[0].innerHTML;
/* 	console.log(pletter); */
	  if (letterPicker==pletter) {
	  for(var i = 0; i < p.length; i++) {
	  p[i].parentNode.classList.add("letterreveal");
	  }}
	
	
	//letter o	
	var o=document.querySelectorAll('[letter="o"]');
/* 	console.log(o); */
	var oletter=o[0].innerHTML;
/* 	console.log(oletter); */
	if (letterPicker==oletter) {
	  for(var i = 0; i < o.length; i++) {
	  o[i].parentNode.classList.add("letterreveal");
	  }}

	
	//letter t	
	var t=document.querySelectorAll('[letter="t"]');
/* 	console.log(t); */
	var tletter=t[0].innerHTML;
/* 	console.log(tletter); */
	  if (letterPicker==tletter) {
	  for(var i = 0; i < t.length; i++) {
	  t[i].parentNode.classList.add("letterreveal");
	  }}
	
	//letter a	
	var a=document.querySelectorAll('[letter="a"]');
/* 	console.log(a); */
	var aletter=a[0].innerHTML;
/* 	console.log(aletter); */
	  if (letterPicker==aletter) {
	  for(var i = 0; i < a.length; i++) {
	  a[i].parentNode.classList.add("letterreveal");
	  }}
	
	return false;
	
}

document.getElementById("letter_picker_form").addEventListener("click", letterPicker, false);

  
// get input value - From Dan Kantor
/*
function letterPickerListener(){
	var letterPicker = document.getElementById("letter_picker");
	var value = letterPicker.getAttribute("value");
	letterPicker.setAttribute("value", "");
	return false;
}

document.getElementById("letter_picker_form").addEventListener("submit", letterPickerListener, false);
*/