import React from 'react';
import { Circle, Triangle } from './style';

//static element, rotates only 4 items, default: Triangle
const CirclingTriangles = ({ distance, startedPressed, cycleDiameter, tradingTime, Item = Triangle }) => {

    const distanceAsPercent = `${distance}%`;
    return (
        <Circle diameter={cycleDiameter} isRotating={!startedPressed} tradingTime={tradingTime}>
            <Item style={{ top: distanceAsPercent, right: distanceAsPercent, transform: 'rotate(-135deg)' }} />
            <Item style={{ bottom: distanceAsPercent, right: distanceAsPercent, transform: 'rotate(-45deg)' }} />
            <Item style={{ bottom: distanceAsPercent, left: distanceAsPercent, transform: 'rotate(45deg)' }} />
            <Item style={{ top: distanceAsPercent, left: distanceAsPercent, transform: 'rotate(135deg)' }} />
        </Circle>
    )
}


export default CirclingTriangles