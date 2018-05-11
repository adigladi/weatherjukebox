import { genreMatches } from './GenreMatches';
import {
  userCity,
  userCurrentTracks,
  userCurrentHistory,
  userCurrentBlacklist,
} from '../firebase/firebase';

const WeatherModel = function () {

  // Initializing all variables.

  let observers = [];
  let myTracks = [];
  let currentCity = "Stockholm";
  let currentWeather = 800;
  let currentGenre = genreMatches[0];
  let currentArtist = 27;
  let generatedSong = 0;
  let songOut = 0;
  let trackBlacklist = [];
  let myHistory = [];
  let blackListHit = false;
  let currentTrack = {};
  let playedTrack;
  let coordinates = {
    lat: 59.3463798,
    lng: 18.0724861
  }

  // Setting variables that are based on user data (initial values are given above).

  if (userCity !== "") {
    currentCity = userCity;
  }

  if (userCurrentTracks !== "") {
    myTracks = JSON.parse(userCurrentTracks);
  }

  if (userCurrentHistory !== "") {
    myHistory = JSON.parse(userCurrentHistory);
  }

  if (userCurrentBlacklist !== "") {
    trackBlacklist = JSON.parse(userCurrentBlacklist);
  }

  // Functions for setting values, getting values and such.

  this.setPlayedTrack = function (inputTrack) {
    playedTrack = inputTrack;
    notifyObservers();
  }

  this.getPlayedTrack = function () {
    return playedTrack;
  }

  this.setCurrentGenre = function (setGenreId) {
    for (var g = 0; g < genreMatches.length;g++) {
      if (genreMatches[g].genreID === setGenreId) {
        currentGenre = genreMatches[g];
      }
    }
  }

  this.setCoordinates = function (coord) {
    coordinates.lat = coord.lat;
    coordinates.lng = coord.lng;
  }

  this.getCoordinates = function () {
    return coordinates
  }

  this.addMyHistory = function (track) {
    myHistory.push(track);
  }

  this.getMyHistory = function () {
    return myHistory
  }

  this.clearMyHistory = function () {
    myHistory = [];
    notifyObservers();
  }

  this.addMyTracks = function (track) {
    this.removeMyTracks(track.song.id)
    myTracks.push(track);
  }

  this.removeMyTracks = function (id) {
    for (let i = 0; i < myTracks.length; i++) {
      if (myTracks[i].song.id === parseInt(id, 10)) {
        myTracks.splice(i, 1);
      }
    }
    notifyObservers();
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

  this.addToBlacklist = function (toBeBlacklisted) {
    trackBlacklist.push(toBeBlacklisted);
  }

  this.removeFromBlacklist = function (toBeUnblacklisted) {
    for (var i = 0; i < trackBlacklist.length; i++) {
      if (trackBlacklist[i].song.id === parseInt(toBeUnblacklisted, 10)) {
        trackBlacklist.splice(i, 1);
      }
    }
    notifyObservers();
  }

  this.getBlacklist = function () {
    return trackBlacklist;
  }

  /* Functions for getting a genre/weather/artist/track-match:
      weatherMatch outputs a random genreID matching the current weather.
      artistMatch returns a random artists id, given a list of artists from a certain genre.
      trackMatch returns a random track id, given a list of an artists top songs. */

  this.weatherMatch = function (weatherID) {
    var matchedGenres = [];
    this.setCurrentWeather(weatherID);
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
      if (trackBlacklist[b].song.id === queryId) {
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
    while (this.blacklistQuery(generatedSong)) {
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
