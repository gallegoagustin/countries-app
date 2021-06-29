import React from 'react';
import NewActivity from '../../components/new-activity/NewActivity';
import styles from './Activity.module.css';

export default function Activity() {
    return (

        <div className={styles.activityContainer}>

            <div className={styles.titleBox}>
                <h1>new <span id={styles.title}>activities</span> form</h1>
            </div>

            <div className={styles.formBox}>
                <NewActivity/>
            </div>


        </div>
        
    )
}
