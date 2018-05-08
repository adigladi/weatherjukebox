import * as firebase from 'firebase';

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
/* Funkar - men detta måste nog göras vid skapandet av en användare... */
var database = firebase.database();
/*
function writeUserData() {
    firebase.database().ref('users/XU8u4ZfKuobP7DzE6Yb0j0WUwF72').set({
        username: 'Emil',
        email: 'edickson@kth.se',
        currentCity: 'Stockholm'
    });
    console.log("set stuff");
}

writeUserData();
*/

function getUserData() {
    return firebase.database().ref('/users/XU8u4ZfKuobP7DzE6Yb0j0WUwF72').once('value').then(function (snapshot) {
        console.log(snapshot.val().currentCity);
    });
}

getUserData();

const auth = firebase.auth();

export {
    auth,
};