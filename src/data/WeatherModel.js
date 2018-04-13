const WeatherModel = function () {

  var genreMatches = [
    {
      'name': 'Pop',
      'genreID': 132,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 801,
        'upper': 804
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 8
    }, {
      'name': 'Rap/Hip Hop',
      'genreID': 116,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 500,
        'upper': 531
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 801,
        'upper': 804
      }],
      'likelihood': 7
    }, {
      'name': 'Rock',
      'genreID': 152,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 955,
        'upper': 958
      }, {
        'lower': 200,
        'upper': 232
      }],
      'likelihood': 7
    }, {
      'name': 'Dance',
      'genreID': 113,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 6
    }, {
      'name': 'R&B',
      'genreID': 165,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 500,
        'upper': 531
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 801,
        'upper': 804
      }],
      'likelihood': 6
    }, {
      'name': 'Alternativmusik',
      'genreID': 85,
      'weatherIDs': [{
        'lower': 600,
        'upper': 622
      }, {
        'lower': 955,
        'upper': 958
      }, {
        'lower': 801,
        'upper': 804
      }],
      'likelihood': 6
    }, {
      'name': 'Electro',
      'genreID': 106,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 7
    }, {
      'name': 'Folkmusik',
      'genreID': 466,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 955,
        'upper': 958
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 200,
        'upper': 232
      }],
      'likelihood': 5
    }, {
      'name': 'Reggae',
      'genreID': 144,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 6
    }, {
      'name': 'Jazz',
      'genreID': 129,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 5
    }, {
      'name': 'Instrumental Jazz',
      'genreID': 130,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 4
    }, {
      'name': 'Klassisk',
      'genreID': 98,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 200,
        'upper': 231
      }],
      'likelihood': 7
    }, {
      'name': 'Film/Videospel',
      'genreID': 173,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }],
      'likelihood': 7
    }, {
      'name': 'Metal',
      'genreID': 464,
      'weatherIDs': [{
        'lower': 200,
        'upper': 232
      }, {
        'lower': 600,
        'upper': 622
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 959,
        'upper': 962
      }],
      'likelihood': 8
    }, {
      'name': 'Soul & Funk',
      'genreID': 169,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 801,
        'upper': 804
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 6
    }, {
      'name': 'Afrikansk musik',
      'genreID': 2,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 5
    }, {
      'name': 'Asiatisk musik',
      'genreID': 16,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 5
    }, {
      'name': 'Barn',
      'genreID': 95,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 3
    }, {
      'name': 'Blues',
      'genreID': 153,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 500,
        'upper': 531
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 801,
        'upper': 804
      }],
      'likelihood': 5
    }, {
      'name': 'Indisk musik',
      'genreID': 81,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 4
    }, {
      'name': 'Latinomusik',
      'genreID': 197,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 4
    }, {
      'name': 'J-pop',
      'genreID': 22,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 3
    }, {
      'name': 'K-pop',
      'genreID': 23,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 3
    }, {
      'name': 'Thai country',
      'genreID': 27,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 2
    }, {
      'name': 'Flamenco',
      'genreID': 36,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 801,
        'upper': 804
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 4
    }, {
      'name': 'Fransk musik',
      'genreID': 52,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 3
    }, {
      'name': 'Tango',
      'genreID': 73,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 801,
        'upper': 804
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 4
    }, {
      'name': 'Country',
      'genreID': 84,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 801,
        'upper': 804
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 5
    }, {
      'name': 'Indie Pop',
      'genreID': 86,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 801,
        'upper': 804
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 6
    }, {
      'name': 'Indie Rock',
      'genreID': 87,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 801,
        'upper': 804
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 6
    }, {
      'name': 'Indiepop/Folkmusik',
      'genreID': 133,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 955,
        'upper': 958
      }, {
        'lower': 200,
        'upper': 232
      }],
      'likelihood': 7
    }, {
      'name': 'Vaggvisor',
      'genreID': 96,
      'weatherIDs': [{
        'lower': 801,
        'upper': 804
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 2
    }, {
      'name': 'Chill Out/Trip-Hop/Lounge',
      'genreID': 107,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 801,
        'upper': 804
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 3
    }, {
      'name': 'Dubstep',
      'genreID': 108,
      'weatherIDs': [{
        'lower': 200,
        'upper': 232
      }, {
        'lower': 600,
        'upper': 622
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 959,
        'upper': 962
      }],
      'likelihood': 5
    }, {
      'name': 'Electro Hip Hop',
      'genreID': 109,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 6
    }, {
      'name': 'Electro Pop/Electro Rock',
      'genreID': 110,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 6
    }, {
      'name': 'Techno/House',
      'genreID': 111,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 7
    }, {
      'name': 'Hårdrock',
      'genreID': 155,
      'weatherIDs': [{
        'lower': 200,
        'upper': 232
      }, {
        'lower': 600,
        'upper': 622
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 959,
        'upper': 962
      }],
      'likelihood': 7
    }, {
      'name': 'Rock and Roll/Rockabilly',
      'genreID': 156,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 955,
        'upper': 958
      }, {
        'lower': 200,
        'upper': 232
      }],
      'likelihood': 5
    }, {
      'name': 'Soul modern',
      'genreID': 167,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 801,
        'upper': 804
      }, {
        'lower': 951,
        'upper': 954
      }],
      'likelihood': 7
    }, {
      'name': 'Disco',
      'genreID': 168,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 5
    }, {
      'name': 'Filmmusik',
      'genreID': 174,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 200,
        'upper': 232
      }],
      'likelihood': 6
    }, {
      'name': 'Musikaler',
      'genreID': 175,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 200,
        'upper': 232
      }],
      'likelihood': 5
    }, {
      'name': 'Soundtrack',
      'genreID': 176,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 200,
        'upper': 232
      }],
      'likelihood': 6
    }, {
      'name': 'TV-soundtrack',
      'genreID': 177,
      'weatherIDs': [{
        'lower': 500,
        'upper': 531
      }, {
        'lower': 300,
        'upper': 312
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 900,
        'upper': 906
      }, {
        'lower': 200,
        'upper': 232
      }],
      'likelihood': 6
    }, {
      'name': 'Akustisk blues',
      'genreID': 180,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 500,
        'upper': 531
      }, {
        'lower': 700,
        'upper': 781
      }, {
        'lower': 801,
        'upper': 804
      }],
      'likelihood': 5
    }, {
      'name': 'Karibisk musik',
      'genreID': 199,
      'weatherIDs': [{
        'lower': 800,
        'upper': 800
      }, {
        'lower': 900,
        'upper': 906
      }],
      'likelihood': 4
    }
  ];

  let observers = [];
  let currentCity = "Stockholm";
  let currentWeather = 800;
  let currentGenre = genreMatches[0];
  let currentArtist = 27;

  this.setCurrentGenre = function (genre) {
    currentGenre = genre;
  }

  this.getCurrentGenre = function () {
    return currentGenre;
  }

  this.setCurrentWeather = function (weather) {
    currentWeather = weather;
  }

  this.getCurrentWeather = function () {
    return currentWeather;
  }

  this.setCity = function (city) {
    currentCity = city;
  }

  this.getCity = function () {
    return currentCity;
  }

  this.setCurrentArtist = function () { }

  // Functions for getting a genre/weather match
  this.weatherMatch = function (weatherID) {
    var matchedGenresOut = [];
    var foundMatch = false;
    for (var i = 0; i < genreMatches.length; i++) {
      for (var j = 0; j < genreMatches[i].weatherIDs.length; j++) {
        if (weatherID >= genreMatches[i].weatherIDs[j].lower && weatherID < genreMatches[i].weatherIDs[j].lower) {
          foundMatch = true;
        }
      }
      if (foundMatch) {
        for (var x = 0; x < genreMatches[i].likelihood; x++) {
          matchedGenresOut.push(genreMatches[i].genreID)
        }
        foundMatch = false;
      }
    }
  }

  // API Calls

  this.getWeather = function () {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + currentCity + '&APPID=4d7205e7d55f52007973fd59b41a403e&lang=se&units=metric'
    return fetch(url)
      .then(processResponse)
      .catch(handleError)
  }

  this.getArtists = function () {
    const url = 'https://api.deezer.com/genre/' + currentGenre.genreID + '/artists'
    return fetch(url)
      .then(processResponse)
      .catch(handleError)
  }

  this.getTopTracks = function () {
    const url = 'https://api.deezer.com/artist/' + currentArtist + '/top'
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
        console.error('API Error:', error.message || error)
      })
    } else {
      console.error('API Error:', error.message || error)
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
