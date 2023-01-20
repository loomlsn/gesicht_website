import React from "react"
import { Footer } from "../globals/Footer/Footer";
import { Header } from "../globals/Header/Header";

// import '../../base.scss'

type MainLayoutProps = {
    children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}