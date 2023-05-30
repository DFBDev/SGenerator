import styles from '@/styles/preloader.module.css'
import Image from 'next/image';
import { useState, useContext } from 'react';

export const LoadingWindow = () => {
    const [loadingPercentage, setLoadingPercentage] = useState(0);
    const [windowStatus, setWindowStatus] = useState("active");

    const changeLoadingPercentage = () => {
        if(loadingPercentage != 100){
            setLoadingPercentage(loadingPercentage + 1);
        }
    }   

    const statusChange = () => {
        setWindowStatus("inactive");
    }

    setTimeout(changeLoadingPercentage, 55);
    setTimeout(statusChange, 6600);

    return(
        <>
            {windowStatus == "active" && (
                <div className={styles.preloaderCover}>
                    <section className={styles.preloaderContent}>
                        <Image className={styles.preloaderSpotifyImage} src={"/images/spotify.png"} width={80} height={80} alt={"Spotify logo."}></Image>
                        <hr className={styles.preloaderDivider}></hr>
                        <h1 className={styles.preloaderHeader}>Spotify© Suggestions</h1>
                        <div className={styles.preloaderBarContainer}>
                            <div className={styles.preloaderLoadingBar}>
                                <div className={styles.preloaderFill}></div>
                            </div>
                            <span className={styles.preloaderPercentage}>{loadingPercentage}%</span>
                        </div>
                    </section>
                </div>
            )}
            {windowStatus == "inactive" && (
                <></>
            )}
        </>
    )
};
