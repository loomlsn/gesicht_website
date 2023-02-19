import React from "react";
import Hero from "../../../components/Heroes/Hero";
import IntroSection from "../../../components/TreatmentsPage/IntroSection";
import Treatments from "../../../components/HomePage/TreatmentSlider";
import { getDictionaryValue } from "../../../helpers/getDictionaryValue";
import { colorTheme } from "../../globals/settings";

type FillerProps = {
    prop: string;
}

export default function FillerPage({ prop }: FillerProps) {
    const data = getDictionaryValue();
    return (
        <>
            {/* <SimpleHero title={"Behandlinger"} description={"Alle vores behandlinger foretages af kvalificerede læger"} /> */}
            <Hero size={'sm'} title={data.filler.hero.title} colorTheme={colorTheme} />
            <IntroSection data={data} />
            {/* <Treatments /> */}
        </>
    )
}