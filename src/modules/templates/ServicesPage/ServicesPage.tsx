import React from "react";
import Hero from "../../../components/Heroes/Hero";
import IntroSection from "../../../components/TreatmentsPage/IntroSection/IntroSection";
import Treatments from "../../../components/HomePage/TreatmentSlider";
import { getDictionaryValue } from "../../../helpers/getDictionaryValue";
import { colorTheme } from "../../globals/settings";
import FAQ from "../../../components/TreatmentsPage/FAQ/FAQ";
import TreatmentsList from "../../../components/PricesPage/TreatmentList";

type ServicesProps = {
    prop: string;
}

export default function ServicesPage({ prop }: ServicesProps) {
    const data = getDictionaryValue();
    return (
        <>
            {/* <SimpleHero title={"Behandlinger"} description={"Alle vores behandlinger foretages af kvalificerede læger"} /> */}
            <Hero size={'sm'} title={data.treatments.hero.title} colorTheme={colorTheme} />
            <IntroSection data={data} />
            <TreatmentsList />
            {/* <Treatments /> */}
        </>
    )
}