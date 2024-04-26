import React, {useEffect, useState} from 'react';
import styles from "./MobileNavBar.module.scss";
import {Typography} from "@/components/UI/Typography";
import Logo from "@/components/Logo";
import classNames from "classnames";
import Burger from "../../Burger";
import {ArrowRight} from "../../../../../public/svg";
import {NavigationProps, Route} from "@/interfaces/props";


const MobileNavBar = ({route}: NavigationProps) => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isOpen]);

    return (
        <header className={styles.MobileNavBar}>
            <Burger onClick={() => setOpen((prev) => !prev)}/>

            <nav className={classNames(styles.nav, {[styles.open]: isOpen})}>
                <ArrowRight onClick={() => setOpen((prev) => !prev)}/>
                <header>
                    {route.map((item: Route) => (
                        <span key={item.id} className={classNames({[styles.new]: item.new})}>
                        {item.new && <Typography
                            letters={"uppercase"}
                            size={8}
                            letterSpacing={1.5}
                            color={"secondary"}
                            weight={"normal"}>
                            New
                        </Typography>}
                            <Typography
                                element={"a"}
                                onClick={() => setOpen((prev) => !prev)}
                                letters={"uppercase"}
                                size={16}
                                href={item.fragment}
                                letterSpacing={1.5}
                                color={"secondary"}
                                weight={"normal"}>
                            {item.name}
                        </Typography>
                    </span>
                    ))}
                </header>
            </nav>

            <Logo/>
        </header>
    );
};

export default MobileNavBar;