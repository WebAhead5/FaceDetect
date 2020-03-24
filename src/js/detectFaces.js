
const giphyKey;
const url;

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

//the location var here gonna be used from the ip location data
    const pixaBayKey = "15724529-195ef5be27b1fe3bf39c5be31&q=";
    var pixaUrl = "https://pixabay.com/api/?key=" + pixaBayKey + location + "&image_type=photo&pretty=true" ;
    // var pixaUrl = "https://pixabay.com/api/?key=15724529-195ef5be27b1fe3bf39c5be31&q=haifa&image_type=photo&pretty=true"
// console.log(pixaUrl)
function locationImg(){
    fetch(pixaUrl)
    .then(function(data) {
        return data.json();
    })
    .then(function locationEx(location) {
        var randomId = parseInt(Math.random()*Object.keys(hits).length);  
        var locationPic = document.getElementById('myImg');
        var thePic = hits[randomId].previewURL;
        locationPic.src = thePic;
    })
    .catch(function (error) {
        console.log(error);
    })
} 