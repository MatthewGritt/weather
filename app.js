const apiKey = "cb6db0a795a6a605b873a4b697c4081c";
const baseUrl = "http://api.openweathermap.org/data/2.5/";
const searchInput = document.querySelector(".search-input");
const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const descriptionEl = document.querySelector(".description");
const humidEl = document.querySelector(".humid");
const windEl = document.querySelector(".wind");

searchInput.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    console.log(e.target.value);
    weatherData(e.target.value);
    e.target.value = "";
  }
});

async function weatherData(cityName) {
  await fetch(`${baseUrl}weather?q=${cityName}&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => showData(data));
}

function showData(data) {
  console.log(data);
  if (data.name) {
    cityEl.innerText = `${data.name},  ${data.sys.country}`;
    tempEl.innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
    descriptionEl.innerText = data.weather[0].description;
    humidEl.innerText = `humidity: ${data.main.humidity}%`;
    windEl.innerText = `Wind: ${data.wind.speed} mph`;
  } else {
    cityEl.innerText = "City not found";
    tempEl.innerHTML = "";
    descriptionEl.innerText = "";
    humidEl.innerText = "";
    windEl.innerText = "";
  }
}

weatherData("london");
