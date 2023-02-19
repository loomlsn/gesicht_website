import React from "react";
import AboutSection from "../../../components/AboutPage/AboutSection";
import Hero from "../../../components/Heroes/Hero";
import IntroSection from "../../../components/HomePage/IntroSection";
import { getDictionaryValue } from "../../../helpers/getDictionaryValue";
import { colorTheme } from "../../globals/settings";

type AboutPageProps = {

}

export default function AboutPage({ }: AboutPageProps) {
    const data = getDictionaryValue();
    return (
        <>
            <Hero size={'sm'} title={data.about.hero.title} colorTheme={colorTheme} />
            <IntroSection colorTheme={colorTheme} title={data.about.intro.title} text={data.about.intro.cta} img={"/hero/header-3.jpg"} link={"/booking"} />
            <AboutSection />
        </>
    )
}