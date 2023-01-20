import React from "react"
import styles from './cards-hero.module.scss'

type CardsHeroProps = {
    title: string
}

export default function CardsHero({ title }: CardsHeroProps) {
    return (
        <div>
            <div className={styles.heroContainer}>
                <h1>Hero</h1>
            </div>
        </div>
    )
}