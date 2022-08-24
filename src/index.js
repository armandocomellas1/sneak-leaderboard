import './style.css';
// import arraydef from './arraydef';
import createGame from './setgame';
import arrayDefault from './default';
import getLocalStorage from './refresh';

const loadStorage = localStorage.getItem('List');
if (loadStorage === null) {
  createGame();
}

document.getElementById('add_game').addEventListener('submit', (event) => {
  event.preventDefault();
  const getName = event.target[0].value;
  const getScore = event.target[1].value;
  arrayDefault(getName, getScore);
});

document.getElementById('refresh_btn').addEventListener('click', () => {
  const getAll = document.getElementById('recent');
  let child = getAll.lastElementChild;
  while (child) {
    getAll.removeChild(child);
    child = getAll.lastElementChild;
  }
  getLocalStorage();
});

window.addEventListener('load', () => {
  getLocalStorage();
});