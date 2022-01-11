import styles from "./index.module.scss";

const Track = () => {
  <div className={styles.Track}>
    <div className={styles.TrackInformation}>
      <h3>{/* track name will go here */}</h3>
      <p>{/* track artist will go here | <!-- track album will go here */}</p>
    </div>
    <button className={styles.TrackAction}>{/* + or - will go here */}</button>
  </div>;
};

export default Track;
