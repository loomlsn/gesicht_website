import React from "react";
import CardsHero from "../../../components/CardsHero";

type PricesPageProps = {

}

export default function PricesPage({ }: PricesPageProps) {
    return (
        <>
            <CardsHero size={'sm'} title={"Priser"} description={"tekst"} />
            <div>
                <p>Tekst</p>
            </div>
        </>
    )
}