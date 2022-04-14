import 'bootstrap';
import './css/style.css';
import './scss/index.scss';
import Movie from './modules/Movie';
import createComment from './modules/createComment';

const movie = new Movie();
movie.fetchMovies();

document.querySelector('#comment-btn').addEventListener('click', () => {
  const movieId = document.querySelector('#movie-comment-id').value;
  const comment = document.querySelector('#comment').value;
  const username = document.querySelector('#username').value;

  createComment(movieId, comment, username);
});