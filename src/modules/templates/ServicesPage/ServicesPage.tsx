import React from "react";
import CardsHero from "../../../components/CardsHero";

type ServicesProps = {
    prop: string;
}

export default function ServicesPage({ prop }: ServicesProps) {
    return (
        <>
            <CardsHero size={'sm'} title={"Behandlinger"} description={"Alle vores behandlinger foretages af kvalificerede læger"} />
            <div>
                <p>Tekst</p>
            </div>
        </>
    )
}