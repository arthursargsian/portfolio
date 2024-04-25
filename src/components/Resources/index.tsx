import React from 'react';
import styles from "./Resources.module.scss";
import SubLine from "@/components/SubLine";
import {Typography} from "@/components/UI/Typography";
import Button from "@/components/UI/Button";
import {buttons, products} from "../../../public/mock/data";
import ProductCard from "@/components/ProductCard";

const Resources = () => {
    return (
        <div className={styles.Resources}>
            <div className="container">
                <SubLine
                    colorLine={"black"}
                    colorTitle={"secondary"}
                    title={"Semplice • Supply"}
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
                    Resources for creatives,
                    made the Semplice way
                </Typography>

                <div className={styles.buttons}>
                    {buttons.map((item) => (
                        <Button
                            key={item.id}
                            className={styles.button}
                            color={"white"}
                            variant={"outlined"}
                        >
                            {item.title}
                        </Button>
                    ))}
                </div>

                <Typography
                    className={styles.description}
                    element={"p"}
                    size={20}
                    weight={"normal"}
                    color={"primary"}
                    letterSpacing={2}
                >
                    → View full catalog
                </Typography>

                <div className={styles.productsList}>
                    {products.map((item) => (
                        <ProductCard item={item} key={item.id}/>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Resources;