import React from 'react';
import styles from "./TechnicalCard.module.scss";
import {Add} from "@/../public/svg";
import {Typography} from "@/components/UI/Typography";

const TechnicalCard = ({item, index}: any) => {

    return (
        <div
            className={styles.TechnicalCard}
            style={{
                backgroundColor: index % 2 !== 0 ? "#131313" : "#000"
            }}
        >
            <header>
                <img src={item.image} alt="svg"/>
                <Add/>
            </header>

            <Typography
                color={"grey"}
                size={20}
            >
                {item.title}
            </Typography>

        </div>
    );
};

export default TechnicalCard;