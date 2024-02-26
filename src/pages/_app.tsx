import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init();
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <meta name="description" content="Next IDO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
