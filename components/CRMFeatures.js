import React from 'react'
import styles from '../styles/CRMPage.module.css'
import Image from 'next/image'
import icon from '../public/Group 1006-3.png'


const CRMFeatures = (props) => {
  const {title,details,imagePath} = props
  return (
    <div className={styles.card}>
      <Image src={imagePath} alt='icon' height='50' width='50' /> 
      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.description}>
      {details}
      </h3>
    </div>
  )
}

export default CRMFeatures