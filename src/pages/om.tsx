import { MainLayout } from "../modules/layout/MainLayout"
import AboutPage from "../modules/templates/AboutPage"
import HeadMain from "../modules/templates/Head"
import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { textDA } from "../modules/globals/dictionary";

export default function About() {
    const { locale } = useRouter();
    useEffect(() => {
        document.title = locale === "en" ? "About us - Gesicht" : "Om os - Gesicht";
    }, [locale]);
    return (
        <>
            <HeadMain />
            <MainLayout>
                <AboutPage />
            </MainLayout>
        </>
    )
}
