import styles from "./index.module.scss";
import Track from "../Track/Track";

import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <h4> Track component error</h4>
    </div>
  );
}

const SearchResults = (props) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <div className={styles.SearchResults}>
        <h2>Results</h2>
        <div className="TrackList">
          {props.tracks.map((track) => {
            return (
              <Track
                key={track.id}
                track={track}
                trackActionCharacter="+"
                handleTrackAction={props.addTrackToPlaylist}
              />
            );
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
};
export default SearchResults;
