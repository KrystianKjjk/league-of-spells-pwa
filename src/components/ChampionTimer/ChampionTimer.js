import React, { useState, useEffect } from 'react';

import { Container, Header, Modal, Spell, SpellContainer, ButtonContainer } from './style'
import SpellStripe from '../SpellStripe/SpellStripe';
import { Button } from '../../GlobalStyles';
import { spells } from '../../GameData/spells.json'
import SpellsModal from '../SpellsModal/SpellsModal';

const ChampionTimer = ({ addedChampion, position }) => {
    const [firstSpell, setFirstSpell] = useState(spells[0])
    const [secondSpell, setSecondSpell] = useState(spells[1])
    const [showModal, setShowModal] = useState(false)

    const handleClick = (e) => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    const handleAcceptData = (newFirstSpell, newSecondSpell) => {
        if (newFirstSpell !== undefined && newSecondSpell !== undefined) {
            setFirstSpell(newFirstSpell);
            setSecondSpell(newSecondSpell);
        }
        setShowModal(false)
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
                && <SpellsModal championName={addedChampion.name} isModalOpen={showModal} onCloseModal={handleCloseModal} onAcceptData={handleAcceptData} />}
        </Container>
    )
}


export default ChampionTimer


/*
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
*/