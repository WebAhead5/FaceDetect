

//console.log("url is: ", url)

var ipDOM = document.querySelector(".ip"); 
var locationDOM = document.querySelector(".location"); 
var city = "London"

///GET IP ADDRESS

  function getIP() {
    fetch("https://api.ipify.org/?format=json")
    .then(function(data) {
      return data.json();
    })
    .then(function(IP) {
      var ipAddress = Object.values(IP)
      ipDOM.textContent += ipAddress
      getLocation(ipAddress)
    })
    .then()
    .catch(function(error) {
      console.log("ERROR IS:", error);
    })
  };

  // USE IP ADRESS TO GET LOCATION DATA

  

  // // //GET LOCATION ONE _ TIMED OUT
  // // function getLocation() {
  // //   fetch("https://ipapi.co/"+ ipAddress + "/json/")
  // //   .then(function(data) {
  // //     return data.json();
  // //   })
  // //   .then(function(ipInfo) {
  // //     var locationDOM = document.querySelector(".location"); 
  // //     console.log(ipInfo)
  // //     locationDOM.textContent += ipInfo.city + ", " + ipInfo.country;
  // //     location = ipInfo.city

  // //   })
  // //   .catch(function(error) {
  // //     console.log(error);

  // //   })
  // // };
  var location = "haifa"



    //GET LOCATION TWO _ 
  function getLocation(ipAddress) {
    fetch("http://api.ipstack.com/" + ipAddress + "?access_key=ed3444554cc1d141b96877c1e566cded")
    .then(function(data) {
      return data.json();
    })
    .then(function(ipInfo) {
      console.log(ipInfo)
      locationDOM.textContent += ipInfo.region_name + ", " + ipInfo.country_name;
      city = ipInfo.region_name
    })
    .catch(function(error) {
      console.log("ERROR IS:", error);
    })
  };


  document.getElementById("locationButton").addEventListener("click", function(){
    console.log("clicked button")
    getIP()
  });
 
  //first website

  //second website & key
  // http://api.ipstack.com/89.208.2.115?access_key=ed3444554cc1d141b96877c1e566cded


  //google maops intergration
  // src="https://maps.googleapis.com/maps/api/staticmap?center=37.384500,-122.088100&zoom=9&size=280x200&scale=1&key=YOUR_MAPS_KEY"


//Haifa example
var Long = 35.058998107910156
var Lat = 32.72100067138672




//GET WEATHER






//GET LOCATION IMAGE






// //GET GIPHY GIF

// var emotion = "cool" // change once we see Microsoft JSON object

// var giphyKey = "bF0nNKQwebanW5ikOpCFyikV40BIDBsk" // Jake's giphy key#

// var url = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=" +  giphyKey;


// function getGif() {
//     fetch(url)
//     .then(function(data) {
//       return data.json();
//     })
//     .then(function(gifs) {
//       var randomImage = parseInt(Math.random()*Object.keys(gifs.data).length)
//       console.log(randomImage)
//       var gifDOM = document.querySelector(".gif"); // selects space where gif will go
//       console.log(gifs)
//       var link = gifs.data[randomImage].images.downsized_medium.url; //grabs gif image from JSON
//       gifDOM.src = link; //changes DOM src to new link of gif
//     })
//     .catch(function(error) {
//       console.log(error);
//     })
//   };

//   getGif();








