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
                        {data.about.info.text.map((text) => (
                            <p>{text.text}</p>
                        ))}
                    </div>
                    <div className={styles.imageAbout}>
                        {/* 
                        <img src="/hero/header-3.jpg" /> */}
                    </div>
                </div>
            </div>
            <div className={styles.employeesContainer}>
                <div className="container relative">
                    <div className={styles.divider}></div>
                    <div className={styles.employeeTextContainer}>
                        <h2>{data.about.employees.title}</h2>
                        <p>{data.about.employees.text}</p>
                    </div>
                    <div className={styles.employeesInner}>
                        <div className={styles.employee}>
                            <img src={data.about.employees.employees[0].image} />
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
                            <img src={data.about.employees.employees[1].image} />
                        </div>
                        <div className={styles.employee}>
                            <img src={data.about.employees.employees[2].image} />
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
                            <img src={data.about.employees.employees[3].image} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}