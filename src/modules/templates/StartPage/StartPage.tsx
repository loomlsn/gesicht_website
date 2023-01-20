import React from "react";
import CardsHero from "../../../components/CardsHero";

type StartPageProps = {
    prop: string;
}

export default function StartPage({ prop }: StartPageProps) {
    return (
        <>
            <CardsHero title={"Velkommen til Gesicht"} />
            <div>
                <p>Forsidetekst</p>
            </div>
        </>
    )
}