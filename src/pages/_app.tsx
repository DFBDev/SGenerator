import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LoadingWindow } from '@/comps/preloader'
import { useRef } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  //Coupled with preloader component for more consistent 
  //state management between rendering/routing.

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
}
