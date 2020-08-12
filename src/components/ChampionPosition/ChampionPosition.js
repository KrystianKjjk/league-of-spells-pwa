import React, { useState, useEffect } from 'react';
import { Container, AddedCharacter, PositionName } from './style'
import { useDrop } from 'react-dnd'
import { DraggableItemTypes } from '../../DraggableItemTypes.js'

const ChampionPosition = ({ position, champion, style, moveChampion }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: DraggableItemTypes.CHAMPION,
        canDrop: () => true,
        drop: (item) => moveChampion(item, position),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    })

    let bgColor;
    if (isOver && canDrop) bgColor = 'yellow'
    else if (!isOver && canDrop) bgColor = 'green'
    else if (!isOver && !canDrop) bgColor = 'gray'
    console.log("C", champion || 'addedChampion')
    return (
        <Container ref={drop} style={{ ...style, backgroundColor: bgColor }}>
            <PositionName>{position}</PositionName>
            <AddedCharacter>
                {champion ? champion.item.name : 'Add champion'}
            </AddedCharacter>
        </Container>
    )
}


export default ChampionPosition