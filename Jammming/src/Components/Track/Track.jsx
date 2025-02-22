import React from 'react'


function Track({track, onAdd, onRemove}) {

  return (
    <>
    <div className={styles.tack}>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
        <button onClick={() => onAdd(track)}>+</button>
        <button onClick={() => onRemove(track)}>-</button>
    </div>
    </>
  )
};

export default Track;