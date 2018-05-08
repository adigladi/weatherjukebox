import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';

function openNav() {
    var user = auth.currentUser;
    var sidenavOnline = document.getElementById("sidenavOnline");
    var sidenavOffline = document.getElementById("sidenavOffline");
    if (user) {
        //sidenavOffline.style.display = 'none';
        sidenavOnline.style.width = '250px';
    }
    else {
        //sidenavOnline.style.display = 'none';
        sidenavOffline.style.width = '250px';
    }
    
    //document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    var user = auth.currentUser;
    var sidenavOnline = document.getElementById("sidenavOnline");
    var sidenavOffline = document.getElementById("sidenavOffline");
    if (user) {
        //sidenavOffline.style.display = 'none';
        sidenavOnline.style.width = '0px';
    }
    else {
        //sidenavOnline.style.display = 'none';
        sidenavOffline.style.width = '0px';
    }
}

auth.onAuthStateChanged(function (user) {
    if (user) {
        console.log("logged in");

    } else {
        console.log("logged out");

    }
});

const Navbar = () =>
    <div>
        <div id="sidenavOnline" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <Link to="/">Home</Link>
            <Link to="/user_main">User page</Link>
            <Link to="/user_jukebox">Play my trackz</Link>
            <Link to="/user_all">Manage trackz</Link>
            <Link to="/about">About</Link>
            <span id="navLink" onClick={auth.signOut}>Sign Out</span>
        </div>
        <div id="sidenavOffline" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <Link to="/user_login">Log in</Link>
        </div>
        <span id="navBtn" onClick={openNav}>&#9776;</span>
    </div>

export default Navbar;
