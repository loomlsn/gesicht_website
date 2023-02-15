import React from "react"
import { Footer } from "../globals/Footer/Footer";
import { Header } from "../globals/Header/Header";
import { TopBar } from "../globals/TopBar/TopBar";
import { colorTheme } from "../globals/settings";

// import '../../base.scss'

type MainLayoutProps = {
    children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <TopBar colorTheme={colorTheme} />
            <Header colorTheme={colorTheme} />
            {children}
            <Footer />
        </>
    )
}