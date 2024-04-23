import React from 'react';
import styles from "./WorkerCard.module.scss";
import {Typography} from "@/components/UI/Typography";

interface WorkerCardProp {
    workers: {
        id: number
        avatar: any
        name: string
        position: string
    }
}

const WorkerCard = ({workers}: WorkerCardProp) => {

    return (
        <figcaption className={styles.WorkerCard}>
            <img
                alt={"not found"}
                src={workers.avatar.src} className={styles.card}
            />

            <Typography
                element={"h5"}
                size={26}
                className={styles.cardName}
            >
                {workers.name}
            </Typography>

            <Typography
                element={"p"}
                size={19}
                className={styles.cardDesc}
            >
                {workers.position}
            </Typography>
        </figcaption>
    );
};

export default WorkerCard;