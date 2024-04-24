import React from 'react';
import styles from "./ResponsiveService.module.scss";
import mobile from "../../../../public/image/mobjpeg.jpeg";
import dog from "../../../../public/image/@.png";
import {Typography} from "@/components/UI/Typography";
import ResponsiveImage from "@/components/UI/ResponsiveImage";
import Button from "@/components/UI/Button";

const ResponsiveService = () => {
    return (
        <div className={styles.ResponsiveService}>
            <div className={styles.firtsPart}>
                <ResponsiveImage src={dog.src} className={styles.firtsPartImg}/>

                <div className={styles.descBlock}>
                    <Typography
                        className={styles.title}
                        element={"h2"}
                        size={50}
                        color={"primary"}
                        letterSpacing={1.4}
                        lineHeight={30}
                        align={"center"}
                    >
                        Custom Type
                    </Typography>

                    <Typography
                        className={styles.description}
                        element={"p"}
                        size={24}
                        color={"primary"}
                        letterSpacing={1.4}
                        lineHeight={20}
                        align={"center"}
                    >
                        We’re type lovers too. Upload self-hosted or web fonts in seconds, including variable typefaces.
                        Build efficiently with your own global type system.
                    </Typography>

                    <Button
                        variant={"outlined"}
                        className={styles.button}
                        color={"grey"}
                    >
                        Show more
                    </Button>
                </div>
            </div>

            <div className={styles.secondPart}>
                <div className="container">
                    <div className={styles.descBlock}>
                        <Typography
                            className={styles.title}
                            element={"h2"}
                            size={50}
                            color={"primary"}
                            letterSpacing={1.4}
                            lineHeight={30}
                            align={"center"}
                        >
                            Custom Type
                        </Typography>

                        <Typography
                            className={styles.description}
                            element={"p"}
                            size={24}
                            color={"primary"}
                            letterSpacing={1.4}
                            lineHeight={20}
                            align={"center"}
                        >
                            We’re type lovers too. Upload self-hosted or web fonts in seconds, including variable
                            typefaces.
                            Build efficiently with your own global type system.
                        </Typography>

                        <Button
                            variant={"outlined"}
                            className={styles.button}
                            color={"grey"}
                        >
                            Show more
                        </Button>
                    </div>
                </div>
                <ResponsiveImage src={mobile.src} className={""}/>
            </div>

        </div>
    );
};

export default ResponsiveService;