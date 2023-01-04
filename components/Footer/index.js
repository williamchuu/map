//make a footer component
import React from 'react';
import styles from '../../styles/Home.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <img src='../translink.png' width='100px' alt='TransLink Logo' />
            <p className={styles.footer}>&#169; William Chu 2023</p>
        </div>
    );
}