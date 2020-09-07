import React from 'react';
import icon from '../../Icons/wrong.svg';

import { Container, AddedCharacter, PositionName, Img, positionBgColor } from './style'
import { useDrop, useDrag } from 'react-dnd'
import { DraggableItemTypes } from '../../utilities/DraggableItemTypes.js'
import { isSelected, getSelectedChampions } from '../../State/SelectedChampion/';
import { useSelector } from 'react-redux';

const championInfo = (championName, championItem, removeButton) => ({
    name: championName,
    item: championItem,
    removeButton
})

const ChampionPosition = ({ position, champion, style, moveChampion, onRemove }) => {

    const data = champion === undefined
        ? championInfo('Add champion', null, null)
        : championInfo(champion.item.name, champion.item, <Img src={icon} onClick={(e) => { e.stopPropagation(); onRemove(champion) }} />)

    const [{ isOver, canDrop }, drop] = useDrop({
        accept: DraggableItemTypes.CHAMPION,
        canDrop: (item) => data.name !== item.value.name,
        drop: (item) => moveChampion(item.value, position),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    })

    const [{ canDrag }, drag] = useDrag({
        item: { value: data.item, type: DraggableItemTypes.CHAMPION },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
            canDrag: champion !== undefined
        })
    })

    const isChampionSelected = useSelector(state => isSelected(state));
    const selected = useSelector(state => getSelectedChampions(state));

    let bgColor = positionBgColor(isOver, canDrop, isChampionSelected);

    return (
        <Container ref={drop} style={{ ...style, backgroundColor: bgColor }} onClick={() => isChampionSelected ? moveChampion(selected, position) : null}>
            <PositionName>{position}</PositionName>
            <AddedCharacter ref={canDrag ? drag : null}>
                {data.name}
                {data.removeButton}
            </AddedCharacter>
        </Container>
    )
}


export default ChampionPosition