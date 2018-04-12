import React, { Component } from 'react';
import './Jukebox.css';
import DZ from 'http://cdn-files.deezer.com/js/min/dz.js';

class Jukebox extends Component {

  constructor(props) {
    super(props)

    this.state = {
      //numberOfGuests: this.props.model.getNumberOfGuests()
    }
  }

  componentDidMount() {
    DZ.init({
      appId  : '8',
      channelUrl : 'http://developers.deezer.com/examples/channel.php',
      player : {
        onload : onPlayerLoaded
      }
    });
  
  function onPlayerLoaded() {
    DZ.player.playAlbum(238939);
  }
}

  render() {
    return (
      <div className="Jukebox">
        <h2>This is the Jukebox screen</h2>
        <div id="dz-root"></div>
        <div id="controlers">
          <input type="button" onclick="DZ.player.playAlbum(238939); return false;" value="Play Daft Punk - Discovery"/>
          <input type="button" onclick="DZ.player.play(); return false;" value="play"/>
          <input type="button" onclick="DZ.player.pause(); return false;" value="pause"/>
        </div>
      </div>
    );
  }
}

export default Jukebox;
