import React, { Component } from 'react';
import {
    Link,
    withRouter,
} from 'react-router-dom';
import './User_signup.css';
import { modelInstance } from '../data/WeatherModel.js';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import * as firebase from 'firebase';

const SignUpPage = ({ history }) => 
    <div>
        <User_signup history={history} />
    </div>

const INITIAL_STATE = {
    email: 'none',
    passwordOne: 'none',
    passwordTwo: 'none',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const writeInitialUserData = (iId, email) => {
    firebase.database().ref('users/' + iId).set({
        email: email,
        currentCity: "Stockholm",
        userTracks: "",
        userHistory: "",
        userBlacklist: "",
    });
};

class User_signup extends Component {

    constructor(props) {
        super(props)

        this.state = {INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {
            email,
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                writeInitialUserData(authUser.uid, email);
                this.setState(() => ({INITIAL_STATE}));
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });
        event.preventDefault();
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
        const {
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state;

        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === 'none' ||
            email === 'none';

        return (
            <form id="signupForm" onSubmit={this.onSubmit}>
                <div className="imgcontainer">
                    <img src={require("./Logo.png")} className="avatar" alt="Logo"/>
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
                    <input
                        value={passwordOne}
                        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                        type="password"
                        placeholder="Enter Password"
                        name="psw" required />

                    <label><b>Re-type password:</b></label>
                    <input
                        value={passwordTwo}
                        onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                        type="password"
                        placeholder="Re-type Password"
                        name="psw2" required />

                    <br /><br />
                    <button disabled={isInvalid} type="submit" id="signupBtn" className="btn btn-warning welcomebutton">Sign up</button>
                    <br /><br />
                    { error && <label><b>{error.message}</b></label> }
                </div>

                <div className="container">
                    <Link to="/user_login">
                        <button type="button" id="backBtn" className="btn btn-warning welcomebutton cancelbtn">Back</button>
                    </Link>
                </div>
            </form>
        );
    }

}

export default withRouter(SignUpPage);

export {User_signup};