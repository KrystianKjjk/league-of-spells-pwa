import React, { useState, useEffect } from 'react';

import { Container, Header } from './style'
import SpellStripe from '../SpellStripe/SpellStripe';
import { Button } from '../../GlobalStyles';

const ChampionTimer = ({ addedChampion, position }) => {


    return (
        <Container>
            <Header>{position}: {addedChampion.name}</Header>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: "flex", width: "80%", flexDirection: 'column', marginRight: '0px' }}>
                    <SpellStripe spellsName={'flash'} cooldown={300} />
                    <SpellStripe spellsName={'heal'} cooldown={180} />
                </div>
                <div>
                    <Button>Change</Button>
                </div>
            </div>
        </Container>
    )
}


export default ChampionTimer