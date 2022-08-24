const arrayDefault = (async (named, scored) => {
  const getId = localStorage.getItem('List');
  const urlIs = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getId}/scores/`;

  const response = await fetch(urlIs, {
    method: 'POST',
    body: JSON.stringify({
      user: named,
      score: scored,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  document.getElementsByClassName('enter_name')[0].value = '';
  document.getElementsByClassName('enter_score')[0].value = '';
  await response.json();
});

export default arrayDefault;
