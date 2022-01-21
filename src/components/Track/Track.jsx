import styles from "./index.module.scss";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <h4> Track component error</h4>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
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
          <p>{props.track.artist}</p>
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
