import styles from "./index.module.scss";
import TrackList from "../TrackList/TrackList";

const SearchResults = () => {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <TrackList />
    </div>
  );
};
export default SearchResults;
