import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MainLayout } from '../modules/layout/MainLayout';
import ComingSoon from '../modules/templates/ComingSoonPage';
import StartPage from '../modules/templates/StartPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gesicht - Fill it, shape it, own it!</title>
        <meta name="description" content="Kosmetisk klinik i hjertet af København" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#F3EAEA" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* <ComingSoon prop={"Some text"} /> */}
      <MainLayout>
        <StartPage prop={"Some text"} />
      </MainLayout>

    </>
  )
}