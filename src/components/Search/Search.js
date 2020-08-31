import React from 'react';

import { Input, SearchedChampions } from './style';

const Search = (props) => {

    return (
        <SearchedChampions >
            <span >Search:</span>
            <Input {...props}></Input>
        </SearchedChampions>
    )
}


export default Search