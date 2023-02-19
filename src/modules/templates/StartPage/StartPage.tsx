import React from "react";
import Hero from "../../../components/Heroes/Hero";
import CTA from "../../../components/HomePage/CTA";
import IntroSection from "../../../components/HomePage/IntroSection";
import PartnerSection from "../../../components/HomePage/PartnerSection";
import Treatments from "../../../components/HomePage/TreatmentSlider";
import { getDictionaryValue } from "../../../helpers/getDictionaryValue";
import { colorTheme } from "../../globals/settings";


type StartPageProps = {
    prop: string;
}

export default function StartPage({ prop }: StartPageProps) {
    const data = getDictionaryValue();
    return (
        <>
            <Hero size={'lg'} title={data.home.hero.title} description={data.home.hero.text} colorTheme={colorTheme} />
            <IntroSection title={data.home.intro.title} text={data.home.intro.text} colorTheme={colorTheme} img={"/hero/intro.jpg"} link={"/om"} />
            <Treatments />
            <PartnerSection title={data.home.partner.title} />
        </>
    )
}