import React from 'react'
import styles from '../Track/Track.module.css'


function Track({track, onAdd, onRemove}) {

  return (
    <>
    <div className={styles.tack}>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
        {onAdd && <button onClick={() => onAdd(track)}>+</button>}
      {onRemove && <button onClick={() => onRemove(track)}>-</button>}
    </div>
    </>
  )
};

export default Track;