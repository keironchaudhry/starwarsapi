// fetch request to get data from starwarsapi

fetch("https://swapi.dev/api/planets")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Failed to pull data.");
    }
  })
  .then((data) => console.log(data));
