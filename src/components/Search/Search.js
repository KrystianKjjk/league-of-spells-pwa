import React, { useState, useEffect, useRef } from 'react';

import { Input, SearchedChampions } from './style';

const Search = ({ value, onChange }) => {

    const inputRef = useRef(null);
    return (
        <SearchedChampions >
            <span >Search:</span>
            <Input ref={inputRef} value={value} onChange={onChange}></Input>
        </SearchedChampions>
    )
}


export default Search