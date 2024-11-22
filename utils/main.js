const form = document.getElementById("form");
const cityInput = document.querySelector(".search-input");
const cityMsg = document.getElementById("city");
const cardContainer = document.querySelector(".weather-card");

const getCityData = (cityData) => {
  return {
    cityName: cityData.name,
    description: cityData.weather[0].description,
    image: cityData.weather[0].icon,
    temp: cityData.main.temp.toFixed(1),
    tempMax: cityData.main.temp_max,
    tempMin: cityData.main.temp_min,
    humedad: cityData.main.humidity,
  };
};

// IMG URL
// https://openweathermap.org/img/wn/10d@2x.png

const createCityTemplate = (cityData) => {
  const {cityName, description, image, temp, tempMax, tempMin, humedad} =
    getCityData(cityData);
  return `
        <section class="card-container">
          <div class="card-info">
            <h2>${cityName}</h2>
            <span>${description}</span>
            <h1>${temp}°</h1>
          </div>
          <div class="icon-img">
            <img src="https://openweathermap.org/img/wn/${image}@2x.png" alt="img" />
          </div>
          <div class="card-temps">
            <span>Max: ${tempMax}</span>
            <span>Min: ${tempMin}</span>
            <div class="humedad">
              <span>${humedad}% Humedad</span>
            </div>
          </div>
        </section>
      </section>

`;
};

const renderCityCard = (cityData) => {
  cardContainer.innerHTML = createCityTemplate(cityData);
};

const searchCity = async (event) => {
  event.preventDefault();
  const searchedCity = cityInput.value.trim();

  // Si no se ingresa ningun valor se avisa
  if (searchedCity === "") {
    alert("Ingresa una ciudad");
    return;
  }

  const fetchedCity = await requestCity(searchedCity);
  //
  if (!fetchedCity.id) {
    return;
  }

  renderCityCard(fetchedCity);
};

const init = () => {
  form.addEventListener("submit", searchCity);
};

init();
