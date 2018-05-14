import React, { Component } from 'react';
import './User_forgot.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js';
import { auth } from '../firebase';

class User_forgot extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        modelInstance.addObserver(this)
    }

    componentWillUnmount() {
        modelInstance.removeObserver(this)
    }

    update() {

    }

    emailReset = () => {
        var mail = document.getElementById("email").value;
        var container = document.getElementById("resetContainer");
        console.log("tjo");

        auth.doPasswordReset(mail).then(function() {
                container.innerHTML = '<h2>Reset password link sent to: ' + mail + '</h2>';
            }).catch(function(error) {
                container.innerHTML = '<h2>Invalid email!</h2>';
            });
      }

    render() {
        return (
            <form id="forgotForm">
                <div className="imgcontainer">
                    <img src={require("./Logo.png")} className="avatar" alt="Logo"/>
                </div>

                <div id="resetContainer" className="container">
                    <label><b>Email:</b></label>
                    <input id="email" type="text" placeholder="Enter email" name="uname" required />

                    <br /><br />
                    <button type="button" onClick={this.emailReset}>Reset my password!</button>
                    <br /><br />
                </div>

                <div className="container">
                    <Link to="/user_login">
                        <button type="button" id="locationBtn" className="btn btn-warning welcomebutton cancelbtn">Back</button>
                    </Link>
                </div>
            </form>
        )
    }

}

export default User_forgot;