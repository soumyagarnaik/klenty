import React from 'react'
import styles from '../styles/CRMPage.module.css'
import CRMFeatures from './CRMFeatures'
import {crmdata} from '../data/CRMData'


const CRMAccelaration = () => {
  console.log(crmdata)
  return (
    <div className={styles.crmContainer}>
      <div className={styles.textContainer}>
        <h1>CRM Accelaration</h1>
        <h5>Everything CRM Integrations was supposed to be. And more.</h5>
      </div>        
      <div className={styles.cardContainer}>
        {
          crmdata.map(data => (
              <CRMFeatures key={data.id} title={data.title} details = {data.details} imagePath={data.imagePath} />
          ))
        }
      </div>
    </div>
  )
}

export default CRMAccelaration