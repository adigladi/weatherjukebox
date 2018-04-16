import React, { Component } from 'react';
import './Jukebox.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'

class Jukebox extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      genre: modelInstance.getCurrentGenre(),
      weather: modelInstance.getCurrentWeather(),
      artist: "Daft Punk",
      song: "Harder, Better, Faster, Stronger",
      picture: "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg",
      status: 'INITIAL',
    }
  }

  componentDidMount = () => {
    modelInstance.addObserver(this)
    modelInstance.getWeather().then(weather => {
      this.setState({
        status: 'LOADED',
        genre: modelInstance.getCurrentGenre(),
        weather: weather.weather[0]
      })
    })
}

  componentWillUnmount() {
    modelInstance.removeObserver(this)
  }

  update() {
    this.setState({
      status: 'LOADED',
      genre: modelInstance.getCurrentGenre(),
      weather: modelInstance.getCurrentWeather(),
    })
  }

  render() {
    let jukebox = null;
    switch (this.state.status) {
      case 'INITIAL':
        jukebox = <p>Loading</p>
        break;
      case 'LOADED':
      jukebox = 
      <div className="Jukebox">
        <h2>Weather: {this.state.weather.description}</h2>
        <h2>Genre: {this.state.genre.name}</h2>
        <h2>Artist: {this.state.artist}</h2>
        <h2>Song: {this.state.song}</h2>
        <img src={this.state.picture} draggable="false"/>
        <Link to="/">
          <button type="button" className="btn btn-warning welcomebutton">Back</button>
        </Link>
        <iframe scrolling="no" frameBorder="0" src="https://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=true&width=300&height=300&color=007FEB&emptyPlayer=true&layout=dark&size=medium&type=tracks&id=3097520&app_id=1" width="0" height="0"></iframe>
      </div>
        break;
      default:
        jukebox = <b>Failed to load data, please try again</b>
        break;
    }
    return(
      jukebox
    )
  }
}

export default Jukebox;
