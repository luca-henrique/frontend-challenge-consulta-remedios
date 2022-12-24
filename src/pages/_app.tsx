import type {AppProps} from 'next/app';
import React from 'react';
import Head from 'next/head';

import '../styles/reset.css';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Teste Técnico Frontend</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
