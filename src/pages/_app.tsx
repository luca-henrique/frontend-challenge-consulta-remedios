import type {AppProps} from 'next/app';
import React, {useReducer} from 'react';
import Head from 'next/head';

import '../styles/reset.css';

import {initialState} from '../store/state';

import {cartReducer} from '../store/reducers';

import {CartContext} from '../store/context';

import {Open_Sans} from '@next/font/google';

const openSans = Open_Sans({subsets: ['latin']});

export default function App({Component, pageProps}: AppProps) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className={openSans.className}>
      <Head>
        <title>Teste Técnico Frontend</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
      </Head>
      <CartContext.Provider value={{state, dispatch}}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </div>
  );
}
