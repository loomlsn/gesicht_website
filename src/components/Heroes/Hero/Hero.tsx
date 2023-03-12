import Link from "next/link"
import React from "react"
import styles from './hero.module.scss'

type HeroProps = {
    title?: string
    description?: string
    size?: 'lg' | 'sm' | 'xxl'
    colorTheme: 'light' | 'dark'
    link?: string
    frontpage?: string
}

export default function Hero({ title, description, size, colorTheme, link, frontpage }: HeroProps) {
    return (
        <div className={`${styles.heroContainer} ${size === 'lg' ? styles.lg : styles.sm} ${colorTheme === "light" ? styles.light : styles.dark}`}>
            <div className="container relative full">
                <div className={size === 'lg' ? styles.heroContentLg : styles.heroContentSm}>
                    {title && <h1>{title}</h1>}
                    {description && <h2>{description}</h2>}
                    {link && <Link href={'/behandlinger'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                        {link}
                    </Link>}
                    {frontpage && (
                        <div className={styles.extra}>
                            <h3>{frontpage}</h3>
                            <img src="/logo/lips_by_james-logo.png" />
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}