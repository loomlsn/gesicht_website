import React from "react";
import Head from "next/head"
import { useRouter } from "next/router";

type HeadProps = {
    titleDa: string
    titleEn: string
}

export default function HeadMain({ titleDa, titleEn }: HeadProps) {
    const { locale } = useRouter();
    return (
        <Head>
            <title>{locale === "da" ? titleDa : titleEn} - Gesicht</title>
            <meta name="description" content="Cosmetic clinic in Copenhagen" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="icon" href="/favicon.png" />
        </Head>
    )
}