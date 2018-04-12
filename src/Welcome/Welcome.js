import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome row">
        <div className="col-md-12">
          <br/>
            <img className="center" src={require("./Logo.png")}/>
          <br/>
        </div>
        <div className="col-md-12 text-center">
        <input type="text" name="search" placeholder="Enter your location..."/>
        <Link to="/jukebox">
          <img className="cloud" src={require("./Cloud.png")}/>
        </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
