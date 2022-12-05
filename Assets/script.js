var atlanta = "Atlanta"; 
var chicago = "Chicago"; 
var dallas = "Dallas";
var denver = "Denver";
var minneapolis = "Minneapolis";
var newYork = "NewYork";
var stPaul = "St. Paul";


  //--------------------------GEO-LOCATER---------------------------------//
  //fetch('http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=1&appid=a8b255a467db2ae7a256c9499b3b3509')
  fetch('http://api.openweathermap.org/geo/1.0/direct?q=Robbinsdale&limit=1&appid=a8b255a467db2ae7a256c9499b3b3509')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


//--------------------------CURRENT WEATHER---------------------------------//
//fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial')
fetch('https://api.openweathermap.org/data/2.5/weather?lat=45.0313156&lon=-93.3395843&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  

//--------------------------5 Day/ 3Hr WEATHER---------------------------------//
//fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial')
fetch('https://api.openweathermap.org/data/2.5/forecast?lat=45.0313156&lon=-93.3395843&appid=a8b255a467db2ae7a256c9499b3b3509&units=imperial')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  console.log(chicago);