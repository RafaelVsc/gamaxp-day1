const BASE_URL = 'https://api.chucknorris.io/jokes/';
const METHOD = 'GET';
const CONTENT_TYPE = 'application/json';
const MODE = 'cors';

function getRandomJoke() {
  fetch(`${BASE_URL}random`, {
    method: METHOD,
    mode: MODE,
    headers: {
      'Content-Type': CONTENT_TYPE
    }
  })
  .then(response => {
    console.log(response.json());
  });
}