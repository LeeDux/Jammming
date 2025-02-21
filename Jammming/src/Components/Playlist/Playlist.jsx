import React from 'react'
import Tracklist from '../TrackList/Tracklist'

function Playlist({playListName, playListTracks}) {

    function handleChange(e){
        onNameChange(e.target.value)
    }

   
  return (
    <>
    <div className={styles.playList}>
        <input type='text' value={playListName} onChange={handleChange} className={styles.input}/>
        <Tracklist tracks={playListTracks}/>
        <button>Save To Spotify</button>
    </div>
    </>
  )
}

export default Playlist