import React from 'react';
import styles from "./Features.module.scss";
import SubLine from "@/components/SubLine";
import {Typography} from "@/components/UI/Typography";
import AnimationPart from "@/components/AnimationPart";

const Features = () => {
    return (
        <div className={styles.Features}>
            <div className="container">
                <div className={styles.topPart}>
                    <SubLine
                        colorLine={"black"}
                        colorTitle={"primary"}
                        title={"DESIGN FOR THE FUTURE"}
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
                        Features that
                        elevate your work.
                    </Typography>
                </div>
            </div>
            <AnimationPart/>
        </div>
    );
};

export default Features;