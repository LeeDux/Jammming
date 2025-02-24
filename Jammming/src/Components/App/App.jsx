import { useState, useEffect } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from '../Playlist/Playlist';
import './App.css'
import Spotify from '../../spotify';

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: "Song One", artist: "Artist One", album: "Album One", uri: "spotify:track:1" },
    { id: 2, name: "Song Two", artist: "Artist Two", album: "Album Two", uri: "spotify:track:2" },
    { id: 3, name: "Song Three", artist: "Artist Three", album: "Album Three", uri: "spotify:track:3" },
  ]);

  const [playlistName, setPlaylistName] = useState('My Playlist')
  const [playListTracks, setPlayListTracks] = useState([{id: 4, name: "Saved Song", artist: "Saved Artist", album: "Saved Album", uri: "spotify:track:4" }]);

  useEffect(() => {
    Spotify.getAccessToken()
  }, [])

  function updatePlayListName(newName){
    setPlaylistName(newName);
  };

  function addTrack(track) {
    if(!playListTracks.some((playlistTrack) => playlistTrack.id === track.id)){
      setPlayListTracks([...playListTracks, track])
    }
  };

  function removeTrack(track) {
    setPlayListTracks(playListTracks.filter((playListTrack) => playListTrack.id !== track.id))
  }

  function savePlaylist() {
    const trackUris = playListTracks.map(track => track.uri);
    
    console.log("Saving Playlist with URIs:", trackUris);
  
    
    setPlayListTracks([]);
    setPlaylistName("New Playlist");
  }
  

  return (
    <>
    <div className='App'>
     <SearchBar />
     <SearchResults searchResults={searchResults} onAdd={addTrack}/>
     <Playlist playlistTracks={playListTracks} playlistName={playlistName} onNameChange={updatePlayListName} onRemove={removeTrack} onSave={savePlaylist}/>
    </div>
    </>
  )
 
}

export default App
