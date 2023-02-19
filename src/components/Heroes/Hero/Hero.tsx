import React from "react"
import styles from './hero.module.scss'

type HeroProps = {
    title?: string
    description?: string
    size?: 'lg' | 'sm' | 'xxl'
    colorTheme: 'light' | 'dark'
}

export default function Hero({ title, description, size, colorTheme }: HeroProps) {
    return (
        <div className={`${styles.heroContainer} ${size === 'lg' ? styles.lg : styles.sm} ${colorTheme === "light" ? styles.light : styles.dark}`}>
            <div className="container">
                <div className={size === 'lg' ? styles.heroContentLg : styles.heroContentSm}>
                    {title && <h1>{title}</h1>}
                    {description && <h2>{description}</h2>}
                </div>
            </div>
        </div >
    )
}