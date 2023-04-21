import { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/searchresults.module.css"
import Link from "next/link";

const SearchResultPage: NextPage = () => {
    return (
        <Link href={"../"}>
            <div className={styles.searchResultPageCover}>
                <nav className={styles.navBar}>
                    <button className={styles.backButton}>Back</button>
                </nav>
                <section className={styles.resultsContainerMid}>
                    <article className={styles.trackContainerMid}>
                        <div className={styles.trackArtworkContainer}></div>
                        <div className={styles.trackInfoContainer}>
                            <h1 className={styles.tracksH1}>Song Title</h1>
                            <h2 className={styles.tracksH2}>Song Author</h2>
                        </div>
                        <div className={styles.tracksTools}>
                            <button className={styles.sampleButton}>
                                <div className={styles.sampleButtonGraphic}></div>
                            </button>
                            <Image src={"/images/spotify.png"} width={32} height={32} alt="Spotify Logo"></Image>
                        </div>
                    </article>
                    <article className={styles.trackContainerMid}>
                        <div className={styles.trackArtworkContainer}></div>
                        <div className={styles.trackInfoContainer}>
                            <h1 className={styles.tracksH1}>Song Title</h1>
                            <h2 className={styles.tracksH2}>Song Author</h2>
                        </div>
                        <div className={styles.tracksTools}>
                            <button className={styles.sampleButton}>
                                <div className={styles.sampleButtonGraphic}></div>
                            </button>
                            <Image src={"/images/spotify.png"} width={32} height={32} alt="Spotify Logo"></Image>
                        </div>
                    </article>
                    <article className={styles.trackContainerMid}>
                        <div className={styles.trackArtworkContainer}></div>
                        <div className={styles.trackInfoContainer}>
                            <h1 className={styles.tracksH1}>Song Title</h1>
                            <h2 className={styles.tracksH2}>Song Author</h2>
                        </div>
                        <div className={styles.tracksTools}>
                            <button className={styles.sampleButton}>
                                <div className={styles.sampleButtonGraphic}></div>
                            </button>
                            <Image src={"/images/spotify.png"} width={32} height={32} alt="Spotify Logo"></Image>
                        </div>
                    </article>
                    <article className={styles.trackContainerMid}>
                        <div className={styles.trackArtworkContainer}></div>
                        <div className={styles.trackInfoContainer}>
                            <h1 className={styles.tracksH1}>Song Title</h1>
                            <h2 className={styles.tracksH2}>Song Author</h2>
                        </div>
                        <div className={styles.tracksTools}>
                            <button className={styles.sampleButton}>
                                <div className={styles.sampleButtonGraphic}></div>
                            </button>
                            <Image src={"/images/spotify.png"} width={32} height={32} alt="Spotify Logo"></Image>
                        </div>
                    </article>
                    <article className={styles.trackContainerMid}>
                        <div className={styles.trackArtworkContainer}></div>
                        <div className={styles.trackInfoContainer}>
                            <h1 className={styles.tracksH1}>Song Title</h1>
                            <h2 className={styles.tracksH2}>Song Author</h2>
                        </div>
                        <div className={styles.tracksTools}>
                            <button className={styles.sampleButton}>
                                <div className={styles.sampleButtonGraphic}></div>
                            </button>
                            <Image src={"/images/spotify.png"} width={32} height={32} alt="Spotify Logo"></Image>
                        </div>
                    </article>
                </section>
            </div>
        </Link>
    )
};

export default SearchResultPage;