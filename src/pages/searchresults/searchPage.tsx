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
    const [reinputLock, setRL] = useState(false);

    const songSearchQuery = () => {
        //Function for executing API request concurrent with current user input data.

        var tracksRequestInfo = {
            method: 'GET', 
            headers: {
              'Authorization': "Bearer " + localStorage.getItem("A_K")
            }
        };
        let randomizedOffset = Math.floor(Math.random() * 100).toString();
        let userInput = localStorage.getItem("UserTrackSearchInput");
        console.log(randomizedOffset);
        fetch(("https://api.spotify.com/v1/search?q=remaster%2520genre%3A" + userInput + "&type=track&limit=5&offset=" + randomizedOffset), tracksRequestInfo)
        .then(res => res.json())
        .then(jsonData => 
          { 
            //Inserting data into local object ref (responseData).
            
            //Track 1
            responseData.current.track1.Artist = jsonData.tracks?.items[0].artists[0].name;
            responseData.current.track1.SongName = jsonData.tracks?.items[0].name;
            responseData.current.track1.ImageURL = jsonData.tracks?.items[0].album.images[2].url;
            responseData.current.track1.SongURL = jsonData.tracks?.items[0].external_urls.spotify;
            responseData.current.track1.AudioSampleURL = jsonData.tracks?.items[0].preview_url;
    
            //Track 2
            responseData.current.track2.Artist = jsonData.tracks?.items[1].artists[0].name;
            responseData.current.track2.SongName = jsonData.tracks?.items[1].name;
            responseData.current.track2.ImageURL = jsonData.tracks?.items[1].album.images[2].url;
            responseData.current.track2.SongURL = jsonData.tracks?.items[1].external_urls.spotify;
            responseData.current.track2.AudioSampleURL = jsonData.tracks?.items[1].preview_url;
    
            //Track 3
            responseData.current.track3.Artist = jsonData.tracks?.items[2].artists[0].name;
            responseData.current.track3.SongName = jsonData.tracks?.items[2].name;
            responseData.current.track3.ImageURL = jsonData.tracks?.items[2].album.images[2].url;
            responseData.current.track3.SongURL = jsonData.tracks?.items[2].external_urls.spotify;
            responseData.current.track3.AudioSampleURL = jsonData.tracks?.items[2].preview_url;
    
            //Track 4
            responseData.current.track4.Artist = jsonData.tracks?.items[3].artists[0].name;
            responseData.current.track4.SongName = jsonData.tracks?.items[3].name;
            responseData.current.track4.ImageURL = jsonData.tracks?.items[3].album.images[2].url;
            responseData.current.track4.SongURL = jsonData.tracks?.items[3].external_urls.spotify;
            responseData.current.track4.AudioSampleURL = jsonData.tracks?.items[3].preview_url;
    
            //Track 5
            responseData.current.track5.Artist = jsonData.tracks?.items[4].artists[0].name;
            responseData.current.track5.SongName = jsonData.tracks?.items[4].name;
            responseData.current.track5.ImageURL = jsonData.tracks?.items[4].album.images[2].url;
            responseData.current.track5.SongURL = jsonData.tracks?.items[4].external_urls.spotify;
            responseData.current.track5.AudioSampleURL = jsonData.tracks?.items[4].preview_url;
    
            //Inserting JSON data into Local Storage.
            
            localStorage.setItem("fetchedSongs", JSON.stringify(responseData.current));
            setTSSS(JSON.parse(JSON.stringify(responseData.current)));

            //Activating and deactivating reinput button lock to prevent spam.

            if (reinputLock === false) {
                setRL(true);
            }
            setTimeout(() => setRL(false), 6000);
          }
        )
        .catch(error => {console.log(error)});
      };

    const dataUpdate = () => {
        //Fetching/Parsing JSON results from Local Storage and applying it to state to
        //keep in sync with Local Storage (with limiter to prevent unlimited rerendering).
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
        //Creating audio sample instances once window fully renders.
        
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

    //API delay to prevent unrendered data.
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
                {tempStoredSongsRaw.track1.Artist != "" && (
                        <div className={styles.reinputContainer}>
                            <div className={reinputLock === false ? styles.animationMarker : styles.animationMarkerAlt} onClick={songSearchQuery}></div>
                            <input className={styles.reinputSearchField} type={"text"} placeholder={"Check out some other songs!"} onChange={data => {
                            localStorage?.setItem("UserTrackSearchInput", data.currentTarget.value)
                            }}></input>
                            <div className={reinputLock === false ? styles.reinputButton : styles.reinputButtonAlt}>
                                <Image src={"/images/refreshSearch.svg"}
                                width={22} height={22} alt={"Search Again"}
                                onClick={songSearchQuery}></Image>
                            </div>
                            <button className={styles.animationMarker2}></button>
                        </div>
                )}
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
                                <Image className={"mr-0.5"} src={"/images/Group 4.svg"} height={12} width={12} alt={"Playback Button"}></Image>
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
                                <Image className={"mr-0.5"} src={"/images/Group 4.svg"} height={12} width={12} alt={"Playback Button"}></Image>
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
                                <Image className={"mr-0.5"} src={"/images/Group 4.svg"} height={12} width={12} alt={"Playback Button"}></Image>
                            </button>
                            <a href={tempStoredSongsRaw.track3.SongURL} target={"_blank"}>
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
                                <Image className={"mr-0.5"} src={"/images/Group 4.svg"} height={12} width={12} alt={"Playback Button"}></Image>
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
                                <Image className={"mr-0.5"} src={"/images/Group 4.svg"} height={12} width={12} alt={"Playback Button"}></Image>
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