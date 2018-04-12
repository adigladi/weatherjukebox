import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome col-md-12">
        <p>
            Weather Jukebox
        </p>
        
        <Link to="/jukebox">
            <button>Get Jukebox'd</button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
