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

  onCloudClick = () => {
    modelInstance.getWeather().then(weather => {modelInstance.setCurrentWeather(weather.weather[0].id)})
  }

  render() {
    return (
      <div className="Welcome row">
        <div className="col-md-12">
          <br/>
          <br/>
            <img className="center" src={require("./Logo.png")}/>
          <br/>
        </div>
        <div className="col-md-12 text-center">
        <input type="text" name="search" placeholder="Enter your location..." onChange={this.onTextChange}/>
        <Link to="/jukebox">
          <img className="cloud" src={require("./Cloud.png")} onClick={this.onCloudClick}/>
        </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
