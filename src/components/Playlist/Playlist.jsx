import React, { useState } from "react";
import styles from "./index.module.scss";
import Track from "../Track/Track";

const Playlist = (props) => {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  return (
    <div className="wrapper">
      <div className={styles.Playlist}>
        <label htmlFor="playlist-title">Enter Playlist Name:</label>
        <input
          onChange={(e) => setPlaylistName(e.target.value)}
          value={playlistName}
          id="playlist-title"
        />
        <div className="TrackList">
          {props.tracks.map((track) => {
            return (
              <Track
                key={track.id}
                track={track}
                trackActionCharacter="-"
                handleTrackAction={props.removeTrackFromPlaylist}
              />
            );
          })}
        </div>
      </div>
      <button className={styles.PlaylistSave}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
