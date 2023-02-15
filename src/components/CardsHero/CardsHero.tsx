import Link from "next/link"
import React from "react"
import styles from './cards-hero.module.scss'

type CardsHeroProps = {
    title?: string
    description?: string
    size?: 'lg' | 'sm' | 'xxl'
    cards?: boolean
}

export default function CardsHero({ title, description, size, cards }: CardsHeroProps) {
    return (
        <div className={`${styles.heroContainer} ${size === 'lg' ? styles.lg : size === 'xxl' ? styles.xxl : styles.sm}`}>
            <div className="container">
                <div className={size === 'lg' ? styles.heroContentLg : size === 'xxl' ? styles.heroContentXxl : styles.heroContentSm}>
                    {title && <h1>{title}</h1>}
                    {description && size != "xxl" && <h2>{description}</h2>}
                    {size === "xxl" && (
                        <img src="/logo/gesicht_logo_light.svg" />
                    )}
                    {size === "xxl" && (
                        <h2>{description}</h2>
                    )}
                </div>
                {cards && (
                    <div className={styles.cardsContainer}>
                        <Link href="/services">
                            <div>

                                <img src="/hero/header-3.jpg" />
                                <div className={styles.cardContent}>
                                    <h3>Behandlinger</h3>
                                    <p>Få et overblik over hvad vi tilbyder.</p>
                                </div>
                            </div></Link>
                        <Link href="/om">
                            <div>
                                <img src="/ibsa/aliaxin.jpg" />
                                <div className={styles.cardContent}>
                                    <h3>Om Gesicht</h3>
                                    <p>Lær os bedre at kende.</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                )}
            </div>
        </div >
    )
}