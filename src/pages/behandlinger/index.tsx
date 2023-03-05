import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainLayout } from "../../modules/layout/MainLayout"
import HeadMain from "../../modules/templates/Head"
import ServicesPage from "../../modules/templates/ServicesPage"

export default function Services() {
    const { locale } = useRouter();
    useEffect(() => {
        document.title = locale === "en" ? "Treatments - Gesicht" : "Behandlinger - Gesicht";
    }, [locale]);

    return (
        <>
            <HeadMain />
            <MainLayout>
                <ServicesPage prop={"Text"} />
            </MainLayout>
        </>
    )
}
