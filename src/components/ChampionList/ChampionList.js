//@flow
import React, { useState, useEffect } from 'react';
import { useHeight } from '../../MyHooks/useHeight';
import { List } from './style'

type Props = {
    listItem: any,
    champions: Array<Object>,
    height: Number,
    width: Number,
    style: any
}
const ChampionList = ({ listItem, champions, height, width, style }: Props) => {
    const Row = listItem;
    return (
        <List height={height} style={style}>
            {
                champions.map((c, idx) => <Row key={idx} champion={c} />)
            }
        </List>
    )
}


export default ChampionList