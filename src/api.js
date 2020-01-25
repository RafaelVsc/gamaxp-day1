const BASE_URL = 'https://api.chucknorris.io/jokes/';
const METHOD = 'GET';
const CONTENT_TYPE = 'application/json';
const MODE = 'cors';

let isFetchingRandomJoke = false;
let isSearchingJokes = false;

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

async function searchJokes(text) {
  isSearchingJokes = true;

  try {
    const response = await fetch(`${BASE_URL}search?query=${text}`, {
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
    isSearchingJokes = false;
  }
}