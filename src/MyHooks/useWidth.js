import { useState, useEffect, useCallback } from 'react';

export function useWidth(threshold, smallDeviceValues, hugeDeviceValues) {

    const compare = useCallback(
        () => threshold <= window.innerWidth ? hugeDeviceValues : smallDeviceValues,
        [hugeDeviceValues, smallDeviceValues, threshold],
    );
    const [deviceValues, setDeviceValues] = useState(compare)

    useEffect(() => {
        const updateLayout = () => {
            setDeviceValues(compare);
        };
        window.addEventListener('resize', updateLayout);
        return () => {
            window.removeEventListener('resize', updateLayout);
        };
    }, [smallDeviceValues, hugeDeviceValues, compare, threshold]);

    return deviceValues;
}