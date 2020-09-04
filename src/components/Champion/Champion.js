import React from 'react';
import { Container } from './style'
import { useDrag } from 'react-dnd'
import { DraggableItemTypes } from '../../utilities/DraggableItemTypes.js'

const Champion = ({ style, champion, onClick, isMarked }) => {

    const [{ isDragging }, drag] = useDrag({
        item: { value: champion, type: DraggableItemTypes.CHAMPION },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <Container
            ref={drag}
            isMarked={isDragging || isMarked} onClick={e => { onClick(champion, e) }}>
            {champion.name}
        </Container>
    )
}


export default Champion