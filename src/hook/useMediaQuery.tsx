import { useState, useEffect } from 'react';

const mediaQueries: Map<string, string> = new Map();
const breakpoints: { [key: string]: number } = {
    phoneSmall: 380,
    phoneMedium: 576,
    phoneLarge: 768,
    tablet: 992,
    laptop: 1200,
    desktop: 1440,
    desktop2k: 2300,
};

function isBrowser(): boolean {
    return typeof window === 'object';
}

Object.keys(breakpoints).map((key) => {
    mediaQueries.set(key, `(max-width: ${breakpoints[key]}px)`);
});

export function useMediaQuery(query: string): boolean {
    const mediaQuery: string | undefined = mediaQueries.get(query);
    const mediaQueryList: MediaQueryList | null = isBrowser()
        ? window.matchMedia(mediaQuery || '')
        : null;

    const getInitialValue = (): boolean => {
        return isBrowser() ? (mediaQueryList ? mediaQueryList.matches : false) : false;
    };

    const [value, setValue] = useState<boolean>(() => getInitialValue());

    useEffect(() => {
        if (!isBrowser() || !mediaQueryList) {
            return;
        }

        const handler = (mql: MediaQueryListEvent): void => setValue(mql.matches);

        mediaQueryList.addListener(handler);

        return () => mediaQueryList.removeListener(handler);
    }, [mediaQueryList]);

    return value;
}
