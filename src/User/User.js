import React, { Component } from 'react';
import './User.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'
class User extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      myTracks: modelInstance.getMyTracks(),
      myBlacklistTracks: modelInstance.getBlacklist()
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
      myTracks: modelInstance.getMyTracks(),
      myBlacklistTracks: modelInstance.getBlacklist()
    })
  }

  clickTrash = (e) => {
    modelInstance.removeMyTracks(e.target.title);
  }

  clickRemoveBlacklist = (r) => {
    modelInstance.removeFromBlacklist(r);
  }

  render() {
    let myList = "";
    myList = this.state.myTracks.map((track, i) =>
      <tr key={i}>
        <a href={this.state.myTracks[i].song.link} target="_blank">
        <td>{this.state.myTracks[i].song.title}</td>
        </a>
        <td>{this.state.myTracks[i].song.artist.name}</td>
        <td>{this.state.myTracks[i].genre.name}</td>
        <td>{this.state.myTracks[i].weather.description}</td>
        <td>{this.state.myTracks[i].city}</td>
        <td><img id="trashbin" src={require("./trash.png")} draggable="false" title={this.state.myTracks[i].song.id} alt="X" onClick={this.clickTrash}/></td>
      </tr>
    )

    let myBlacklist;
    myBlacklist = this.state.myBlacklistTracks.map((blTrack, j) => 
      <tr key={j}>
        <td>{this.state.myBlacklistTracks[j].song.title}</td>
        <td>{this.state.myBlacklistTracks[j].song.artist.name}</td>
        <td>{this.state.myBlacklistTracks[j].genre.name}</td>
        <td>{this.state.myBlacklistTracks[j].weather.description}</td>
        <td>{this.state.myBlacklistTracks[j].city}</td>
        <td><img id="trashbin" src={require("./trash.png")} draggable="false" title={this.state.myBlacklistTracks[j].song.id} alt="X" onClick={this.clickRemoveBlacklist} /></td>
      </tr>
    )

    return (
      <div className="User row container-fluid">
        <div className="col-12 container-fluid">
        <Link to="/">
            <button type="button" className="btn btn-warning towelcomebutton"><img id="boxjuke" src={require("./jukebox2.png")} draggable="false"/></button>
        </Link>
        <br/>
          <h2 className="userTitle text-center">My Trackz</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Genre</th>
                <th scope="col">Weather</th>
                <th scope="col">City</th>
                <th className="text-center" scope="col">X</th>
              </tr>
            </thead>
            <tbody>
              {myList}
            </tbody>
          </table>
        </div>
        <div className="col-12 container-fluid" id="blacklistTable">
          <h2 className="userTitle text-center">Disliked Trackz</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Genre</th>
                <th scope="col">Weather</th>
                <th scope="col">City</th>
                <th className="text-center" scope="col">X</th>
              </tr>
            </thead>
            <tbody>
              {myBlacklist}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default User;
