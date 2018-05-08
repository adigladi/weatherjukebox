import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'
import Navbar from '../Navbar/Navbar';

class Welcome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: modelInstance.getCity(),
      status: "INITIAL"
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

  onLocationClick = (e) => {
    var component = this;
    if (navigator.geolocation) {
      component.setState({
        status: 'LOADING'
      })
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
        };
        modelInstance.setCoordinates(pos);
        modelInstance.getWeatherByCoordinates(modelInstance.getCoordinates().lat,modelInstance.getCoordinates().lng).then(weather => {
          modelInstance.setCity(weather.name);
          var text = document.getElementById('locationField');
          text.value = weather.name;
          component.setState({
            status: 'LOADED'
          })
        })
      });
  }
  else {
    alert("Please enter a location!")
  }
  }

  render() {
    let button = null;
    switch (this.state.status) {
      case 'INITIAL':
      button = <button type="button" className="btn btn-warning welcomebutton markerbutton" onClick={this.onLocationClick}><img id="marker" alt="Weather Jukebox" src={require("./marker.png")} draggable="false"/></button>
        break;
      case 'LOADING':
      button = <button type="button" className="btn btn-warning welcomebutton markerbutton" onClick={this.onLocationClick}><img id="marker" alt="Weather Jukebox" src={require("./spinner.gif")} draggable="false"/></button>
        break;
        case 'LOADED':
        button = <button type="button" className="btn btn-warning welcomebutton markerbutton" onClick={this.onLocationClick}><img id="marker" alt="Weather Jukebox" src={require("./marker.png")} draggable="false"/></button>
          break;
      default:
        button = <b>Try Again</b>
        break;
    }
    return (
      <div>
      <div className="Welcome row container-fluid">
        <div className="col-12 container-fluid">
        <Navbar />
          <br/>
          <br/>
            <img className="center" alt="Weather Jukebox" id="mainlogo" src={require("./Logo.png")} draggable="false"/>
          <br/>
        </div>
        </div>
        <div className="row container-fluid">
            <div className="col-12 text-center" id="buttonCol">
              <input id="locationField" type="text" name="search" placeholder="Enter your location..." onChange={this.onTextChange}/>
              {button}
              <Link to="/jukebox">
                <button type="button" id="locationBtn" className="btn btn-warning welcomebutton">Get Jukebox'd</button>
              </Link>
            </div>
          </div>
        </div>
    );
  }
}
export default Welcome;