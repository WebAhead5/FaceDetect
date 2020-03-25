//location variable
let city="";
//Morad: location img key
const pixaBayKey = "15724529-195ef5be27b1fe3bf39c5be31&q=";
//khaled: weather key
const weatherMapKey = "2ef6a42fb0c1fbf124ac800524fde470";

function loadLocation(){
    city = document.getElementById("searchTxt").value;
    if(city=="")
         getIP();
     else   
         showWeather();
    
    locationPic();    
}

function showWeather(){
    //change this to current location when textField is empty or onload
    //weather url
    var url="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherMapKey;
    //location image url
    var pixaUrl = "https://pixabay.com/api/?key=" + pixaBayKey + city + "&image_type=photo&pretty=true";
    //weather function
    (function() {
        fetch(url)
        .then(function(data) {
            return data.json();
        })
        .then(function(weatherObj) {
            //city name
         document.getElementById("info0").innerHTML = "<b>" + weatherObj.name + "</b>";
            // weather description
          document.getElementById("info1").innerHTML = "<b>" + weatherObj.weather[0].description + "</b>";
          document.getElementById("info2").innerHTML = "<i>Humidity:</i> " + weatherObj.main.humidity + "%";
            // tempreture converted to F
          document.getElementById("info3").innerHTML = "<i>Temp: </i>" + (Math.round(weatherObj.main.temp * (9/5) - 459.67)).toString() + " F";
            //wind speed
          document.getElementById("info4").innerHTML = "<i>Wind speed:<i> " + weatherObj.wind.speed + " m/s";
            //weather icon
          var weatherIcon=weatherObj.weather[0].icon;
          document.getElementById("conditionIcon").src="http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
            //check icon for day or night
          if(weatherIcon.substring(weatherIcon.length-1)=="d")
              document.getElementById("conditionIcon").style.backgroundColor = "skyblue" ;
          else
              document.getElementById("conditionIcon").style.backgroundColor = "black";
            
         // weatherValue=weatherObj.weather[0].value;
         // alert(weatherValue);
        })
        .catch(function(error) {
          // clean info spans
        for(var i=0;i<=4;i++)
              document.getElementById("info"+i).innerHTML="";
              document.getElementById("info1").innerHTML = "city not found!";
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
    .then()
    .catch(function(error) {
      console.log("ERROR IS:", error);
    })
  };

function getLocation(ipAddress) {
    fetch("http://api.ipstack.com/" + ipAddress + "?access_key=ed3444554cc1d141b96877c1e566cded")
    .then(function(data) {
      return data.json();
    })
    .then(function(ipInfo) {
      city = ipInfo.region_name;
      showWeather();
      locationPic();
      //locationDOM.textContent += ipInfo.region_name + ", " + ipInfo.country_name;
    })
    .catch(function(error) {
      console.log("ERROR IS:", error);
    })
  }

//morad's code
function locationPic() {
  var pixaKey = "15724529-195ef5be27b1fe3bf39c5be31&q=";
  var pixaUrl = "https://pixabay.com/api/?key=" + pixaKey + city + "&image_type=photo&pretty=true" ;
  console.log(pixaUrl);
  // https://pixabay.com/api/?key=15724529-195ef5be27b1fe3bf39c5be31&q=haifa&image_type=photo&pretty=true
  var locPic = document.querySelector(".location");
  fetch(pixaUrl)
  .then(function(response){
      return response.json();
  })
  .then(function(pics){
    var randPic = parseInt(Math.random()*Object.keys(pics.hits).length);
    console.log(randPic)
    var picLink = pics.hits[1].largeImageURL;
    locPic.src = picLink;
  })
  .catch(function(error){
    console.log(error);
    locPic.src = "https://cdn.pixabay.com/photo/2015/03/01/21/44/bart-655318_960_720.png";
  })
}

//Jake's giphy code
var giphyKey;
var url;
function takeAction(){
    if(document.getElementById("searchTxt").value == ""){
        alert("Enter emotion");
    }else{
    var emotion = document.getElementById("searchTxt").value;
    
    url = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=" +  giphyKey;
    console.losg("url is: ", url)
    (function() {
        fetch(url)
        .then(function(data) {
          return data.json();
        })
        .then(function(gifs) {
          var randomImage = parseInt(Math.random()*Object.keys(gifs.data).length);
          var gifDOM = document.querySelector(".gif"); 
          var link = gifs.data[randomImage].images.downsized_medium.url; //grabs gif image from JSON
          gifDOM.src = link; //changes DOM src to new link of gif
        })
        .catch(function(error) {
          console.log(error);
        })
      })();
    }
    }



