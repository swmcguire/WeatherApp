var searchBtn = document.querySelector("#searchBtn");
var searchField = document.querySelector("#searchField");
var buttonClickEl = document.getElementById("button")


var buttonClickHandler = function(event){
  var cityName = event.target.textContent;
  console.log(cityName);
}


//-----------------------------------------------------GEO-LOCATER-----------------------------------------------------//

////what needs to go in the function here? 
var getLatLon = function (event) {
  event.preventDefault();

  var cityName = searchField.value.trim();

  if (cityName && cityName.length > 0) {
    var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q\=' + cityName + '&limit=1&appid=a8b255a467db2ae7a256c9499b3b3509';
  
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
        fetchWeather(lat, lon);
      });
  };
};

searchBtn.addEventListener("click", getLatLon);

//-----------------------------------------------------CURRENT WEATHER-----------------------------------------------------//


function fetchWeather(lat, lon) {
  // var latLon = 'lat=44.9772995&lon=-93.2654692';
  var latLon = "lat=" + lat + "&lon=" + lon;
  var currentWeather = 'https://api.openweathermap.org/data/2.5/weather?' + latLon + '&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial';

  fetch(currentWeather)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      date = new Date().format('DD/MM/YYY');
      city = (data.name) + date;
      temp = (data.main.temp) + " F";
      wind = (data.wind.speed) + " MPH";
      humidity = (data.main.humidity) + " %";
      console.log(date);
      console.log(city);
      console.log(temp);
      console.log(wind);
      console.log(humidity);

      // Add data to the DOM / show it to the user

      //document.getElementById('city');
      //document.getElementById('curTemp');
      //document.getElementById('curWind');
      //document.getElementById('curHum');

    });
}

//-----------------------------------------------------5 Day/ 3Hr WEATHER-----------------------------------------------------//

/*
function fetchWeather(lat, lon) {
var latLon = "lat=" + lat + "&lon=" + lon;
var futureWeather = 'https://api.openweathermap.org/data/2.5/forecast?' + latLon + '&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial';

fetch(futureWeather)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data);
    date1 = (data.list[4].dt_txt);
    temp1 = (data.list[4].main.temp) + " F";
    wind1 = (data.list[4].wind.speed) + " MPH";
    humidity1 = (data.list[4].main.humidity) + " %";
    date2 = (data.list[12].dt_txt);
    temp2 = (data.list[12].main.temp) + " F";
    wind2 = (data.list[12].wind.speed) + " MPH";
    humidity2 = (data.list[12].main.humidity) + " %";
    date3 = (data.list[20].dt_txt);
    temp3 = (data.list[20].main.temp) + " F";
    wind3 = (data.list[20].wind.speed) + " MPH";
    humidity3 = (data.list[20].main.humidity) + " %";
    date4 = (data.list[28].dt_txt);
    temp4 = (data.list[28].main.temp) + " F";
    wind4 = (data.list[28].wind.speed) + " MPH";
    humidity4 = (data.list[28].main.humidity) + " %";
    date5 = (data.list[36].dt_txt);
    temp5 = (data.list[36].main.temp) + " F";
    wind5 = (data.list[36].wind.speed) + " MPH";
    humidity5 = (data.list[36].main.humidity) + " %";

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

  });

}

buttonClickEl.addEventListener("click", buttonClickHandler);

*/