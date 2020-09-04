import React, { useState } from 'react';
import Modal from 'react-modal';

import { Container, SpellContainer, ButtonContainer, Spell, Label, AcceptButton, CancelButton } from './style'
import { spells } from '../../GameData/spells.json'

import './style.css';

const SpellsModal = ({ championName, isModalOpen, onCloseModal, onAcceptData }) => {

    const [newSpells, setNewSpells] = useState([])
    const isMaxNumberOfSpellsGiven = () => newSpells.length === 2;
    const updateSpells = (spell) => {
        newSpells.includes(spell)
            ? removeSpell(spell)
            : setNewSpells(prev => [...prev, spell]);
    }
    const removeSpell = (spell) => {
        setNewSpells(prev => prev.filter(s => s.name !== spell.name));
    }
    return (
        <Container>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={onCloseModal}
                className="modal"
                overlayClassName="overlay"
                shouldCloseOnEsc={true}
                ariaHideApp={false}
            >
                <Label>{championName}</Label>
                <SpellContainer>
                    {spells
                        .map(s =>
                            <Spell
                                key={s.name}
                                onClick={isMaxNumberOfSpellsGiven() ? () => removeSpell(s) : () => updateSpells(s)}
                                disabled={isMaxNumberOfSpellsGiven() && !newSpells.includes(s)}
                                isAdded={newSpells.includes(s)}
                            >
                                {s.name}
                            </Spell>
                        )
                    }
                </SpellContainer>
                <ButtonContainer>
                    <AcceptButton
                        onClick={() => onAcceptData(newSpells[0], newSpells[1])}
                        disabled={!isMaxNumberOfSpellsGiven()}
                    >
                        Accept
                            </AcceptButton>
                    <CancelButton onClick={onCloseModal} >Cancel </CancelButton>
                </ButtonContainer>
            </Modal>
        </Container>
    )
}

export default SpellsModal
