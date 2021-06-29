import React from 'react';
import styles from './NoCountries.module.css';

export default function NoCountries() {
    return (

        <div className={styles.boxContainer}>

            <p><i class="fas fa-exclamation-triangle"></i> We could not find any country, try another!</p>
            
        </div>
    )
}
