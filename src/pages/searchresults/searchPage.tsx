import { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/searchresults.module.css"
import Link from "next/link";

const SearchResultPage: NextPage = () => {
    return (
            <div className={styles.searchResultPageCover}>
                <nav className={styles.navBar}>
                    <Link href={"../"}>
                        <button className={styles.backButton}>
                            <Image className={styles.backButtonGraphic} src={"/images/Arrow 1.svg"} width={20} height={20} alt="Back Arrow"></Image>
                        </button>
                    </Link>
                    <button className={styles.refreshButton}>
                        <Image className={styles.refreshButtonGraphic} src={"/images/Arrow 2.svg"} width={30} height={30} alt="Refresh Arrow"></Image>
                    </button>
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
    )
};

export default SearchResultPage;