import React, { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import Colors from '../../Colors';






const MainScreen = props => {
    const distance = '0%';
    const handleStart = () => {
        console.log("START")
    }
    return (
        <Container>
            <Cycle>
                <Triangle style={{ top: distance, right: distance, transform: 'rotate(-135deg)' }} />
                <Triangle style={{ bottom: distance, right: distance, transform: 'rotate(-45deg)' }} />
                <Triangle style={{ bottom: distance, left: distance, transform: 'rotate(45deg)' }} />
                <Triangle style={{ top: distance, left: distance, transform: 'rotate(135deg)' }} />
            </Cycle>
            <Button onClick={handleStart} >Start </Button>
        </Container>
    )
}


export default MainScreen

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
    /* transition: transform 4s; */
z-index: 2;
    &:hover {
        cursor: pointer;
        /* transform: rotate(180deg); */
        animation: ${rotate} ;
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
    width: 65vw;
    height: 65vw;
    border-radius: 50%;
    z-index: 0;
    /* animation: ${rotate} 60s linear infinite; */
`;