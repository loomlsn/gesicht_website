import React from "react";
import AboutSection from "../../../components/AboutSection";
import Hero from "../../../components/Hero";
import { colorTheme } from "../../globals/settings";

type AboutPageProps = {

}

export default function AboutPage({ }: AboutPageProps) {
    return (
        <>
            {/* <CardsHero size={'sm'} title={"Om Gesicht."} description={"Lær os lidt bedre at kende."} /> */}
            <Hero size={'sm'} title={"Om os"} colorTheme={colorTheme} />
            <AboutSection />
        </>
    )
}