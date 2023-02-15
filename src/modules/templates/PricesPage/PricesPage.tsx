import React from "react";
import Hero from "../../../components/Hero";
import Prices from "../../../components/Prices";
import { colorTheme } from "../../globals/settings";

type PricesPageProps = {

}

export default function PricesPage({ }: PricesPageProps) {
    return (
        <>
            <Hero size={'sm'} title={"Priser"} colorTheme={colorTheme} />
            {/* <CardsHero size={'sm'} title={"Priser"} description={"tekst"} /> */}
            <Prices />
        </>
    )
}            