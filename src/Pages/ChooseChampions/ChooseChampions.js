import React, { useState, useEffect, useRef } from 'react';
import { Container, Input, SearchedChampions, AddedChampions, AllChampions } from './style'
import { Button } from '../../GlobalStyles';

import { champions } from '../../GameData/champions.json';

const ChooseChampions = props => {

    const inputRef = useRef(null);
    // const allChampions = JSON.parse();
    // console.log(JSON.parse(JSON.stringify(champions)));
    const handleAccept = (e) => {
        console.log("accepted");
        console.log(inputRef.current.value)

    }
    return (
        <Container>
            <Button onClick={handleAccept} >Accept</Button>
            <SearchedChampions >
                <span style={{ color: 'white' }}>Search: </span>
                <Input ref={inputRef} defaultValue="egzample tekst"></Input>
            </SearchedChampions>
        </Container>
    )
}


export default ChooseChampions