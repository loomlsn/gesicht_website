import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainLayout } from "../modules/layout/MainLayout"
import BookingPage from "../modules/templates/BookingPage"
import HeadMain from "../modules/templates/Head"

export default function Booking() {
    const { locale } = useRouter();
    useEffect(() => {
        document.title = locale === "en" ? "Booking - Gesicht" : "Book en tid - Gesicht";
    }, [locale]);

    return (
        <>
            <HeadMain />
            <MainLayout>
                <BookingPage />
            </MainLayout>
        </>
    )
}
