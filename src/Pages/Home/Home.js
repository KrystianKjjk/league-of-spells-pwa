import React, { useState, useEffect, useCallback } from 'react';
import { useWidth } from '../../MyHooks/useWidth';
import useInterval from '../../MyHooks/useInterval';

import { Container } from './style'
import { Button } from '../../GlobalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../State/StartedPressed'
import { useHeight } from '../../MyHooks/useHeight';
import { useHistory } from 'react-router';
import CirclingItems from '../../components/CirclingItems';
// import CirclingTriangles from '../../components/CirclingTriangles/CirclingTriangles';

//ostatecznie chyba lepiej zostawic stan w hookach jako useState...

const baseTurnoverTime = { mouseOut: 60, mouseOver: 4 }
const intervalBetweenAddDistance = 10;

const Home = props => {
    const history = useHistory();
    const { resultValue, width } = useWidth([400, 700, 1500], [55, 55, 50, 50]);
    const height = useHeight();

    const cycleDiameter = width > height ? `${resultValue}vh` : `${resultValue}vw`;

    const distanceV = useSelector(state => state.distance.distance)
    const startedPressedV = useSelector(state => state.startedPressed.startedPressed)

    const dispatch = useDispatch();
    const addDistance = distance => dispatch(actions.addDistance(distance));
    const resetDistance = useCallback(
        () => dispatch(actions.resetDistance()),
        [dispatch],
    );
    const setStartPressed = () => dispatch(actions.setStart());
    const resetStartPressed = useCallback(
        () => dispatch(actions.resetStart()),
        [dispatch],
    );

    const [TurnoverTime, setTradingTime] = useState(baseTurnoverTime.mouseOut);
    useInterval(() => addDistance(1), startedPressedV ? intervalBetweenAddDistance : null)

    useEffect(() => {
        if (distanceV >= 25) {
            resetStartPressed();
            history.push('/choose-champions')
            resetDistance();
        }
    }, [distanceV, history, resetDistance, resetStartPressed])
    const handleStart = () => {
        console.log("START")
        setStartPressed()
    }
    const handleMouseOver = () => {
        setTradingTime(baseTurnoverTime.mouseOver);
    }
    const handleMouseOut = () => {
        setTradingTime(baseTurnoverTime.mouseOut)
    }
    return (
        <Container>
            <CirclingItems
                distance={distanceV}
                startedPressed={startedPressedV}
                cycleDiameter={cycleDiameter}
                tradingTime={TurnoverTime}
                itemNumber={6}
            />
            <Button size={40} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleStart} >Start</Button>

        </Container>
    )
}
export default Home//connect(mapsStateToProps, mapDispatchToProps)(StartScreen)



// const mapsStateToProps = state => ({
//     distanceV: state.distance.distance,
//     startedPressedV: state.startedPressed.startedPressed
// })

// const mapDispatchToProps = dispatch => ({
//     addDistance: distance => dispatch(actions.addDistance(distance)),
//     resetDistance: () => dispatch(actions.resetDistance()),
//     setStartPressed: () => dispatch(actions.setStart()),
//     resetStartPressed: () => dispatch(actions.resetStart())
// })

    // const [distance, setDistance] = useState(0);
    // const [startedPressed, setStartedPressed] = useState(false)

    // useInterval(() => setDistance((prev) => prev + 4), startedPressed ? 50 : null)


    // useEffect(() => {
    //     if (distance >= 25) {
    //         setStartedPressed(false);
    //         //nowy ekran

    //     }
    // }, [distance])
    // const handleStart = () => {
    //     console.log("START")
    //     setStartedPressed(true)

    //     if (distance === 50) {
    //         setStartedPressed(false);
    //     }
    // }
    // const distanceAsPercent = () => {
    //     return `${distance}%`;
    // }


