import Link from "next/link"
import React from "react"
import styles from './intro-section.module.scss'

type IntroSectionProps = {
    title?: string
    colorTheme: 'light' | 'dark'
}

export default function IntroSection({ title, colorTheme }: IntroSectionProps) {
    return (
        <div className={`${styles.introOuter} ${colorTheme === "light" ? styles.light : styles.dark}`}>
            <Link href={"/"}>
                <div className={styles.bgRight}></div>
                <div className={`container ${styles.introContainer}`}>
                    <div className={styles.introImage}>
                        <img src="/hero/intro.jpg" />
                    </div>
                    <div className={styles.introTitle}>
                        <h2>{title}</h2>
                        <p>Læs mere om klinikken</p>
                        <div className={styles.border}></div>
                    </div>
                </div></Link>
        </div>
        //     <div className={`container ${styles.introContainer}`}>
        //     <div className={styles.introText}>
        //         <div className={styles.prewrap}>No one rejects, dislikes, or avoids pleasure itself, because it is <a href="/">pleasure</a>, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
        //             <br /><br />Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes.
        //             <br /><br />Laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,</div>
        //     </div>
        //     <div className={styles.introTitle}>
        //         <h2>{title}</h2>
        //         <p>Læs mere om klinikken</p>
        //     </div>
        // </div>
    )
}