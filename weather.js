let getPosition = function() {
  navigator.geolocation.getCurrentPosition(onPositionUpdated)
}

let onPositionUpdated = function(position) {
  let latitude = position.coords.latitude
  let longitude = position.coords.longitude
  getWeather(latitude, longitude)
}

let updateWidget = function(json) {

  let temperature = Math.round(json.main.temp)
  let symbol = json.weather[0].icon

  $("#temperature_reading").text("It is " + temperature + " degrees outside")
  $("#weatherSymbol").attr("src", "http://openweathermap.org/img/w/"+symbol+".png")
  $(".card-title").text(json.name)
}

let getWeather = function(latitude, longitude) {
  let apiKey = 'ca8bb4999add126c978f87ffd01d8e9c';

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

$("#get_forecast").click(getPosition)

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
