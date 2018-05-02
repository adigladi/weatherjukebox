import React, { Component } from 'react';
import './User_jukebox.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'

class User_jukebox extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      myTracks: modelInstance.getMyTracks(),
      currentTrack: modelInstance.getCurrentTrack(),
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
    document.getElementById("backgroundImg").style.backgroundImage = "url(" + this.state.currentTrack.song.album.cover_xl + ")";
  }
  
  componentWillUnmount() {
    modelInstance.removeObserver(this)
    document.getElementById("deezer-widget-loader").remove();
  }

  update() {
    this.setState({
      myTracks: modelInstance.getMyTracks(),
      currentTrack: modelInstance.getCurrentTrack(),
    })
  }

  render() {
    return(
      <div className="col-md-12 container-fluid" id="mainDiv">
        <div id="buttonDiv">
          <Link to="/">
            <button type="button" id="jukeButtons" className="btn btn-warning welcomebutton"><i className="fa fa-chevron-circle-left"></i></button>
          </Link>
          <Link to="/user_main">
            <button type="button" id="jukeButtons" className="btn btn-warning userbutton"><i className="material-icons w3-xlarge">person</i></button>
          </Link>
        </div>
        <div id="backgroundImg"></div>
        <div className="Jukebox text-center">
          <div className="deezer-widget-player" data-src={"https://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=false&width=350&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=" + this.state.currentTrack.song.id + "&app_id=1"} data-scrolling="no" data-frameborder="0" data-width="350" data-height="350"></div>
          <div id="infoText">
            <h2>Location: {this.state.currentTrack.city}</h2>
            <h2>{this.state.currentTrack.weather.description}</h2>
            <h2>Genre: {this.state.currentTrack.genre.name}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default User_jukebox;
