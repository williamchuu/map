import styles from '../../styles/Home.module.css'
import React from 'react';

export default function Header() {
    return (
        <div className={styles.header}>
            <h1>Vancouver Expo Line</h1>
            <h3 className={styles.subhead}>
                &#128205; Click on the markers to see the station name
            </h3>
            <p className={styles.legend} >
                <b className={styles.boldPurple}>Purple</b>: To King George Station <br />
                <b className={styles.boldPink}>Pink</b>: To Production Way-University Station
            </p>
        </div>
    );
}