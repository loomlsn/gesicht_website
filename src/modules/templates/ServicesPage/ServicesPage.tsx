import React from "react";
import Hero from "../../../components/Hero";
import Treatments from "../../../components/TreatmentSlider";
import { colorTheme } from "../../globals/settings";

type ServicesProps = {
    prop: string;
}

export default function ServicesPage({ prop }: ServicesProps) {
    return (
        <>
            {/* <SimpleHero title={"Behandlinger"} description={"Alle vores behandlinger foretages af kvalificerede læger"} /> */}
            <Hero size={'sm'} title={"Behandlinger"} colorTheme={colorTheme} />
            <Treatments />
        </>
    )
}