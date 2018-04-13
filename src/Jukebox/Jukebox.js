import React, { Component } from 'react';
import './Jukebox.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'

class Jukebox extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      genre: modelInstance.getCurrentGenre(),
      weather: modelInstance.getCurrentWeather()
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
      genre: modelInstance.getCurrentGenre(),
      weather: modelInstance.getCurrentWeather()
    })
  }

  render() {
    return (
      <div className="Jukebox">
        <h2>Weather:{this.state.weather.description}</h2>
        <h2>Genre:{this.state.genre.name}</h2>
        <iframe scrolling="no" frameBorder="0" src="https://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=true&width=300&height=300&color=007FEB&emptyPlayer=true&layout=dark&size=medium&type=tracks&id=3097520&app_id=1" width="0" height="0"></iframe>
      </div>
    );
  }
}

export default Jukebox;
