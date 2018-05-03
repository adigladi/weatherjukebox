import React, { Component } from 'react';
import {
    Link,
    withRouter,
} from 'react-router-dom';
import './User_signup.css';
import { modelInstance } from '../data/WeatherModel.js';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) => 
    <div>
        <User_signup history={history} />
    </div>

const INITIAL_STATE = {
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
        const {
            email,
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
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
            passwordOne != passwordTwo ||
            passwordOne === '' ||
            email === '';

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
                    <button disabled={isInvalid} type="submit">Sign up</button>
                    <br /><br />
                    { error && <label><b>{error.message}</b></label> }
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

export default withRouter(SignUpPage);

export {User_signup};