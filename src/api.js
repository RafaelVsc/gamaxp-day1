const URL_FETCH_CATEGORIES = 'https://api.chucknorris.io/jokes/categories';

const BASE_URL = 'https://api.chucknorris.io/jokes/';
const METHOD = 'GET';
const CONTENT_TYPE = 'application/json';
const MODE = 'cors';

let isFetchingRandomJoke = false;
let isSearchingJokes = false;
let isFetchingRandomJokeFromCategory = false;

fetch(URL_FETCH_CATEGORIES, {
    method: 'get'
})
.then((response) => response.json())
.then((result) => {
    const categories = result;
    let navMenu = document.getElementById('categories');
    Object.keys(categories).forEach((key) =>{
        let menuItem = document.createElement('a');
        menuItem.setAttribute('href', categories[key]);
        menuItem.innerText = categories[key];
        navMenu.appendChild(menuItem);
    })
})
.catch(function(error){
    console.error(error)
})

async function getJoke(category) {
  const joke = await getRandomJokeFromCategory(category);

  let imgNode = document.querySelector('#avatar');
  let jokeParagraph = document.querySelector('#joke');

  imgNode.src = joke.icon_url;
  jokeParagraph.innerHTML = joke.value
}

// Busca piada randômica
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

// Busca piadas através de um texto
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

// Busca piada randômica a pratir de uma categoria
async function getRandomJokeFromCategory(category) {
  isFetchingRandomJokeFromCategory = true;

  try {
    const response = await fetch(`${BASE_URL}random?category=${category}`, {
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
    isFetchingRandomJokeFromCategory = false;
  }
}
