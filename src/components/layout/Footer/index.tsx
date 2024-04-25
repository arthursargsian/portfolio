import React from 'react';
import styles from "./Footer.module.scss";
import {Eagle} from "@/../public/svg";
import Divider from "@/components/UI/Divider";
import {Typography} from "@/components/UI/Typography";

const types1 = [
    {name: "Reviews"},
    {name: "Why Semplice"},
    {name: "Video Tutorials"},
]

const types2 = [
    {name: "Supply"},
    {name: "Developers"},
    {name: "Get Support"},
]

const tipsTricks = [
    {name: "Hosting for Semplice"},
    {name: "Creating your first portfolio"},
    {name: "Our favorite type foundries"},
    {name: "How to write case studies"},
    {name: "How to launch your portfolio"},
    {name: "How to hire a UX designer"},
    {name: "How to create your about page"},
]

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className="container">

                <header className={styles.head}>
                    <Eagle/>
                    <Typography element={"p"}>
                        <Typography weight={"bold"}>
                            Simple
                        </Typography>
                        • Building with Pride
                    </Typography>
                </header>

                <Divider color={"#EFEFEF"}/>

                <footer className={styles.footerBellow}>
                    <div className={styles.types}>
                        <ul>
                            {types1.map((item, index) => (
                                <li key={index}>
                                    <Typography
                                        size={39}
                                    >
                                        {`→ ${item.name}`}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                        <ul>
                            {types2.map((item, index) => (
                                <li key={index}>
                                    <Typography
                                        size={39}
                                    >
                                        {`→ ${item.name}`}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.tipsTricks}>
                        <Typography
                            element={"h6"}
                            size={16}
                        >
                            Tips & Tricks
                        </Typography>
                        <ul>
                            {tipsTricks.map((item, index) => (
                                <li key={index}>
                                    <Typography
                                        size={16}
                                    >
                                        {`→ ${item.name}`}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>

                </footer>

            </div>
        </footer>
    );
};

export default Footer;