import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainLayout } from "../../modules/layout/MainLayout"
import HeadMain from "../../modules/templates/Head"
import ProfhiloPage from "../../modules/templates/ServicesPage/ProfhiloPage"

export default function Profhilo() {
    useEffect(() => {
        document.title = "Profhilo - Gesicht";
    }, []);

    return (
        <>
            <HeadMain />
            <MainLayout>
                <ProfhiloPage prop={"prop"} />
            </MainLayout>
        </>
    )
}
