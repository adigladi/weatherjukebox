import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const Navbar = () =>
    <div>
        <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <Link to="/user_main">User page</Link>
            <Link to="/user_jukebox">Play my trackz</Link>
            <Link to="/user_all">Manage trackz</Link>
            <Link to="/about">About</Link>
            <span id="navLink" onClick={auth.doSignOut}>Sign Out</span>
        </div>
        <span id="navBtn" onClick={openNav}>&#9776;</span>
    </div>

export default Navbar;