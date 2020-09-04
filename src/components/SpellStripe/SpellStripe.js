import React, { useState, useEffect } from 'react';

import { Container, TimeBar } from './style'
import useInterval from '../../MyHooks/useInterval';
import Colors from '../../Colors';
import percentageOfOneIsSecond from '../../utilities/percentageOfOneIsSecond';

const SpellStripe = ({ spell, activate, deactivate }) => {
    const { name, cooldown, isActive } = spell;

    const [ActualCD, setActualCD] = useState(cooldown)
    const [IsSpellOnCD, setIsSpellOnCD] = useState(isActive)
    useEffect(() => {
        setActualCD(cooldown);
        setIsSpellOnCD(false);

        isActive && deactivate(spell)
    }, [cooldown])

    useEffect(() => {
        setIsSpellOnCD(isActive)
        return () => {
            setIsSpellOnCD(false);
        }
    }, [isActive])
    useInterval(() => {
        if (Math.floor(ActualCD) * 100 === 0) {
            deactivate(spell)
            setIsSpellOnCD(false)
            setActualCD(cooldown)
            return;
        }
        setActualCD(cd => cd - 0.1)
    }, IsSpellOnCD ? 100 : null)

    const style = IsSpellOnCD
        ? { backgroundColor: Colors.spellOnCD, color: 'white' }
        : { backgroundColor: Colors.ActiveSpell, color: 'black' }

    return (
        <Container onClick={() => { activate(spell) }} fontColor={IsSpellOnCD ? 'black' : 'white'}>
            <TimeBar
                width={percentageOfOneIsSecond(ActualCD, cooldown)}
                backgroundColor={IsSpellOnCD ? Colors.spellOnCD : Colors.ActiveSpell}
            />
            <span>{name}</span>
            <span>{Math.floor(ActualCD)}s</span>

        </Container>
    )
}

export default SpellStripe

// /style={{ ...styles.loadingSpell, width: `${100 * (ActualCD / cooldown)}%`, backgroundColor: IsSpellOnCD ? Color.spellOnCD : Color.ActiveSpell }}