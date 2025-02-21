import React from 'react'
import TrackList from '../TrackList/Tracklist'

function SearchResults({searchResults}) {
   return (
    <>
    <div className={styles.searchResults}>
        <h2>Results</h2>
        <TrackList tracks={searchResults}/>
    </div>
    </>
   )
}

export default SearchResults;