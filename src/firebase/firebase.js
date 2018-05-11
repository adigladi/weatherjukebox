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

//var database = firebase.database();

var userId = "";
var userCity = "";
var userCurrentTracks = "";
var userCurrentHistory = "";
var userCurrentBlacklist = "";
var currentUserId = "";

// Get data from database.
function getUserData(id) {
    return firebase.database().ref('/users/' + id).once('value').then(function (snapshot) {
        currentUserId = id;
        userCity = snapshot.val().currentCity;
        userCurrentTracks = snapshot.val().userTracks;
        userCurrentHistory = snapshot.val().userHistory;
        userCurrentBlacklist = snapshot.val().userBlacklist;
    });
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        userId = user.uid;
        getUserData(userId);
    } else { }
});

// Needs to run when a user is created. is now in the User_signup component.
/*
function writeInitialUserData(iId, email) {
    firebase.database().ref('users/' + iId).set({
        email: email,
        currentCity: "Stockholm",
        userTracks: "",
        userHistory: "",
        userBlacklist: "",
    });
    console.log("set initial stuff");
}
*/

// Needs to run when something is updated, i.e. notifyObservers.
/*
function writeUserData(wId, city, tracks, history, blacklist) {
    firebase.database().ref('users/' + wId).set({
        currentCity: city,
        userTracks: tracks,
        userHistory: history,
        userBlacklist: blacklist,
    });
    console.log("set stuff");
}
*/
//writeUserData();


const auth = firebase.auth();

export {
    auth,
    userCity,
    userCurrentTracks,
    userCurrentHistory,
    userCurrentBlacklist,
    currentUserId,
};