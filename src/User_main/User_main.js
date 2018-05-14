import React, { Component } from 'react';
import './User_main.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/WeatherModel.js'
import Navbar from '../Navbar/Navbar';


class User_main extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      myTracks: modelInstance.getMyTracks(),
      myBlacklistTracks: modelInstance.getBlacklist(),
      myHistory: modelInstance.getMyHistory(),
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
      myBlacklistTracks: modelInstance.getBlacklist(),
      myHistory: modelInstance.getMyHistory(),
    })
  }

  clickTrash = (e) => {
    modelInstance.removeMyTracks(e.target.title);
  }

  clickRemoveBlacklist = (r) => {
    modelInstance.removeFromBlacklist(r.target.title);
  }

  clickClearHistory = () => {
    modelInstance.clearMyHistory();
  }

  render() {
    let myHistoryList = "";
    myHistoryList = this.state.myHistory.map((track, i) =>
      <tr key={i}>
        <td className="text-center">{this.state.myHistory[i].song.title+" - "+this.state.myHistory[i].song.artist.name}</td>
      </tr>
    )

    return (
      <div className="User row container-fluid">
        <div className="col-12 container-fluid">
        <Navbar />
        
        <br/>
        <br/>
          <h2 className="userTitle text-center">Hello User!</h2>
          <div className="row">
          <div className="col-md-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="text-center">Your jukeboxin'</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <p id="maintext">You currently have {modelInstance.getMyTracks().length} songs in your liked list</p>
              <p id="maintext">And for the moment being, you have disliked {modelInstance.getBlacklist().length} tracks!</p>
              <p id="maintext">The last time you jukebox'd you were in {modelInstance.getMyTracks().splice(-1)[0].city}</p>
              <p id="maintext">and the weather was {modelInstance.getMyTracks().splice(-1)[0].weather.description}</p>
            </tbody>
          </table>
          </div>
          <div className="col-md-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="text-center">Your Hiztory<img id="trashbin" src={require("./trash.png")} draggable="false" alt="X" onClick={this.clickClearHistory}/></th>
              </tr>
            </thead>
            <tbody>
              {myHistoryList.reverse()}
            </tbody>
          </table>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User_main;
