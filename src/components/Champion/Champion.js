import React, { useState, useEffect } from 'react';

import { Container } from './style'
import { useDrag } from 'react-dnd'
import { DraggableItemTypes } from '../../DraggableItemTypes.js'

const Champion = ({ style, champion }) => {

    const [{ isDragging }, drag] = useDrag({
        item: { value: champion, type: DraggableItemTypes.CHAMPION },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    const handleClick = (e) => {
        console.log(e);
    }
    return (
        <Container
            ref={drag}
            style={{ ...style, backgroundColor: isDragging ? 'red' : 'blue' }} onClick={handleClick}>
            {champion.name}
        </Container>
    )
}


export default Champion