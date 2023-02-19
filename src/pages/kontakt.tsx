import Head from "next/head"
import { MainLayout } from "../modules/layout/MainLayout"
import ContactPage from "../modules/templates/ContactPage"
import HeadMain from "../modules/templates/Head"

export default function Contact() {
    return (
        <>
            <HeadMain titleDa={"Kontakt os"} titleEn={"Contact us"} />
            <MainLayout>
                <ContactPage />
            </MainLayout>
        </>
    )
}
