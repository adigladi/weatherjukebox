import React, { Component } from 'react';
import './User_jukebox.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'

class User_jukebox extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      myTracks: modelInstance.getMyTracks(),
      playedTrack: modelInstance.getPlayedTrack(),
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
    document.getElementById("backgroundImg").style.backgroundImage = "url(" + this.state.playedTrack.song.album.cover_xl + ")";
  }
  
  componentWillUnmount() {
    modelInstance.removeObserver(this)
    document.getElementById("deezer-widget-loader").remove();
  }

  update() {
    window.location.reload();  
    this.setState({
      myTracks: modelInstance.getMyTracks(),
      playedTrack: modelInstance.getPlayedTrack(),
    })
  }

  clickTrack = (r) => {
    for (let i = 0; i < this.state.myTracks.length; i++) {
      if (this.state.myTracks[i].song.id === parseInt(r.target.title, 10)) {
        modelInstance.setPlayedTrack(this.state.myTracks[i])
      }
    }
  }

  render() {
    let myList = "";
    myList = this.state.myTracks.map((track, i) =>
      <tr key={i}>
        <td className="text-center" id="hp" title={this.state.myTracks[i].song.id} onClick={this.clickTrack}>{this.state.myTracks[i].song.title+" - "+this.state.myTracks[i].song.artist.name}</td>
      </tr>
      )

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
        <div className="row">
          <div className="col-md-6 container-fluid">
            <div className="Jukebox text-center">
              <div className="deezer-widget-player" data-src={"https://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=false&width=350&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id=" + this.state.playedTrack.song.id + "&app_id=1"} data-scrolling="no" data-frameborder="0" data-width="350" data-height="350"></div>
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
