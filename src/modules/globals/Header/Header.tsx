import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Bars4Icon } from '@heroicons/react/24/solid'

import styles from './header.module.scss'

export const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    function toggleNav() {
        if (navOpen) {
            setNavOpen(false)
        } else {
            setNavOpen(true)
        }
    }

    // useEffect(() => {
    //     if (navOpen) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflowX = "hidden";
    //         document.body.style.overflowY = "auto";
    //     }
    // }, [navOpen])

    return (
        <div className="container">
            <header className={styles.headerContainer}>
                <Link href={'/'} className={styles.logoContainer}>
                    <img src={"/logo/gesicht_logo_light.svg"} />
                </Link>
                <div>
                    <nav>
                        <div className={navOpen && styles.overlay} onClick={toggleNav}></div>
                        <div className={`${styles.navContainer} ${navOpen ? styles.open : styles.close}`}>
                            <button onClick={toggleNav} className={styles.navOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <ul className={styles.navLinks}>
                                <li><Link href={"/"}>Hjem</Link></li>
                                <li><Link href={"/services/services"}>Behandlinger</Link></li>
                                <li><Link href={"/prices/prices"}>Priser</Link></li>
                                <li><Link href={"/about/about"}>Om Gesicht</Link></li>
                                <li><Link href={"/booking/booking"}>Booking</Link></li>
                                <li><Link href={"/contact/contact"}>Kontakt os</Link></li>
                            </ul>
                            <div className={styles.location}>
                                <h3>Find os</h3>
                                <ul>
                                    <li>Knabostræde 15, st. th</li>
                                    <li>1210 København K</li>
                                </ul>
                                <ul>
                                    <li>+45 53 63 75 40</li>
                                    <li>hello@gesicht.dk</li>
                                </ul>
                            </div>
                            <div className={styles.language}>
                                DA / EN
                            </div>
                        </div>
                        <button onClick={toggleNav} className={styles.navClosed}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>

                        {/* ) : (
                            <button onClick={toggleNav} className={styles.navClosed}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        )} */}
                    </nav>


                    {/* 
                    <button onClick={toggleNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    {navOpen && (
                        <nav>
                            <button onClick={toggleNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>
                            <Link href={"/"}>Hjem på develop</Link>
                            <Link href={"/about/about"}>Om</Link>
                            <Link href={"/services/services"}>Behandlinger</Link>
                        </nav>
                    )} */}
                </div>
            </header >
        </div >
    )
}