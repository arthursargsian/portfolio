import React from 'react';
import styles from "./AnimationService.module.scss";
import backimage from "../../../../public/image/feature.jpeg";
import {Typography} from "@/components/UI/Typography";
import ResponsiveImage from "@/components/UI/ResponsiveImage";
import Button from "@/components/UI/Button";

const AnimationService = () => {
    return (
        <div className={styles.AnimationService}>

            <div className={styles.desc}>
                <Typography
                    className={styles.title}
                    element={"h2"}
                    size={50}
                    color={"secondary"}
                    letterSpacing={1.4}
                    lineHeight={30}
                >
                    Custom Animations
                </Typography>

                <Typography
                    className={styles.description}
                    element={"p"}
                    size={24}
                    color={"secondary"}
                    letterSpacing={1.4}
                    lineHeight={20}
                >
                    However, even with these powerful visual tools at our disposal, occasional bugs may still arise.
                    These bugs can manifest in various ways, from unexpected behavior in animations to inconsistencies
                    across different devices and browsers.
                </Typography>

                <Button
                    variant={"outlined"}
                    color={"white"}
                    className={styles.button}
                >
                    Show more
                </Button>

                <Typography
                    size={16}
                    color={"secondary"}
                    letterSpacing={1.4}
                    letters={"uppercase"}
                >
                    ARTWORK BY MEDIA.WORK
                </Typography>

            </div>

            <div className={styles.image}>
                <ResponsiveImage src={backimage.src}/>
            </div>

        </div>
    );
};

export default AnimationService;