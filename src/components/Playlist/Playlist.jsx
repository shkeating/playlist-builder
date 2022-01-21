import styles from "./index.module.scss";
import Track from "../Track/Track";

const Playlist = (props) => {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  return (
    <div className={styles.Playlist}>
      <input value="New Playlist" />
      <TrackList />
      <button className={styles.PlaylistSave}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
