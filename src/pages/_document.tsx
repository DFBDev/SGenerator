import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
        <title>RadioHill</title>
        <meta name="description" content="Free, Randomized Spotify song generator. No account required."></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto Mono" />
      </body>
    </Html>
  )
};
