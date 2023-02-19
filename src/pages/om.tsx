import { MainLayout } from "../modules/layout/MainLayout"
import AboutPage from "../modules/templates/AboutPage"
import HeadMain from "../modules/templates/Head"

export default function About() {
    return (
        <>
            <HeadMain titleDa={"Om os"} titleEn={"About us"} />
            <MainLayout>
                <AboutPage />
            </MainLayout>
        </>
    )
}
