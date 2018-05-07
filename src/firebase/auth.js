import { auth } from './firebase';

// Sign up
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign in
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.setPersistence(auth.Auth.Persistence.LOCAL)
        .then(function() {
    return auth.signInWithEmailAndPassword(email, password);
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        });

// Sign out
export const doSignOut = () =>
    auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);



auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log("logged in");
    } else {
        console.log("logged out");
    }
});