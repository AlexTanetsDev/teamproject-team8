import { BASE_URL } from './api-service';
import { API_KEY } from './api-service';
import Notiflix from 'notiflix';

// const watchedList = [];
// const queuedList = [];

// const movieList = document.querySelector('.movie-list');

// movieList.addEventListener('click', onItem);

// function onItem(e) {
//   if (e.target.classList.contains('.add-watchedlist')) {
//     const currentMovie = e.target.closest('li');
//     const id = elem.dataset.closes()
//     const currentId = Number(currentMovie.dataset.id);
//     const toWatchedList = currentMovie.find(({ id }) => id === currentId);
//     const inWatchedList = watchedList.find(({ id }) => id === currentId);
//     if (!inWatchedList) {
//       watchedList.push(toWatchedList);
//     } else {
//       Notiflix.Notify.failure('This movie already watched');
//     }
//     return;
//   }
//   if (e.target.classList.contains('.add-queued')) {
//     const toQueuedList = currentMovie.find(({ id }) => id === currentId);
//     const inQueuedList = queuedList.find(({ id }) => id === currentId);
//     if (!inQueuedList) {
//       queuedList.push(toQueuedList);
//     } else {
//       Notiflix.Notify.failure('This movie already watched')
//     }
//     return;
//   }
// }

// function inArray(arr, currentId)

const watchedMovie = [];
const queuedMovie = [];

const movieList = document.querySelector('.movie-list');

movieList.addEventListener('click', onItem);

const markup = movies.reduce(
  (acc, movie) =>
    acc +
    `<li class='js-item' data-id='${movie.id}'>
<img src="${movie.img}" alt="${movie.name}"  width="200px">
<h2>${movie.name}</h2>
<p>${movie.price}</p>
<button class='js-add'>Add</button>
<button class='js-queuedMovie'>queuedMovie List</button>
</li>`,
  ''
);
list.insertAdjacentHTML('beforeend', markup);

list.addEventListener('click', onItem);

function onItem(evt) {
  if (evt.target.classList.contains('js-add')) {
    const towatchedMovie = getMovie(evt.target);
    const id = Number(evt.target.closest('.js-item').dataset.id);
    inArray(watchedMovie, id, towatchedMovie, 'watchedMovie');
  }

  if (evt.target.classList.contains('js-queuedMovie')) {
    const toQueuedMovie = getMovie(evt.target);
    const id = Number(evt.target.closest('.js-item').dataset.id);
    inArray(queuedMovie, id, toQueuedMovie, 'queuedMovie');
  }
}

function getMovie(elem) {
  const currentMovie = elem.closest('.js-item');
  const currentId = Number(currentMovie.dataset.id);
  const movie = elem.find(({ id }) => id === currentId);
  return movie;
}

function inArray(arr, currentId, movie, mod) {
  movie = { ...movie };
  const movieInwatchedMovie = arr.find(({ id }) => id === currentId);

  if (!movieInwatchedMovie) {
    if (mod === 'watchedMovie') {
      movie.qty = 1;
      movie.totalSum = movie.price;
    }
    arr.push(movie);
  } else {
    if (mod === 'watchedMovie') {
      movieInwatchedMovie.qty += 1;
      movieInwatchedMovie.totalSum =
        movieInwatchedMovie.qty * movieInwatchedMovie.price;
    } else {
      Notiflix.Notify.failure('Вже додано');
    }
  }
  console.log(arr);
}
