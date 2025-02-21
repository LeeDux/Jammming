import React from 'react'
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

function Track({track}) {

    function handleAddToPlayList(e) {
        const hasMatch = Playlist.filter((item1) => !SearchResults.some(item2 => item1.id === item2.id));
        if (hasMatch) {
         updatePlayList(e.target.value)
        }
    }

  return (
    <>
    <div className={styles.tack}>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
        <button onClick={handleAddToPlayList}>+</button>
    </div>
    </>
  )
};

export default Track;