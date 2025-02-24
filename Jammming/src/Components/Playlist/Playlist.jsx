import React from 'react'
import Tracklist from '../TrackList/Tracklist'
import styles from '../Playlist/Playlist.module.css'

function Playlist({playlistName, playlistTracks, onRemove, onNameChange, onSave}) {

    function handleChange(e){
        onNameChange(e.target.value)
    }

   
  return (
    <>
    <div className={styles.playlist}>
        <input type='text' value={playlistName} onChange={handleChange} className={styles.input}/>
        <Tracklist tracks={playlistTracks} onRemove={onRemove}/>
        <button className={styles.button} onClick={onSave}>Save To Spotify</button>
    </div>
    </>
  )
}

export default Playlist