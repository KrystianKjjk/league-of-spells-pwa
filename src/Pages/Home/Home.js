import React, { useState, useEffect } from 'react';
import useInterval from '../../MyHooks/useInterval';
import CirclingItems from '../../components/CirclingItems';
import Links from '../../utilities/Links';

import { useWidth } from '../../MyHooks/useWidth';
import { Container } from './style'
import { Button } from '../../GlobalStyles';
import { useHeight } from '../../MyHooks/useHeight';
import { useHistory } from 'react-router';

//ostatecznie chyba lepiej zostawic stan w hookach jako useState...

const baseTurnoverTime = { mouseOut: 60, mouseOver: 4 }
const intervalBetweenAddDistance = 10;

const Home = () => {
    const { resultValue, width } = useWidth([400, 700, 1500], [55, 55, 50, 50]);
    const history = useHistory();
    const height = useHeight();

    const cycleDiameter = width > height ? `${resultValue}vh` : `${resultValue}vw`;

    const [distance, setDistance] = useState(-10)
    const [startedPressed, setStartedPressed] = useState(false)

    const [TurnoverTime, setTradingTime] = useState(baseTurnoverTime.mouseOut);
    useInterval(() => setDistance(prev => prev + 1), startedPressed ? intervalBetweenAddDistance : null)

    useEffect(() => {
        if (distance >= 25) {
            setStartedPressed(false);
            history.push(Links.ChooseChampions)
            //resetDistance();
        }
    }, [distance, history])
    const handleStart = () => setStartedPressed(true)
    const handleMouseOver = () => setTradingTime(baseTurnoverTime.mouseOver);
    const handleMouseOut = () => setTradingTime(baseTurnoverTime.mouseOut)
    return (
        <Container>
            <CirclingItems
                distance={distance}
                startedPressed={startedPressed}
                cycleDiameter={cycleDiameter}
                tradingTime={TurnoverTime}
                itemNumber={6}
            />
            <Button size={40} style={{ zIndex: 2 }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleStart} >Start</Button>

        </Container>
    )
}
export default Home