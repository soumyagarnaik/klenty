import React from 'react'
import styles from '../styles/HeroPage.module.css'
import Image from 'next/image'
import group from '../public/Group 1006.png'

const HeroPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.text}>
                    <h1 className={styles.headtitle}>Dont Just Integrate</h1>
                    <h1 className={styles.title}>Accelarate your CRM</h1>
                    <h5 className={styles.description}>Propel your sales team into a state of flow with CRM Accelerations. Switch out boring hours of repetitive work with high-impact activities. Build a repeatable sales process. </h5>
                </div>
                <div>
                    <button className={styles.button}>GET STARTED</button>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src={group} alt='logo' width="400" height="440" />
            </div>
        </div>
    )
}

export default HeroPage