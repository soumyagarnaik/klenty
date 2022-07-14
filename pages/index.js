import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TopNavbar from '../components/TopNavbar'
import HeroPage from '../components/HeroPage'
import CRMAccelaration from '../components/CRMAccelaration'
import CustomerReview from '../components/CustomerReview'


export default function Home() {
  return (
    <div className={styles.container}>
      <TopNavbar />        
      <HeroPage />
      <CRMAccelaration />
      <CustomerReview />
    </div>
  )
}
