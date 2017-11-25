var movies = [{
    haveWatched: true,
    movie: "Toy Story",
    rating: 4
  },
  {
    haveWatched: true,
    movie: "Finding Nemo",
    rating: 5
  },
  {
    haveWatched: false,
    movie: "UP",
    rating: 3
  },
  {
    haveWatched: false,
    movie: "Big Hero 6",
    rating: 2
  }
]

function buildString(movie) {
  var results = "You have  ";
  if(movie.haveWatched ) {
    results += "watched ";
  } else {
    results += "not seen ";
  }
  results += "\""+ movie.movie + "\" - ";
  results += movie.rating + " stars";
  return results;
}

movies.forEach(function(movie) {
  console.log(buildString(movie));
});
