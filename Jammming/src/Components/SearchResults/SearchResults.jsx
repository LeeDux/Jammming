import React from 'react'
import TrackList from '../TrackList/Tracklist'

function SearchResults({searchResults, onAdd}) {
   return (
    <>
    <div className={styles.searchResults}>
        <h2>Results</h2>
        <TrackList tracks={searchResults} onAdd={onAdd}/>
    </div>
    </>
   )
}

export default SearchResults;