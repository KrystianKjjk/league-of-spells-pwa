import React, { useEffect } from 'react';
import { spells } from '../../GameData/spells.json'

import { Container } from './style'
import { useSelector } from 'react-redux';
import { getAddedChampions } from '../../State/AddedChampions';
import ChampionTimer from '../../components/ChampionTimer';
import { useHistory } from 'react-router';
import Speech from '../../components/Speech/Speech';

const mockedChampions = [
    { "position": "Top", "item": { "name": "Aatrox", "ult6CD": 100, "ult11CD": 100, "ult16CD": 100 } },
    { "position": "Jungle", "item": { "name": "Jinx", "ult6CD": 100, "ult11CD": 100, "ult16CD": 100 } },
    { "position": "Mid", "item": { "name": "Khazix", "ult6CD": 100, "ult11CD": 100, "ult16CD": 100 } },
    { "position": "Adc", "item": { "name": "Xerath", "ult6CD": 100, "ult11CD": 100, "ult16CD": 100 } },
    { "position": "Support", "item": { "name": "Xayah", "ult6CD": 100, "ult11CD": 100, "ult16CD": 100 } }
]

const SpellsTimer = props => {
    console.log(spells);
    //const addedChampions = useSelector(state => getAddedChampions(state));
    const addedChampions = mockedChampions;
    console.log(addedChampions);

    const history = useHistory();

    useEffect(() => {
        if (addedChampions.length !== 5)
            history.push("/choose-champions")
    }, [addedChampions, history])
    return (
        <Container>
            <Speech />
            {addedChampions.map(c => (
                <ChampionTimer key={c.position} addedChampion={c.item} position={c.position} />
            ))}
        </Container>
    )
}


export default SpellsTimer