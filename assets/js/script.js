// fetch request to get data from starwarsapi

/**
 * returns array of vehicle data
 */

fetch("https://swapi.dev/api/vehicles")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Failed to pull data.");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });


/**
 * returns array of starship data
 */

fetch("https://swapi.dev/api/starships")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Failed to pull data.");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
