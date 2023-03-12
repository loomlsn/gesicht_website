import Link from "next/link"
import React from "react"
import { getDictionaryValue } from "../../../helpers/getDictionaryValue";
import styles from './about-section.module.scss'

export default function AboutSection() {
    const data = getDictionaryValue();
    return (
        <>
            <div className={styles.aboutContainer}>
                <div className={`container ${styles.aboutInner}`}>
                    <div className={styles.introAbout}>
                        <h2>{data.about.info.title}</h2>
                        <p>{data.about.info.text[0].text} {data.about.info.text[1].text}</p>
                        <p>{data.about.info.text[2].text}</p>
                        <p>{data.about.info.text[3].text}<Link href={`/kontakt`} >{data.about.info.text[4].text}</Link>{data.about.info.text[5].text}</p>
                    </div>
                    <div className={styles.imageAbout}>
                        <div className={styles.imageOverlay}></div>
                        <img src={data.about.employees.employees[0].image} />
                        <div className={styles.employee}>
                            <h3>{data.about.employees.employees[0].name}</h3>
                            <p>{data.about.employees.employees[0].title}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.employeesContainer}>
                <div className={styles.employeeBG}></div>
                <div className="container">
                    <div className={styles.employeesInner}>
                        <div className={styles.imgContainer}><img src="/hero/clinic.jpg" /></div>
                        <div className={styles.employeesRight}>
                            <h2>{data.about.employees.title}</h2>
                            <div className={styles.employees}>
                                <div className={styles.employee}>
                                    <div className={styles.info}>
                                        <h3>{data.about.employees.employees[0].name}</h3>
                                        <p>{data.about.employees.employees[0].title}</p>
                                        <div className={styles.employeeDivider}></div>
                                    </div>
                                </div>
                                <div className={styles.employee}>
                                    <div className={styles.info}>
                                        <h3>{data.about.employees.employees[1].name}</h3>
                                        <p>{data.about.employees.employees[1].title}</p>
                                        <div className={styles.employeeDivider}></div>
                                    </div>
                                </div>
                                <div className={styles.employee}>
                                    <div className={styles.info}>
                                        <h3>{data.about.employees.employees[2].name}</h3>
                                        <p>{data.about.employees.employees[2].title}</p>
                                        <div className={styles.employeeDivider}></div>
                                    </div>
                                </div>
                                <div className={styles.employee}>
                                    <div className={styles.info}>
                                        <h3>{data.about.employees.employees[3].name}</h3>
                                        <p>{data.about.employees.employees[3].title}</p>
                                        <div className={styles.employeeDivider}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.certified}>
                                <p>{data.about.extra.text}</p>
                                <p>{data.about.extra.text2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}