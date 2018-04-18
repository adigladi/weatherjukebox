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
      'name': 'Alternative music',
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
      'name': 'Folk',
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
      'name': 'Classical',
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
      'name': 'Movie-/Videogame Soundtracks',
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
      'name': 'African music',
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
      'name': 'Asian music',
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
      'name': 'Children',
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
      'name': 'Indian music',
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
      'name': 'Latino music',
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
      'name': 'French music',
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
      'name': 'Indie pop/Folk',
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
      'name': 'Lullabys',
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
      'name': 'Hard rock',
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
      'name': 'Movie Soundtracks',
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
      'name': 'Musicals',
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
      'name': 'Soundtracks',
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
      'name': 'TV Soundtracks',
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
      'name': 'Acoustic blues',
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
      'name': 'Carribean music',
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
  let myTracks = [];
  let currentCity = "Stockholm";
  let currentWeather = 800;
  let currentGenre = genreMatches[0];
  let currentArtist = 27;
  let generatedSong = 0;
  let songOut = 0;
  let trackBlacklist = [];
  let matchHistory = [];
  let favouritesList = [];
  let blackListHit = false;
  let currentTrack = {};
  let coordinates = {
    lat: 59.3463798,
    lng: 18.0724861
  }

  this.setCurrentGenre = function (setGenreId) {
    for (var g = 0; g < genreMatches.length;g++) {
      if (genreMatches[g].genreID === setGenreId) {
        currentGenre = genreMatches[g];
      }
    }
  }

  this.addMyTracks = function (track) {
    myTracks.push(track);
  }

  this.getMyTracks = function () {
    return myTracks;
  }

  this.getCurrentGenre = function () {
    return currentGenre;
  }

  this.setCurrentSong = function (inputId) {
    songOut = inputId;
  }

  this.getCurrentSong = function () {
    return songOut;
  }

  this.setCurrentTrack = function (inputTrack) {
    currentTrack = inputTrack;
  }

  this.getCurrentTrack = function () {
    return currentTrack;
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

  /* Functions for getting a genre/weather/artist/track-match:
      weatherMatch outputs a random genreID matching the current weather.
      artistMatch returns a random artists id, given a list of artists from a certain genre.
      trackMatch returns a random track id, given a list of an artists top songs. */

  this.weatherMatch = function (weatherID) {
    var matchedGenres = [];
    for (var i = 0; i < genreMatches.length; i++) {
      for (var j = 0; j < genreMatches[i].weatherIDs.length; j++) {
        if (weatherID >= genreMatches[i].weatherIDs[j].lower && weatherID <= genreMatches[i].weatherIDs[j].upper) {
          for (var x = 0; x < genreMatches[i].likelihood; x++) {
            matchedGenres.push(genreMatches[i].genreID)
          }
        }
      }
    }
    this.setCurrentGenre(matchedGenres[Math.floor(Math.random() * matchedGenres.length)]);
  }

  this.artistMatch = function (generatedArtists) {
    currentArtist = generatedArtists[Math.floor(Math.random() * generatedArtists.length)].id;
  }

  this.blacklistQuery = function (queryId) {
    for (var b = 0; b < trackBlacklist.length; b++) {
      if (trackBlacklist[b].id === queryId) {
        blackListHit = true;
      }
    }
    if (blackListHit) {
      return true;
    } else {
      return false;
    }
  }

  this.trackMatch = function (topSongs) {
    generatedSong = topSongs[Math.floor(Math.random() * topSongs.length)].id;
    while (this.blacklistQuery(songOut)) {
      generatedSong = topSongs[Math.floor(Math.random() * topSongs.length)].id;
    }
    this.setCurrentSong(generatedSong);
  }

  // API Calls

  this.getWeather = function () {
    const url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=' + currentCity + '&APPID=4d7205e7d55f52007973fd59b41a403e&units=metric'
    return fetch(url)
      .then(processResponse)
      .catch(handleError)
  }

  this.getWeatherByCoordinates = function () {
    const url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=' + coordinates.lat + '&lon=' + coordinates.lng +'&APPID=4d7205e7d55f52007973fd59b41a403e&units=metric'
    return fetch(url)
      .then(processResponse)
      .catch(handleError)
  }

  this.getArtists = function () {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + currentGenre.genreID + '/artists'
    return fetch(url)
      .then(processResponse)
      .catch(handleError)
  }

  this.getTopTracks = function () {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/' + currentArtist + '/top'
    return fetch(url)
      .then(processResponse)
      .catch(handleError)
  }

  this.getTrack = function () {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + this.getCurrentSong()
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
