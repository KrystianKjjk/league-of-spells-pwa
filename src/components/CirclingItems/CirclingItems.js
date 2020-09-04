import React from 'react';
import { Circle, Triangle, Container } from '../CirclingItems/style';

//dynamic element, rotates any number of items
const CirclingItems = ({ distance, startedPressed, cycleDiameter, tradingTime, itemNumber, Item = Triangle }) => {

    const distanceAsPercent = `${distance}%`;

    const degreeValue = 360;
    const angleBetweenItems = degreeValue / itemNumber;
    const array = new Array(itemNumber).fill(itemNumber);

    return (
        <Container diameter={cycleDiameter} >
            {
                array.map((i, idx) => (
                    <Circle key={idx} diameter={cycleDiameter} isRotating={!startedPressed} tradingTime={tradingTime} startRotate={angleBetweenItems * idx} >
                        <Item distanceFromCenter={distanceAsPercent} />
                    </Circle >
                ))
            }
        </Container>
    )
}


export default CirclingItems