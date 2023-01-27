import React from "react";
import CardsHero from "../../../components/CardsHero";

type ComingSoonProps = {
    prop: string;
}

export default function ComingSoon({ prop }: ComingSoonProps) {
    return (
        <>
            <CardsHero size={'xxl'} description={"Coming soon"} />
        </>
    )
}