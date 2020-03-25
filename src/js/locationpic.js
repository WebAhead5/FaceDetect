
    var locPic = document.querySelector(".location");
    var location = 'haifa'
    const pixaBayKey = "15724529-195ef5be27b1fe3bf39c5be31&q=";
    var pixaUrl = "https://pixabay.com/api/?key=" + pixaBayKey + location + "&image_type=photo&pretty=true" ;
    console.log(pixaUrl)
    // https://pixabay.com/api/?key=15724529-195ef5be27b1fe3bf39c5be31&q=haifa&image_type=photo&pretty=true
    (function () {
    fetch(pixaUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(pics) {
      var link = pics.hits[1].previewURL;
      console.log(link)
      locPic.src = link;
    })
    .catch(function(error) {
      console.log(error);
    //   locPic.src = "./error.gif";
    })
  });
  