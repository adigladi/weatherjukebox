import React, { Component } from 'react';
import './User_jukebox.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js';
import Navbar from '../Navbar/Navbar';

class User_jukebox extends Component {

  constructor(props) {
    super(props)
    if (typeof modelInstance.getPlayedTrack() !== 'undefined' && modelInstance.getMyTracks().length > 0){
      this.state = {
        myTracks: modelInstance.getMyTracks(),
        playedTrack: modelInstance.getPlayedTrack(),
      }}
    else {
      alert("It seems you haven't liked any tracks yet. Go and get jukebox'd!")
      window.location = "/"
      }
  }

  componentDidMount() {
    modelInstance.addObserver(this);
    this.player();
    this.background(this.state.playedTrack.song.album.cover_xl);
  }
  
  componentWillUnmount() {
    modelInstance.removeObserver(this)
    document.getElementById("deezer-widget-loader").remove();
  }

  update() { 
    this.setState({
      myTracks: modelInstance.getMyTracks(),
      playedTrack: modelInstance.getPlayedTrack(),
    })
  }

  player() {
    var id = "deezer-widget-loader";
    var js, djs = document.getElementsByTagName("script")[0];
    if (document.getElementById(id)) return;
    js = document.createElement("script"); js.id = id;
    js.src = "https://e-cdns-files.dzcdn.net/js/widget/loader.js";
    djs.parentNode.insertBefore(js, djs);
  }

  background(x) {
    document.getElementById("backgroundImg").style.backgroundImage = "url(" + x + ")";
  }

  clickTrack = (r) => {
    for (let i = 0; i < this.state.myTracks.length; i++) {
      if (this.state.myTracks[i].song.id === parseInt(r.target.title, 10)) {
        modelInstance.setPlayedTrack(this.state.myTracks[i]);
        document.getElementById("deezer-widget-loader").remove();
        this.player();
        this.background(this.state.myTracks[i].song.album.cover_xl);
      }
    }
  }

  render() {
    let myList = "";
    myList = this.state.myTracks.map((track, i) => {
      if(track.song.id === this.state.playedTrack.song.id){
        return <tr key={i}><td className="text-center" id="pink" title={track.song.id} onClick={this.clickTrack}><img id="speaker" className="d-inline" src={require("./speaker.png")} alt="Speaker"/>&#032;<p title={track.song.id} className="d-inline">{track.song.title+" - "+track.song.artist.name}</p></td></tr>
      }
      else{
        return <tr key={i}><td className="text-center" id="hp" title={track.song.id} onClick={this.clickTrack}><p title={track.song.id} className="d-inline">{track.song.title+" - "+track.song.artist.name}</p></td></tr>
      }
    })
      

    return(
      <div className="col-md-12 container-fluid" id="mainDiv">
        <Navbar />
        <div id="backgroundImg"></div>
        <br/>
        <br/>
        <div className="row">
          <div className="col-md-6 container-fluid">
            <div className="Jukebox text-center">
              <div className="deezer-widget-player" id="myjukebox" data-src={"https://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=false&width=350&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=" + this.state.playedTrack.song.id + "&app_id=1"} data-scrolling="no" data-frameborder="0" data-width="350" data-height="350"></div>
              <div id="infoText">
                <h2>When you liked this track you were in {this.state.playedTrack.city}</h2>
                <h2>The weather condition was: {this.state.playedTrack.weather.description}</h2>
                <h2>Genre: {this.state.playedTrack.genre.name}</h2>
              </div>
            </div>
          </div>
            <div className="col-md-6 container-fluid">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" className="text-center">Favouritz</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {myList.reverse()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
  }
}

export default User_jukebox;
