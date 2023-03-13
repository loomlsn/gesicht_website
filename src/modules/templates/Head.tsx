import React from "react";
import Head from "next/head"

export default function HeadMain() {
    return (
        <Head>
            <title>Gesicht</title>
            <meta name="description" content="Cosmetic clinic in Copenhagen" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="theme-color" content="#E7DEDE" />
            <link rel="icon" href="/favicon.png" />
        </Head>
    )
}