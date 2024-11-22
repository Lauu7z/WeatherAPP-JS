const API_KEY = "281e23ae68afa2eebabb21fb08ef04a9";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";
const requestCity = async (city) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${city}&APPID=${API_KEY}&units=metric&lang=es`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error en la consola: ${error} `);
  }

  console.log(response);
};

// requestCity("rosario");
