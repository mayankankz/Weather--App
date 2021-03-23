//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const api = {
    key: "b3cf84ae9846ff2a680b45113f52197a",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox =  document.getElementById('input-box');
searchInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13) {
    getReport(searchInputBox.value); 
    document.querySelector('.weather-body').style.display = "block";
    }
});

function getReport(city){
    fetch(`${api.baseUrl}?q=${city}&appid=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(showReport);
}
function showReport(weather){
    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)} F`


    let weatherType = document.getElementById('weathermain');
    weatherType.innerText = `${weather.weather[0].main}`; 
    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateBuilder(todayDate);
}

function dateBuilder(d){
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let year = d.getFullYear();
  let month = months[d.getMonth()];
  let date = d.getDate();
  let day = days[d.getDay()];
  
  return `${date} ${month} ${day} ${year}`
}
