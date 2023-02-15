import Head from "next/head"
import { MainLayout } from "../modules/layout/MainLayout"
import BookingPage from "../modules/templates/BookingPage"

export default function Booking() {
    return (
        <>
            <Head>
                <title>Book en tid - Gesicht</title>
                <meta name="description" content="Cosmetic clinic in Copenhagen" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <MainLayout>
                <BookingPage />
            </MainLayout>
        </>
    )
}
