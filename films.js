const movies = require("./data");

// Exercise 1: Get the array of all directors.

function getAllDirectors(movies) {

  const result = movies.map((movies) => `${movies.director}`);

  return result;

}



// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(movies, director) {

  const result = movies.filter(movies => movies.director === director)

  return result;

}


// Exercise 3: Calculate the average of the films of a given director.

function moviesAverage(array) {

  const moviesWithScore = array.filter((movies) => movies.score !== '')

  const sumaScores = moviesWithScore.reduce((score, movie) => score + movie.score, 0);

  const result = sumaScores / moviesWithScore.length;

  return Number(result.toFixed(2));
}

function moviesAverageOfDirector(array, director) {

  const moviesFromOneDirector = getMoviesFromDirector(array, director)

  const averageDirectors = moviesAverage(moviesFromOneDirector);

  return averageDirectors;

}
// Exercise 4:  Alphabetic order by title 

function orderAlphabetically(array) {

  const busquedaFilms = array.map((movies) => `${movies.title}`);

  const sortedFilms = busquedaFilms.sort();

  const cutTo20 = sortedFilms.slice(0, 20);

  return cutTo20;
}



// Exercise 5: Order by year, ascending
function orderByYear(array) {

  const newArrayByYear = [...array]; //per a crear un array nou de un array ja creat

  newArrayByYear.sort((a, b) => {

    if (a.year > b.year) {
      return 1;
    }

    else if (a.year < b.year) {
      return -1;
    }
    else if (a.year === b.year) {
      if (a.title > b.title) {
        return 1;
      }
      else if (a.title < b.title) {
        return -1;
      }
      return 0;
    }
  });

  return newArrayByYear;
}

// Exercise 6: Calculate the average of the movies in a category

function filterByGenre(array, genre) {

  const getMoviesByGenre = array.filter(pelicula => pelicula.genre.includes(genre))// Includes: busca dins d'un array de strings.

  return getMoviesByGenre;
}

function moviesAverageByCategory(array, genre) {

  const moviesByGenre = filterByGenre(array, genre);

  const averageGenre = moviesAverage(moviesByGenre)

  return averageGenre;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  const findMoviesByDuration = array.map((movie) => {
    const arrayDuration = movie.duration.split(' ')
    let changeLetersHours = 0
    if (arrayDuration[0]) {
      changeLetersHours = arrayDuration[0].replace('h', '')
    }
    let changeLetersMin = 0
    if (arrayDuration[1]) {
      changeLetersMin = arrayDuration[1].replace('min', '')
    }
    const hoursInMin = Number(changeLetersHours) * 60 + Number(changeLetersMin)

    return { ...movie, duration: hoursInMin }
  });
  return findMoviesByDuration;

}



// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
