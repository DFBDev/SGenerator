import Image from 'next/image'
import styles from "@/styles/main.module.css"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Stage 1 - Header Section */}
      <header className={styles.header}>
        <div className='flex justify-center items-center ml-6 mt-6'>
          <Image src={"/images/spotify.png"} width={40} height={40} alt="Spotify Logo"></Image>
          <h1 className={styles.homeMainHeadingTL}>Suggestions</h1>
        </div>
        <button className={styles.supportButtonTR}>
          ?
        </button>
      </header>
      <section className={styles.homeMainMidContainer}>
        <h1>Having a hard time finding new songs?</h1>
        <h2>
          Enter any artist, era or genre for a randomized assortment of
          songs and podcasts!
        </h2>
        <form>
          <input type="text" name="searchInput"/>
          <label htmlFor="searchInput"></label>
          <button type="submit">Testing</button>
        </form>
      </section>
    </main>
  )
}
