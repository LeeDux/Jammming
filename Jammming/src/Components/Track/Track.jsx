import React from 'react'
import styles from '../Track/Track.module.css'


function Track({track, onAdd, onRemove}) {

  return (
    <>
    <div className={styles.track}>
      <div className={styles.info}>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
        {onAdd && <button onClick={() => onAdd(track)}>+</button>}
      {onRemove && <button onClick={() => onRemove(track)}>-</button>}
    </div>
    </>
  )
};

export default Track;