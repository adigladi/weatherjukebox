import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { auth as userAuth } from '../firebase/firebase';

function openNav() {
    var user = userAuth.currentUser;
    var sidenavOnline = document.getElementById("sidenavOnline");
    var sidenavOffline = document.getElementById("sidenavOffline");
    if (user) {
        sidenavOnline.style.width = '250px';
    }
    else {
        sidenavOffline.style.width = '250px';
    }
}

function closeNav() {
    var user = auth.currentUser;
    var sidenavOnline = document.getElementById("sidenavOnline");
    var sidenavOffline = document.getElementById("sidenavOffline");
        sidenavOnline.style.width = '0px';
        sidenavOffline.style.width = '0px';
}

const Navbar = () =>
    <div>
        <div id="sidenavOnline" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <Link to="/">Home</Link>
            <Link to="/user_main">User page</Link>
            <Link to="/user_jukebox">Play my trackz</Link>
            <Link to="/user_all">Manage trackz</Link>
            <Link to="/about">About</Link>
            <span id="navLink" onClick={auth.doSignOut}>Sign Out</span>
        </div>
        <div id="sidenavOffline" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <Link to="/user_login">Log in</Link>
        </div>
        <span id="navBtn" onClick={openNav}>&#9776;</span>
    </div>

export default Navbar;
