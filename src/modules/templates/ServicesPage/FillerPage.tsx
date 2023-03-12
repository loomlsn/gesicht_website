import React from "react";
import Hero from "../../../components/Heroes/Hero";
import FAQ from "../../../components/TreatmentsPage/FAQ/FAQ";
import TreatmentIntro from "../../../components/TreatmentsPage/FillerPage/TreatmentIntro";
import { getDictionaryValue } from "../../../helpers/getDictionaryValue";
import { colorTheme } from "../../globals/settings";

type FillerProps = {
    prop: string;
}

export default function FillerPage({ prop }: FillerProps) {
    const data = getDictionaryValue();
    return (
        <>
            <Hero size={'sm'} title={data.filler.hero.title} colorTheme={colorTheme} link={data.filler.hero.description} />
            <TreatmentIntro data={data} />
            {/* <FAQ data={data} /> */}
        </>
    )
}