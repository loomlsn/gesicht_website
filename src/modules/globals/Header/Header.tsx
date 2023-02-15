import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Bars4Icon } from '@heroicons/react/24/solid'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import styles from './header.module.scss'
import useWindowDimensions, { isDeviceMobile } from "../../../helpers/useWindowDimensions";

type HeaderProps = {
    colorTheme: 'dark' | 'light';
}

export const Header = ({ colorTheme }: HeaderProps) => {
    const [navOpen, setNavOpen] = useState(false);

    const isMobile = isDeviceMobile();

    console.log(isMobile)

    function toggleNav() {
        if (navOpen) {
            setNavOpen(false)
        } else {
            setNavOpen(true)
        }
    }

    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
            document.body.style.paddingRight = "15px";
        } else {
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("position");
            document.body.style.removeProperty("width");
            document.body.style.paddingRight = "0";
        }
    }, [navOpen])

    return (
        <div className="container">
            <header className={`${styles.headerContainer} ${colorTheme === 'light' ? styles.light : styles.dark}`}>
                <Link href={'/'} className={styles.logoContainer}>
                    {colorTheme === "dark" ? (
                        <img src={"/logo/gesicht_logo_light.svg"} />
                    ) : (
                        <img src={"/logo/gesicht_logo_pink_darker.svg"} />
                    )}
                </Link>
                <div>
                    {!isMobile && (
                        <nav className={styles.largeNav}>
                            <ul>
                                <li><Link href={"/"}>Hjem</Link></li>
                                <li><Link href={"/behandlinger"}>Behandlinger</Link></li>
                                <li><Link href={"/priser"}>Priser</Link></li>
                                <li><Link href={"/om"}>Om Gesicht</Link></li>
                                <li><Link href={"/kontakt"}>Kontakt os</Link></li>
                                <li><Link href={"/booking"}>Book en tid</Link></li>
                            </ul>
                        </nav>
                    )}
                    {isMobile && (
                        <nav className={styles.mobileNav}>
                            <div className={navOpen && styles.overlay} onClick={toggleNav}></div>
                            <div className={`${styles.navContainer} ${navOpen ? styles.open : ""}`}>
                                <button onClick={toggleNav} className={styles.navOpen}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <ul className={styles.navLinks}>
                                    <li><Link href={"/"}>Hjem</Link></li>
                                    <li><Link href={"/behandlinger"}>Behandlinger</Link></li>
                                    <li><Link href={"/priser"}>Priser</Link></li>
                                    <li><Link href={"/om"}>Om Gesicht</Link></li>
                                    <li><Link href={"/booking"}>Booking</Link></li>
                                    <li><Link href={"/kontakt"}>Kontakt os</Link></li>
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
                    )}


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