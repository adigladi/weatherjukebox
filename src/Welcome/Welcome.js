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
        <input type="text" name="search" placeholder="Enter your location..." onChange={this.onTextChange}/>
        <Link to="/jukebox">
          <button type="button" className="btn btn-warning welcomebutton">Get Jukebox'd</button>
        </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
