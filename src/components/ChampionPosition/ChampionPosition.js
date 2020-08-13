import React, { useState, useEffect } from 'react';
import { Container, AddedCharacter, PositionName } from './style'
import { useDrop, useDrag } from 'react-dnd'

import { DraggableItemTypes } from '../../DraggableItemTypes.js'

const championInfo = (championName, championItem) => ({
    name: championName,
    item: championItem
})

const ChampionPosition = ({ position, champion, style, moveChampion }) => {

    const data = champion === undefined ? championInfo('Add champion', null) : championInfo(champion.item.name, champion.item)
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: DraggableItemTypes.CHAMPION,
        canDrop: () => true,
        drop: (item) => moveChampion(item, position),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    })

    const [{ isDragging, canDrag }, drag] = useDrag({
        item: { value: data.item, type: DraggableItemTypes.CHAMPION },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
            canDrag: champion !== undefined
        })
    })
    // console.log(champion);
    let bgColor;
    if (isOver && canDrop) bgColor = 'yellow'
    else if (!isOver && canDrop) bgColor = 'green'
    else if (!isOver && !canDrop) bgColor = 'gray'
    return (
        <Container ref={drop} style={{ ...style, backgroundColor: bgColor }}>
            <PositionName>{position}</PositionName>
            <AddedCharacter ref={canDrag ? drag : null}>
                {data.name}
            </AddedCharacter>
        </Container>
    )
}


export default ChampionPosition