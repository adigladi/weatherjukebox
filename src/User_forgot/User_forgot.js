import React, { Component } from 'react';
import './User_forgot.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'
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

    render() {
        return (
            <form id="forgotForm">
                <div className="imgcontainer">
                    <img src={require("./Logo.png")} className="avatar" alt="Logo"/>
                </div>

                <div className="container">
                    <label><b>Email:</b></label>
                    <input type="text" placeholder="Enter email" name="uname" required />

                    <br /><br />
                    <Link to="/user_main">
                        <button type="button" id="locationBtn" className="btn btn-warning welcomebutton">Reset my password!</button>
                    </Link>
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