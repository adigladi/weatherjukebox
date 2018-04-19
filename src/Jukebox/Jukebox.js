import React, { Component } from 'react';
import './Jukebox.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'

class Jukebox extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      genre: modelInstance.getCurrentGenre(),
      location: modelInstance.getCity(),
      status: 'INITIAL',
    }
  }

  componentDidMount() {
    modelInstance.addObserver(this);

    modelInstance.getWeather().then(weather => {

      modelInstance.weatherMatch(weather.weather[0].id);

      modelInstance.getArtists().then(artists => {
        console.log(weather.weather[0].id)
        console.log(modelInstance.getCurrentGenre())
        console.log(artists.data)
        modelInstance.artistMatch(artists.data);
        modelInstance.getTopTracks().then(topTracks => {
          modelInstance.trackMatch(topTracks.data);
          modelInstance.getTrack().then(returnTrack => {
            modelInstance.setCurrentTrack(returnTrack);

            var id = "deezer-widget-loader";
            var js, djs = document.getElementsByTagName("script")[0];
            if (document.getElementById(id)) return;
            js = document.createElement("script"); js.id = id;
            js.src = "https://e-cdns-files.dzcdn.net/js/widget/loader.js";
            djs.parentNode.insertBefore(js, djs);

            this.setState({
              status: 'LOADED',
              genre: modelInstance.getCurrentGenre(),
              weather: weather.weather[0],
              trackid: modelInstance.getCurrentTrack().id
            });
            document.getElementById("backgroundImg").style.backgroundImage = "url(" + modelInstance.getCurrentTrack().album.cover_xl + ")";
          });
        });
      });
    });
  }
  
  componentWillUnmount() {
    modelInstance.removeObserver(this)
    document.getElementById("deezer-widget-loader").remove();
  }

  update() {
    this.setState({
      status: 'LOADED',
      genre: modelInstance.getCurrentGenre(),
      weather: modelInstance.getCurrentWeather(),
      trackid: modelInstance.getCurrentTrack().id
    })
  }

  onClickAdd = () => {
    modelInstance.addMyTracks({'song':modelInstance.getCurrentTrack(),'weather':this.state.weather,'genre':this.state.genre,'city':this.state.location})
  }

  onClickBlacklist = () => {
    modelInstance.addToBlacklist();
  }

  render() {
    let jukebox = null;
    switch (this.state.status) {
      case 'INITIAL':
        jukebox = <div className="text-center"><br/><br/><br/><br/><br/><br/><h2>Fetching your trackz</h2><img alt='' src={require('./loading.svg')} id="loading"/></div>
        break;
      case 'LOADED':
      jukebox = 
      <div className="col-md-12 container-fluid" id="mainDiv">
        <Link to="/user">
          <button type="button" id="locationBtn2" className="btn btn-warning userbutton"><i className="material-icons w3-xlarge">person</i></button>
        </Link>
        <div id="backgroundImg"></div>
        <div className="Jukebox text-center">
          <div className="deezer-widget-player" data-src={"https://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=false&width=400&height=400&color=007FEB&layout=dark&size=medium&type=tracks&id=" + this.state.trackid + "&app_id=1"} data-scrolling="no" data-frameborder="0" data-width="400" data-height="400"></div>
          <div id="infoText">
            <h2>Location: {this.state.location}</h2>
            <h2>{this.state.weather.description}</h2>
            <h2>Genre: {this.state.genre.name}</h2>
          </div>
          <button type="button" className="btn btn-warning welcomebutton" onClick={this.onClickAdd}>Add</button>
          <button type="button" className="btn btn-warning welcomebutton" onClick={this.onClickBlacklist}>Blacklist</button>
          <div className="deezer-widget-player" data-src={"https://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=" + this.state.trackid + "&app_id=1"} data-scrolling="no" data-frameborder="0" data-width="300" data-height="300"></div>
          <Link to="/">
            <button type="button" className="btn btn-warning welcomebutton">Back</button>
          </Link>
        </div>
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
