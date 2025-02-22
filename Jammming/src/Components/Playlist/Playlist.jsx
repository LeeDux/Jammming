import React from 'react'
import Tracklist from '../TrackList/Tracklist'

function Playlist({playListName, playListTracks, onRemove}) {

    function handleChange(e){
        onNameChange(e.target.value)
    }

   
  return (
    <>
    <div className={styles.playList}>
        <input type='text' value={playListName} onChange={handleChange} className={styles.input}/>
        <Tracklist tracks={playListTracks} onRemove={onRemove}/>
        <button>Save To Spotify</button>
    </div>
    </>
  )
}

export default Playlist