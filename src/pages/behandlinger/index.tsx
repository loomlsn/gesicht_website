import Head from "next/head"
import { MainLayout } from "../../modules/layout/MainLayout"
import HeadMain from "../../modules/templates/Head"
import ServicesPage from "../../modules/templates/ServicesPage"

export default function Services() {
    return (
        <>
            <HeadMain titleDa={"Behandlinger"} titleEn={"Treatments"} />
            <MainLayout>
                <ServicesPage prop={"Text"} />
            </MainLayout>
        </>
    )
}
