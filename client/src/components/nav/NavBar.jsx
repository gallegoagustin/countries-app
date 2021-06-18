import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/world.png';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav className={styles.navContainer}>

            <Link to='/home'>
                <div className={styles.titleContainer}>
                    <img className={styles.navIcon} src={Logo} alt="world-icon" />
                    <h1 className={styles.navTitle}>Countries App</h1>
                </div>
            </Link>

            <div>
                <Link to='/home'><a href='#!' className={styles.navButtton}><span>Home</span></a></Link>

                <Link to='/about'><a href='#!' className={styles.navButtton}><span>About</span></a></Link>
                
                <Link to='/activity'><a href='#!' className={styles.navButtton}><span>Add activities</span></a></Link>
            </div>

        </nav>
    )
}
