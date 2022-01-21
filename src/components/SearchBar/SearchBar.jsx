import styles from "./index.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.SearchBar}>
      <label htmlFor="entry">Search song information</label>
      <input id="entry" placeholder="Enter A Song, Album, or Artist" />
      <button className={styles.SearchButton}>Search</button>
    </div>
  );
};

export default SearchBar;
