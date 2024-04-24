import React from 'react';
import styles from "./Customize.module.scss";
import SubLine from "@/components/SubLine";
import {Typography} from "@/components/UI/Typography";
import Brands from "@/components/Brands";
import {workers} from "../../../public/mock/data";
import WorkerCard from "@/components/WorkerCard";

const Customize = () => {
    return (
        <div className={styles.Customize}>
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


            </div>
        </div>
    );
};

export default Customize;