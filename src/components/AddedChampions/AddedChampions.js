import React, { useState, useEffect } from 'react';
import ChampionPosition from '../ChampionPosition/';
import { Positions } from './style';
import GamePositions from '../../GameData/Positions.json'
import { useSelector, useDispatch } from 'react-redux';
import { getAddedChampions } from '../../State/AddedChampions'
import { addChampion, removeChampion } from '../../State/AddedChampions';


const AddedChampions = ({ style, positionStyle }) => {

    const allChampions = useSelector(state => getAddedChampions(state))
    const dispatch = useDispatch();

    const add = (item) => dispatch(addChampion(item))
    const remove = (item) => dispatch(removeChampion(item))

    const moveChampion = (item, position) => {
        add({ position, item: item.value })
        //console.log("move champion", item.value);
        //console.log("cham pos", position);
    }
    // console.log(Object.getOwnPropertyNames(GamePositions));
    // const val = Object.getOwnPropertyNames(GamePositions) //Object.getOwnPropertyDescriptors(Object.getOwnPropertyNames(GamePositions));
    // const val2 = Object.getOwnPropertyDescriptors(GamePositions)
    //console.log(allChampions)
    // val.map(v => console.log(v))

    const selectChampion = (position) => allChampions.find(c => c.position === position);
    const Position = ({ position }) => <ChampionPosition position={position} champion={selectChampion(position)} style={positionStyle} moveChampion={moveChampion} />
    return (
        <Positions style={style}>
            <Position position={GamePositions.Position1} />
            <Position position={GamePositions.Position2} />
            <Position position={GamePositions.Position3} />
            <Position position={GamePositions.Position4} />
            <Position position={GamePositions.Position5} />
        </Positions>
    )
}


export default AddedChampions

// , border: '2px solid black'
//{ display: 'flex', width: '90%', height: '210px', border: '2px solid black' }