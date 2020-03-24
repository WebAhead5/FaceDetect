

var emotion = "sad" // change once we see Microsoft JSON object

var giphyKey = "bF0nNKQwebanW5ikOpCFyikV40BIDBsk" // Jake's giphy key#

var url = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=" +  giphyKey;
//console.log("url is: ", url)

(function() {
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
  })();







// (function () {
//   var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
//   fetch(url)
//   .then(function(gifs) {
//     var gifDrop = document.querySelector(".gif");
//     var link = gifs.data[1].images.downsized_medium.url;
//     gifDrop.src = link;
//   })
//   .catch(function(error) {
//     console.log(error);
//   })
// })();





