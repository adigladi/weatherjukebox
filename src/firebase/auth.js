import { auth } from './firebase';
//import * as firebase from 'firebase';

// Sign up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign in
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
    auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

/*
// User data

var userId = null;

auth.onAuthStateChanged(function (user) {
    if (user) {
        userId = user.uid;
    } else {}
})

var database = firebase.database();

//console.log(database.ref('users/XU8u4ZfKuobP7DzE6Yb0j0WUwF72'));

//var userId = auth.currentUser.uid;

function writeUserData(userId, city) {
    firebase.database().ref('users/' + userId).set({
        city: city,
    });
}

function readUserData(uId) {
    return firebase.database().ref('/users/' + uId).once('value').then(function (snapshot) {
        var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        // ...
    });
}

readUserData(userId);
*/