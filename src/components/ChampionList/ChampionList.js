import React, { useState, useEffect } from 'react';
import { useHeight } from '../../MyHooks/useHeight';
import { List } from './style'

const ChampionList = ({ children, champions }) => {
    const screenHeight = useHeight();
    const Row = children;
    return (
        <List height={screenHeight * 0.3}>
            {
                champions.map((c, idx) => <Row key={idx} champion={c} />)
            }
        </List>
    )
}


export default ChampionList