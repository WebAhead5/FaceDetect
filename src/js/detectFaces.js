//location variable
let city="";
var Long = 0;
var Lat = 0;
//Morad: location img key
const pixaBayKey = "15724529-195ef5be27b1fe3bf39c5be31&q=";
//khaled: weather key
const weatherMapKey = "2ef6a42fb0c1fbf124ac800524fde470";

function hitIt(event){
    if (event.keyCode==13)
        document.getElementById("searchBtn").click();
}

function loadLocation(){
    city = document.getElementById("searchTxt").value;
    if(city=="") {
         getIP();}
     else  {
         showWeather();
         locationPic();}
}

function showWeather(){
    //weather url
    var url="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherMapKey;
    //location image url
    var pixaUrl = "http://pixabay.com/api/?key=" + pixaBayKey + city + "&image_type=photo&pretty=true";
    //weather function
    (function() {
        fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function(weatherObj) {
            //city name
         document.getElementById("info0").innerHTML = "<b>" + weatherObj.name[0].toUpperCase() + weatherObj.name.slice(1) + "</b>";
            // weather description
          document.getElementById("info1").innerHTML = "<b>" + weatherObj.weather[0].description[0].toUpperCase() + weatherObj.weather[0].description.slice(1) + "</b>";
          document.getElementById("info2").innerHTML = "<i>Humidity:</i> " + weatherObj.main.humidity + "%";
            // tempreture converted to F
          document.getElementById("info3").innerHTML = "<i>Current Temp: </i>" + calcF(weatherObj.main.temp) + " (" + calcC(weatherObj.main.temp) + ")"; 
          document.getElementById("info4").innerHTML = "<i>Max Temp: </i>" + calcF(weatherObj.main.temp_max) + " (" + calcC(weatherObj.main.temp_max) + ")";  
          document.getElementById("info5").innerHTML = "<i>Min Temp: </i>" + calcF(weatherObj.main.temp_min) + " (" + calcC(weatherObj.main.temp_min) + ")"; 
          //wind speed
          document.getElementById("info6").innerHTML = "<i>Wind speed:<i> " + weatherObj.wind.speed + " m/s";
            //weather icon
          var weatherIcon=weatherObj.weather[0].icon;
          document.getElementById("conditionIcon").src="http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
            //check icon for day or night
          if(weatherIcon.substring(weatherIcon.length-1)=="d")
              document.getElementById("conditionIcon").style.backgroundColor = "skyblue" ;
          else
              document.getElementById("conditionIcon").style.backgroundColor = "black";
        
          Long = weatherObj.coord.lon;
          Lat = weatherObj.coord.lat;
          console.log("location is: ", Lat, Long)
          getMap();

        })
        .catch(function(error) {
          errorFound(error)
        })
      })();
    
}
  function getIP() {
    fetch("https://api.ipify.org/?format=json")
    .then(function(data) {
      return data.json();
    })
    .then(function(IP) {
      var ipAddress = Object.values(IP);
      getLocation(ipAddress);
       
    })
    .catch(function(error) {
      errorFound()
    })
  };

function getLocation(ipAddress) {
    fetch("http://api.ipstack.com/" + ipAddress + "?access_key=ed3444554cc1d141b96877c1e566cded")
    .then(function(data) {
      return data.json();
    })
    .then(function(ipInfo) {
      city = ipInfo.region_name;
      Lat = ipInfo.latitude;
      Long = ipInfo.longitude;
      console.log("location is: ", Lat, Long)
      showWeather();
      locationPic();
    })
    .catch(function(error) {
      errorFound(error)
    })
  }

//morad's code
function locationPic() {
  var pixaKey = "15724529-195ef5be27b1fe3bf39c5be31&q=";
  var pixaUrl = "https://pixabay.com/api/?key=" + pixaKey + city ;
  console.log(pixaUrl);
  var locPic = document.querySelector(".location");
  fetch(pixaUrl)
  .then(function(response){
      return response.json();
  })
  .then(function(pics){
    var randPic = parseInt(Math.random()*(Object.keys(pics.hits).length));
    console.log("random pic index ", randPic)
    var picLink = pics.hits[randPic].largeImageURL;
    locPic.src = picLink;
    console.log(picLink)
  })
  .catch(function(error){
    errorFound(error)
  })
}


function getMap() {
  console.log("GET MAP CALLED")
      // Initialize the platform object:

      var platform = new H.service.Platform({
        'apikey': 'f-3oYNVzXsvGjkldg4CkaCT2Wx46R-jir8pJ7SYVlCQ'
      });

      // Obtain the default map types from the platform object
      var maptypes = platform.createDefaultLayers();
      
      document.getElementById('mapContainer').innerHTML = "";

      // Instantiate (and display) a map object:
      var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map,
        {
          zoom: 8,
          center: { lng: Long, lat: Lat }
        });

        var svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white">X</text></svg>';
        var icon = new H.map.Icon(svgMarkup),
        coords = {lat: Lat, lng: Long},
        marker = new H.map.Marker(coords, {icon: icon});

        map.addObject(marker);
        map.setCenter(coords);
      

};


function errorFound(error) {

//ON ERROR

//clear weather info
  for(var i=0;i<=6;i++) {
  document.getElementById("info"+i).innerHTML="";}
//display error message
  document.getElementById("info1").innerHTML = "<br><br>Sorry! City is not found!";

//set default pics on error
  document.getElementById("conditionIcon").src="../../res/img/punch.png"
  document.querySelector(".location").src = "../../res/img/punch.png"

//Console Log Error
  console.log("ERROR IS:", error);

//Set map to Error message

  document.getElementById('mapContainer').innerHTML = "<i>Error: No map to display - please re-enter city</i>";


}


function calcF(temp) {

  return (Math.round(temp * (9/5) - 459.67)).toString() + "°F"

}

function calcC(temp) {

  return  (Math.round(temp - 273.1)) + "°C"

}



