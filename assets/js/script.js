// fetch request to get data from starwarsapi

fetch("https://swapi.dev/api/planets/100")
  .then((response) => {
    if (response.ok) {
      console.log("Successfully pulled data.");
    } else {
      console.log("Failed to pull data.");
    }
  })
  .then((data) => console.log(data));
