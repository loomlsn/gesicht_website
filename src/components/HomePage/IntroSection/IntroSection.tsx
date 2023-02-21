import Link from "next/link"
import React, { useEffect, useState } from "react"
import { getDictionaryValue } from "../../../helpers/getDictionaryValue"
import { isDeviceMobile } from "../../../helpers/useWindowDimensions"
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
    const data = getDictionaryValue();
    const [bookingOpen, setBookingOpen] = useState(false);
    const isMobile = isDeviceMobile();

    function toggleBooking() {
        if (bookingOpen) {
            setBookingOpen(false)
        } else {
            setBookingOpen(true)
        }
    }

    useEffect(() => {
        if (bookingOpen && isMobile) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
        } else if (bookingOpen && !isMobile) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
            // document.body.style.paddingRight = "15px";
        } else {
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("position");
            document.body.style.removeProperty("width");
            document.body.style.paddingRight = "0";
        }
    }, [bookingOpen])

    return (
        <>
            <div className={`${styles.introOuter} ${colorTheme === "light" ? styles.light : styles.dark} ${booking ? styles.bookingIntro : ""}`}>
                <div className={styles.bgRight}></div>
                <div className={`container ${styles.introContainer}`}>
                    {booking ? (
                        <div className={styles.introTitle}>
                            <>
                                <h2>{title}</h2>
                                {data.booking.intro.text.map((item, i) => (
                                    <p key={`text-${i}`}>{item.text}</p>
                                ))}
                                <button onClick={() => setBookingOpen(true)}>
                                    {data.booking.intro.cta}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </button>
                            </>
                        </div>
                    ) : (
                        <div className={styles.introImage}>
                            <img src={img} />
                        </div>
                    )}
                    {link != null && !booking ? (
                        <Link href={link}>
                            <div className={styles.introTitle}>
                                <h2>{title}</h2>
                                <p>{text}</p>
                                <div className={styles.arrow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                                {/* <div className={styles.border}></div> */}
                            </div>
                        </Link>
                    ) : booking ? (
                        <div className={styles.introImage}>
                            <div>
                                <img src="/logo/gesicht_secondary_logo_pink.svg" />
                            </div>
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
                <div className={styles.bookingContainer}>
                    <div className="container">
                        <div className={styles.bookingInfo}>
                            <div>
                                <h2>{data.booking.info.titleBefore}<span>{data.booking.info.titleHighlighted}</span>{data.booking.info.titleAfter}</h2>
                            </div>
                            <div>
                                <p>{data.booking.info.text.text}</p>
                                <p>{data.booking.info.text.textSecond}<Link href={"/kontakt"}>{data.booking.info.text.textLink}</Link>{data.booking.info.text.textAfter}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {booking && (
                <div className={`${styles.bookingModal} ${bookingOpen ? styles.open : styles.closed}`}>
                    <div className={styles.bookingOverlay} onClick={() => setBookingOpen(false)}></div>
                    <div className={styles.bookingInner}>
                        <button className={styles.bookingClose} onClick={() => setBookingOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <iframe src="https://system.easypractice.net/book/lips-by-james-cph"></iframe>
                    </div>
                </div>
            )}
        </>
    )
}