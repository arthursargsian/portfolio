import React from 'react';
import {Event} from "@/interfaces/props";


export const RightButton = ({onClick}: Event) => {
    return (
        <svg onClick={onClick} width="79.000000" height="60.000000" viewBox="0 0 79 60" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path id="Vector"
                  d="M-0.95 34.28L59.59 34.28L43.21 54.41L54.74 59.64L78.98 29.44L54.87 -0.66L43.21 4.57L59.59 24.31L-0.95 24.31L-0.95 34.28Z"
                  fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero"/>
        </svg>
    );
};

export const LeftButton = ({onClick}: Event) => {
    return (
        <svg onClick={onClick} width="80.000000" height="60.000000" viewBox="0 0 80 60" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path id="Vector"
                  d="M79.16 24.31L18.63 24.31L35 4.57L23.34 -0.66L-0.77 29.44L23.47 59.64L35 54.41L18.63 34.28L79.16 34.28L79.16 24.31Z"
                  fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero"/>
        </svg>
    );
};
