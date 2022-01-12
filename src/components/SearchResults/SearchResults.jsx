import styles from "./index.module.scss";
import TrackList from "../TrackList/TrackList";

const SearchResults = () => {
  return (
    <div className={styles.SearchResults}>
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
    </div>
  );
};
export default SearchResults;
