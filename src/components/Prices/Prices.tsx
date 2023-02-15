import Link from "next/link"
import React from "react"
import styles from './prices.module.scss'

const prices = [
    {
        type: "filler",
        amount: null,
        price: 0,
        name: "Forundersøgelse",
        description: "Skal foretages minimum 48 timer inden behandling"
    }, {
        type: "filler",
        amount: 0.5,
        price: "1.800,-",
        name: "Fillerbehandling 0.5 ml",
        description: "Aliaxin",
    }, {
        type: "filler",
        amount: 0.75,
        price: "2.400,-",
        name: "Fillerbehandling 0.75 ml",
        description: "Aliaxin",
    }, {
        type: "filler",
        amount: 1,
        price: "2.800,-",
        name: "Fillerbehandling 1 ml",
        description: "Aliaxin"
    }, {
        type: "filler",
        amount: 2,
        price: "5.000,-",
        name: "Fillerbehandling 2 ml",
        description: "Aliaxin",
    }, {
        type: "filler",
        name: "Tear trough",
        description: "Mørke rande under øjnene",
        amount: null,
        price: "3.000,-",
    }, {
        type: "profhilo",
        amount: null,
        price: 0,
        name: "Forundersøgelse",
        description: "Skal foretages minimum 48 timer inden behandling"
    }, {
        type: "profhilo",
        amount: 2,
        price: "3.500,-",
        name: "Profhilo 2 ml",
    }, {
        type: "profhilo",
        amount: 4,
        price: "7.000,-",
        name: "Profhilo 4 ml",
    }
]

const treatmentList = [
    {
        name: "Læbeforstørrelse",
        description: "Ønsker du mere symmetri, volume og fylde i læberne?",
        link: "/"
    },
    {
        name: "Rynkebehandling",
        description: "Med Profhilo kan vi mindske alderstegn og synlige rynker.",
        link: "/"
    },
    {
        name: "Korrektion",
        description: "Vi er eksperter i korrektion af tidligere behandlinger og arvæv.",
        link: "/"
    },
    {
        name: "Rynkebehandling",
        description: "Med Profhilo kan vi mindske alderstegn og synlige rynker.",
        link: "/"
    },
    {
        name: "Korrektion",
        description: "Vi er eksperter i korrektion af tidligere behandlinger og arvæv.",
        link: "/"
    },
    {
        name: "Læbeforstørrelse",
        description: "Ønsker du mere symmetri, volume og fylde i læberne?",
        link: "/"
    },
]

export default function Prices() {
    const fillerTreatments = prices.filter((item) => item.type === "filler");
    const profhiloTreatments = prices.filter((item) => item.type === "profhilo");

    return (
        <div>
            <div className={styles.priceOuterContainer}>
                <div className={`container ${styles.priceContainer}`}>
                    <div className={styles.priceBox}>
                        <h2>Bemærk, at der skal være foretaget forundersøgelse minimum <span>48 timer</span> før en eventuel behandling. </h2>
                    </div>
                    <div className={styles.priceBox}>
                        <h2>Profhilo</h2>
                        {profhiloTreatments.map((item, index) => {
                            const price = item.price === 0 ? "Gratis" : item.price;
                            return (
                                <>
                                    <div className={styles.treatmentItem}>
                                        <div>
                                            <h3>{item.name}</h3>
                                        </div>
                                        <div className={styles.line}></div>
                                        <div><span>{price}</span></div>
                                    </div>
                                    <p className={styles.description}>{item.description}</p></>
                            )
                        })}
                    </div>
                    <div className={styles.priceBox}>
                        <h2>Filler</h2>
                        {fillerTreatments.map((item, index) => {
                            const price = item.price === 0 ? "Gratis" : item.price;
                            return (
                                <>
                                    <div className={styles.treatmentItem}>
                                        <div>
                                            <h3>{item.name}</h3>
                                        </div>
                                        <div className={styles.line}></div>
                                        <div><span>{price}</span></div>
                                    </div>
                                    <p className={styles.description}>{item.description}</p></>
                            )
                        })}
                    </div>
                    <div className={styles.payment}>
                        <h2>Ønsker du finansiering med ratebetaling?</h2>
                        <p>Du kan dele din betaling op i maks. 6 månedlige betalinger. Den første rate betales straks efter behandlingen med dit Visa eller Mastercard, hvorefter resten af raterne vil trækkes automatisk. <br /><br />Nemt og omkostningsfrit.</p>
                    </div>
                </div>
            </div>

            <div className={styles.lightBG}>
                <div className={`container ${styles.treatments}`}>
                    <h2>Bliv klogere på hvilke behandlinger vi tilbyder.</h2>
                    <div className={styles.treatmentContainer}>
                        {treatmentList.map((treatment, i) => {
                            return (
                                <Link href={treatment.link}>
                                    <div className={styles.treatment}>
                                        <h3>{treatment.name}</h3>
                                        <p>{treatment.description}</p>
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
                </div>
            </div>
        </div>
    )
}