
function showWeather(){
    var weatherMapKey = "2ef6a42fb0c1fbf124ac800524fde470";
    var city= document.getElementById("searchTxt").value;
    if(city=="")
        city="haifa"; //change this to current location when textField is empty or onload
    var url="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherMapKey;

    (function() {
        fetch(url)
        .then(function(data) {
          return data.json();
        })
        .then(function(weatherObj) {
          document.getElementById("info1").innerHTML = weatherObj.weather[0].description;
          document.getElementById("info2").innerHTML = "Humidity: " + weatherObj.main.humidity + "%";
          document.getElementById("info3").innerHTML = "Temp: " + (Math.round(weatherObj.main.temp * (9/5) - 459.67)).toString() + " F";
          document.getElementById("info4").innerHTML = "Wind speed: " + weatherObj.wind.speed + " m/s";
          document.getElementById("conditionIcon").src="http://openweathermap.org/img/wn/" + weatherObj.weather[0].icon + ".png";
        })
        .catch(function(error) {
          // clean info spans
          for(var i=1;i<=4;i++)
              document.getElementById("info"+i).innerHTML="";
          document.getElementById("info1").innerHTML = "city not found!";
        })
      })();
    
}

//=================
var giphyKey;
var url;
function takeAction(){
    if(document.getElementById("searchTxt").value == ""){
        alert("Enter emotion");
    }else{
    var emotion = document.getElementById("searchTxt").value;
    giphyKey = "bF0nNKQwebanW5ikOpCFyikV40BIDBsk"; // Jake's giphy key#
    url = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=" +  giphyKey;
    //console.log("url is: ", url)
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
