import React from 'react';
import styles from "./EditPart.module.scss";
import background from "@/../public/image/background.jpeg";
import editor from "@/../public/image/edit.jpeg";
import ResponsiveImage from "@/components/UI/ResponsiveImage";
import classNames from "classnames";
import SubLine from "@/components/SubLine";
import {Typography} from "@/components/UI/Typography";

const EditPart = () => {
    return (
        <div
            className={styles.EditPart}
            style={{
                backgroundImage: `url(${background.src})`
            }}>
            <div className={classNames(styles.editPartBlock, "container")}>

                <div>
                    <SubLine
                        colorLine={"white"}
                        colorTitle={"green"}
                        title={"BY DESIGNERS, FOR DESIGNERS"}
                    />

                    <Typography
                        className={styles.title}
                        element={"h2"}
                        size={57}
                        weight={"normal"}
                        color={"blue"}
                        letterSpacing={3}
                    >
                        The Editor
                    </Typography>

                    <Typography
                        className={styles.description}
                        size={42}
                        element={"p"}
                        weight={"normal"}
                        color={"secondary"}
                        lineHeight={54}
                    >
                        The only building experience made for a designer’s mind. Build on a grid with visual drag & drop
                        –
                        no templates. Clean and intuitive with dead-simple features, it enables evolution. Take your
                        site
                        live one day, change it up the next.
                    </Typography>
                </div>

                <ResponsiveImage src={editor} className={styles.editorImage}/>
            </div>
        </div>
    );
};

export default EditPart;