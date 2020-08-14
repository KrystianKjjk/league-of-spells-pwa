import React, { useState, useCallback } from 'react';

import { Container } from './style'
import { useDrag } from 'react-dnd'
import { DraggableItemTypes } from '../../DraggableItemTypes.js'
import { useSelector } from 'react-redux';
import { getSelectedChampions } from '../../State/SelectedChampion';

const Champion = ({ style, champion, onClick, isMarked }) => {

    // const selected = useCallback(useSelector(state => getSelectedChampions(state)),
    //     [],
    // )
    // const [isMarked, setIsMarked] = useState(false)

    const [{ isDragging }, drag] = useDrag({
        item: { value: champion, type: DraggableItemTypes.CHAMPION },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <Container
            ref={drag}
            style={{ ...style, backgroundColor: isDragging || isMarked ? 'red' : 'blue' }} onClick={e => { onClick(champion, e) }}>
            {champion.name}
        </Container>
    )
}


export default Champion