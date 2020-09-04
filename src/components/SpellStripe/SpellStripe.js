import React, { useState, useEffect } from 'react';
import useInterval from '../../MyHooks/useInterval';
import percentageOfOneIsSecond from '../../utilities/percentageOfOneIsSecond';

import { Container, TimeBar } from './style'

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

    return (
        <Container onClick={() => { activate(spell) }} isActive={IsSpellOnCD}>
            <TimeBar
                width={percentageOfOneIsSecond(ActualCD, cooldown)}
                isActive={IsSpellOnCD}
            />
            <span>{name}</span>
            <span>{Math.floor(ActualCD)}s</span>

        </Container>
    )
}

export default SpellStripe