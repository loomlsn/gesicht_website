import Head from "next/head"
import { MainLayout } from "../../modules/layout/MainLayout"
import HeadMain from "../../modules/templates/Head"
import ProfhiloPage from "../../modules/templates/ServicesPage/ProfhiloPage"

export default function Profhilo() {
    return (
        <>
            <HeadMain titleDa={"Profhilo"} titleEn={"Profhilo"} />
            <MainLayout>
                <ProfhiloPage prop={"prop"} />
            </MainLayout>
        </>
    )
}
