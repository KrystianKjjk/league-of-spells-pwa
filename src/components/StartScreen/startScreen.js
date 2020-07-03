import React, { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import Colors from '../../Colors';
import { useWidth } from '../../MyHooks/useWidth';
import useInterval from '../../MyHooks/useInterval';


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
    console.log("width : ", cycleDiameter);

    const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
    const Button = styled.div`
    padding: 40px;
    border-radius:50%;
    display: flex;
    font-size: 19px;
    color: white;
    background-color: blue;
    background: ${Colors.buttonBackground};
    transition: transform 4s;
    z-index: 2;
    &:hover {
        cursor: pointer;
        /* transform: rotate(180deg); */
    }

    `

    const Container = styled.div`
    background: ${Colors.mainScreenBackground};
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
`
    const Triangle = styled.div`
    /* width: 50px;
    height: 50px; */
    position: absolute;
    display: flex;
    /* background-color: blue; */
    margin: 10px;
	width: 0;
	height: 0;
	border-left: 5vw solid transparent;
	border-right: 5vw solid transparent;
    border-bottom: 10vw solid #111;
    z-index: 2;
`;


    const Cycle = styled.div`
    display: flex;
    position: absolute;
    background-color: transparent;
    width: ${cycleDiameter};
    height: ${cycleDiameter};
    border-radius: 50%;
    z-index: 0;
    animation: ${StartedPressed ? null : rotate} 60s linear infinite;
`;
    return (
        <Container>
            <Cycle>
                <Triangle style={{ top: distanceAsPercent(), right: distanceAsPercent(), transform: 'rotate(-135deg)' }} />
                <Triangle style={{ bottom: distanceAsPercent(), right: distanceAsPercent(), transform: 'rotate(-45deg)' }} />
                <Triangle style={{ bottom: distanceAsPercent(), left: distanceAsPercent(), transform: 'rotate(45deg)' }} />
                <Triangle style={{ top: distanceAsPercent(), left: distanceAsPercent(), transform: 'rotate(135deg)' }} />
            </Cycle>
            <Button onClick={handleStart} >Start </Button>
        </Container>
    )
}


export default StartScreen

