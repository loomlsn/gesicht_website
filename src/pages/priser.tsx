import { MainLayout } from "../modules/layout/MainLayout"
import PricesPage from "../modules/templates/PricesPage"
import HeadMain from "../modules/templates/Head"
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Prices() {
    const { locale } = useRouter();
    useEffect(() => {
        document.title = locale === "en" ? "Prices - Gesicht" : "Priser - Gesicht";
    }, [locale]);

    return (
        <>
            <HeadMain />
            <MainLayout>
                <PricesPage />
            </MainLayout>
        </>
    )
}
