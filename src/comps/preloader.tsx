import styles from '@/styles/preloader.module.css'
import Image from 'next/image';
import { useState } from 'react';

export const LoadingWindow = (props : {status : string}) => {
    const [loadingPercentage, setLoadingPercentage] = useState(0);

    const changeLoadingPercentage = () => {
        //Changing loading percentage digits until 100.
        if(loadingPercentage != 100){
            setLoadingPercentage(loadingPercentage + 1);
        };
    };

    setTimeout(changeLoadingPercentage, 55);
    
    return(
        <>
            {props.status == "active" && (
                <div className={styles.preloaderCover}>
                    <section className={styles.preloaderContent}>
                        <Image className={styles.preloaderSpotifyImage} src={"/images/Group 3.svg"} width={120} height={120} alt={"Spotify logo."}></Image>
                        <hr className={styles.preloaderDivider}></hr>
                        <h1 className={styles.preloaderHeader}>Radio Hill</h1>
                        <div className={styles.preloaderBarContainer}>
                            <div className={styles.preloaderLoadingBar}>
                                <div className={styles.preloaderFill}></div>
                            </div>
                            <span className={styles.preloaderPercentage}>{loadingPercentage}%</span>
                        </div>
                    </section>
                </div>
            )}
            {props.status != "active" && (
                <></>
            )}
        </>
    )
};
