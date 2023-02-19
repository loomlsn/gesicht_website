import React from "react";
import ContactInfo from "../../../components/ContactPage/ContactInfo";
import Hero from "../../../components/Heroes/Hero";
import IntroSection from "../../../components/HomePage/IntroSection";
import TreatmentList from "../../../components/PricesPage/TreatmentList";
import { getDictionaryValue } from "../../../helpers/getDictionaryValue";
import { colorTheme } from "../../globals/settings";

type ContactPageProps = {

}

export default function ContactPage({ }: ContactPageProps) {
    const data = getDictionaryValue();
    return (
        <>
            <Hero size={'sm'} title={data.contact.hero.title} colorTheme={colorTheme} />
            <IntroSection colorTheme={colorTheme} title={data.contact.intro.title} text={data.booking.intro.cta} img={"/hero/clinic.jpg"} link={null} />
            <ContactInfo titleContact={data.contact.info.titleContact} titleOpeningHours={data.contact.info.titleOpeningHours} openingHours={data.general.openingHours} addressLine={data.general.addressStreet} addressLine2={data.general.addressCity} phone={data.general.phone} mail={data.general.mail} />
            <TreatmentList />
        </>
    )
}