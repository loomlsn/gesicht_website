import Link from "next/link"
import React, { useState } from "react"

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

    return (
        <header className={styles.headerContainer}>
            <div>Logo</div>
            <div>
                <button onClick={toggleNav}>
                    {navOpen ? "Close nav" : "Open nav"}
                </button>
                {navOpen && (
                    <nav>
                        <Link href={"/"}>Hjem</Link>
                        <Link href={"/about/about"}>Om</Link>
                        <Link href={"/services/services"}>Behandlinger</Link>
                    </nav>
                )}
            </div>
        </header>
    )
}