import Link from "next/link"
import React from "react"
import styles from './about-section.module.scss'

const employees = [
    {
        name: "Peter James Bruhn",
        title: "Title",
        image: "/ibsa/aliaxin.jpg"
    }, {
        name: "Vibeke Schaffalitzky de Muckadell",
        title: "Title",
        image: "/ibsa/aliaxin.jpg"
    }, {
        name: "Dennis Bregner Zetner",
        title: "Title",
        image: "/ibsa/aliaxin.jpg"
    }, {
        name: "Anders Funding La Cour",
        title: "Title",
        image: "/ibsa/aliaxin.jpg"
    }
]

export default function AboutSection() {
    return (
        <>
            <div className={styles.aboutContainer}>
                <div className={`container ${styles.aboutInner}`}>
                    <div className={styles.introAbout}>
                        <h2>Gesicht er din fillerklinik i centrum af København, beliggende i moderne og lækre lokaler i Knabrostræde, blot et stenkast fra Strøget.</h2>
                        <p>Hos os bliver du altid mødt af venligt og kompetent personale, hvis fælles mission er at bringe dine behov som klient i fokus. Hos os findes ingen dumme spørgsmål. Alle behandlere er kvalificerede læger, uddannet og certificerede i behandling med ikke-permanente fillers i international standard. Høj faglighed, æstetisk sans, sikkerhed og et godt forhold til dig som klient er hjørnestenene i vores arbejde. Klinikkens ansvarshavende læge er Peter James Bruhn.</p>
                        <button>Læs mere</button>
                    </div>
                    <div className={styles.imageAbout}>

                        <img src="/hero/header-3.jpg" />
                    </div>
                </div>
            </div>
            <div className={styles.employeesContainer}>
                <div className="container">
                    <h2>Vores behandlere</h2>
                    <div className={styles.employeesInner}>
                        {employees.map((employee, index) => (
                            <div className={styles.employee}>
                                <img src={employee.image} />
                                <div className={styles.info}>
                                    <h3>{employee.name}</h3>
                                    <p>{employee.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}