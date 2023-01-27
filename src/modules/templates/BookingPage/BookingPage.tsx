import React from "react";
import CardsHero from "../../../components/CardsHero";

type BookingPageProps = {

}

export default function BookingPage({ }: BookingPageProps) {
    return (
        <>
            <CardsHero size={'sm'} title={"Booking"} description={"tekst"} />
            <div>
                <p>Tekst</p>
            </div>
        </>
    )
}