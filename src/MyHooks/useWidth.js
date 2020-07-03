import { useState, useEffect, useCallback } from 'react';

export function useWidth(threshold, smallDeviceValues, hugeDeviceValues) {

    const compare = useCallback(
        () => threshold <= window.innerWidth ? hugeDeviceValues : smallDeviceValues,
        [hugeDeviceValues, smallDeviceValues, threshold],
    );
    //const compare = () => threshold <= window.innerWidth ? hugeDeviceValues : smallDeviceValues
    const [deviceValues, setDeviceValues] = useState(compare)

    useEffect(() => {
        console.log("im here", compare())
        const updateLayout = () => {
            setDeviceValues(compare);
        };
        window.addEventListener('resize', updateLayout);
        return () => {
            window.removeEventListener('resize', updateLayout);
        };
    }, [smallDeviceValues, hugeDeviceValues, compare, threshold]);

    return {
        deviceValues
    };
}