import React, { useState, useEffect, useRef } from 'react';
import { Container, Input, SearchedChampions, TableContainer } from './style'
import { Button } from '../../GlobalStyles';

import { champions } from '../../GameData/champions.json';
import ChampionList from '../../components/ChampionList/ChampionList';
import Champion from '../../components/Champion/Champion';
import AddedChampions from '../../components/AddedChampions/AddedChampions';
import Search from '../../components/Search/Search';


const ChooseChampions = props => {


    // const allChampions = JSON.parse();
    // console.log(JSON.parse(JSON.stringify(champions)));
    const handleAccept = (e) => {
        console.log("accepted");

    }

    console.log(window.innerWidth);
    return (
        <Container>
            <Search />
            <TableContainer >
                <ChampionList champions={champions}  >
                    {Champion}
                </ChampionList>
                <AddedChampions />
            </TableContainer>
            <Button style={{ padding: '20px' }} onClick={handleAccept} >Accept</Button>
        </Container>
    )
}


export default ChooseChampions