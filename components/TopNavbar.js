import React from 'react'
import styles from '../styles/TopNavbar.module.css'
import Image from 'next/image'
import logo from '../public/Big Logo.png'

const TopNavbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.leftSection}>
            <div className={styles.logo}>
            <Image style={{fontSize:'1rem'}} src={logo} alt='logo' width="60" height="39" />
            </div>
            <ul className={styles.listContainer}>
                <li>Platform</li>
                <li>Pricing</li>
                <li>Accelaration</li>
                <li>Resources</li>
                <li>Coustomer Stories</li>
            </ul>
        </div>
        <div className={styles.rightSection}>
            <button className={styles.login}>Login</button>
            <button className={styles.schedule}>SCHEDULE DEMO</button>
            <div className={styles.trybtn}>
              <button className={styles.try}>TRY FOR FREE</button>
            </div>
        </div>
    </nav>
  )
}

export default TopNavbar