import React from "react";
import Hero from "../../../components/Heroes/Hero";
import Prices from "../../../components/PricesPage/Prices";
import TreatmentList from "../../../components/PricesPage/TreatmentList";
import { getDictionaryValue } from "../../../helpers/getDictionaryValue";
import { colorTheme } from "../../globals/settings";

type PricesPageProps = {

}

export default function PricesPage({ }: PricesPageProps) {
    const data = getDictionaryValue();
    return (
        <>
            <Hero size={'sm'} title={data.prices.hero.title} colorTheme={colorTheme} />
            <Prices data={data} colorTheme={colorTheme} />
            {/* <TreatmentList /> */}
        </>
    )
}            