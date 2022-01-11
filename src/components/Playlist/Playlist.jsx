import styles from "index.module.scss";
import TrackList from './TrackList';

function Playlist () {
    return (
      <div className={styles.Playlist}>
        <input value="New Playlist"/>
        <TrackList />
        <button className={styles.PlaylistSave}>SAVE TO SPOTIFY</button>
    </div>  
    );
}

export defualt Playlist;