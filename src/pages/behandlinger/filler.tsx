import Head from "next/head"
import { MainLayout } from "../../modules/layout/MainLayout"
import HeadMain from "../../modules/templates/Head"
import FillerPage from "../../modules/templates/ServicesPage/FillerPage"

export default function Filler() {
    return (
        <>
            <HeadMain titleDa={"Fillerbehandling"} titleEn={"Fillers"} />
            <MainLayout>
                <FillerPage prop={"test"} />
            </MainLayout>
        </>
    )
}
