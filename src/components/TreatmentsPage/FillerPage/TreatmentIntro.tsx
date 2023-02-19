import Link from "next/link"
import { useRouter } from "next/router";
import React, { useState } from "react"
import styles from './treatment-intro.module.scss'

type TreatmentIntroProps = {
    data: any;
}

export default function TreatmentIntro({ data }: TreatmentIntroProps) {
    const { locale } = useRouter();
    const fillerTreatments = data.prices.prices.filter((item) => item.type === "filler");
    const profhiloTreatments = data.prices.prices.filter((item) => item.type === "profhilo");
    const intro = data.filler.intro;

    return (
        <div>
            <div className={styles.treatmentsOuterContainer}>
                <div className={`container ${styles.treatmentsContainer}`}>
                    <div className={styles.treatmentsBox}>
                        <h2>{intro.teaser}</h2>
                        <div>
                            <h3>{intro.title}<span>{intro.secondTitle}</span></h3>
                            {intro.text.map((item, i) => (
                                <p key={`text-${i}`}>{item.text}</p>
                            ))}
                            <div>
                                <ul className={styles.bullets}>
                                    <li><img src="/hero/icon.svg" className="icon" />Varighed: 6-12 mdr.</li>
                                    <li><img src="/hero/icon.svg" className="icon" />Behandlingstid: 30 min.</li>
                                    <li><img src="/hero/icon.svg" className="icon" />Konsultation: Gratis</li>
                                    <li><img src="/hero/icon.svg" className="icon" />Heletid: 2 uger</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.treatmentsBox}>
                        <img src="/hero/header-3.jpg" className={styles.intro} />
                    </div>
                    <div className={styles.treatmentsBox}></div>
                    <div className={styles.treatmentsBox}>
                        {data.filler.treatments.map((item, i) => {
                            return (
                                <AccordionItem item={item} key={`accordion-${i}`} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

type AccordionItemProps = {
    item: {
        name: string
        description: string
        link: string
    }
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className={`${styles.treatmentWrapper} ${isActive ? styles.active : ""}`} onClick={() => setIsActive(!isActive)}>
                <div className={styles.treatmentItem}>
                    <div>
                        <h3>{item.name}</h3>
                    </div>
                </div>
                <p className={styles.description}>{item.description}</p>
                <div className={`${styles.arrow} ${isActive ? styles.active : ""}`}>
                    +
                </div>
            </div>
            {isActive && (
                <div className={styles.accordionContent}>
                    <p>Herudover forårsager tobaksrygning en reduceret mængde hyaluronsyre i huden. Dette resulterer i, at huden får mindre fylde og elasticitet, og der opstår rynker, furer og forandrede ansigtskonturer.</p>
                </div>
            )}
        </>
    )
}