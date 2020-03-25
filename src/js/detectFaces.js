// const giphyKey;
// const url;

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

//the location var here gonna be used from the ip location data
function locationPic() {
  var location = "haifa";
  var pixaKey = "15724529-195ef5be27b1fe3bf39c5be31&q=";
  var pixaUrl = "https://pixabay.com/api/?key=" + pixaKey + location + "&image_type=photo&pretty=true" ;
  console.log(pixaUrl);
  // https://pixabay.com/api/?key=15724529-195ef5be27b1fe3bf39c5be31&q=haifa&image_type=photo&pretty=true
  var locPic = document.querySelector(".location");
  fetch(pixaUrl)
  .then(function(response){
      return response.json();
  })
  .then(function(pics){
      var picLink = pics.hits[1].largeImageURL;
      locPic.src = picLink;
  })
  .catch(function(error){
      console.log(error);
      locPic.src = "https://cdn.pixabay.com/photo/2015/03/01/21/44/bart-655318_960_720.png";
  })
};
locationPic();


    // var pixaUrl = "https://pixabay.com/api/?key=15724529-195ef5be27b1fe3bf39c5be31&q=haifa&image_type=photo&pretty=true"
// console.log(pixaUrl)

