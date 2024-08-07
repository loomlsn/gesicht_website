import { useState, useEffect } from 'react';

export default function useWindowDimensions() {

    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    function handleResize() {
        setWindowDimensions(getWindowDimensions());
    }

    useEffect(() => {
        if (hasWindow) {
            handleResize()
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    return windowDimensions;
}

export function isDeviceMobile() {
    const [isMobile, setIsMobile] = useState(null);
    const { height, width } = useWindowDimensions();

    useEffect(() => {
        if (width > 768) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }, [width, height])

    return isMobile;
} 