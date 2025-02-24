import React, { useState } from "react";
import Spotify from "../../spotify"; 
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  
  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  
  async function handleSearch() {
    if (!searchTerm) return;

    const searchResults = await Spotify.search(searchTerm); 
    onSearch(searchResults); 
  }

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for a song..."
        value={searchTerm}
        onChange={handleInputChange}
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
