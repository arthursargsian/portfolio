import React from 'react';
import styles from "./MainHeader.module.scss"
import NavBar from "../layout/NavBar";
import MobileNavBar from "@/components/layout/NavBar/MobileNavBar";
import {useMediaQuery} from "@/hook/useMediaQuery";

const MainHeader = () => {

    return (
        <header className={styles.MainHeader}>
            <MobileNavBar/>
            <NavBar/>
        </header>
    );
};

export default MainHeader;