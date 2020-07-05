import React, { useState, useEffect } from 'react';
import { useWidth } from '../../MyHooks/useWidth';
import useInterval from '../../MyHooks/useInterval';

import { Container, Circle, Triangle } from './style'
import { Button } from '../../GlobalStyles';

const StartScreen = props => {
    const cycleDiameter = useWidth(500, "65vw", "45vw").deviceValues;
    const [distance, setDistance] = useState(0);
    const [StartedPressed, setStartedPressed] = useState(false)
    useInterval(() => setDistance((prev) => prev + 4), StartedPressed ? 50 : null)
    const distanceAsPercent = () => {
        return `${distance}%`;
    }

    useEffect(() => {
        if (distance >= 25) {
            setStartedPressed(false);
            //nowy ekran

        }
    }, [distance])
    const handleStart = () => {
        console.log("START")
        setStartedPressed(true)

        if (distance === 50) {
            setStartedPressed(false);
        }
    }

    return (
        <Container>
            <Circle diameter={cycleDiameter} isRotating={!StartedPressed}>
                <Triangle style={{ top: distanceAsPercent(), right: distanceAsPercent(), transform: 'rotate(-135deg)' }} />
                <Triangle style={{ bottom: distanceAsPercent(), right: distanceAsPercent(), transform: 'rotate(-45deg)' }} />
                <Triangle style={{ bottom: distanceAsPercent(), left: distanceAsPercent(), transform: 'rotate(45deg)' }} />
                <Triangle style={{ top: distanceAsPercent(), left: distanceAsPercent(), transform: 'rotate(135deg)' }} />
            </Circle>
            <Button onClick={handleStart} >Start </Button>
        </Container>
    )
}


export default StartScreen


