import React from "react";
import CardsHero from "../../../components/CardsHero";

type ContactPageProps = {

}

export default function ContactPage({ }: ContactPageProps) {
    return (
        <>
            <CardsHero size={'sm'} title={"Kontakt os"} description={"tekst"} />
            <div>
                <p>Tekst</p>
            </div>
        </>
    )
}