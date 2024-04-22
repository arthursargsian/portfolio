import React from 'react';
import styles from "./NavBar.module.scss";
import {Typography} from "@/components/UI/Typography";
import Logo from "@/components/Logo";
import classNames from "classnames";
import {NavigationProps, Route} from "@/interfaces/props";


const NavBar = ({route}: NavigationProps) => {

    return (
        <header className={styles.NavBar}>
            <span className={styles.span}/>

            <ul>
                {route.map((item: Route) => (
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
                            size={19}
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