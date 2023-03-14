import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MainLayout } from "../modules/layout/MainLayout"
import ContactPage from "../modules/templates/ContactPage"
import HeadMain from "../modules/templates/Head"

export default function Contact() {
    const { locale } = useRouter();
    useEffect(() => {
        document.title = locale === "en" ? "Contact us - Gesicht" : "Kontakt os - Gesicht";
    }, [locale]);

    return (
        <>
            <HeadMain />
            <MainLayout>
                <ContactPage />
            </MainLayout>
        </>
    )
}
