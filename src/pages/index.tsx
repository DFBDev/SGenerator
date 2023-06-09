import Image from 'next/image'
import Link from 'next/link'
import styles from "@/styles/main.module.css"
import { InfoWindow } from '@/comps/infoWindow'
import { useState } from 'react'

export default function Home() {
  const [overlayStatus, setOS] = useState("initialInactive");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Header Section */}
      <header className={styles.header}>
        <div className='flex justify-center items-center ml-6 mt-6'>
          <Image className={styles.logoImage} src={"/images/Group 3.svg"} width={40} height={40} alt="Spotify Logo"></Image>
          <h1 className={styles.homeMainHeadingTL}>Radio<span className={styles.HMHTLSpan}>Hill</span></h1>
        </div>
        <button className={styles.supportButtonTR} onClick={() => {if (overlayStatus == "inactive" || overlayStatus == "initialInactive")
        {setOS("active")} else{setOS("inactive")}}}>
          ?
        </button>
      </header>
      {/* Middle Headers & Form Container */}
      <section className={styles.homeMainMidContainer}>
        <h1 className={styles.mainHeadingOneMid}>Having a hard time finding new songs?</h1>
        <h2 className={styles.mainHeadingTwoMid}>
          Enter any artist or genre for a randomized assortment of
          songs and podcasts!
        </h2>
        <hr className={styles.hrMid}></hr>
        <form className={styles.searchFormContainerMid}>
          <input className={styles.searchBarMid} type="text" placeholder='Enter artist or genre!' onChange={data => {localStorage?.setItem("UserTrackSearchInput", data.currentTarget.value)}}/>
          <span className={styles.lockOnEffect}></span>
          <Link href={"/searchresults/searchPage"} className={styles.searchButtonMid} id='searchButton' aria-label='SearchButton'>
            <button type="submit" aria-label={"Search Button"}>
              <div className={styles.buttonGraphicMid}></div>
            </button>
          </Link>
        </form>
        <h3 className={styles.midFooter}>API and Services are sole property of SpotifyAB™</h3>
      </section>
      {/* Information/Support Pop-up Window */}
      <InfoWindow status={overlayStatus}/>
    </main>
  )
};
