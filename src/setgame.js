const createGame = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'RomanChess',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json()).then(() => {
    localStorage.setItem('List', 'SeEHnRhRvxVjE8M8I44H');
  });
};

export default createGame;