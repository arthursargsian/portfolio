import React from 'react';
import styles from "./Showcase.module.scss";
import SubLine from "@/components/SubLine";
import {Typography} from "@/components/UI/Typography";
import Marquee from "react-fast-marquee";
import {showcaseList} from "../../../public/mock/data";

const Showcase = () => {
    return (
        <div className={styles.Showcase} id={"showcase"}>
            <div className="container">
                <SubLine
                    colorLine={"white"}
                    colorTitle={"secondary"}
                    title={"THE SIMPLE SHOWCASE"}
                />

                <Typography
                    className={styles.title}
                    element={"h2"}
                    size={83}
                    weight={"normal"}
                    color={"secondary"}
                    letterSpacing={2}
                    lineHeight={90}
                >
                    Proudly serving a
                    niche community.
                </Typography>

                <Typography
                    className={styles.description}
                    element={"p"}
                    size={32}
                    weight={"normal"}
                    color={"secondary"}
                    letterSpacing={2}
                >
                    → See their portfolios
                </Typography>
            </div>

            <Marquee speed={50} gradient={false}>
                {showcaseList.map((item) => (
                    <div key={item.id} className={styles.showcaseList}>
                        <img src={item.path} alt="image"/>
                    </div>
                ))}
            </Marquee>

            <Marquee speed={40} gradient={false}>
                {showcaseList.map((item) => (
                    <div key={item.id} className={styles.showcaseList}>
                        <img src={item.path} alt="image"/>
                    </div>
                ))}
            </Marquee>

            <Marquee speed={54} gradient={false}>
                {showcaseList.map((item) => (
                    <div key={item.id} className={styles.showcaseList}>
                        <img src={item.path} alt="image"/>
                    </div>
                ))}
            </Marquee>

        </div>
    );
};

export default Showcase;