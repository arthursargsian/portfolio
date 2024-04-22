import React from 'react';
import styles from "./Burger.module.scss";

interface BurgerProps {
    onClick?: () => void
}

const Burger = ({onClick}: BurgerProps) => {
    return (
        <div className={styles.Burger} onClick={onClick}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </div>
    );
};

export default Burger;