import React from 'react';
import ChampionPosition from '../ChampionPosition/';
import { Positions } from './style';
import GamePositions from '../../GameData/Positions.json'
import { useSelector, useDispatch } from 'react-redux';
import { getAddedChampions } from '../../State/AddedChampions'
import { addOrReplaceChampion, removeChampion } from '../../State/AddedChampions';
import { deselectChampion } from '../../State/SelectedChampion';


const AddedChampions = ({ style, positionStyle }) => {

    const allChampions = useSelector(state => getAddedChampions(state))
    const dispatch = useDispatch();

    const addOrReplace = (item) => dispatch(addOrReplaceChampion(item))
    const remove = (item) => dispatch(removeChampion(item))
    const deselect = () => dispatch(deselectChampion())

    const moveChampion = (item, position) => {
        addOrReplace({ position, item })
        deselect();
    }

    const selectChampion = (position) => allChampions.find(c => c.position === position);
    const Position = ({ position }) => (
        <ChampionPosition
            position={position}
            champion={selectChampion(position)}
            style={positionStyle}
            moveChampion={moveChampion}
            onRemove={remove}
        />)
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