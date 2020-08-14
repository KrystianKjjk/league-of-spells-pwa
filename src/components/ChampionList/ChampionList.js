//@flow
import React from 'react';
import { List } from './style'

type Props = {
    listItem: any,
    // onItemClick: Function<any>,
    champions: Array<Object>,
    height: Number,
    width: Number,
    style: any
}
const ChampionList = ({ listItem, onItemClick, champions, height, width, style, selectedChampion }: Props) => {

    const Row = listItem;
    return (
        <List height={height} width={width} style={style}>
            {
                champions.map((c) => <Row key={c.name} champion={c} onClick={onItemClick} isMarked={c.name === selectedChampion} />)
            }
        </List>
    )
}


export default ChampionList