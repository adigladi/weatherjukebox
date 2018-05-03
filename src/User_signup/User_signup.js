import React, { Component } from 'react';
import './User_signup.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class User_signup extends Component {

    constructor(props) {
        super(props)

        this.state = {INITIAL_STATE};
    }

    onSubmit = (event) => {

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
            <form id="signupForm" onSubmit={this.onSubmit}>
                <div className="imgcontainer">
                    <img src={require("./Logo.png")} className="avatar" />
                </div>

                <div className="container">
                    <label><b>Email:</b></label>
                    <input 
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        type="text"
                        placeholder="Enter email"
                        name="uname" required />

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
                    <Link to="/user_login">
                        <button type="button" className="cancelbtn">Back</button>
                    </Link>
                </div>
            </form>
        );
    }

}

export default User_signup;