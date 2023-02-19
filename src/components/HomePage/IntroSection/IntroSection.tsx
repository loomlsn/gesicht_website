import Link from "next/link"
import React, { useEffect, useState } from "react"
import styles from './intro-section.module.scss'

type IntroSectionProps = {
    title?: string
    text?: string
    colorTheme: 'light' | 'dark'
    img?: string
    link?: string | null
    booking?: boolean
}

export default function IntroSection({ title, text, colorTheme, img, link, booking }: IntroSectionProps) {
    const [bookingOpen, setBookingOpen] = useState(false);

    function toggleBooking() {
        if (bookingOpen) {
            setBookingOpen(false)
        } else {
            setBookingOpen(true)
        }
    }

    useEffect(() => {
        if (bookingOpen) {
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
    }, [bookingOpen])

    return (
        <>
            <div className={`${styles.introOuter} ${colorTheme === "light" ? styles.light : styles.dark}`}>
                <div className={styles.bgRight}></div>
                <div className={`container ${styles.introContainer}`}>
                    <div className={styles.introImage}>
                        <img src={img} />
                    </div>
                    {link != null && !booking ? (
                        <Link href={link}>
                            <div className={styles.introTitle}>
                                <h2>{title}</h2>
                                <p>{text}</p>
                                <div className={styles.border}></div>
                            </div>
                        </Link>
                    ) : booking ? (
                        <div className={styles.introTitle} onClick={() => setBookingOpen(true)}>
                            <h2>{title}</h2>
                            <p>{text}</p>
                            <div className={styles.border}></div>
                        </div>
                    ) : (
                        <div className={styles.introTitle}>
                            <h2>{title}</h2>
                            <p>{text}</p>
                            <div className={styles.border}></div>
                        </div>
                    )}
                </div>
            </div>
            {booking && (
                <div className={`${styles.booking} ${bookingOpen ? styles.open : styles.closed}`}>
                    <div className={styles.bookingOverlay} onClick={() => setBookingOpen(false)}></div>
                    <div className={styles.bookingInner}>
                        <div className={styles.bookingClose} onClick={() => setBookingOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <iframe src="https://system.easypractice.net/book/lips-by-james-cph"></iframe>
                    </div>
                </div>
            )}
        </>
    )
}