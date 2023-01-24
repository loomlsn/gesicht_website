import React from "react"
import styles from './cards-hero.module.scss'

type CardsHeroProps = {
    title: string
    description?: string
    size?: 'lg' | 'sm'
}

export default function CardsHero({ title, description, size }: CardsHeroProps) {
    return (
        <div className={styles.heroContainer}>
            <div className="container">
                <div className={size === 'lg' ? styles.heroContentLg : styles.heroContentSm}>
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                </div>
            </div>
        </div >
    )
}