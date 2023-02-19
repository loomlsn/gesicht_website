import Link from "next/link"
import React from "react"
import { getDictionaryValue } from "../../../helpers/getDictionaryValue";
import styles from './treatments-list.module.scss'

export default function TreatmentsList() {
    const data = getDictionaryValue();

    return (
        <div className={styles.lightBG}>
            <div className={`container ${styles.treatments}`}>
                <h2>Bliv klogere på hvilke behandlinger vi tilbyder.</h2>
                <div className={styles.treatmentContainer}>
                    {data.prices.treatmentList.treatments.map((treatment, i) => {
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
    )
}