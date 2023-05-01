import styles from '@/styles/preloader.module.css'
import Image from 'next/image';

export const LoadingWindow = (flag : { status : string}) => {
    return(
        <>
            {flag.status == "initialInactive" && (
                <div className={styles.preloaderCover}>
                    <section className={styles.preloaderContent}>
                        <Image className={styles.preloaderSpotifyImage} src={"/images/spotify.png"} width={80} height={80} alt={"Spotify logo."}></Image>
                        <hr className={styles.preloaderDivider}></hr>
                        <h1 className={styles.preloaderHeader}>Spotify© Suggestions</h1>
                        <div className={styles.preloaderBarContainer}>
                            <div className={styles.preloaderLoadingBar}>
                                <div className={styles.preloaderFill}></div>
                            </div>
                            <span className={styles.preloaderPercentage}>0%</span>
                        </div>
                    </section>
                </div>
            )}
            {flag.status != "initialInactive" && (
                <></>
            )}
        </>
    )
};
