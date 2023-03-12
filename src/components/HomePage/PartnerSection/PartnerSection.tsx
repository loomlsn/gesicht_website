import Link from "next/link"
import React from "react"
import { getDictionaryValue } from "../../../helpers/getDictionaryValue"
import styles from './partner-section.module.scss'

type PartnerSectionProps = {
    title?: string
}

export default function PartnerSection({ title }: PartnerSectionProps) {
    const data = getDictionaryValue();
    return (
        <div className={styles.partnerContainer}>
            <div className={`container ${styles.partnerInner}`}>
                <div className={styles.introPartner}>
                    <h2>{data.home.partner.title}</h2>
                    {data.home.partner.text.map((item, i) => (
                        <p key={`text-${i}`}>{item.text}</p>
                    ))}
                    <ul className={styles.bullets}>
                        {data.home.partner.bullets.map((bullet, i) => (
                            <li key={`bullet-${i}`}><img src="/hero/icon.svg" />{bullet.text}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.partnerImage}>
                    <img src="/hero/header-4.jpg" />
                    <img src="/logo/ibsa_white.png" className={styles.ibsaLogo} />
                </div>
            </div>
        </div>
    )
}