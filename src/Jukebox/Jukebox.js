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
      picture: "https://e-cdns-images.dzcdn.net/images/cover/2e018122cb56986277102d2041a592c8/500x500-000000-80-0-0.jpg"
    }
  }

  componentDidMount() {
    modelInstance.addObserver(this);

    var id = "deezer-widget-loader";
    var js, djs = document.getElementsByTagName("script")[0];
	  if (document.getElementById(id)) return; 
	  js = document.createElement("script"); js.id = id; 
	  js.src = "https://e-cdns-files.dzcdn.net/js/widget/loader.js"; 
	  djs.parentNode.insertBefore(js, djs);

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
        <h2>Weather: {this.state.weather.description}</h2>
        <h2>Genre: {this.state.genre.name}</h2>
        <h2>Artist: {this.state.artist}</h2>
        <h2>Song: {this.state.song}</h2>
        <img src={this.state.picture} draggable="false"/>
        <Link to="/">
          <button type="button" className="btn btn-warning welcomebutton">Back</button>
        </Link>
        <div className="deezer-widget-player" data-src="https://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=playlist&id=30595446&app_id=1" data-scrolling="no" data-frameborder="0" data-width="0" data-height="0"></div>
      </div>
    );
  }
}

export default Jukebox;
