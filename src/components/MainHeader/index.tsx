import React from 'react';
import styles from "./MainHeader.module.scss"
import NavBar from "../layout/NavBar";
import MobileNavBar from "@/components/layout/NavBar/MobileNavBar";
import {Typography} from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import {ArrowTop} from "@/../public/svg";

const MainHeader = () => {

    const route = [
        {id: 1, name: "Simple V6", path: "/", new: true},
        {id: 2, name: "SHOWCASE", path: "/showcase", new: false},
        {id: 3, name: "FEATURES", path: "/features", new: false},
        {id: 4, name: "RESOURCES", path: "/resources", new: false}
    ]

    return (
        <header className={styles.MainHeader}>
            <div className="container">

                <MobileNavBar route={route}/>
                <NavBar route={route}/>

                <div className={styles.heading}>
                    <Typography
                        className={styles.headingTitle}
                        element={"h2"}
                        weight={"normal"}
                        size={150}
                        letterSpacing={5}
                        fontWeight={400}
                    >
                        Think
                        <br/>outside the<br/>
                        square space.
                    </Typography>
                </div>

                <span className={styles.arrowTop}>
                    <ArrowTop/>
                </span>

                <div className={styles.services}>
                    <Typography
                        element={"p"}
                        weight={"normal"}
                        size={24}
                        fontWeight={400}
                        cursor={"pointer"}
                    >
                        is a WordPress-based portfolio tool and community of
                        the world’s leading designers.
                    </Typography>

                    <Typography
                        element={"p"}
                        weight={"normal"}
                        size={24}
                        fontWeight={400}
                        cursor={"pointer"}
                    >
                        Design a custom site that meets your level of
                        taste and standards – no templates, no coding needed.
                    </Typography>

                    <Button
                        title="Watch the trailer"
                        variant="animation"
                    />
                </div>

            </div>
        </header>
    );
};

export default MainHeader;