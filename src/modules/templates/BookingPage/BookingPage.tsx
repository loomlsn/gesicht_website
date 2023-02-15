import React from "react";
import Booking from "../../../components/Booking";
import Hero from "../../../components/Hero";
import { colorTheme } from "../../globals/settings";

type BookingPageProps = {

}

export default function BookingPage({ }: BookingPageProps) {
    return (
        <>
            <Hero size={'sm'} title={"Book en tid"} colorTheme={colorTheme} />
            <Booking />
        </>
    )
}