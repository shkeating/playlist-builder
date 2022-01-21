import styles from "./index.module.scss";
import PropTypes from "prop-types";

function Track({ name, artist }) {
  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <h3>{name}</h3>
        <p>{artist}</p>
      </div>
      <button className={styles.TrackAction}>+</button>
    </div>
  );
}

Track.defaultProps = {
  name: "Track Title",
  artist: "Artist Name",
};

Track.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default Track;
