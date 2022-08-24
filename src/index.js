import './style.css';
// import arraydef from './arraydef';
import arrayDefault from './default';
import getLocalStorage from './refresh';

const getArray = [];
document.getElementById('add_game').addEventListener('submit', (event) => {
  event.preventDefault();
  const getElements = document.getElementById('recent').childElementCount;
  const getName = event.target[0].value;
  const getScore = event.target[1].value;
  arrayDefault(getName, getScore);
  const game = {
    name: getName,
    score: getScore,
  };
  getArray.push(game);
  let count = getElements;
  const buildLine = `
    ${game.name}: ${game.score}
  `;
  const getContainer = document.getElementById('recent');
  const createDiv = document.createElement('div');
  createDiv.classList.add('line');
  createDiv.innerHTML = buildLine;
  if (count % 2 !== 0) {
    createDiv.style.backgroundColor = 'rgb(221, 221, 221)';
  } else {
    createDiv.style.backgroundColor = 'rgb(255, 255, 255)';
  }
  count += 1;
  getContainer.appendChild(createDiv);
});

document.getElementById('refresh_btn').addEventListener('click', () => {
  getLocalStorage();
});