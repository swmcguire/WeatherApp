var cityName = "minneapolis";
var atlanta = "lat=33.7489924&lon=-84.3902644"; 
var chicago = "lat=41.8755616&lon=-87.6244212"; 
var dallas = "lat=32.7762719&lon=-96.7968559";
var denver = "lat=39.7392364&lon=-104.984862";
var minneapolis = "lat=44.9772995&lon=-93.2654692";
var newYork = "lat=40.7127281&lon=-74.0060152";
var stPaul = "lat=44.9497487&lon=-93.0931028";
var lat = "";
var lon = "";
var latLon = "" ;
//var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=minneapolis&limit=1&appid=a8b255a467db2ae7a256c9499b3b3509';
var geoURL = "\'http://api.openweathermap.org/geo/1.0/direct?q\=" + cityName + "\&limit=1&appid=a8b255a467db2ae7a256c9499b3b3509\'";

console.log(geoURL);

  //--------------------------GEO-LOCATER---------------------------------//
  //fetch('http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=1&appid=a8b255a467db2ae7a256c9499b3b3509')
  function getGeoCode(geoURL){
  fetch(geoURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    lat = (data[0].lat);
    lon = (data[0].lon);
    latLon="lat=" + lat + "&lon=" + lon;
    console.log(lat);
    console.log(lon);
    console.log(latLon);
  
  });
}
getGeoCode(geoURL);


//--------------------------CURRENT WEATHER---------------------------------//
//fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial')
//----------------------------Need to update lat=xxxxxx&lon=xxxxx with the latLon variable above
fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.0313156&lon=-93.3395843&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  

//--------------------------5 Day/ 3Hr WEATHER---------------------------------//
//fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial')
//----------------------------Need to update lat=xxxxxx&lon=xxxxx with the latLon variable above
fetch('https://api.openweathermap.org/data/2.5/forecast?lat=45.0313156&lon=-93.3395843&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  console.log(chicago);


  /* When I enter a city name and click 'search' --- the variable gets stored in cityName 
  --The GeoLocator then uses that variable to call the API to get latitude and longitude.
  --That latitude and longitued get passed to the current weather and 5 day weather API
  --That data gets called to the screen 

  --when I click on a preselected city button, that city name populates cityName variable and runs the same as above