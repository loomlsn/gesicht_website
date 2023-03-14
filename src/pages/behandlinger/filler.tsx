import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainLayout } from "../../modules/layout/MainLayout"
import HeadMain from "../../modules/templates/Head"
import FillerPage from "../../modules/templates/ServicesPage/FillerPage"

export default function Filler() {
    const { locale } = useRouter();
    useEffect(() => {
        document.title = locale === "en" ? "Filler - Gesicht" : "Filler - Gesicht";
    }, [locale]);

    return (
        <>
            <HeadMain />
            <MainLayout>
                <FillerPage prop={"test"} />
            </MainLayout>
        </>
    )
}
