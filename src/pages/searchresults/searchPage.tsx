import { NextPage } from "next";
import Image from "next/image";
import styles from "@/styles/searchresults.module.css"
import Link from "next/link";
import { useState, useRef } from "react";

const SearchResultPage: NextPage = () => { 

    let responseData = useRef({
        track1: {
          Artist: "",
          SongName: "",
          ImageURL: "",
          SongURL: "",
          AudioSampleURL: ""
        },
        track2:{
          Artist: "",
          SongName: "",
          ImageURL: "",
          SongURL: "",
          AudioSampleURL: ""
        },
        track3:{
          Artist: "",
          SongName: "",
          ImageURL: "",
          SongURL: "",
          AudioSampleURL: ""
        },
        track4:{
          Artist: "",
          SongName: "",
          ImageURL: "",
          SongURL: "",
          AudioSampleURL: ""
        },
        track5:{
          Artist: "",
          SongName: "",
          ImageURL: "",
          SongURL: "",
          AudioSampleURL: ""
        }
      });

    
    const [tempStoredSongsRaw, setTSSS] = useState(responseData.current);

    //Fetching/Parsing JSON results from Local Storage and applying it to state to
    //keep in sync with Local Storage (with limiter to prevent unlimited rerendering).

    const dataUpdate = () => {
        if (typeof window !== 'undefined'){
            let updatedLocalStorage = JSON.parse(localStorage?.getItem("fetchedSongs")!);

            if (tempStoredSongsRaw.track1.Artist !== updatedLocalStorage.track1.Artist ){
                setTSSS(updatedLocalStorage);
                console.log("Rerendered!")
            }
        }
    };

    const refreshSongs = () => {
        if (typeof window !== 'undefined'){
            setTSSS(JSON.parse(localStorage?.getItem("fetchedSongs")!));
            console.log("Testing!")
        }   
    };

    if (typeof window !== 'undefined'){
        var songSample1 = new Audio(tempStoredSongsRaw.track1!.AudioSampleURL);
        var songSample2 = new Audio(tempStoredSongsRaw.track2!.AudioSampleURL);
        var songSample3 = new Audio(tempStoredSongsRaw.track3!.AudioSampleURL);
        var songSample4 = new Audio(tempStoredSongsRaw.track4!.AudioSampleURL);
        var songSample5 = new Audio(tempStoredSongsRaw.track5!.AudioSampleURL);
    }

    const ss1Status = useRef("Paused");
    const ss2Status = useRef("Paused");
    const ss3Status = useRef("Paused");
    const ss4Status = useRef("Paused");
    const ss5Status = useRef("Paused");

    setTimeout(dataUpdate, 300);
    
    return (
            <div className={styles.searchResultPageCover}>
                <nav className={styles.navBar}>
                    <Link href={"../"}>
                        <button className={styles.backButton} onClick={() => {if(typeof window !== 'undefined'){localStorage?.clear()}}}>
                            <Image className={styles.backButtonGraphic} src={"/images/Arrow 1.svg"} width={20} height={20} alt="Back Arrow"></Image>
                        </button>
                    </Link>
                    {tempStoredSongsRaw.track1.Artist == "" && (
                    <div className={styles.errorNotif}>
                        Sorry! An error occured with your request. Please try again!
                    </div>
                    )}
                    <button className={styles.refreshButton} onClick={refreshSongs}>
                        <Image className={styles.refreshButtonGraphic} src={"/images/Arrow 2.svg"} width={30} height={30} alt="Refresh Arrow"></Image>
                    </button>
                </nav>
                <section className={styles.resultsContainerMid}>
                    <article className={styles.trackContainerMid}>
                        <div className={styles.trackArtworkContainer}>
                            <Image src={tempStoredSongsRaw.track1!.ImageURL} width={65} height={65} alt={"Album Art"}></Image>
                        </div>
                        <div className={styles.trackInfoContainer}>
                            <h1 className={styles.tracksH1}>{tempStoredSongsRaw.track1.SongName}</h1>
                            <h2 className={styles.tracksH2}>{tempStoredSongsRaw.track1.Artist}</h2>
                        </div>
                        <div className={styles.tracksTools}>
                            <button className={styles.sampleButton} onClick={() =>
                                 {
                                  if (ss1Status.current == "Paused"){
                                    songSample1.play();

                                    ss2Status.current = "Paused";
                                    ss3Status.current = "Paused";
                                    ss4Status.current = "Paused";
                                    ss5Status.current = "Paused";
                                    songSample2.pause();
                                    songSample3.pause();
                                    songSample4.pause();
                                    songSample5.pause();

                                    ss1Status.current = "Playing";
                                  }
                                  else if (ss1Status.current == "Playing"){
                                    songSample1.pause();
                                    ss1Status.current = "Paused";
                                  }
                                  }}>
                                <div className={styles.sampleButtonGraphic}></div>
                            </button>
                            <a href={tempStoredSongsRaw.track1!.SongURL} target={"_blank"}>
                                <Image src={"/images/spotify.png"} width={28} height={28} alt="Spotify Logo"></Image>
                            </a>
                        </div>
                    </article>
                    <article className={styles.trackContainerMid}>
                        <div className={styles.trackArtworkContainer}>
                            <Image src={tempStoredSongsRaw.track2.ImageURL} width={65} height={65} alt={"Album Art"}></Image>
                        </div>
                        <div className={styles.trackInfoContainer}>
                            <h1 className={styles.tracksH1}>{tempStoredSongsRaw.track2.SongName}</h1>
                            <h2 className={styles.tracksH2}>{tempStoredSongsRaw.track2.Artist}</h2>
                        </div>
                        <div className={styles.tracksTools}>
                            <button className={styles.sampleButton} onClick={() => 
                                 {
                                    if (ss2Status.current == "Paused"){
                                      songSample2.play();
  
                                      ss1Status.current = "Paused";
                                      ss3Status.current = "Paused";
                                      ss4Status.current = "Paused";
                                      ss5Status.current = "Paused";
                                      songSample1.pause();
                                      songSample3.pause();
                                      songSample4.pause();
                                      songSample5.pause();
  
                                      ss2Status.current = "Playing";
                                    }
                                    else if (ss2Status.current == "Playing"){
                                      songSample2.pause();
                                      ss2Status.current = "Paused";
                                    }
                                }}>
                                <div className={styles.sampleButtonGraphic}></div>
                            </button>
                            <a href={tempStoredSongsRaw.track2.SongURL} target={"_blank"}>
                                <Image src={"/images/spotify.png"} width={28} height={28} alt="Spotify Logo"></Image>
                            </a>
                        </div>
                    </article>
                    <article className={styles.trackContainerMid}>
                        <div className={styles.trackArtworkContainer}>
                            <Image src={tempStoredSongsRaw.track3.ImageURL} width={65} height={65} alt={"Album Art"}></Image>
                        </div>
                        <div className={styles.trackInfoContainer}>
                            <h1 className={styles.tracksH1}>{tempStoredSongsRaw.track3.SongName}</h1>
                            <h2 className={styles.tracksH2}>{tempStoredSongsRaw.track3.Artist}</h2>
                        </div>
                        <div className={styles.tracksTools}>
                            <button className={styles.sampleButton} onClick={() => 
                                {
                                    if (ss3Status.current == "Paused"){
                                        songSample3.play();

                                        ss1Status.current = "Paused";
                                        ss2Status.current = "Paused";
                                        ss4Status.current = "Paused";
                                        ss5Status.current = "Paused";
                                        songSample1.pause();
                                        songSample2.pause();
                                        songSample4.pause();
                                        songSample5.pause();

                                        ss3Status.current = "Playing";
                                    }
                                    else if (ss3Status.current == "Playing"){
                                        songSample3.pause();
                                        ss3Status.current = "Paused";
                                    }
                                }}>
                                <div className={styles.sampleButtonGraphic}></div>
                            </button>
                            <a href={tempStoredSongsRaw.track3.ImageURL} target={"_blank"}>
                                <Image src={"/images/spotify.png"} width={28} height={28} alt="Spotify Logo"></Image>
                            </a>
                        </div>
                    </article>
                    <article className={styles.trackContainerMid}>
                        <div className={styles.trackArtworkContainer}>
                            <Image src={tempStoredSongsRaw.track4.ImageURL} width={65} height={65} alt={"Album Art"}></Image>
                        </div>
                        <div className={styles.trackInfoContainer}>
                            <h1 className={styles.tracksH1}>{tempStoredSongsRaw.track4.SongName}</h1>
                            <h2 className={styles.tracksH2}>{tempStoredSongsRaw.track4.Artist}</h2>
                        </div>
                        <div className={styles.tracksTools}>
                            <button className={styles.sampleButton} onClick={() =>
                               { 
                                    if (ss4Status.current == "Paused"){
                                        songSample4.play();

                                        ss1Status.current = "Paused";
                                        ss3Status.current = "Paused";
                                        ss2Status.current = "Paused";
                                        ss5Status.current = "Paused";
                                        songSample1.pause();
                                        songSample3.pause();
                                        songSample2.pause();
                                        songSample5.pause();

                                        ss4Status.current = "Playing";
                                    }
                                    else if (ss4Status.current == "Playing"){
                                        songSample4.pause();
                                        ss4Status.current = "Paused";
                                    }
                                }}>
                                <div className={styles.sampleButtonGraphic}></div>
                            </button>
                            <a href={tempStoredSongsRaw.track4.SongURL} target={"_blank"}>
                                <Image src={"/images/spotify.png"} width={28} height={28} alt="Spotify Logo"></Image>
                            </a>
                        </div>
                    </article>
                    <article className={styles.trackContainerMid}>
                        <div className={styles.trackArtworkContainer}>
                            <Image src={tempStoredSongsRaw.track5.ImageURL} width={65} height={65} alt={"Album Art"}></Image>
                        </div>
                        <div className={styles.trackInfoContainer}>
                            <h1 className={styles.tracksH1}>{tempStoredSongsRaw.track5.SongName}</h1>
                            <h2 className={styles.tracksH2}>{tempStoredSongsRaw.track5.Artist}</h2>
                        </div>
                        <div className={styles.tracksTools}>
                            <button className={styles.sampleButton} onClick={() => 
                                {
                                    if (ss5Status.current == "Paused"){
                                        songSample5.play();

                                        ss1Status.current = "Paused";
                                        ss3Status.current = "Paused";
                                        ss4Status.current = "Paused";
                                        ss2Status.current = "Paused";
                                        songSample1.pause();
                                        songSample3.pause();
                                        songSample4.pause();
                                        songSample2.pause();

                                        ss5Status.current = "Playing";
                                    }
                                    else if (ss5Status.current == "Playing"){
                                        songSample5.pause();
                                        ss5Status.current = "Paused";
                                    }
                                }}>
                                <div className={styles.sampleButtonGraphic}></div>
                            </button>
                            <a href={tempStoredSongsRaw.track5.SongURL} target={"_blank"}>
                                <Image src={"/images/spotify.png"} width={28} height={28} alt="Spotify Logo"></Image>
                            </a>
                        </div>
                    </article>
                </section>
            </div>
    )
};

export default SearchResultPage;