const arrayDefault = ((named, scored) => {
  const getId = 'SeEHnRhRvxVjE8M8I44H';
  const urlIs = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getId}/scores/`;

  fetch(urlIs, {
    method: 'POST',
    body: JSON.stringify({
      user: named,
      score: scored,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json()).then((json) => {
    throw json;
  });
});

export default arrayDefault;
