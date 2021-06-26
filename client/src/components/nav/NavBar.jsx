import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/world1.png';
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
                    <Link to='/home'><button className='homeButton'>Home</button></Link>

                    <Link to='/about'><button className='homeButton'>About</button></Link>
                    
                    <Link to='/activity'><button className='orangeButton' id={styles.addButton}><i class="fas fa-plus"></i> Activities</button></Link>
                </div>
                
            </div>

        </nav>
    )
}
