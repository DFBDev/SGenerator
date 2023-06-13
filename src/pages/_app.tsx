import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LoadingWindow } from '@/comps/preloader'
import { useRef, useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  
  //Satisfying prerequisites for query/token management.

  const access_key = useRef("");
  const refresh_key = useRef("");

  var authenticationInfo = {
    method: 'POST',
    headers: {
      //Using Buffer and toString for initial conversion to binary, 
      //then conversion to base64 string compliant with Spotify requirements.
        'Authorization': "Basic " + Buffer.from(process.env.CID + ":" + process.env.CSK).toString("base64"),
        'Content-Type': "application/x-www-form-urlencoded"
    },
    body: 'grant_type=client_credentials',
    json: true
  };

  var refreshAuthenticationInfo = {
    method: 'POST',
    headers: {
      'Authorization': "Basic " + Buffer.from(process.env.CID + ":" + process.env.CSK).toString("base64")
    },
    body: 'grant_type=refresh_token&refresh_token=' + refresh_key,
    json: true
  }

  //Creating function query with required method and header info.

  var tracksRequestInfo = {
    method: 'GET', 
    headers: {
      'Authorization': "Bearer " + access_key.current
    }
  };

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
  
  const songSearchQuery = () => {
    let randomizedOffset = Math.floor(Math.random() * 100).toString();
    let userInput = localStorage.getItem("UserTrackSearchInput");
    console.log(randomizedOffset);
    fetch(("https://api.spotify.com/v1/search?q=remaster%2520genre%3A" + userInput + "&type=track&limit=5&offset=" + randomizedOffset), tracksRequestInfo)
    .then(res => res.json())
    .then(jsonData => 
      { 
        //Inserting data into local object ref (responseData).
        console.log(jsonData)
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
      }
    )
  };

  //Setting token and adding Event Listener on initial site render.

  useEffect(() => {
    setTimeout(() => 
    {
      localStorage.setItem("fetchedSongs", JSON.stringify(responseData.current));
      const searchButton = document.querySelector('#searchButton');
      searchButton?.addEventListener('click', songSearchQuery);
      fetch('https://accounts.spotify.com/api/token', authenticationInfo)
      .then(res => res.json())
      .then(jsonData => {
        access_key.current = jsonData.access_token;
        refresh_key.current = jsonData.refresh_token;
      })
      .catch(response => {
        fetch('https://accounts.spotify.com/api/token', refreshAuthenticationInfo)
        .then(res => res.json())
        .then(jsonData => {access_key.current = jsonData.access_token, refresh_key.current = jsonData.refresh_token});
      });
    }, 5000)
  });

  //Coupled with preloader component, as well as consistent state via useRef.

  const preloaderStatus = useRef("active");
  
  const changeStatus = () => {
    preloaderStatus.current = "inactive";
  };

  setTimeout(changeStatus, 6600);

  return(
    <>
      <LoadingWindow status={preloaderStatus.current}></LoadingWindow>
      <Component {...pageProps} />
    </>
  )
};
