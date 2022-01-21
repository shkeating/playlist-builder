import React, { useState } from "react";
import "./App.scss";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const App = () => {
  //variables
  const sampleSearchData = [
    { name: "name1", artist: "artist1", album: "album1", id: 1 },
    { name: "name2", artist: "artist2", album: "album2", id: 2 },
    { name: "name3", artist: "artist3", album: "album3", id: 3 },
  ];
  const samplePlaylistData = [
    { name: "name1", artist: "artist1", album: "album1", id: 1 },
    { name: "name2", artist: "artist2", album: "album2", id: 2 },
    { name: "name3", artist: "artist3", album: "album3", id: 3 },
  ];
  const [playlistTracks, setPlaylistTracks] = useState(samplePlaylistData);
  const [searchResults, setSearchResults] = useState(sampleSearchData);

  //methods
  function addTrackToPlaylist(track) {
    setPlaylistTracks((oldPlaylistTracks) => {
      if (oldPlaylistTracks.includes(track)) {
        return oldPlaylistTracks;
      } else {
        return [...oldPlaylistTracks, track];
      }
    });
  }

  function removeTrackFromPlaylist(track) {
    setPlaylistTracks((oldPlaylistTracks) =>
      oldPlaylistTracks.filter((t) => track !== t)
    );
  }

  return (
    <div>
      <h1>🎶 Playlist Builder 🛠️</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults
            tracks={searchResults}
            addTrackToPlaylist={addTrackToPlaylist}
          />
          <Playlist
            tracks={playlistTracks}
            removeTrackFromPlaylist={removeTrackFromPlaylist}
            //createSpotifyPlaylist={createSpotifyPlaylist}
          />
        </div>
      </div>
      <div className="waveform"></div>
    </div>
  );
};

export default App;
