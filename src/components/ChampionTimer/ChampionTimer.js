import React, { useState, useEffect } from 'react';

import { Container, Header, Modal, Spell, SpellContainer, ButtonContainer } from './style'
import SpellStripe from '../SpellStripe/SpellStripe';
import { Button } from '../../GlobalStyles';
import { spells } from '../../GameData/spells.json'

const ChampionTimer = ({ addedChampion, position }) => {
    const [firstSpell, setFirstSpell] = useState(spells[0])
    const [secondSpell, setSecondSpell] = useState(spells[1])
    const [showModal, setShowModal] = useState(false)

    const handleClick = (e) => {
        setShowModal(true)
    }
    return (
        <Container>
            <Header>{position}: {addedChampion.name}</Header>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: "flex", width: "80%", flexDirection: 'column', marginRight: '8px' }}>
                    <SpellStripe spellsName={firstSpell.name} cooldown={firstSpell.cooldown} />
                    <SpellStripe spellsName={secondSpell.name} cooldown={secondSpell.cooldown} />
                </div>

                <Button onClick={handleClick} >Change </Button>

            </div>
            {showModal
                ? (<Modal>
                    <SpellContainer>
                        {spells.map(s => <Spell key={s.name}> {s.name}</Spell>)}
                    </SpellContainer>
                    <ButtonContainer>
                        <button >Accept </button>
                        <button >Cancel </button>
                    </ButtonContainer>
                </Modal>)
                : null}
        </Container>
    )
}


export default ChampionTimer