import React, { useState } from 'react';

import { Container, Stripe, TimeBar } from './style'
import useInterval from '../../MyHooks/useInterval';
import Colors from '../../Colors';
import percentageOfOneIsSecond from '../../utilities/percentageOfOneIsSecond';

const SpellStripe = ({ spellsName, cooldown }) => {
    const [ActualCD, setActualCD] = useState(cooldown)
    const [IsSpellOnCD, setIsSpellOnCD] = useState(false)

    useInterval(() => {
        if (Math.floor(ActualCD) * 100 === 0) {
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
        <Container onClick={() => setIsSpellOnCD(true)} fontColor={IsSpellOnCD ? 'black' : 'white'}>
            <TimeBar
                width={percentageOfOneIsSecond(ActualCD, cooldown)}
                backgroundColor={IsSpellOnCD ? Colors.spellOnCD : Colors.ActiveSpell}
            />
            <span>{spellsName}</span>
            <span>{Math.floor(ActualCD)}s</span>

        </Container>
    )
}


export default SpellStripe

// /style={{ ...styles.loadingSpell, width: `${100 * (ActualCD / cooldown)}%`, backgroundColor: IsSpellOnCD ? Color.spellOnCD : Color.ActiveSpell }}