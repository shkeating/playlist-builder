import React, { useState } from "react";
import "./App.scss";
import SearchBar from "../SearchBar/SearchBar";
//import SearchResults from "../SearchResults/SearchResults";
//import Playlist from "../Playlist/Playlist";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div>
      <h1>🎶 Playlist Builder 🛠️</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          {
            //<SearchResults />
            //<Playlist />
          }
        </div>
      </div>
      <div class="waveform"></div>
    </div>
  );
};

export default App;
