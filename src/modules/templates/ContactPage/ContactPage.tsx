import React from "react";
import Hero from "../../../components/Hero";
import { colorTheme } from "../../globals/settings";

type ContactPageProps = {

}

export default function ContactPage({ }: ContactPageProps) {
    return (
        <>
            <Hero size={'sm'} title={"Kontakt os"} colorTheme={colorTheme} />
            <div>
                <p>Tekst</p>
            </div>
        </>
    )
}