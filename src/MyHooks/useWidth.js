import { useState, useEffect, useCallback } from 'react';

export function useWidth(thresholds, results) {

    const compare = useCallback(
        () => {
            const width = window.innerWidth;

            if (thresholds === undefined || results === undefined
                || !Array.isArray(thresholds) || !Array.isArray(results))
                return null;

            if (width <= thresholds[0])
                return results[0];
            if (width >= thresholds[thresholds.length - 1])
                return results[results.length - 1]

            for (let i = 0; i < thresholds.length - 1; i++) {
                if (width >= thresholds[i] && width < thresholds[i + 1])
                    return results[i + 1];
            }

        },
        [results, thresholds],
    );
    const [resultValue, setResultValue] = useState(compare);
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const updateLayout = () => {
            setResultValue(compare);
            setWidth(window.innerWidth)
        };
        window.addEventListener('resize', updateLayout);
        return () => {
            window.removeEventListener('resize', updateLayout);
        };
    }, [thresholds, results, compare]);

    return { resultValue, width };
}



// import { useState, useEffect, useCallback } from 'react';

// export function useWidth(threshold, smallDeviceValues, hugeDeviceValues) {

//     const compare = useCallback(
//         () => threshold <= window.innerWidth ? hugeDeviceValues : smallDeviceValues,
//         [hugeDeviceValues, smallDeviceValues, threshold],
//     );
//     const [deviceValues, setDeviceValues] = useState(compare);
//     const [width, setWidth] = useState(window.innerWidth)

//     useEffect(() => {
//         const updateLayout = () => {
//             setDeviceValues(compare);
//             setWidth(window.innerWidth)
//         };
//         window.addEventListener('resize', updateLayout);
//         return () => {
//             window.removeEventListener('resize', updateLayout);
//         };
//     }, [smallDeviceValues, hugeDeviceValues, compare, threshold]);

//     return { deviceValues, width };
// }