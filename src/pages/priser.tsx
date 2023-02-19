import { MainLayout } from "../modules/layout/MainLayout"
import PricesPage from "../modules/templates/PricesPage"
import HeadMain from "../modules/templates/Head"

export default function Prices() {
    return (
        <>
            <HeadMain titleDa={"Priser"} titleEn={"Prices"} />
            <MainLayout>
                <PricesPage />
            </MainLayout>
        </>
    )
}
