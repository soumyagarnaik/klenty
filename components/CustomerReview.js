import React, { useState } from 'react'
import styles from '../styles/CustomerReview.module.css'
import Review from './Review'
import { customerReview } from '../data/CustomerReviews'
import { FcRight, FcLeft } from "react-icons/fc"
import 'react-awesome-slider/dist/styles.css';

const CustomerReview = () => {
    const [current, setCurrent] = useState(0);
    const length = customerReview.length;
    console.log(length)
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    return (
        <div className={styles.reviews}>
            <h1 className={styles.title}>What our customers have to say</h1>
            {
                customerReview.map(data => (
                    <div key={data.id}>
                        {data.id === current && <Review name={data.name} position={data.position} pro={data.pro} org={data.org} review={data.review} />}
                    </div>
                ))
            }
            <div className={styles.icons}>
            <FcLeft onClick={prevSlide} />
            <FcRight onClick={nextSlide} />
            </div>
            
        </div>
    )
}

export default CustomerReview