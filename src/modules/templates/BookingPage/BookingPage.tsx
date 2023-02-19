import React from "react";
import Booking from "../../../components/BookingPage/Booking";
import Hero from "../../../components/Heroes/Hero";
import IntroSection from "../../../components/HomePage/IntroSection";
import { getDictionaryValue } from "../../../helpers/getDictionaryValue";
import { colorTheme } from "../../globals/settings";

type BookingPageProps = {

}

export default function BookingPage({ }: BookingPageProps) {
    const data = getDictionaryValue();

    return (
        <>
            <Hero size={'sm'} title={data.booking.hero.title} colorTheme={colorTheme} />
            <IntroSection colorTheme={colorTheme} title={data.booking.intro.title} text={data.booking.intro.cta} img={"/hero/clinic.jpg"} link={null} booking />
            {/* <Booking /> */}
        </>
    )
}