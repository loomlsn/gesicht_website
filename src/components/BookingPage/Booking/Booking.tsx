import Link from "next/link"
import React from "react"
import styles from './booking.module.scss'

export default function Booking() {
    return (
        <>
            <div className={styles.bookingContainer}>
                <div className={`container ${styles.aboutInner}`}>
                    <div className={styles.introAbout}>
                        <h2>Vi har god tid</h2>
                        <p>Hos Gesicht sætter vi altid god tid af til hver enkelt forundersøgelse og behandling, så vi og du er sikre på, at du ikke risikerer at forlade klinikken igen med uforløste spørgsmål eller tvivl. Så kom endelig forbi til en uforpligtende forundersøgelse; vi byder altid på en forfriskning, mens vi taler.<br /><br />Gennem vores online bookingsystem kan du bestille tid til forundersøgelse og behandling. <span className="highlighted">Husk, at der skal være foretaget forundersøgelse minimum 48 timer inden din første fillerbehandling hos os.</span> Vælg først, hvilken type aftale, du ønsker, og vælg derefter dato og tidspunkt. <br /><br />Hvis det er første gang, du bestiller tid hos os, skal du oprette en bruger. Hvis du har en bruger hos os, skal du blot logge ind og oprette en aftale. Bemærk, at aftaler kan aflyses indtil 24 timer før aftalen. Aftaler der aflyses mindre end 24 timer før aftalen opkræves et gebyr på 500 kr.</p>
                        <h3>Har du nogle spørgsmål? Kontakt os</h3>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.iframeContainer}>
                        <iframe src="https://system.easypractice.net/book/lips-by-james-cph"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}