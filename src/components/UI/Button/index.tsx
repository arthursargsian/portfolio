import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import styles from './Button.module.scss'
import {ButtonProps} from "@/interfaces/props";

const Button = (props: ButtonProps) => {
    const {
        title,
        customStyles,
        children,
        onClick,
        isFixed,
        isSmall,
        isLoading,
        disabled,
        fullWidth,
        variant,
        className,
        href,
        radius,
        color = 'primary',
    } = props;


    const linkComponent = (props: any) => {
        return (
            <Link href={href} {...props}></Link>
        )
    }

    const Component = href ? linkComponent : 'button';

    return (
        <Component
            onClick={onClick}

            style={{
                ...customStyles,
                borderRadius: radius !== undefined ? `${radius}px` : undefined,
            }}

            className={classNames(
                className,
                styles.button,
                {
                    [styles.colorPrimary]: color === 'primary',
                    [styles.colorSecondary]: color === 'secondary',
                    [styles.link]: href,
                    [styles.smallButton]: isSmall,
                    [styles.fixed]: isFixed,
                    [styles.disabled]: disabled || isLoading,
                    [styles.fullWidth]: fullWidth,
                    [styles.outlined]: variant === 'outlined',
                    [styles.outlinedWhite]: variant === 'outlined' && color === 'white',
                    [styles.contained]: variant === 'contained',
                    [styles.animation]: variant === 'animation',
                })
            }
        >
            {!isLoading ? <div className={styles.title}> {title ?? children} </div> : "Loading..."}
            {variant === 'animation' && <i/>}
        </Component>
    )
}

export default Button;