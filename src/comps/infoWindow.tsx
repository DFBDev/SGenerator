import styles from "@/styles/support.module.css"
import { useEffect, useState } from "react"

export const InfoWindow = (flag : {status : string}) : JSX.Element => {
    const [exitStatus, setES] = useState("exit");

    useEffect(() => {
        if (flag.status != "initialInactive"){
            setES("noexit");
        };
    }, [flag.status]);

    return (
        <>
        {exitStatus == "noexit" && (
            <div className={styles.supportPageCover}>
                <section className={styles.supportMidBoxContainer}>
                    <header className={styles.supportInformationHeader}>
                        <h1 className={styles.supportInformationH1}>Info_Support</h1>
                        <button className={styles.exitButton} onClick={() => {setES("exit")}}>
                            <div className={styles.exitButtonLeg1}></div>
                            <div className={styles.exitButtonLeg2}></div>
                        </button>
                    </header>
                    <article className={styles.supportInformationContent}>
                        <p className={styles.supportInformationParagraph}>
                            For any issues regarding bugs, suggestions, or anything else of concern, please contact <br/>
                            <a className={styles.supportInformationSpan} target="_blank" href="mailto:dbdevbusiness@gmail.com">
                                dbdevbusiness@gmail.com
                            </a>
                        </p>
                        <hr className={styles.supportInformationLineDivider}></hr>
                        <p className={styles.supportInformationParagraph}>
                        No account required. Content is generated via Spotify API, so throttling may occur if too many generation requests are made.<br/>
                        <a className={styles.supportInformationSpan} href="https://developer.spotify.com/documentation/web-api" target="_blank">Spotify API Docs</a>
                        </p>
                    </article>
                </section>
            </div>
        )}
        {exitStatus == "exit" && (
            <></>
        )}
        </>
    )
}       