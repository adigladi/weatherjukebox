import React, { Component } from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'
import SignOutButton from '../User_signout/User_signout';
import Navbar from '../Navbar/Navbar';

class About extends Component {

  constructor(props) {
    super(props)
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
      <div>
      <div className="Welcome row container-fluid">
        <div className="col-12 container-fluid">
        <Navbar />
          <br/>
          <br/>
            <img className="center" alt="Weather Jukebox" id="aboutlogo" src={require("../Welcome/Logo.png")} draggable="false"/>
          <br/>
        </div>
        </div>
        <div className="row container-fluid">
        <div className="col-12 text-center">
            <p id="abouttext">This application let's you enter a location (or fetch one by gps) and then plays you a song based on the weather conditions. You have the possibility to like the track, thus adding it to you private library, or you could dislike it preventing it from reappearing in further listening.</p>
            <p id="abouttext">In you personal library you can play your liked tracks; reminiscing both location and weather of the day you liked it!</p>
            <p id="abouttext">On the manage track page you can access your favourite artists deezer pages. Here you're also able to remove tracks from your liked/disliked lists.</p>
            <p id="abouttext">Här kan vi skriva mer osv osv osv</p>
          </div>
        </div>
        </div>
    );
  }
}
export default About;