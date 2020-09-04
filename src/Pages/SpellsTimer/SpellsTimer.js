import React, { useState, useEffect, useRef } from 'react';
import Speech from '../../components/Speech/Speech';
import Links from '../../utilities/Links';
import ChampionTimer from '../../components/ChampionTimer';

import { spells } from '../../GameData/spells.json'
import { useSelector, useDispatch } from 'react-redux';
import { activeSpell } from '../../State/ChampionSpells'
import { Container, SpeechWindow, ShowSpeechWindowButton } from './style'
import { getAddedChampions } from '../../State/AddedChampions';
import { useHistory } from 'react-router';


// const mockedChampions = [
//     { "position": "Top", "item": { "name": "Aatrox", "ult6CD": 100, "ult11CD": 100, "ult16CD": 100 } },
//     { "position": "Jungle", "item": { "name": "Jinx", "ult6CD": 100, "ult11CD": 100, "ult16CD": 100 } },
//     { "position": "Mid", "item": { "name": "Khazix", "ult6CD": 100, "ult11CD": 100, "ult16CD": 100 } },
//     { "position": "Adc", "item": { "name": "Xerath", "ult6CD": 100, "ult11CD": 100, "ult16CD": 100 } },
//     { "position": "Support", "item": { "name": "Xayah", "ult6CD": 100, "ult11CD": 100, "ult16CD": 100 } }
// ]

const SpellsTimer = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const speechRef = useRef()
    const [speechWindowWidth, setSpeechWindowWidth] = useState(0)

    const [isHiddenSpeechWindow, setIsHiddenSpeechWindow] = useState(true)
    const addedChampions = useSelector(state => getAddedChampions(state));

    const activate = (position, spell) => dispatch(activeSpell(position, spell))
    const handleSpellRecognition = (position, spellName) => {
        const spell = spells.find(s => s.name === spellName)
        activate(position, spell);
    }
    const handleShowSpeechWindowClick = () => setIsHiddenSpeechWindow(prev => !prev)

    useEffect(() => {
        if (addedChampions.length !== 5)
            history.push(Links.ChooseChampions)
    }, [addedChampions, history])
    useEffect(() => {
        setSpeechWindowWidth(speechRef.current?.offsetWidth)

    }, [])

    return (
        <Container>
            <SpeechWindow
                hiddenWidth={speechWindowWidth}
                isHidden={isHiddenSpeechWindow}
            >
                <Speech ref={speechRef} onSpellRecognition={handleSpellRecognition} />
                <ShowSpeechWindowButton
                    hide={isHiddenSpeechWindow}
                    onClick={handleShowSpeechWindowClick}
                >
                    {isHiddenSpeechWindow ? '>' : '<'}
                </ShowSpeechWindowButton>
            </SpeechWindow>
            {addedChampions.map(c => (
                <ChampionTimer key={c.position} addedChampion={c.item} position={c.position} />
            ))}
        </Container>
    )
}
export default SpellsTimer