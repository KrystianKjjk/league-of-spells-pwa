import React, { useState, useEffect, useRef } from 'react';
import { Container, Input, SearchedChampions, TableContainer, narrowList, wideList } from './style'
import { Button } from '../../GlobalStyles';

import { champions } from '../../GameData/champions.json';
import ChampionList from '../../components/ChampionList/ChampionList';
import Champion from '../../components/Champion/Champion';
import AddedChampions from '../../components/AddedChampions/AddedChampions';
import Search from '../../components/Search/Search';
import { useHeight } from '../../MyHooks/useHeight';
import { useWidth } from '../../MyHooks/useWidth';
import styled from "styled-components";

const widthDivider = 650;

const ChooseChampions = props => {

    const { width, resultValue } = useWidth([widthDivider], [wideList, narrowList]);
    // const allChampions = JSON.parse();
    // console.log(JSON.parse(JSON.stringify(champions)));
    const handleAccept = (e) => {
        console.log("accepted");

    }
    const screenHeight = useHeight();

    console.log(window.innerWidth);
    return (
        <Container>
            <Search />
            <TableContainer >
                <ChampionList style={resultValue} champions={champions} height={width < widthDivider ? (screenHeight > 660 ? '50%' : '35%') : '100%'}>
                    {Champion}
                </ChampionList>
                <AddedChampions style={resultValue} positionStyle={{ width: '100%' }} />
            </TableContainer>
            <Button style={{ position: 'absolute', padding: '20px', bottom: '2%', right: width > widthDivider ? null : '2%' }} onClick={handleAccept} >Accept</Button>
        </Container >
    )
}


export default ChooseChampions