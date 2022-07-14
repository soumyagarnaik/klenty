import React from 'react'
import styles from '../styles/CustomerReview.module.css'
import Image from 'next/image'
import quote from '../public/Vector.png'
import orgone from '../public/double-logo.png'
import userone from '../public/adam.png'

 

const Review = (props) => {
    const {name,position,org,pro,review} = props
  return (
    <div className={styles.reviewContainer}>
        <div className={styles.reviewDetails}>
            <Image src={quote} alt='quote' height='50' width='50' />
            <h4>{review}</h4>
            <div className={styles.postDetails}>
                <Image src= {org} alt='org' height='20' width='100'/>
                <div>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.name}>{position}</p>
                </div>
            </div>
        </div>
        <div className={styles.propic}>
            <Image src={pro} alt='user' height='140' width='80' />
        </div> 
    </div>
  )
}

export default Review