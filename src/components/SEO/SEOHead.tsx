import { Head } from "next/document"

type SEOHeadProps = {

}

export const SEOHead: React.FC<SEOHeadProps> = ({ }) => {
    return (
        <Head>
            <title>Gesicht</title>
            <meta name="description" content="Cosmetic clinic in Copenhagen" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="theme-color" content="#F3EAEA" />
            <link rel="icon" href="/favicon.png" />
        </Head>
    )
}