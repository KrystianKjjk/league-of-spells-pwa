import React, { useState, useEffect } from 'react';

import { Container, Header, Modal, Spell, SpellContainer, ButtonContainer } from './style'
import { useSelector, useDispatch } from 'react-redux';
import { addSpell, changeSpell, activeSpell, deactivateSpell, getFirstChampionSpell, getSecondChampionSpell } from '../../State/ChampionSpells'
import SpellStripe from '../SpellStripe/SpellStripe';
import { Button } from '../../GlobalStyles';
import { spells } from '../../GameData/spells.json'
import SpellsModal from '../SpellsModal/SpellsModal';

const championSpellObject = (position, spells) => ({ position, spells: spells.map(s => ({ ...s, isActive: false })) })

const ChampionTimer = ({ addedChampion, position }) => {
    const firstSpell = useSelector(state => getFirstChampionSpell(position, state))
    const secondSpell = useSelector(state => getSecondChampionSpell(position, state))

    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    const add = (position, spells) => dispatch(addSpell(championSpellObject(position, spells)))
    const change = (position, spells) => dispatch(changeSpell(championSpellObject(position, spells)))

    const activate = (position) => (spell) => dispatch(activeSpell(position, spell))
    const deactivate = (position) => (spell) => dispatch(deactivateSpell(position, spell))


    useEffect(() => {
        add(position, [spells[0], spells[1]])
    }, [])

    const handleClick = (e) => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }
    const handleAcceptData = (newFirstSpell, newSecondSpell) => {
        if (newFirstSpell !== undefined && newSecondSpell !== undefined) {
            change(position, [newFirstSpell, newSecondSpell])
        }
        setShowModal(false)
    }
    if (firstSpell === undefined || secondSpell === undefined)
        return null;

    return (
        <Container>
            <Header>{position}: {addedChampion.name}</Header>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: "flex", width: "80%", flexDirection: 'column', marginRight: '8px' }}>
                    <SpellStripe spell={firstSpell} activate={activate(position)} deactivate={deactivate(position)} />
                    <SpellStripe spell={secondSpell} activate={activate(position)} deactivate={deactivate(position)} />
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