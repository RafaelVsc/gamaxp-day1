const URL_FETCH_CATEGORIES = 'https://api.chucknorris.io/jokes/categories';

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


