import styles from "@/styles/support.module.css"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

export const InfoWindow = (props : {status : string}) : JSX.Element => {
    const [exitStatus, setES] = useState("exit");

    useEffect(() => {
        if (props.status != "initialInactive"){
            setES("noexit");
        };
    }, [props.status]);

    return (
        <AnimatePresence>
        {exitStatus == "noexit" && (
            <motion.div className={styles.supportPageCover} 
            initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} key={exitStatus}>
                <motion.section className={styles.supportMidBoxContainer}
                initial={{translateY: -1000}} animate={{translateY: 0}} 
                exit={{translateY: 1000}} transition={{duration: 0.6}} key={exitStatus}>
                    <header className={styles.supportInformationHeader}>
                        <h1 className={styles.supportInformationH1}>Info_Support</h1>
                        <button className={styles.exitButton} onClick={() => {setES("exit")}}>
                            <div className={styles.exitButtonLeg1}></div>
                            <div className={styles.exitButtonLeg2}></div>
                        </button>
                    </header>
                    <article className={styles.supportInformationContent}>
                        <p className={styles.supportInformationParagraph}>
                            All data provided is purely owned by Spotify.
                            For any issues regarding bugs, suggestions, or anything else of concern, please contact&nbsp;
                            <a className={styles.supportInformationAnc} target="_blank" href="mailto:dbdevbusiness@gmail.com">
                                dbdevbusiness@gmail.com
                            </a>
                            .
                        </p>
                        <hr className={styles.supportInformationLineDivider}></hr>
                        <p className={styles.supportInformationParagraph}>
                            No account required. Content is generated via Spotify API. If you encounter any errors when generating songs, come back home and retry!<br/>
                            <a className={styles.supportInformationAnc} href="https://developer.spotify.com/documentation/web-api" target="_blank">Spotify API Docs</a>
                        </p>
                    </article>
                </motion.section>
            </motion.div>
        )}
        {exitStatus == "exit" && (
            <></>
        )}
    </AnimatePresence>
    )
}     