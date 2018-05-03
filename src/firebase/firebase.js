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

const auth = firebase.auth();

export {
    auth,
};