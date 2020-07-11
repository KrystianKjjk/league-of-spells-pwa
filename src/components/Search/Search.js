import React, { useState, useEffect, useRef } from 'react';

import { Input, SearchedChampions } from './style';

const Search = props => {

    const inputRef = useRef(null);
    return (
        <SearchedChampions >
            <span >Search:</span>
            <Input ref={inputRef} defaultValue="egzample tekst"></Input>
        </SearchedChampions>
    )
}


export default Search