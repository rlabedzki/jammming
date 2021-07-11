import React from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [{name: "sname1", artist: "sartist1", album: "salbum1", id: "sid1", uri: "suri1"}],
      playlistName: "nazwa", 
      playlistTracks: [{name: "name1", artist: "artist1", album: "album1", id: "id1", uri: "uri1"}, 
      {name: "name2", artist: "artist2", album: "album2", id: "id2", uri: "uri2"}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }else{
      this.setState({
        playlistTracks: this.state.playlistTracks.concat([track])
      })
    }
  }

  removeTrack(track){
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(element => {
        return element.id !== track.id;
      })
    })
  }

  updatePlaylistName(name){
    this.setState({
      playlistName: name
    })
  }

  savePlaylist(){
    const trackURIs = [];
    this.state.playlistTracks.forEach(element => {
      trackURIs.push(element.uri);
    })
    return trackURIs;
  }

  search(term){
    Spotify.search(term)
    .then(searchResults => {
      this.setState({
        searchResults: searchResults
    })})
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.search} />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
              <Playlist playlistName={this.state.playlistName} tracks={this.state.playlistTracks} onRemove={this.removeTrack} 
              onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
