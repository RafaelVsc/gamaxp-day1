const BASE_URL = 'https://api.chucknorris.io/jokes/';
const METHOD = 'GET';
const CONTENT_TYPE = 'application/json';
const MODE = 'cors';

let isFetchingRandomJoke = false;

async function getRandomJoke() {
  isFetchingRandomJoke = true;

  try {
    const response = await fetch(`${BASE_URL}random`, {
      method: METHOD,
      mode: MODE,
      headers: {
        'Content-Type': CONTENT_TYPE
      }
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  } finally {
    isFetchingRandomJoke = false;
  }
}