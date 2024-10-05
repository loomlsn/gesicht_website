import Link from "next/link"
import { useRouter } from "next/router";
import React from "react"
import styles from './prices.module.scss'

type PricesProps = {
    data: any
    colorTheme: 'light' | 'dark'
}

export default function Prices({ data, colorTheme }: PricesProps) {
    const { locale } = useRouter();
    console.log(data)
    const fillerTreatments = data.prices.prices.filter((item) => item.type === "filler");
    const profhiloTreatments = data.prices.prices.filter((item) => item.type === "profhilo");
    const hydroboosterTreatments = data.prices.prices.filter((item) => item.type === "hydrobooster");
    const intro = data.prices.intro;

    return (
        <div>
            <div className={`${styles.priceOuterContainer} ${colorTheme === "light" ? styles.light : styles.dark}`}>
                <div className={`container ${styles.priceContainer}`}>
                    <div className={styles.priceBox}>
                        <h2>{intro.titleBefore}<span>{intro.titleSpan}</span>{intro.titleAfter}</h2>
                    </div>
                    <div className={styles.priceBox}>
                        <h2>Profhilo</h2>
                        {profhiloTreatments.map((item, i) => {
                            const price = (item.price === 0 && locale === "da") ? "Gratis" : (item.price === 0 && locale === "en") ? "Free" : item.price;
                            return (
                                <div key={`treatment-${i}`}>
                                    <div className={styles.treatmentItem}>
                                        <div>
                                            <h3>{item.name}</h3>
                                        </div>
                                        <div className={styles.line}></div>
                                        <div className={styles.price}><span>{price}</span></div>
                                    </div>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            )
                        })}
                        <h2>Hydrobooster</h2>
                        {hydroboosterTreatments.map((item, i) => {
                            const price = (item.price === 0 && locale === "da") ? "Gratis" : (item.price === 0 && locale === "en") ? "Free" : item.price;
                            return (
                                <>
                                    <div className={styles.treatmentItem}>
                                        <div className={styles.priceLabel}>
                                            <h3>{item.name}</h3>
                                            <span>NEW</span>
                                        </div>
                                        {/* <div>
                                    <h3>Viscoderm Hydrobooster</h3>
                                </div> */}
                                        <div className={styles.line}></div>
                                        <div className={styles.price}><span>{item.price}</span></div>
                                    </div>
                                    <p className={styles.description}>{item.description}</p>
                                </>
                            )
                        })}
                    </div>
                    <div className={styles.priceBox}>
                        <h2>Filler</h2>
                        {fillerTreatments.map((item, index) => {
                            const price = (item.price === 0 && locale === "da") ? "Gratis" : (item.price === 0 && locale === "en") ? "Free" : item.price;
                            return (
                                <>
                                    <div className={styles.treatmentItem}>
                                        <div>
                                            <h3>{item.name}</h3>
                                        </div>
                                        <div className={styles.line}></div>
                                        <div className={styles.price}><span>{price}</span></div>
                                    </div>
                                    <p className={styles.description}>{item.description}</p></>
                            )
                        })}
                    </div>
                    <div className={styles.payment}>
                        <div>
                            <h2>{data.prices.finance.title}</h2>
                            <p>{data.prices.finance.text}<br /><br />{data.prices.finance.textSecond}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}