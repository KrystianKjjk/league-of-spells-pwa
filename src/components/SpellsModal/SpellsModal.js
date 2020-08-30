import React, { useState } from 'react';
import Modal from 'react-modal';
import { Container, SpellContainer, ButtonContainer, Spell, Label, AcceptButton, CancelButton } from './style'
import { spells } from '../../GameData/spells.json'
import './style.css';

const SpellsModal = ({ championName, isModalOpen, onCloseModal, onAcceptData }) => {

    const [newSpells, setNewSpells] = useState([])
    const addNewSpell = (spell) => {
        console.log("im here");

        setNewSpells(prev => [...prev, spell]);
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
                    {spells.map(s => <Spell key={s.name} onClick={newSpells.length < 2 ? (() => addNewSpell(s)) : null} disabled={newSpells.length >= 2}> {s.name}</Spell>)}
                </SpellContainer>
                <ButtonContainer>
                    <AcceptButton onClick={() => onAcceptData(newSpells[0], newSpells[1])}>Accept</AcceptButton>
                    <CancelButton onClick={onCloseModal} >Cancel </CancelButton>
                </ButtonContainer>
            </Modal>
        </Container>
    )
}

export default SpellsModal
