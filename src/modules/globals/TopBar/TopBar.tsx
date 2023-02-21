import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Bars4Icon } from '@heroicons/react/24/solid'

import styles from './top-bar.module.scss'
import classNames from "classnames"
import { useRouter } from "next/router"
import { getDictionaryValue } from "../../../helpers/getDictionaryValue"

type TopBarProps = {
    colorTheme: string;
}

export const TopBar = ({ colorTheme }: TopBarProps) => {
    const { locale, ...router } = useRouter();
    const data = getDictionaryValue();

    function isLocaleActive(text) {
        if (text.toLowerCase() == locale) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className={classNames(styles.topbar, colorTheme === 'light' ? styles.light : styles.dark)}>
            <div className={styles.topbarOverlay}></div>
            <div className={`${styles.topbarGrid} ${colorTheme === 'light' ? styles.light : styles.dark}`}>
                <div className={styles.topbarItem}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_457)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.9 8.1L4.5 9.5L9 14L19 4L17.6 2.6L9 11.2L5.9 8.1ZM18 10C18 14.4 14.4 18 10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C10.8 2 11.5 2.1 12.2 2.3L13.8 0.7C12.6 0.3 11.3 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10H18Z" fill="#484444" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_457">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p>{data.general.topbar.license}</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Vi har åbent alle ugens dage - også aften og weekend.</p>
                    </div>
                </div>
                <div className={styles.topbarItem}>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8438 4.31248H2.15625H2.09875C2.04867 4.30567 1.9979 4.30567 1.94781 4.31248L1.82562 4.36279C1.78652 4.38162 1.75024 4.40581 1.71781 4.43466C1.67692 4.46247 1.64056 4.49641 1.61 4.53529L1.56688 4.57841C1.56417 4.59989 1.56417 4.62162 1.56688 4.6431C1.5434 4.68668 1.52414 4.73241 1.50937 4.77966C1.47921 4.83689 1.45512 4.89711 1.4375 4.95935V5.03123V17.9687C1.4375 18.1593 1.51323 18.3422 1.64802 18.477C1.78281 18.6118 1.96563 18.6875 2.15625 18.6875H20.8438C21.0344 18.6875 21.2172 18.6118 21.352 18.477C21.4868 18.3422 21.5625 18.1593 21.5625 17.9687V5.03123C21.5625 4.8406 21.4868 4.65778 21.352 4.52299C21.2172 4.3882 21.0344 4.31248 20.8438 4.31248ZM11.5 10.6447L4.45625 5.74998H19.4709L11.5 10.6447ZM2.875 17.25V6.40404L11.0903 12.0894C11.132 12.1138 11.1752 12.1354 11.2197 12.154H11.2772C11.3478 12.1865 11.4229 12.2083 11.5 12.2187C11.6022 12.216 11.7027 12.1915 11.7947 12.1469H11.845L20.125 7.03654V17.25H2.875Z" fill="#484444" />
                    </svg>
                    <p>{data.general.mail}</p>
                </div>
                <div className={styles.topbarItem}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.0601 5.7332C10.5973 6.3286 10.427 7.00313 9.95205 7.64316C9.83945 7.7949 9.70966 7.94441 9.5529 8.10916C9.47766 8.18824 9.41899 8.24771 9.29627 8.37055C9.01757 8.64953 8.78328 8.88395 8.5934 9.07381C8.50132 9.16589 9.12999 10.4222 10.3501 11.6434C11.5695 12.864 12.8257 13.4931 12.9182 13.4006L13.6206 12.6978C14.0074 12.3106 14.2122 12.1238 14.4937 11.9392C15.0789 11.5552 15.7171 11.4509 16.2554 11.9323C18.013 13.1895 19.0077 13.961 19.4949 14.4673C20.4453 15.4548 20.3208 16.9749 19.5003 17.8421C19.2158 18.1428 18.8551 18.5037 18.429 18.9144C15.8518 21.4931 10.4126 19.9238 6.24402 15.7512C2.07452 11.5776 0.506075 6.13787 3.07792 3.56464C3.53964 3.09566 3.69188 2.94351 4.14155 2.50042C4.97877 1.67549 6.56897 1.54632 7.53565 2.50124C8.04413 3.00353 8.85477 4.04655 10.0601 5.7332ZM14.9164 13.994L14.2138 14.6969C13.0197 15.8918 10.986 14.8733 9.05414 12.9395C7.12093 11.0044 6.1036 8.9715 7.29816 7.77704C7.48778 7.58743 7.72185 7.35324 8.00034 7.07447C8.11271 6.96199 8.16411 6.90989 8.2258 6.84505C8.30985 6.75671 8.37892 6.67912 8.43423 6.61047C7.36597 5.1224 6.63979 4.19258 6.24831 3.80586C6.04614 3.60615 5.59343 3.64292 5.42724 3.80668C4.98398 4.24344 4.83828 4.38906 4.37842 4.85611C2.72447 6.51097 3.99063 10.9023 7.53995 14.4551C11.0882 18.0068 15.4788 19.2736 17.1453 17.6063C17.5648 17.2018 17.9066 16.8598 18.1697 16.5817C18.3598 16.3808 18.3937 15.9662 18.175 15.739C17.8108 15.3605 16.9191 14.6653 15.3794 13.5596C15.2672 13.6499 15.1292 13.7809 14.9164 13.994Z" fill="#484444" />
                    </svg>
                    <p>{data.general.phone}</p>
                </div>
                <div className={styles.topbarItem}>
                    <Link href="" locale={locale === "da" ? "en" : "da"}><span className={isLocaleActive("da") && styles.activeLanguage}>DA</span> / <span className={isLocaleActive("en") && styles.activeLanguage}>EN</span></Link>
                </div>
            </div>
        </div >
    )
}