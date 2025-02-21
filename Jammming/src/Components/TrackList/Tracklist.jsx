import React from 'react'
import Track from '../Track/Track'

function Tracklist({tracks}) {
  return (
    <>
    <div className={styles.trackList}>
        {tracks.map(track => (
            <Track key={track.id} track={track}/>
        ))}
    </div>
    </>
  )
};

export default Tracklist;