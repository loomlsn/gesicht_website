import Head from 'next/head';
import { MainLayout } from '../modules/layout/MainLayout';
import ComingSoon from '../modules/templates/ComingSoonPage';
import StartPage from '../modules/templates/StartPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gesicht</title>
        < meta name="description" content="Cosmetic clinic in Copenhagen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <ComingSoon prop={"Some text"} />
      {/* <StartPage prop={"Some text"} /> */}

    </>
  )
}