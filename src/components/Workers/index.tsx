import React from 'react';
import styles from "./Workers.module.scss";
import SubLine from "@/components/SubLine";
import {Typography} from "@/components/UI/Typography";
import Brands from "@/components/Brands";
import WorkerCard from "@/components/WorkerCard";
import {workers} from "../../../public/mock/data";

const Workers = () => {
    return (
        <div className={styles.Workers}>
            <div className="container">
                <SubLine
                    colorLine={"black"}
                    colorTitle={"primary"}
                    title={"TRUSTED BY THE BEST"}
                />

                <Typography
                    className={styles.title}
                    element={"h2"}
                    size={83}
                    weight={"normal"}
                    color={"primary"}
                    letterSpacing={2}
                    lineHeight={90}
                >
                    The world is leading
                    designers use and
                    love Semplice.
                </Typography>

                <Typography
                    className={styles.description}
                    element={"p"}
                    size={32}
                    weight={"normal"}
                    color={"grey"}
                    letterSpacing={2}
                >
                    → See their portfolios
                </Typography>

                <Brands/>

                <div className={styles.workersList}>
                    {workers.map((item: any) => (
                        <WorkerCard workers={item} key={item.id}/>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Workers;