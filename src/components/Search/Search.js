import React from 'react';

import { Input, SearchedChampions } from './style';

const Search = ({ value, onChange }) => {

    return (
        <SearchedChampions >
            <span >Search:</span>
            <Input value={value} onChange={onChange}></Input>
        </SearchedChampions>
    )
}


export default Search