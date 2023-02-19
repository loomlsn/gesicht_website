import Link from "next/link"
import React from "react"
import styles from './simple-hero.module.scss'

type SimpleHeroProps = {
    title?: string
    description?: string
}

export default function SimpleHero({ title, description }: SimpleHeroProps) {
    return (
        <div className={styles.heroContainer}>
            <div className="container">
                <div className={styles.heroContent}>
                    {title && <h1>{title}</h1>}
                    {description && <h2>{description}</h2>}
                    {/* {size === "xxl" && (
                        <img src="/logo/gesicht_logo_light.svg" />
                    )}
                    {size === "xxl" && (
                        <h2>{description}</h2>
                    )} */}
                </div>

            </div>
        </div >
    )
}