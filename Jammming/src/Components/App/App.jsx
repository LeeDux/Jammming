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
  const [playlist, setPlayList] = useState([{id: 4, name: "Saved Song", artist: "Saved Artist", album: "Saved Album" }])

  function updatePlayListName(newName){
    setPlaylistName(newName);
  }

  function updatePlayList(newSong) {
    setPlayList([...playlist, newSong])
  }

  return (
    <>
    <div className='App'>
     <SearchBar />
     <SearchResults searchResults={searchResults} onClick={updatePlayList}/>
     <Playlist playlist={playlist} playlistName={playlistName} onChange={updatePlayListName}/>
    </div>
    </>
  )
 
}

export default App
