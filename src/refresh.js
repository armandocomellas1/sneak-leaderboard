const getLocalStorage = () => {
  const getObject = 'SeEHnRhRvxVjE8M8I44H';
  const urlIs = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getObject}/scores/`;
  fetch(urlIs, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json()).then((json) => {
    let count = 0;
    const getJson = json.result;
    getJson.forEach((line) => {
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
  });
};

export default getLocalStorage;
