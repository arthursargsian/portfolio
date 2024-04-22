import React from 'react';
import styles from "./Brands.module.scss";
import {brands} from "@/../public/mock/data"

const Brands = () => {
    return (
        <ul className={styles.Brands}>
            {brands.map((item: any) => (
                <li key={item.id}>
                    <img src={item.logo.src}/>
                </li>
            ))}
        </ul>
    );
};

export default Brands;