import React, { Component } from 'react';
import './Jukebox.css';

class Jukebox extends Component {

  render() {
    return (
      <div className="Jukebox">
        <h2>This is the Jukebox screen</h2>
        <iframe scrolling="no" frameBorder="0" src="https://www.deezer.com/plugins/player?format=square&autoplay=true&playlist=true&width=300&height=300&color=007FEB&emptyPlayer=true&layout=dark&size=medium&type=tracks&id=1560273&app_id=1" width="0" height="0"></iframe>
      </div>
    );
  }
}

export default Jukebox;
