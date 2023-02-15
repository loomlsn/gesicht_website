import React from "react";
import Hero from "../../../components/Hero";
import CTA from "../../../components/CTA";
import IntroSection from "../../../components/IntroSection";
import PartnerSection from "../../../components/PartnerSection";
import Treatments from "../../../components/Treatments";
import { colorTheme } from "../../globals/settings";


type StartPageProps = {
    prop: string;
}

const data = {
    hero: {
        title: "Velkommen til Gesicht",
        description: "Vi sætter prikken over i'et."
    },
    intro: {
        title: "Altid udført af autoriserede læger."
    },
    partner: {
        title: "IBSA Partner title",
        text: "Partner text",
        logo: ""
    }
}

export default function StartPage({ prop }: StartPageProps) {
    return (
        <>
            <Hero size={'lg'} title={data.hero.title} description={data.hero.description} colorTheme={colorTheme} />
            <IntroSection title={data.intro.title} colorTheme={colorTheme} />
            <Treatments />
            <PartnerSection title={data.partner.title} text={data.partner.text} />
            {/* <CTA /> */}
        </>
    )
}