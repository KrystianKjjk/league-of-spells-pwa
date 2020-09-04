import React from 'react';
import ChampionList from '../ChampionList/ChampionList';
import AddedChampions from '../AddedChampions/AddedChampions';
import Champion from '../../components/Champion/Champion';

import { champions } from '../../GameData/champions.json';
import { useHeight } from '../../MyHooks/useHeight';
import { useWidth } from '../../MyHooks/useWidth';
import { Container, wideList, narrowList } from './style'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useSelector, useDispatch } from 'react-redux';
import { getAddedChampions } from '../../State/AddedChampions';
import { getSelectedChampions, selectChampion } from '../../State/SelectedChampion';

const TableContainer = ({ widthDivider, searchedChampions }) => {

    const addedChampions = useSelector(state => getAddedChampions(state)).map(c => c.item.name)
    const screenHeight = useHeight();
    const { width, resultValue } = useWidth([widthDivider], [wideList, narrowList]);

    const dispatch = useDispatch();
    const selected = useSelector(state => getSelectedChampions(state));
    const select = item => dispatch(selectChampion(item))

    const filteredChampions = champions
        .filter(c => c.name.toLocaleLowerCase().includes(searchedChampions.toLocaleLowerCase()) && !addedChampions.includes(c.name));

    const handleItemClick = (item) => select(item);
    return (
        <DndProvider backend={HTML5Backend}>
            <Container >
                <ChampionList
                    style={resultValue}
                    champions={filteredChampions}
                    height={width < widthDivider ? (screenHeight > 660 ? '50%' : '35%') : '100%'}
                    listItem={Champion}
                    onItemClick={handleItemClick}
                    selectedChampion={selected?.name}
                />
                <AddedChampions style={resultValue} positionStyle={{ width: '100%' }} />
            </Container>
        </DndProvider>
    )
}
export default TableContainer;