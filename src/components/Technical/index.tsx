import React from 'react';
import styles from "./Technical.module.scss";
import SubLine from "@/components/SubLine";
import {Typography} from "@/components/UI/Typography";
import TechnicalCard from "@/components/TechnicalCard";
import {cards} from "../../../public/mock/data";

const Technical = () => {
    return (
        <div className={styles.Technical}>
            <div className="container">
                <SubLine
                    colorLine={"white"}
                    colorTitle={"secondary"}
                    title={"CREATE SOMETHING ORIGINAL"}
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
                    Customize everything
                </Typography>

                <Typography
                    className={styles.description}
                    element={"p"}
                    size={32}
                    weight={"normal"}
                    color={"secondary"}
                    letterSpacing={2}
                >
                    Modules and layout blocks provide an easy
                    starting point. Drop your work inside,
                    customize and make it your own.
                </Typography>

                <div className={styles.cardsList}>
                    {cards.map((item, index) => (
                        <TechnicalCard key={item.id} item={item} index={index}/>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Technical;