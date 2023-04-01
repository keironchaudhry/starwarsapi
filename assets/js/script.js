// fetch request to get data from starwarsapi

/**
 * returns array of vehicle data
 */

fetch("https://swapi.dev/api/vehicles/")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Failed to pull data.");
    }
  })
  .then((data) => {
    const vehicles = data.results;
    console.log(vehicles);
    const vehicleList = document.getElementById("vehicle-list");
    for (const vehicle of vehicles) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${vehicle.name}</strong> (Model: ${vehicle.model}, Crew: ${vehicle.crew}, Passengers: ${vehicle.passengers})`;
      vehicleList.appendChild(listItem);
    }
  })
  .catch((error) => {
    console.error(error);
  });
