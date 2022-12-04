
const API_KEY = "16ddea79f1dfc4cdaeb71c89e6141e89"



function onGeoOK(position){
    const lat = position.coords.latitude
    const log = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {       
    const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `Weather: ${data.weather[0].main}`;
    });
}

function onGeoError(){
    alert("Can't find you.")
}


navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);