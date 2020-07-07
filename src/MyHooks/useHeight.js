import { useState, useEffect } from 'react';


export const useHeight = () => {
    const [Height, setHeight] = useState(window.innerHeight)
    useEffect(() => {
        const updateLayout = () => {
            setHeight(window.innerHeight);
        }

        window.addEventListener('resize', updateLayout)
        return () => {
            window.removeEventListener('resize', updateLayout)
        }
    }, [Height])
    return Height;
}