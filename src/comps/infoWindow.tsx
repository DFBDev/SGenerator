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
                <button className={styles.exitButton} onClick={() => {setES("exit")}}>Exit</button>
            </div>
        )}
        {exitStatus == "exit" && (
            <></>
        )}
        </>
    )
}       