import {ReactNode} from "react";

export interface Children {
    children: ReactNode;
}

export interface ClassName {
    [classes: string]: string;
}

export interface Event {
    onClick?: () => void
}

export interface NavigationProps {
    route: Route[]
}

export interface Route {
    id: number
    name: string
    path: string
    new: boolean
}

export interface TypographyProps {
    align?: 'start' | 'center' | 'end'
    children?: React.ReactNode
    className?: string
    color?: 'primary' | 'secondary' | 'green' | 'blue' | 'grey' | string
    element?: keyof JSX.IntrinsicElements
    lineHeight?: number
    noWrap?: boolean
    fontWeight?: number
    inherit?: boolean
    size?: string | number
    underlined?: boolean
    letterSpacing?: number
    weight?: 'normal' | 'bold' | 'thin'
    onClick?: () => void
    style?: React.CSSProperties
    letters?: 'uppercase' | 'lowercase' | 'capitalize' | 'titlecase'
    cursor?: 'pointer'
}

export interface ButtonProps {
    title?: string;
    customStyles?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: () => void;
    isFixed?: boolean;
    isSmall?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    variant?: 'outlined' | 'contained' | 'animation';
    className?: string;
    href?: string;
    radius?: number;
    color?: 'primary' | 'secondary' | 'white' | 'black';
}

export interface ResponsiveImageProps {
    src: any;
    alt?: string;
    className?: string
}

export interface SubLineProps {
    colorLine: string;
    colorTitle: string;
    title: string
}