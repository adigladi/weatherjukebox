const WeatherModel = function () {

  let observers = [];
  let currentCity = "Stockholm";
  let currentWeather = 800;

  this.setCurrentWeather = function(weather) {
    currentWeather = weather;
    console.log(currentWeather)
  }

  this.getCurrentWeather = function() {
    return currentWeather;
  }

  this.setCity = function(city) {
    currentCity = city;
  }

  this.getCity = function() {
    return currentCity;
  }

  // API Calls

  this.getWeather = function () {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+currentCity+'&APPID=4d7205e7d55f52007973fd59b41a403e&lang=se&units=metric'
    return fetch(url)
      .then(processResponse)
      .catch(handleError)
  }
  
  // API Helper methods

  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  }
  
  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getWeather() API Error:', error.message || error)
      })
    } else {
      console.error('getWeather() API Error:', error.message || error)
    }
  }

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new WeatherModel();
