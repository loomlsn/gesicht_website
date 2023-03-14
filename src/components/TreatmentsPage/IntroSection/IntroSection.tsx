import Link from "next/link"
import { useRouter } from "next/router";
import React from "react"
import styles from './intro.module.scss'

type IntroProps = {
    data: any;
}

export default function IntroSection({ data }: IntroProps) {
    const { locale } = useRouter();
    const fillerTreatments = data.prices.prices.filter((item) => item.type === "filler");
    const profhiloTreatments = data.prices.prices.filter((item) => item.type === "profhilo");
    const intro = data.treatments.intro;

    return (
        <div>
            <div className={styles.treatmentsOuterContainer}>
                <div className={`container ${styles.treatmentsContainer}`}>
                    <div className={styles.treatmentsBox}>

                        {/* <h2>{intro.titleBefore}<span>{intro.titleSpan}</span>{intro.titleAfter}</h2> */}
                        <h2>{intro.title}</h2>
                    </div>
                    <div className={styles.treatmentsBox}>
                        {data.treatments.treatments.map((item, index) => {
                            return (
                                <Link href={item.link} className={styles.treatmentLink}>
                                    <div className={styles.treatmentWrapper}>
                                        <div className={styles.treatmentItem}>
                                            <div>
                                                <h3>{item.name}</h3>
                                            </div>
                                        </div>
                                        <p className={styles.description}>{item.description}</p>
                                        <div className={styles.arrow}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>

                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className={styles.treatmentsBox}>
                        <img src="/hero/gesicht_hero-2.jpg" />
                    </div>
                    <div className={styles.treatmentsBox}>
                        <h2>{intro.secondTitle}</h2>
                        <p className={styles.infoText}>{intro.firstText}</p>
                        <p>{intro.secondText}</p>
                    </div>
                    <div className={styles.treatmentsBox}>
                    </div>
                </div>
            </div>
            {/* <div className={styles.beforeAfter}>
                <div className={`container ${styles.beforeAfterContainer}`}>
                    <div className={styles.beforeAfterBox}>
                        <img src="/treatments/before_after_1.jpg" />
                        <div>
                            <h3>Læbeforstørrelse</h3>
                            <p>Denne kunde har fået 1 ml i både over- og underlæbe.</p>
                        </div>
                    </div>
                    <div className={styles.beforeAfterBox}>
                        <div>
                            <h3>Læbeforstørrelse</h3>
                            <p>Denne kunde har fået 1 ml i både over- og underlæbe.</p>
                        </div>
                        <img src="/treatments/before_after_1.jpg" />
                    </div>
                    <div className={styles.beforeAfterBox}>
                        <img src="/treatments/before_after_1.jpg" />
                        <div>
                            <h3>Læbeforstørrelse</h3>
                            <p>Denne kunde har fået 1 ml i både over- og underlæbe.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}