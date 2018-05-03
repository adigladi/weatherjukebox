import React, { Component } from 'react';
import './User_signup.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'
class User_signup extends Component {

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
            <form id="signupForm">
                <div className="imgcontainer">
                    <img src={require("./Logo.png")} className="avatar" />
                </div>

                <div className="container">
                    <label><b>Email:</b></label>
                    <input type="text" placeholder="Enter email" name="uname" required />

                    <label><b>Choose password:</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <label><b>Re-type password:</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <br /><br />
                    <Link to="/user_main">
                        <button type="button">Sign up</button>
                    </Link>
                    <br /><br />
                </div>

                <div className="container">
                    <Link to="/">
                        <button type="button" className="cancelbtn">Back</button>
                    </Link>
                </div>
            </form>
        )
    }

}

export default User_signup;