import React from 'react'
import Track from '../Track/Track'
import styles from '../TrackList/Tracklist.module.css'

function Tracklist({tracks, onAdd, onRemove}) {

  if (!tracks) {
    return <p>No tracks available.</p>;
}
  return (
    <>
    <div className={styles.tracklist}>
      <div className={styles.track}>
        {tracks.map(track => (
            <Track key={track.id} track={track} onAdd={onAdd ? onAdd : null} onRemove={onRemove ? onRemove : null}/>
        ))}
      </div>
    </div>
    </>
  )
};

export default Tracklist;