fetch("/cities")
  .then(res => res.json())
  .then(cities => {
    const table = document.getElementById("cities-table");
    cities.forEach(c => {
      const row = document.createElement("tr");
      const name = document.createElement("td");
      name.textContent = c.name;
      row.appendChild(name);
      const city = document.createElement("td");
      city.textContent = c.city;
      row.appendChild(city);
      table.appendChild(row);
    });
  });
