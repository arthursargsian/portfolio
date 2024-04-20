import React, {useState} from 'react';
import styles from "./MobileNavBar.module.scss";
import {Typography} from "@/components/UI/Typography";
import Logo from "@/components/Logo";
import classNames from "classnames";
import Burger from "@/components/Burger";
import {ArrowRight} from "../../../../../public/svg";

const route = [
    {id: 1, name: "Simple V6", path: "/", new: true},
    {id: 2, name: "SHOWCASE", path: "/showcase", new: false},
    {id: 3, name: "FEATURES", path: "/features", new: false},
    {id: 4, name: "RESOURCES", path: "/resources", new: false}
]

const MobileNavBar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className={classNames(styles.MobileNavBar, "container")}>
            <Burger onClick={() => setOpen((prev) => !prev)}/>

            <nav className={classNames(styles.nav, {[styles.open]: isOpen})}>
                <ArrowRight onClick={() => setOpen((prev) => !prev)}/>
                <header>
                    {route.map((item) => (
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
                                letters={"uppercase"}
                                size={12}
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