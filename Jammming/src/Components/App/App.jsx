import { useState, useEffect } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from '../Playlist/Playlist';
import './App.css'
import Spotify, {getUserId, createPlaylist, addTracksToPlaylist} from '../../spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playListTracks, setPlayListTracks] = useState([]);
  const [accessToken, setAccessToken] = useState("");

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
  };

  function savePlaylist() {
    const trackUris = playListTracks.map(track => track.uri);
    
    getUserId()
    .then(userId => {
      return createPlaylist(userId, playlistName)
      .then(playlistId => {
        addTracksToPlaylist(userId, playlistId, trackUris)
      });
    })
    .catch(error => {console.log("Error saving playlist: ", error)});

    setPlayListTracks([]);
    setPlaylistName("New Playlist");
  };

  function handleSearch(searchResults){
    setSearchResults(searchResults)
  };
  

  return (
    <>
    <div className='App'>
     <SearchBar onSearch={handleSearch}/>
     <SearchResults searchResults={searchResults} onAdd={addTrack}/>
     <Playlist playlistTracks={playListTracks} playlistName={playlistName} onNameChange={updatePlayListName} onRemove={removeTrack} onSave={savePlaylist}/>
    </div>
    </>
  )
 
}

export default App
