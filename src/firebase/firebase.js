import * as firebase from 'firebase';
import { modelInstance } from '../data/WeatherModel.js'

const config = {
    apiKey: "AIzaSyDDzNS_XrUTXRgX6QXSoNsrZP4L8r3-yuc",
    authDomain: "weather-jukebox.firebaseapp.com",
    databaseURL: "https://weather-jukebox.firebaseio.com",
    projectId: "weather-jukebox",
    storageBucket: "weather-jukebox.appspot.com",
    messagingSenderId: "472422516158"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}


var userId = "";
var currentUserId = "";

// Get data from database.
function getUserData(id) {
    return firebase.database().ref('/users/' + id).once('value').then(function (snapshot) {
        currentUserId = id;
        modelInstance.setCity(snapshot.val().currentCity);
        if (snapshot.val().userTracks && snapshot.val().userTracks !== "") {
            modelInstance.setUserTracks(snapshot.val().userTracks);
        }
        if (snapshot.val().userHistory && snapshot.val().userHistory !== "") {
            modelInstance.setUserHistory(snapshot.val().userHistory);
        }
        if (snapshot.val().userBlacklist && snapshot.val().userBlacklist !== "") {
            modelInstance.setUserBlacklist(snapshot.val().userBlacklist);
        }
    });
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        userId = user.uid;
        getUserData(userId);
    } else { }
});

const auth = firebase.auth();

export {
    auth,
    currentUserId,
};