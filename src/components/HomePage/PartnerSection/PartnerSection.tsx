import Link from "next/link"
import React from "react"
import styles from './partner-section.module.scss'

type PartnerSectionProps = {
    title?: string
}

export default function PartnerSection({ title }: PartnerSectionProps) {
    return (
        <div className={styles.partnerContainer}>
            <div className={`container ${styles.partnerInner}`}>
                <div className={styles.introPartner}>
                    <h2>I samarbejde med IBSA</h2>
                    <p>IBSA er nordens førende indenfor fillermidlet Aliaxin, som vi bruger til alle vores fillerbehandlinger.</p>
                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes.</p>
                    <ul className={styles.bullets}>
                        <li><img src="/hero/icon.svg" />Varighed: 6-12 mdr.</li>
                        <li><img src="/hero/icon.svg" />Behandlingstid: 30 min.</li>
                        <li><img src="/hero/icon.svg" />Konsultation: Gratis</li>
                        <li><img src="/hero/icon.svg" />Heletid: 2 uger</li>
                    </ul>
                </div>
                <div className={styles.partnerImage}>
                    <img src="/hero/ibsa-image.jpg" />
                </div>
            </div>
        </div>
    )
}