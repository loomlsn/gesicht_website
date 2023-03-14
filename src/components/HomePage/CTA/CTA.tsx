import Link from "next/link"
import React from "react"
import styles from './cta.module.scss'


export default function CTA() {
    return (
        <div className={styles.ctaContainer}>
            <div className="container">
                <div className={styles.ctaSection}>
                    <img src="/hero/gesicht_hero-1.jpg" />
                </div>
                <div className={styles.ctaSection}>
                    <h2>Kom indenfor til en gratis konsultation</h2>
                    <p>Vi tager altid en snak om dine ønsker og forventninger inden en behandling.</p>
                </div>
            </div>
        </div>
    )
}