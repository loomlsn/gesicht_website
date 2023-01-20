import Head from 'next/head';
import { MainLayout } from '../modules/layout/MainLayout';
import StartPage from '../modules/templates/StartPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gesicht </title>
        < meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <StartPage prop={"Some text"} />
      </MainLayout>
    </>
  )
}