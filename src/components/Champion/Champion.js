import React, { useState, useEffect } from 'react';

import { Container } from './style'

const Champion = ({ style, champion }) => {

    const handleClick = (e) => {
        console.debug(e);
    }
    return (
        <Container style={style} onClick={handleClick}>
            {champion.name}
        </Container>
    )
}


export default Champion