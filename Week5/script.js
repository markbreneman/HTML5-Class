//Setting up Variables

var self = document.getElementById("self-");
/* console.log(self); */


var potato = document.getElementById("potato");
/* console.log(potato); */

var letters=document.querySelectorAll(".letter");
/* console.log(letters); */
	
	

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

var guessbutton=document.getElementById("guessbutton");
guessbutton.addEventListener("click", guessbuttonClickListener,false);

function guessbuttonClickListener(e){
for( var i=0; i<letters.length;i++){
	var letter=letters[i];
	letter.classList.remove("Letter");
	}
	var guessimage=document.getElementById("Guess");	
	guessimage.parentNode.removeChild(guessimage);
	
	
	}