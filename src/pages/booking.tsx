import Head from "next/head"
import { MainLayout } from "../modules/layout/MainLayout"
import BookingPage from "../modules/templates/BookingPage"
import HeadMain from "../modules/templates/Head"

export default function Booking() {
    return (
        <>
            <HeadMain titleDa={"Book en tid"} titleEn={"Booking"} />
            <MainLayout>
                <BookingPage />
            </MainLayout>
        </>
    )
}
