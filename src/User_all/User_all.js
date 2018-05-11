import React, { Component } from 'react';
import './User_all.css';
//import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'
import Navbar from '../Navbar/Navbar';


class User_all extends Component {

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
    modelInstance.removeFromBlacklist(r.target.title);
  }

  render() {
    let myList = "";
    myList = this.state.myTracks.map((track, i) =>
      <tr key={i}>
        <td><a href={this.state.myTracks[i].song.link} target="_blank">{this.state.myTracks[i].song.title}</a></td>
        <td><a href={this.state.myTracks[i].song.artist.link} target="_blank">{this.state.myTracks[i].song.artist.name}</a></td>
        <td className="thinvisible">{this.state.myTracks[i].genre.name}</td>
        <td className="thinvisible">{this.state.myTracks[i].weather.description}</td>
        <td className="thinvisible">{this.state.myTracks[i].city}</td>
        <td><img id="trashbin" src={require("./trash.png")} draggable="false" title={this.state.myTracks[i].song.id} alt="X" onClick={this.clickTrash}/></td>
      </tr>
    )

    let myBlacklist;
    myBlacklist = this.state.myBlacklistTracks.map((blTrack, j) => 
      <tr key={j}>
        <td><a href={this.state.myBlacklistTracks[j].song.link} target="_blank">{this.state.myBlacklistTracks[j].song.title}</a></td>
        <td><a href={this.state.myBlacklistTracks[j].song.artist.link} target="_blank">{this.state.myBlacklistTracks[j].song.artist.name}</a></td>
        <td className="thinvisible">{this.state.myBlacklistTracks[j].genre.name}</td>
        <td className="thinvisible">{this.state.myBlacklistTracks[j].weather.description}</td>
        <td className="thinvisible">{this.state.myBlacklistTracks[j].city}</td>
        <td><img id="trashbin" src={require("./trash.png")} draggable="false" title={this.state.myBlacklistTracks[j].song.id} alt="X" onClick={this.clickRemoveBlacklist} /></td>
      </tr>
    )

    return (
      <div className="User row container-fluid">
        <div className="col-12 container-fluid">
        <Navbar />
        <br/>
        <br/>
        <h1 className="text-center">Manage Trackz</h1>
        <br/>
          <h2 className="userTitle text-center">Favouritz</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th className="thinvisible" scope="col">Genre</th>
                <th className="thinvisible" scope="col">Weather</th>
                <th className="thinvisible" scope="col">City</th>
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
                <th className="thinvisible" scope="col">Genre</th>
                <th className="thinvisible" scope="col">Weather</th>
                <th className="thinvisible"scope="col">City</th>
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

export default User_all;
