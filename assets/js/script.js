// fetch request to get data from starwarsapi

fetch("https://swapi.dev/api")
.then(response => response.json())
.then(data => console.log(data))
