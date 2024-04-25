import React from 'react';
import styles from "./ProductCard.module.scss";
import {Typography} from "@/components/UI/Typography";
import ResponsiveImage from "@/components/UI/ResponsiveImage";

const ProductCard = ({item}: any) => {
    return (
        <div className={styles.ProductCard}>
            <ResponsiveImage src={item.image}/>

            <div className={styles.description}>
                <Typography
                    element={"h5"}
                    size={20}
                >
                    {item.name}
                </Typography>
                <Typography
                    element={"p"}
                    size={19}
                    color={"grey"}
                >
                    {item.desc}
                </Typography>
            </div>
        </div>
    );
};

export default ProductCard;