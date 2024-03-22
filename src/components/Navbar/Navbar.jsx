// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
 return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}><Link to="/" className={styles.link}>Home</Link></li>
        <li className={styles.item}><Link to="/projects" className={styles.link}>Projects</Link></li>
        <li className={styles.item}><Link to="/contact" className={styles.link}>Contact</Link></li>
      </ul>
    </nav>
 );
}

export default Navbar;
