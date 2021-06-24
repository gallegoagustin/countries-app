import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../landing/Landing.module.css';

export default function Landing() {
    return (

        <div className={styles.landingContainer}>

            <div className={styles.boxContainer}>
            
                <h1>Countries App</h1>

                <p>This app was built as a learning project for <strong>Henry's bootcamp</strong>. You will be able to look for information about any country in the world and add touristic activities for them.</p>
                
                <p>Not only you can <strong>search for countries</strong> and <strong>add activities</strong> but also ordering or filtering them by name, continent and kind of activity if necessary.</p>
                
                <p>You can check the <strong>responsive design</strong> too!</p>
                
                <Link 
                    to='/home'>
                    <a 
                        href='#!'
                        className='homeButton'>
                        <span>
                            Get started
                        </span>
                    </a>
                </Link>
            
            </div>

        </div>

    )
}
