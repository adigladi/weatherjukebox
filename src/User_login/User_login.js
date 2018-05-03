import React, { Component } from 'react';
import './User_login.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'
class User_login extends Component {

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
        <form id="loginForm">
        <div className="imgcontainer">
          <img src={require("./Logo.png")} className="avatar"/>
        </div>
      
        <div className="container">
          <label><b>Username:</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required/>
      
          <label><b>Password:</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required/>
      
          <br/><br/>
          <Link to="/user_main">
            <button type="button">Login</button>
          </Link>

          <br/><br/>
          <Link to="/user_signup">
            <button type="button">Don't have an account? Sign up!</button>
          </Link>
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

export default User_login;
