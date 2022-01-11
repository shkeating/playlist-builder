import styles from 'index.module.scss';
import Track from './Track';

const TrackList = () => {
    return (
        <div className={styles.TrackList}>
            <Track />
            {/*<!-- You will add a map method that renders a set of Track components  -->*/}
        </div>
    );
}

export defualt TrackList;