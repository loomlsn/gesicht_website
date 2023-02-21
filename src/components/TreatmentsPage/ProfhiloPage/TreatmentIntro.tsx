import Link from "next/link"
import { useRouter } from "next/router";
import React, { useState } from "react"
import styles from './treatment-intro.module.scss'

type TreatmentIntroProps = {
    data: any;
}

export default function TreatmentIntro({ data }: TreatmentIntroProps) {
    const intro = data.profhilo.intro;
    const info = data.profhilo.info;

    return (
        <>
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
                        <img src="/hero/header-4.jpg" className={styles.intro} />
                    </div>
                    <div className={styles.treatmentsBox}></div>
                    <div className={styles.treatmentsBox}>
                        {data.profhilo.treatments.map((item, i) => {
                            return (
                                <AccordionItem item={item} key={`accordion-${i}`} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.infoContainer}>
                <div className={`container ${styles.infoWrapper}`}>
                    <div>
                        <h2>{info.title}<span>{info.titlePink}</span>{info.titleAfter}</h2>
                        <div>
                            <h3>{info.first.title}</h3>
                            {info.first.text.map((item, i) => {
                                return (
                                    <p key={`paragraph-${i}`}>{item.text}</p>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h3>{info.second.title}</h3>
                        {info.second.text.map((item, i) => {
                            return (
                                <p key={`paragraph-${i}`}>{item.text}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
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
                <button className={`${styles.arrow} ${isActive ? styles.active : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
            </div>
            <div className={`${styles.accordionContent} ${isActive ? styles.active : ""}`}>
                <p>Herudover forårsager tobaksrygning en reduceret mængde hyaluronsyre i huden. Dette resulterer i, at huden får mindre fylde og elasticitet, og der opstår rynker, furer og forandrede ansigtskonturer.</p>
            </div>
        </>
    )
}