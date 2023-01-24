import React from "react";
import CardsHero from "../../../components/CardsHero";

type StartPageProps = {
    prop: string;
}

export default function StartPage({ prop }: StartPageProps) {
    return (
        <>
            <CardsHero size={'lg'} title={"Velkommen til Gesicht"} description={"En nordisk kosmetisk klinik med sans for detaljer."} />
            <div>
                <p>Forsidetekst</p>
            </div>
        </>
    )
}