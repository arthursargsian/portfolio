import React from 'react';
import styles from "./NavBar.module.scss";
import {Typography} from "@/components/UI/Typography";
import Logo from "@/components/Logo";
import classNames from "classnames";
import {useMediaQuery} from "@/hook/useMediaQuery";

const route = [
    {id: 1, name: "Simple V6", path: "/", new: true},
    {id: 2, name: "SHOWCASE", path: "/showcase", new: false},
    {id: 3, name: "FEATURES", path: "/features", new: false},
    {id: 4, name: "RESOURCES", path: "/resources", new: false}
]

const NavBar = () => {

    return (
        <header className={classNames(styles.NavBar, "container")}>
            <span className={styles.span}/>

            <ul>
                {route.map((item) => (
                    <li key={item.id} className={classNames({[styles.new]: item.new})}>
                        {item.new && <Typography
                            letters={"uppercase"}
                            size={8}
                            letterSpacing={1.5}
                            weight={"normal"}>
                            New
                        </Typography>}
                        <Typography
                            letters={"uppercase"}
                            size={12}
                            letterSpacing={1.5}
                            weight={"normal"}>
                            {item.name}
                        </Typography>
                    </li>
                ))}
            </ul>
            <Logo/>
        </header>
    );
};

export default NavBar;