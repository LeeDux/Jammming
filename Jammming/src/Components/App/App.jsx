import { useState } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from '../Playlist/Playlist';
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: "Song One", artist: "Artist One", album: "Album One" },
    { id: 2, name: "Song Two", artist: "Artist Two", album: "Album Two" },
    { id: 3, name: "Song Three", artist: "Artist Three", album: "Album Three" },
  ])
  const [playlistName, setPlaylistName] = useState('My Playlist')
  const [playListTracks, setPlayListTracks] = useState([{id: 4, name: "Saved Song", artist: "Saved Artist", album: "Saved Album" }])

  function updatePlayListName(newName){
    setPlaylistName(newName);
  }

  function addTrack(track) {
    if(!playListTracks.some((playlistTrack) => playlistTrack.id === track.id)){
      setPlayListTracks([...playList, track])
    }
  };

  function removeTrack(track) {
    setPlayListTracks(playListTracks.filter((playListTrack) => playListTrack.id !== track.id))
  }

  return (
    <>
    <div className='App'>
     <SearchBar />
     <SearchResults searchResults={searchResults} onAdd={addTrack}/>
     <Playlist playlistTracks={playListTracks} playlistName={playlistName} onChange={updatePlayListName} onRemove={removeTrack}/>
    </div>
    </>
  )
 
}

export default App
