import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Bars4Icon } from '@heroicons/react/24/solid'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import styles from './header.module.scss'
import useWindowDimensions, { isDeviceMobile } from "../../../helpers/useWindowDimensions";
import { getDictionaryValue } from "../../../helpers/getDictionaryValue";
import { useRouter } from "next/router";

type HeaderProps = {
    colorTheme: 'dark' | 'light';
}

export const Header = ({ colorTheme }: HeaderProps) => {
    const data = getDictionaryValue();
    const { locale, ...router } = useRouter();

    function isLocaleActive(text) {
        if (text.toLowerCase() == locale) {
            return true;
        } else {
            return false;
        }
    }
    const [navOpen, setNavOpen] = useState(false);

    const isMobile = isDeviceMobile();

    function toggleNav() {
        if (navOpen) {
            setNavOpen(false)
        } else {
            setNavOpen(true)
        }
    }

    const themeColor = colorTheme === "dark" ? "#485742" : "#F3EAEA";

    useEffect(() => {
        if (navOpen) {
            // document.body.style.overflow = "hidden";
            // document.body.style.position = "fixed";
            document.body.style.width = "100%";
            document.body.style.paddingRight = "15px";
            document.querySelector("meta[name='theme-color']").setAttribute("content", "#F3EAEA");
        } else {
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("position");
            document.body.style.removeProperty("width");
            document.body.style.paddingRight = "0";
            document.querySelector("meta[name='theme-color']").setAttribute("content", themeColor);
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
                                {data.general.navigation.map((nav, i) => {
                                    const activePage = nav.link == router.asPath;
                                    return (
                                        <li key={i} className={activePage ? styles.active : ""}><Link href={nav.link}>{nav.name}</Link></li>
                                    )
                                })}
                            </ul>
                        </nav>
                    )}
                    {isMobile && (
                        <nav className={styles.mobileNav}>
                            <div className={navOpen && styles.overlay} onClick={toggleNav}></div>
                            <div className={`${styles.navContainer} ${navOpen ? styles.open : ""}`} data-scroll-theme>
                                <button onClick={toggleNav} className={styles.navOpen}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <ul className={styles.navLinks}>
                                    {data.general.navigation.map((nav, i) => {
                                        const activePage = nav.link == router.asPath;
                                        return (
                                            <li key={`nav-${i}`}><Link href={nav.link} className={activePage ? styles.active : ""} onClick={toggleNav}>{nav.name}</Link></li>
                                        )
                                    })}
                                </ul>
                                <div className={styles.location}>
                                    <h3>{data.general.mobileNav.findUs}</h3>
                                    <ul>
                                        <li>{data.general.addressStreet}</li>
                                        <li>{data.general.addressCity}</li>
                                    </ul>
                                    <ul>
                                        <li>+45 53 63 75 40</li>
                                        <li>hello@gesicht.dk</li>
                                    </ul>
                                    <div className={styles.language}>
                                        <Link href="" locale={locale === "da" ? "en" : "da"}><span className={isLocaleActive("da") && styles.activeLanguage}>DA</span> / <span className={isLocaleActive("en") && styles.activeLanguage}>EN</span></Link>
                                    </div>
                                </div>
                            </div>
                            <button onClick={toggleNav} className={styles.navClosed}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </nav>
                    )}
                </div>
            </header >
        </div >
    )
}