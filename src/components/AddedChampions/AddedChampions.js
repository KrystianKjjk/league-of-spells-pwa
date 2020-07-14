import React, { useState, useEffect } from 'react';
import ChampionPosition from '../ChampionPosition/';
import { Positions } from './style';

const AddedChampions = ({ style, positionStyle }) => {

    return (
        <Positions style={style}>
            <ChampionPosition position='Top' style={positionStyle} />
            <ChampionPosition position='Jungle' style={positionStyle} />
            <ChampionPosition position='mid' style={positionStyle} />
            <ChampionPosition position='Adc' style={positionStyle} />
            <ChampionPosition position='support' style={positionStyle} />
        </Positions>
    )
}


export default AddedChampions

// , border: '2px solid black'
//{ display: 'flex', width: '90%', height: '210px', border: '2px solid black' }