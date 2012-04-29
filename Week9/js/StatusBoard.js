//Global Variables
var userlat;
var userlong;

//Once the window has loaded this function is called
function init(e){
    
    //Pull in JSON MAP Data and Save to Local storage
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function(){
	    if (xhr.readyState == 4 && xhr.status == 200){
        var json=JSON.parse(xhr.responseText);
        var stringjson=JSON.stringify(json);
        localStorage.setItem("json", stringjson);
        var div = document.getElementById("trainstops");
/* 		console.log(json.features[0].properties.STOP_LAT); */}

    });
    xhr.open("get","MTASubwayStations.json", true);
    xhr.send();

	//Add Event Listener to Button
	var button=document.getElementById("clickbutton");
	button.addEventListener("click",getUserLocation,false)
/* 	button.addEventListener("click",search, false); */
	
	
}

function getUserLocation(e){
	navigator.geolocation.getCurrentPosition(gotPosition);
}

function gotPosition(obj){
/* 	var userlocation=obj; */
	userlat = obj.coords.latitude;
	userlong = obj.coords.longitude;
	search(userlat,userlong);
}	
	
function search(latitude,longitude){
/* 	 console.log(latitude,longitude); */
	var json = localStorage.getItem("json");
	var parsedjson = JSON.parse(json);
	var html="";
	var data =document.getElementById("trainstops");
	for (var i = 0; i < parsedjson.features.length; i++){
	var calcdistance = calculateDistance(latitude,longitude,parsedjson.features[i].properties.STOP_LAT,parsedjson.features[i].properties.STOP_LON)/0.621371192;
	if(calcdistance<.8){

	console.log(parsedjson.features[i].properties.STOP_NAME, parsedjson.features[i].properties.Routes_ALL, calcdistance.toFixed(2)+"mi");
		
	
	/*//Just take me to a map which shows me the train station location
html += "<a href='http://maps.google.com/maps?z=18&t=m&q=loc:"+parsedjson.features[i].properties.STOP_LAT+"+"+parsedjson.features[i].properties.STOP_LON+"'"+"class='trainstationname'>"+parsedjson.features[i].properties.STOP_NAME+" "+"</a><span class='trainline'>"+parsedjson.features[i].properties.Routes_ALL+" "+"</span><span class='distanceto'>"+calcdistance.toFixed(2)+"mi"+"</span><br><br>";
	
*/

//Give me directions to from my position to train
html += "<a href='http://maps.google.com/maps?z=18&t=m&saddr="+latitude+","+longitude+"&daddr="+parsedjson.features[i].properties.STOP_LAT+","+parsedjson.features[i].properties.STOP_LON+"'"+"class='trainstationname'>"+parsedjson.features[i].properties.STOP_NAME+" "+"</a><span class='trainline'>"+parsedjson.features[i].properties.Routes_ALL+" "+"</span><span class='distanceto'>"+calcdistance.toFixed(2)+"mi"+"</span><br><br>";
}
    data.innerHTML = html;  
}

}

function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // Earths Radius in km
  var dLat = (lat2-lat1).toRad();
  var dLon = (lon2-lon1).toRad();
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d;
}

Number.prototype.toRad = function() {
  return this * Math.PI / 180;}
  
//Watch for Changes…How does this work?  It feels as if it overrides the button.
/*
var watchID=navigator.geolocation.watchPosition(gotPosition,handleError);
	
function handleError(error) {
alert("Could not locate you. Please try again or check your connection.")
    }
*/




window.addEventListener("load", init, false); // Add and event listener when the window finishes loading; call the function init.


	
