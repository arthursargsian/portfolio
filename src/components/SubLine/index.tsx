import React from 'react';
import {Typography} from "@/components/UI/Typography";
import Divider from "@/components/UI/Divider";
import styles from "./SubLine.module.scss";
import {SubLineProps} from "@/interfaces/props";
import {useMediaQuery} from "@/hook/useMediaQuery";

const SubLine = ({colorLine, colorTitle, title}: SubLineProps) => {
    const phoneLarge = useMediaQuery("phoneLarge")

    return (
        <div className={styles.SubLine}>
            <Typography
                element={"p"}
                color={colorTitle}
                size={16}
                fontWeight={400}
                weight={"normal"}
                lineHeight={16}
                letterSpacing={1.81}
                style={{
                    minWidth: !phoneLarge ? "max-content" : ""
                }}
            >
                {title}
            </Typography>
            <Divider color={colorLine}/>
        </div>
    );
};

export default SubLine;