import React, { useState, useEffect } from 'react';
import { Container, AddedCharacter, PositionName } from './style'

const ChampionPosition = ({ position, style }) => {

    return (
        <Container style={style}>
            <PositionName>{position}</PositionName>
            <AddedCharacter>
                added character
            </AddedCharacter>
        </Container>
    )
}


export default ChampionPosition