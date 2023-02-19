import Link from "next/link"
import React from "react"
import styles from './treatments.module.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function TreatmentSlider() {

    const options = {
        type: 'loop',
        perPage: 4,
        breakpoints: {
            550: {
                perPage: 1,
            },
        },
        // speed: 0,
        snap: false,
        gap: 50,
        classes: {
            arrows: 'splide__arrows arrows',
            arrow: 'splide__arrow arrow',
            prev: 'splide__arrow--prev arrow-prev',
            next: 'splide__arrow--next arrow-next',
        },
    }

    return (
        <>
            <div className={styles.treatments}>
                <div className={`container ${styles.treatmentsIntro}`}>
                    <div>
                        <h2>Høj faglighed, æstetisk sans, sikkerhed og et godt forhold til dig som klient er hjørnestenene i vores arbejde.</h2>
                        <Link href="/behandlinger">Se alle vores behandlinger</Link>
                        <div className={styles.treatmentsDivider}></div>
                    </div>
                </div>
                <div className="relative container p-0">
                    <Splide aria-label="Behandlinger" options={options} className={styles.splideContainer}>
                        <SplideSlide>
                            <Link href={"/behandlinger"}>
                                <div className={styles.splideItem}>
                                    <img src="/hero/header-3.jpg" alt="Korrektioner" />
                                    <div>
                                        <h3>Korrektioner</h3>
                                        <p>Vi tilbyder korrektion af fejlbehandlinger, arvæv eller andre udfordringer.</p>
                                    </div>
                                </div>
                            </Link>
                        </SplideSlide>
                        <SplideSlide>
                            <Link href={"/behandlinger"}>
                                <div className={styles.splideItem}>
                                    <img src="/hero/lips.jpg" alt="Læbeforstørrelse" />
                                    <div>
                                        <h3>Læbeforstørrelse</h3>
                                        <p>Ønsker du mere fylde i læberne? Vi har specialiseret os i fillers.</p>
                                    </div>
                                </div>
                            </Link>
                        </SplideSlide>
                        <SplideSlide>
                            <Link href={"/behandlinger"}>
                                <div className={styles.splideItem}>
                                    <img src="/hero/header-3.jpg" alt="Profhilo" />
                                    <div>
                                        <h3>Rynkebehandling</h3>
                                        <p>Med Profhilo kan vi udglatte rynker og skabe et yngre udtryk.</p>
                                    </div>
                                </div>
                            </Link>
                        </SplideSlide>
                        <SplideSlide>
                            <Link href={"/behandlinger"}>
                                <div className={styles.splideItem}>
                                    <img src="/hero/header-3.jpg" alt="Profhilo" />
                                    <div>
                                        <h3>Profhilo</h3>
                                        <p>Fyldige læber, udglatning af rynker og markante kindben – vi er specialister i kosmetiske fillerbehandlinger.</p>
                                    </div>
                                </div>
                            </Link>
                        </SplideSlide>
                        <SplideSlide>
                            <Link href={"/behandlinger"}>
                                <div className={styles.splideItem}>
                                    <img src="/hero/header-3.jpg" alt="Profhilo" />
                                    <div>
                                        <h3>Profhilo</h3>
                                        <p>Fyldige læber, udglatning af rynker og markante kindben – vi er specialister i kosmetiske fillerbehandlinger.</p>
                                    </div>
                                </div>
                            </Link>
                        </SplideSlide>
                        <SplideSlide>
                            <Link href={"/behandlinger"}>
                                <div className={styles.splideItem}>
                                    <img src="/hero/header-3.jpg" alt="Profhilo" />
                                    <div>
                                        <h3>Profhilo</h3>
                                        <p>Fyldige læber, udglatning af rynker og markante kindben – vi er specialister i kosmetiske fillerbehandlinger.</p>
                                    </div>
                                </div>
                            </Link>
                        </SplideSlide>
                    </Splide>
                </div>
                {/* <div className={`container ${styles.treatmentsInner}`}>
                    <div className={styles.treatment}>
                        <img src="/hero/header-3.jpg" />
                        <div>
                            <h3>Filler</h3>
                            <p>Fyldige læber, udglatning af rynker og markante kindben – vi er specialister i kosmetiske fillerbehandlinger.</p>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className={styles.treatment}>
                        <img src="/hero/lips.jpg" />
                        <div>
                            <h3>Profhilo</h3>
                            <p>Udglatter rynker og fine linier samt giver huden øget spændstighed i ansigt og på hals, arme og hænder.</p>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className={styles.treatment}>
                        <img src="/hero/header-3.jpg" />
                        <div>
                            <h3>Korrektion</h3>
                            <p>Fyldige læber, udglatning af rynker og markante kindben – vi er specialister i kosmetiske fillerbehandlinger.</p>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className={styles.treatment}>
                        <img src="/hero/header-3.jpg" />
                        <div>
                            <h3>Arvæv</h3>
                            <p>Udglatter rynker og fine linier samt giver huden øget spændstighed i ansigt og på hals, arme og hænder.</p>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}