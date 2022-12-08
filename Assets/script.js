var searchBtn = document.querySelector("#searchBtn");
var searchField = document.querySelector("#searchField");
var buttonClickEl = document.getElementById("button")


var buttonClickHandler = function(event){
  var cityName = event.target.textContent;
  console.log(cityName);
}


//-----------------------------------------------------GEO-LOCATER-----------------------------------------------------//

var getLatLon = function (event) {
  event.preventDefault();

  var cityName = searchField.value.trim();

  if (cityName && cityName.length > 0) {
    var geoURL = 'https://api.openweathermap.org/geo/1.0/direct?q\=' + cityName + '&limit=1&appid=a8b255a467db2ae7a256c9499b3b3509';
  
    fetch(geoURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //console.log(data);
        lat = (data[0].lat);
        lon = (data[0].lon);
        latLon = "lat=" + lat + "&lon=" + lon;
        //console.log(lat);
        //console.log(lon);
       // onsole.log(latLon);
        fetchCurrentWeather(lat, lon);
        fetchWeatherForecast(lat, lon);
      });
  };
};

searchBtn.addEventListener("click", getLatLon);

//-----------------------------------------------------CURRENT WEATHER-----------------------------------------------------//


function fetchCurrentWeather(lat, lon) {
  // var latLon = 'lat=44.9772995&lon=-93.2654692';
  var latLon = "lat=" + lat + "&lon=" + lon;
  var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?' + latLon + '&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial';

  fetch(currentWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      date = new Date();
      day = date.getDate();
      month = date.getMonth();
      year = date.getFullYear();
      curDate = month + "/" + day + "/" + year;
      city = (data.name) + " - " + curDate;
      temp = (data.main.temp) + " F";
      wind = (data.wind.speed) + " MPH";
      humidity = (data.main.humidity) + " %";
      //icon = 'https://openweathermap.org/img/wn/' + (data.weather[0].icon) + '.png';
      icon = (data.weather[0].icon);
    
      console.log(icon);
      console.log(date);
      console.log(city);
      console.log(temp);
      console.log(wind);
      console.log(humidity);

      document.getElementById('city').innerHTML = "<b>City Name:</b>  " + city;
      document.getElementById('icon').innerHTML = "icon";
      document.getElementById('curTemp').innerHTML = "<b>Current Temperature:</b>  " + temp;
      document.getElementById('curWind').innerHTML = "<b>Current Wind:</b>  " + wind;
      document.getElementById('curHum').innerHTML = "<b>Current Humidity:</b>  " + humidity;

    });
  };
  

//-----------------------------------------------------5 Day/ 3Hr WEATHER-----------------------------------------------------//


function fetchWeatherForecast(lat, lon) {
var latLon = "lat=" + lat + "&lon=" + lon;
var futureWeather = 'https://api.openweathermap.org/data/2.5/forecast?' + latLon + '&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial';

fetch(futureWeather)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    date1 = (data.list[4].dt_txt);
    icon1 = (data.list[4].weather[0].icon);
    temp1 = (data.list[4].main.temp) + " F";
    wind1 = (data.list[4].wind.speed) + " MPH";
    humidity1 = (data.list[4].main.humidity) + " %";
    date2 = (data.list[12].dt_txt);
    icon2 = (data.list[12].weather[0].icon);
    temp2 = (data.list[12].main.temp) + " F";
    wind2 = (data.list[12].wind.speed) + " MPH";
    humidity2 = (data.list[12].main.humidity) + " %";
    date3 = (data.list[20].dt_txt);
    icon3 = (data.list[20].weather[0].icon);
    temp3 = (data.list[20].main.temp) + " F";
    wind3 = (data.list[20].wind.speed) + " MPH";
    humidity3 = (data.list[20].main.humidity) + " %";
    date4 = (data.list[28].dt_txt);
    icon4 = (data.list[28].weather[0].icon);
    temp4 = (data.list[28].main.temp) + " F";
    wind4 = (data.list[28].wind.speed) + " MPH";
    humidity4 = (data.list[28].main.humidity) + " %";
    date5 = (data.list[36].dt_txt);
    icon5 = (data.list[36].weather[0].icon);
    temp5 = (data.list[36].main.temp) + " F";
    wind5 = (data.list[36].wind.speed) + " MPH";
    humidity5 = (data.list[36].main.humidity) + " %";

    console.log(icon1);
    console.log(icon2);
    console.log(icon3);
    console.log(icon4);
    console.log(icon5);
    console.log(date1);
    console.log(temp1);
    console.log(wind1);
    console.log(humidity1);
    console.log(date2);
    console.log(temp2);
    console.log(wind2);
    console.log(humidity2);
    console.log(date3);
    console.log(temp3);
    console.log(wind3);
    console.log(humidity3);
    console.log(date4);
    console.log(temp4);
    console.log(wind4);
    console.log(humidity4);
    console.log(date5);
    console.log(temp5);
    console.log(wind5);
    console.log(humidity5);

    document.getElementById('date1').innerHTML = "<b>Date:</b>  " + date1;
    document.getElementById('icon1').innerHTML = icon1;
    document.getElementById('temp1').innerHTML = "<b>Temperature:</b>  " + temp1;
    document.getElementById('wind1').innerHTML = "<b>Wind:</b>  " + wind1;
    document.getElementById('hum1').innerHTML = "<b>Humidity:</b>  " + humidity1;

    document.getElementById('date2').innerHTML = "<b>Date:</b>  " + date2;
    document.getElementById('icon2').innerHTML = icon2;
    document.getElementById('temp2').innerHTML = "<b>Temperature:</b>  " + temp2;
    document.getElementById('wind2').innerHTML = "<b>Wind:</b>  " + wind2;
    document.getElementById('hum2').innerHTML = "<b>Humidity:</b>  " + humidity2;

    document.getElementById('date3').innerHTML = "<b>Date:</b>  " + date3;
    document.getElementById('icon3').innerHTML = icon3;
    document.getElementById('temp3').innerHTML = "<b>Temperature:</b>  " + temp3;
    document.getElementById('wind3').innerHTML = "<b>Wind:</b>  " + wind3;
    document.getElementById('hum3').innerHTML = "<b>Humidity:</b>  " + humidity3;

    document.getElementById('date4').innerHTML = "<b>Date:</b>  " + date4;
    document.getElementById('icon4').innerHTML = icon4;
    document.getElementById('temp4').innerHTML = "<b>Temperature:</b>  " + temp4;
    document.getElementById('wind4').innerHTML = "<b>Wind:</b>  " + wind4;
    document.getElementById('hum4').innerHTML = "<b>Humidity:</b>  " + humidity4;

    document.getElementById('date5').innerHTML = "<b>Date:</b>  " + date5;
    document.getElementById('icon5').innerHTML = icon5;
    document.getElementById('temp5').innerHTML = "<b>Temperature:</b>  " + temp5;
    document.getElementById('wind5').innerHTML = "<b>Wind:</b>  " + wind5;
    document.getElementById('hum5').innerHTML = "<b>Humidity:</b>  " + humidity5;

  });

};

buttonClickEl.addEventListener("click", buttonClickHandler);

