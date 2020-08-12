import { useEffect } from 'react';
export const useTimeout = (callback, delay, dependency) => {
    useEffect(() => {
        const timeout = setTimeout(callback, delay);
        return () => {
            clearTimeout(timeout);
        };
    }, [...dependency]);
};
