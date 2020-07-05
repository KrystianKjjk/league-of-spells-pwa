import React, { useState, useEffect } from 'react';
import { useWidth } from '../../MyHooks/useWidth';
import useInterval from '../../MyHooks/useInterval';

import { Container, Circle, Triangle } from './style'
import { Button } from '../../GlobalStyles';
import { useSelector, useDispatch } from 'react-redux';
import actions from './Duck/actions'
//ostatecznie chyba lepiej zostawic stan w hookach jako useState...
const Home = () => {
    const cycleDiameter = useWidth(500, "65vw", "45vw").deviceValues;

    const distanceV = useSelector(state => state.distance.distance)
    const startedPressedV = useSelector(state => state.startedPressed.startedPressed)
    const dispatch = useDispatch();
    const addDistance = distance => dispatch(actions.addDistance(distance));
    const setStartPressed = () => dispatch(actions.setStart());
    const resetStartPressed = () => dispatch(actions.resetStart());

    console.log("XD", distanceV, startedPressedV)
    useInterval(() => addDistance(4), startedPressedV ? 50 : null)
    const distanceAsPercent = () => {
        return `${distanceV}%`;
    }
    console.log(actions);
    useEffect(() => {
        if (distanceV >= 25) {
            resetStartPressed();
            //nowy ekran

        }
    }, [distanceV])
    const handleStart = () => {
        console.log("START")
        setStartPressed()

        if (distanceV === 50) {
            resetStartPressed();
        }
    }

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
    return (
        <Container>
            <Circle diameter={cycleDiameter} isRotating={!startedPressedV}>
                <Triangle style={{ top: distanceAsPercent(), right: distanceAsPercent(), transform: 'rotate(-135deg)' }} />
                <Triangle style={{ bottom: distanceAsPercent(), right: distanceAsPercent(), transform: 'rotate(-45deg)' }} />
                <Triangle style={{ bottom: distanceAsPercent(), left: distanceAsPercent(), transform: 'rotate(45deg)' }} />
                <Triangle style={{ top: distanceAsPercent(), left: distanceAsPercent(), transform: 'rotate(135deg)' }} />
            </Circle>
            <Button onClick={handleStart} >Start </Button>
        </Container>
    )
}

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
export default Home//connect(mapsStateToProps, mapDispatchToProps)(StartScreen)


