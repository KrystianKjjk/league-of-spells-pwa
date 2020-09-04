import React, { useState, useEffect, useCallback } from 'react';
import SpellsModal from '../SpellsModal/SpellsModal';
import SpellStripe from '../SpellStripe/SpellStripe';

import { Container, Header } from './style'
import { useSelector, useDispatch } from 'react-redux';
import { addSpell, changeSpell, activeSpell, deactivateSpell, getFirstChampionSpell, getSecondChampionSpell } from '../../State/ChampionSpells'
import { Button } from '../../GlobalStyles';
import { spells } from '../../GameData/spells.json'

const championSpellObject = (position, spells) => ({ position, spells: spells.map(s => ({ ...s, isActive: false })) })

const ChampionTimer = ({ addedChampion, position }) => {

    const firstSpell = useSelector(state => getFirstChampionSpell(position, state))
    const secondSpell = useSelector(state => getSecondChampionSpell(position, state))
    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch()

    const add = useCallback(
        (position, spells) => dispatch(addSpell(championSpellObject(position, spells))),
        [dispatch],
    )
    const change = (position, spells) => dispatch(changeSpell(championSpellObject(position, spells)))

    const activate = (position) => (spell) => dispatch(activeSpell(position, spell))
    const deactivate = (position) => (spell) => dispatch(deactivateSpell(position, spell))

    useEffect(() => {
        add(position, [spells[0], spells[1]])
    }, [add, position])

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