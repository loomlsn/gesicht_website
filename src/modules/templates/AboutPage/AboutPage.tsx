import React from "react";
import CardsHero from "../../../components/CardsHero";

type AboutPageProps = {

}

export default function AboutPage({ }: AboutPageProps) {
    return (
        <>
            <CardsHero size={'sm'} title={"Om Gesicht"} description={"Lær os og vores behandlere lidt bedre at kende"} />
            <div>
                <p>Tekst</p>
            </div>
        </>
    )
}