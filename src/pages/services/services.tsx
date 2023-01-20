import { MainLayout } from "../../modules/layout/MainLayout"
import ServicesPage from "../../modules/templates/ServicesPage"

export default function Services() {
    return (
        <>
            <MainLayout>
                <ServicesPage prop={"Text"} />
            </MainLayout>
        </>
    )
}
