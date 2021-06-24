import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/world.png';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav className={styles.navContainer}>

            <div className={styles.navRow}>
                
                <Link to='/home'>
                    <div className={styles.titleContainer}>
                        <img className={styles.navIcon} src={Logo} alt="world-icon" />
                        <h1 className={styles.navTitle}>Coun-Trips App</h1>
                    </div>
                </Link>

                <div>
                    <Link to='/home'><a href='#!' className='homeButton'><span>Home</span></a></Link>

                    <Link to='/about'><a href='#!' className='homeButton'><span>About</span></a></Link>
                    
                    <Link to='/activity'><a href='#!' className='homeButton'><span>Add activities</span></a></Link>
                </div>
                
            </div>

        </nav>
    )
}
