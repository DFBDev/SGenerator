import Image from 'next/image'
import styles from "@/styles/main.module.css"
import { InfoWindow } from '@/comps/infoWindow'
import { useState } from 'react'

export default function Home() {
  const [overlayStatus, setOS] = useState("initialInactive");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Stage 1 - Header Section */}
      <header className={styles.header}>
        <div className='flex justify-center items-center ml-6 mt-6'>
          <Image src={"/images/spotify.png"} width={40} height={40} alt="Spotify Logo"></Image>
          <h1 className={styles.homeMainHeadingTL}>Suggestions</h1>
        </div>
        <button className={styles.supportButtonTR} onClick={() => {if (overlayStatus == "inactive" || overlayStatus == "initialInactive")
        {setOS("active")} else{setOS("inactive")}}}>
          ?
        </button>
      </header>
      {/* Stage 2 - Middle Headers & Form Container */}
      <section className={styles.homeMainMidContainer}>
        <h1 className={styles.mainHeadingOneMid}>Having a hard time finding new songs?</h1>
        <h2 className={styles.mainHeadingTwoMid}>
          Enter any artist, era or genre for a randomized assortment of
          songs and podcasts!
        </h2>
        <hr className={styles.hrMid}></hr>
        <form className={styles.searchFormContainerMid}>
          <input className={styles.searchBarMid} type="text" placeholder='Enter Artist, Song or Era!'/>
          <label htmlFor="searchInput"></label>
          <button className={styles.searchButtonMid} type="submit">
            <div className={styles.buttonGraphicMid}></div>
          </button>
        </form>
      </section>
      <InfoWindow status={overlayStatus}/>
    </main>
  )
}
