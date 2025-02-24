import React from 'react'
import Tracklist from '../TrackList/Tracklist'
import styles from "../SearchResults/SearchResults.module.css"

function SearchResults({searchResults, onAdd}) {
   return (
    <>
    <div className={styles.searchResults}>
        <h2>Results</h2>
        <Tracklist tracks={searchResults} onAdd={onAdd}/>
    </div>
    </>
   )
}

export default SearchResults;