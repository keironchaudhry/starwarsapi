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
      listItem.innerHTML = `
      <p><strong>${vehicle.name}</strong></p> 
      <p>Model: ${vehicle.model}</p> 
      <p>Type: ${vehicle.vehicle_class}</p>
      <p>Size: ${vehicle.length} m</p>
      <p>Speed: ${vehicle.max_atmosphering_speed} km/h</p>
      <p>Max Cargo Capacity: ${vehicle.cargo_capacity} kg</p>
      <P>Purchase price: ${vehicle.cost_in_credits} RC</p>
      `;
      vehicleList.appendChild(listItem);
    }
  })
  .catch((error) => {
    console.error(error);
  });

/**
 * returns array of starship data
 */

fetch("https://swapi.dev/api/starships/")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("Failed to pull data.");
    }
  })
  .then((data) => {
    const starships = data.results;
    console.log(starships);
    const starshipList = document.getElementById("starship-list");
    for (const starship of starships) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <p><strong>${starship.name}</strong></p> 
      <p>Model: ${starship.model}</p> 
      <p>Type: ${starship.starship_class}</p>
      <p>Size: ${starship.length} m</p>
      <p>Speed: ${starship.max_atmosphering_speed} km/h</p>
      <p>Max Cargo Capacity: ${starship.cargo_capacity} kg</p>
      <p>Hyperdrive Rating: ${starship.hyperdrive_rating} </p>
      <p>Price: ${starship.cost_in_credits} RC</p>
      `;
      starshipList.appendChild(listItem);
    }
  })
  .catch((error) => {
    console.error(error);
  });
