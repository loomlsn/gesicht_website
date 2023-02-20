import Link from "next/link"
import React from "react"
import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className="container">
                <div className={styles.footerNav}>
                    <div className={styles.footerLinks}>
                        <h3>Behandlinger</h3>
                        <ul>
                            <Link href={'/'}><li>Fillerbehandling</li></Link>
                            <Link href={'/'}><li>Profhilobehandling</li></Link>
                            <Link href={'/'}><li>Korrektioner</li></Link>
                            <Link href={'/'}><li>Rynkebehandling</li></Link>
                            <Link href={'/'}><li>Skulpturering</li></Link>
                        </ul>
                        {/* <ul>
                            <li>Tilsynsrapport </li>
                            <li>Privatlivspolitik </li>
                            <br />
                            <li>CVR: 39328666</li>
                        </ul> */}
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>Klinikken</h3>
                        <ul>
                            <Link href={'/'}><li>Om Gesicht</li></Link>
                            <Link href={'/'}><li>Kontakt os</li></Link>
                            <Link href={'/'}><li>Tilsynsrapport</li></Link>
                            <Link href={'/'}><li>Privatlivspolitik</li></Link>
                        </ul>
                        {/* <ul>
                            <li>Tilsynsrapport </li>
                            <li>Privatlivspolitik </li>
                            <br />
                            <li>CVR: 39328666</li>
                        </ul> */}
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>Find os</h3>
                        <ul>
                            <li>Knabrostræde 15, st. th</li>
                            <li>1210 København K</li>
                        </ul>
                        <div className={styles.contact}>
                            <Link href={'/'}>+45 30 30 30 30 </Link>
                            <Link href={'/'}>hello@gesicht.dk </Link>
                        </div>
                    </div>
                    <div className={styles.logo}>
                        <img src="/logo/gesicht_logo_pink_darker.svg"></img>
                    </div>
                </div>
                <div className={styles.footerNavBottom}>
                    <div className={styles.footerLinks}>
                        <h3>Åbningstider</h3>
                        <ul className={styles.openingHours}>
                            <li>Mandag - torsdag:<span>11.00 - 20.00</span></li>
                            <li>Fredag:<span>11.00 - 17.30</span></li>
                            <li>Lørdag:<span>12.00 - 17.00</span></li>
                            <li>Søndag:<span>12.00 - 17.00</span></li>
                        </ul>
                    </div>
                    <div className={styles.footerLinks}>
                        {/* <h3 className={styles.footerHeading}>Altid udført af autoriserede læger.</h3>
                        <p>Vi glæder os til at tage imod dig.</p> */}
                    </div>
                    <div className={styles.socials}>
                        <Link href={'/'}>
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </Link>
                        <Link href={'/'}>
                            <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0' />


                                <g transform="matrix(1.11 0 0 1.11 12 12)" >
                                    <path transform=" translate(-12, -12)" d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 C 10.34314575050762 9 9 10.34314575050762 9 12 C 9 13.65685424949238 10.34314575050762 15 12 15 C 13.65685424949238 15 15 13.65685424949238 15 12 C 15 10.34314575050762 13.65685424949238 9 12 9 z" strokeLinecap="round" />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}