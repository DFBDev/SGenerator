import { NextPage } from "next";
import styles from "@/styles/searchresults.module.css"
import Link from "next/link";

const SearchResultPage: NextPage = () => {
    return (
        <div className={styles.searchResultPageCover}>
                <button className={styles.backButton}>Back</button>
        </div>
    )
};

export default SearchResultPage;