import React from 'react';
import NewActivity from '../../components/new-activity/NewActivity';
import styles from './Activity.module.css';

export default function Activity() {
    return (

        <div className={styles.activityContainer}>

            <div className={styles.boxContainer}>

                <h1>New activities form</h1>

                <NewActivity/>

            </div>


        </div>
        
    )
}
