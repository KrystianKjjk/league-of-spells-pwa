import React, { useState, useEffect } from 'react';
import { useHeight } from '../../MyHooks/useHeight';
import { List } from './style'

const ChampionList = ({ children, champions, height, width, style }) => {
    const Row = children;
    return (
        <List height={height} style={style}>
            {
                champions.map((c, idx) => <Row key={idx} champion={c} />)
            }
        </List>
    )
}


export default ChampionList