import React from 'react';
import styles from "./ResponsiveImage.module.scss";
import Image from 'next/image'
import {ResponsiveImageProps} from "@/interfaces/props";
import classNames from "classnames";

const ResponsiveImage = ({src, alt = 'alt', className}: ResponsiveImageProps) => {
    return (
        <div className={classNames(styles.ResponsiveImage, className)}>
            <Image
                alt={alt}
                className={styles.image}
                fill
                priority
                src={src}
            />
        </div>
    );
};

export default ResponsiveImage;
