
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
