let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
//let response = prompt("Enter a city").toLowerCase();
//let temp = Math.round(weather[response].temp);

//if (weather[response] !== undefined) {
// alert(
//`It is currently ${temp} in ${[response]} with a humidity of ${
//  weather[response].humidity
//}`
//);
//} else {
//alert(
// `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${response}`
// );
//}

//challenge 1

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}

let currentDate = document.querySelector("#current-date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

//challenge 2

function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let cityName = document.querySelector("h1");
  cityName.innerHTML = `${cityInput.value}`;
  searchCity(cityInput.value);
}

let changeCityHeading = document.querySelector("#search-form");
changeCityHeading.addEventListener("submit", changeCity);

//API
function searchCity(city) {
  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  console.log(response);
  let currentTemperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature-result");

  temperatureElement.innerHTML = `⛅️ ${currentTemperature} °F`;
}
