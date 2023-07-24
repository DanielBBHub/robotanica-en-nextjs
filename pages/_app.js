import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Head from 'next/head';
export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  <Head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
  </Head>
  return <Component {...pageProps} />;
}
