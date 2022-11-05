import { BASE_URL } from './api-service';
import { API_KEY } from './api-service';
import Notiflix from 'notiflix';


const watchedList = [];
const queuedList = [];

const movieList = document.querySelector('.movie-list')

movieList.addEventListener('click', onItem)

function onItem(e) {
  if (e.target.classList.contains('.add-watchedlist')) {
    const currentMovie = e.target.closest('li');
    const currentId = Number(currentMovie.dataset.id);
    const toWatchedList = currentMovie.find(({ id }) => id === currentId);
    const inWatchedList = watchedList.find(({ id }) => id === currentId);
    if (!inWatchedList) {
      watchedList.push(toWatchedList);
    } else {
      Notiflix.Notify.failure('This movie already watched');
    }
    return;
  }
  if (e.target.classList.contains('.add-queued')) {
    const toQueuedList = currentMovie.find(({ id }) => id === currentId);
    const inQueuedList = queuedList.find(({ id }) => id === currentId);
    if (!inQueuedList) {
      queuedList.push(toQueuedList);
    } else {
      Notiflix.Notify.failure('This movie already watched');
    }
    return;
  }
}

function getMovie()
