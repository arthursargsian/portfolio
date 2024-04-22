import React from 'react';
import styles from "./Divider.module.scss";

interface DividerProps {
    color: string;
}

const Divider: React.FC<DividerProps> = ({color}) => {
    return (
        <hr className={styles.Divider} style={{
            borderColor: color
        }}/>
    );
};

export default Divider;
