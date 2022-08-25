const getObject = localStorage.getItem('List');
const getLocalStorage = async () => {
  const urlIs = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getObject}/scores/`;
  const response = await fetch(urlIs, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  let count = 0;
  const getJson = data.result;
  const sortObj = getJson.sort((a, b) => {
    const rest = b.score - a.score;
    return rest;
  });
  sortObj.forEach((line) => {
    const game = {
      name: line.user,
      score: line.score,
    };
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
};

export default getLocalStorage;
