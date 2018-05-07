import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../User_signout/User_signout';

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
            <Link to="/user_login">User page</Link>
            <Link to="/user_all">Manage trackz</Link>
            <a href="#">About</a>
            <SignOutButton />
        </div>
        <span id="navBtn" onClick={openNav}>&#9776;</span>
    </div>

export default Navbar;