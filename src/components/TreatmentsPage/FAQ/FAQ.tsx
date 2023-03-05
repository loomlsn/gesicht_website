import Link from "next/link"
import { useRouter } from "next/router";
import React, { useState } from "react"
import styles from './faq.module.scss'

type IntroProps = {
    data: any;
}

export default function IntroSection({ data }: IntroProps) {
    return (
        <div className={styles.faq}>
            <div className="container">
                <div className={styles.faqContainer}>
                    <h2>Ofte stillede spørgsmål</h2>
                    <p>Stadig i tvivl? Kontakt os her.</p>
                    <div className={styles.questionContainer}>
                        {data.filler.questions.map((item, i) => {
                            return (
                                <AccordionItem question={item.question} answer={item.answer} key={`accordion-${i}`} />
                            )
                        })}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

type AccordionItemProps = {
    question: string;
    answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div>
            <div className={`${styles.treatmentWrapper} ${isActive ? styles.active : ""}`} onClick={() => setIsActive(!isActive)}>
                <div className={styles.treatmentItem}>
                    <div>
                        <h3>{question}</h3>
                    </div>
                </div>
                <button className={`${styles.arrow} ${isActive ? styles.active : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </button>
            </div>
            <div className={`${styles.accordionContent} ${isActive ? styles.active : ""}`}>
                <p>{answer}</p>
            </div>
        </div>
    )
}