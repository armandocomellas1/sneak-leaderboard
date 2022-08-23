import './style.css';
import arrayDefault from './default';

const getTheArra = arrayDefault();
let count = 0;
getTheArra.forEach((Number) => {
  const buildLine = `
    Name: ${Number}
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