import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'

class Welcome extends Component {

  constructor(props) {
    super(props)

    this.state = {
      city: modelInstance.getCity(),
    }
  }

  componentDidMount() {
    modelInstance.addObserver(this)

    var input = document.getElementById("locationField");

    //Enter press
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        document.getElementById("locationBtn").click();
      }
    });
  }

  componentWillUnmount() {
    modelInstance.removeObserver(this)
  }

  update() {
    this.setState({
      city: modelInstance.getCity(),
    })
  }

  onTextChange = (e) => {
    modelInstance.setCity(e.target.value)
  }

  render() {
    return (
      <div className="Welcome row container-fluid">
        <div className="col-12 container-fluid">
          <br/>
          <br/>
            <img className="center" src={require("./Logo.png")} draggable="false"/>
          <br/>
        </div>
        <div className="col-12 text-center">
        <input id="locationField" type="text" name="search" placeholder="Enter your location..." onChange={this.onTextChange}/>
        <Link to="/jukebox">
          <button type="button" id="locationBtn" className="btn btn-warning welcomebutton">Get Jukebox'd</button>
        </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
