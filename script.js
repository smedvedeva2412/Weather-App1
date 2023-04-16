//import axios from "axios";
function formatDate(datetime) {
  let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[datetime.getMonth()];
  let day = datetime.getDate();
  let weekday = days[datetime.getDay()];
  let hours = datetime.getHours();
  let minutes = datetime.getMinutes();

  return `${weekday} ${month} ${day}, ${hours}:${minutes}`;
}

let mainDate = document.querySelector("#date");
let now = new Date();
mainDate.innerHTML = formatDate(now);

/////////// City

function search(event) {
  event.preventDefault();

  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
///////////////////////////////////////

//let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//let city = "Sidney";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

// API, search engine
function showCurrentInfo(response) {
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
}

function searchCurrentInfo(event) {
  let apiCity = document.querySelector("#city-input").value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showCurrentInfo);
}

let searchForm1 = document.querySelector("#search-form");
searchForm1.addEventListener("submit", searchCurrentInfo);
