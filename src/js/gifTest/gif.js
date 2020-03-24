

//console.log("url is: ", url)


///GET IP ADDRESS

var ipAddress = ""

  function getIP() {
    fetch("https://api.ipify.org/?format=json")
    .then(function(data) {
      return data.json();
    })
    .then(function(IP) {
      ipAddress = Object.values(IP)
      var ipDOM = document.querySelector(".ip"); 
      ipDOM.textContent += ipAddress
    })
    .catch(function(error) {
      console.log(error);
    })
  };

  getIP()



  // USE IP ADRESS TO GET LOCATION DATA

  var location = ""

  function getLocation() {
    fetch("https://ipapi.co/"+ ipAddress + "/json/")
    .then(function(data) {
      return data.json();
    })
    .then(function(ipInfo) {
      var locationDOM = document.querySelector(".location"); 
      console.log(ipInfo)
      locationDOM.textContent += ipInfo.city + ", " + ipInfo.country;
      location = ipInfo.city

    })
    .catch(function(error) {
      console.log(error);

    })
  };

  getLocation()



//GET WEATHER






//GET LOCATION IMAGE






//GET GIPHY GIF

var emotion = "cool" // change once we see Microsoft JSON object

var giphyKey = "bF0nNKQwebanW5ikOpCFyikV40BIDBsk" // Jake's giphy key#

var url = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=" +  giphyKey;


function getGif() {
    fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(gifs) {
      var randomImage = parseInt(Math.random()*Object.keys(gifs.data).length)
      console.log(randomImage)
      var gifDOM = document.querySelector(".gif"); // selects space where gif will go
      console.log(gifs)
      var link = gifs.data[randomImage].images.downsized_medium.url; //grabs gif image from JSON
      gifDOM.src = link; //changes DOM src to new link of gif
    })
    .catch(function(error) {
      console.log(error);
    })
  };

  getGif();








