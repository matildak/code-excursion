
console.log("I'm connected!")


var movies = [
    {
        title: "Lucifer",
        rating: 5,
        hasWhatched: true
    },
    {
        title: "Ready Player One",
        rating: 4,
        hasWhatched: false
    },
    {
        title: "The Post",
        rating: 5,
        hasWhatched: true
    }

]

for (var i = 0; i < movies.length; i++){
    if(movies[i].hasWhatched == true){
        console.log("You have whatched " + movies[i].title + " - " + movies[i].rating + " stars");
    } else{
        console.log("You have not seen " + movies[i].title + " - " + movies[i].rating + " stars");
    }

}

movies.forEach(function (movie) {
  var result = "You have ";
  if (movie.hasWhatched){
      result += "whatched ";
  }else{
      result += "not seen ";
  }
  result += "\"" + movie.title + "\"";
  result += " - " + movie.rating + " stars";
    console.log(result);

    })

//refakturera till

function buildString(movie) {
    var result = "You have ";
    if (movie.hasWhatched){
        result += "whatched ";
    }else{
        result += "not seen ";
    }
    result += "\"" + movie.title + "\"";
    result += " - " + movie.rating + " stars";

    return result;
}

movies.forEach(function (movie) {

    console.log(buildString(movie));

})