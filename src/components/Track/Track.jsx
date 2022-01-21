import styles from "./index.module.scss";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <h4> Track component error</h4>
    </div>
  );
}

function Track(props) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <div className={styles.Track}>
        <div className={styles.TrackInformation}>
          <h3>{props.track.name}</h3>
          <div className={styles.sidebyside}>
            <p>{props.track.artist}</p>
            <p>{props.track.album}</p>
          </div>
        </div>
        <button
          className="Track-action"
          onClick={() => props.handleTrackAction(props.track)}
        >
          {props.trackActionCharacter}
        </button>
      </div>
    </ErrorBoundary>
  );
}
export default Track;
