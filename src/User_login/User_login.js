import React, { Component } from 'react';
import './User_login.css';
import {
  Link,
  withRouter
} from 'react-router-dom';
import { auth } from '../firebase';
import { modelInstance } from '../data/WeatherModel.js';
import * as routes from '../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <User_login history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class User_login extends Component {

  constructor(props) {
    super(props);

    this.state = {INITIAL_STATE};
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
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
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit} id="loginForm">
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

          <label><b>Password:</b></label>
          <input
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Enter Password"
            name="psw" required />

          <br /><br />
          <button disabled={isInvalid} type="submit" id="locationBtn" className="btn btn-warning welcomebutton">Login</button>

          { error && <label><b>{error.message}</b></label> }

          <div className="row">
            <div className="col-md-6">
              <br /><br />
              <Link to="/user_signup">
                <button type="button" id="locationBtn" className="btn btn-warning welcomebutton">Lack an account? Sign up!</button>
              </Link>
            </div>

            <div className="col-md-6">
              <br /><br />
              <Link to="/user_forgot">
                <button type="button" id="locationBtn" className="btn btn-warning welcomebutton">Forgot your password?</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <Link to="/">
            <button type="button" id="locationBtn" className="btn btn-warning welcomebutton cancelbtn">Back</button>
          </Link>
        </div>
      </form>
    )
  }
}

export default withRouter(SignInPage);

export {
  User_login,
};
