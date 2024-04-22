import classNames from 'classnames';
import {RobotoRegular, RobotoThin, RobotoBold} from '@/../public/fonts/fonts';
import styles from './Typography.module.scss';
import {TypographyProps} from "@/interfaces/props";

export const Typography = (props: TypographyProps) => {
    const {
        align,
        children,
        className,
        color = 'primary',
        element = 'span',
        lineHeight,
        noWrap,
        fontWeight,
        inherit,
        size,
        underlined,
        letterSpacing,
        weight = 'normal',
        onClick,
        style,
        letters,
        cursor
    } = props;

    const classes = classNames(
        styles.typography,
        className,
        styles[`typography-${size}`],
        {
            [styles.colorPrimary]: color === 'primary',
            [styles.colorSecondary]: color === 'secondary',
            [styles.colorGreen]: color === 'green',
            [styles.colorBlue]: color === 'blue',
            [styles.colorGrey]: color === 'grey',
            [styles.alignStart]: align === 'start',
            [styles.alignCenter]: align === 'center',
            [styles.alignEnd]: align === 'end',
            [styles.noWrap]: noWrap,
            [RobotoBold.className]: weight === 'bold',
            [RobotoRegular.className]: weight === 'normal',
            [RobotoThin.className]: weight === 'thin',
            [styles.underlined]: underlined,
            [styles.inherit]: inherit,
            [styles.uppercase]: letters === "uppercase",
            [styles.lowercase]: letters === "lowercase",
            [styles.capitalize]: letters === "capitalize",
            [styles.titlecase]: letters === "titlecase",
            [styles.cursor]: cursor === "pointer",

        },
    )

    const Component = element;

    return (
        <Component
            className={classes}
            onClick={onClick}
            style={{
                lineHeight: lineHeight !== undefined ? `${lineHeight}px` : undefined,
                fontWeight: fontWeight !== undefined ? fontWeight : undefined,
                letterSpacing: letterSpacing !== undefined ? `${letterSpacing}px` : undefined,
                ...style,
            }}
        >
            {children}
        </Component>
    );
}
