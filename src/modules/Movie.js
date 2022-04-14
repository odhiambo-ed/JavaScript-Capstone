import displayMovie from './displayMovies';
import getLikes from './getLikes';

export default class Movie {
  constructor() {
    this.BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    this.APP_ID = 'D8OVZsdBVSdILi60DTqq';
    this.MOVIES_API_URL = 'https://api.tvmaze.com/search/shows?q=girls';
  }

  fetchMovies() {
    fetch(this.MOVIES_API_URL)
      .then((res) => res.json())
      .then((movieData) => {
        movieData.forEach((movie) => {
          displayMovie(movie.show);
        });

        getLikes();
      });
  }
}