import React, { useState } from 'react';

import { Container, Stripe, TimeBar } from './style'
import useInterval from '../../MyHooks/useInterval';
import Colors from '../../Colors';
import percentageOfOneIsSecond from '../../utilities/percentageOfOneIsSecond';

const SpellStripe = ({ spellsName, cooldown }) => {
    const [ActualCD, setActualCD] = useState(cooldown)
    const [IsSpellOnCD, setIsSpellOnCD] = useState(false)

    // useInterval(() => {
    //     if (ActualCD === 0) {
    //         setIsSpellOnCD(false)
    //         setActualCD(cooldown)
    //         return;
    //     }
    //     setActualCD(cd => cd - 1)
    // }, IsSpellOnCD ? 1000 : null)
    return (
        <Container onClick={() => setIsSpellOnCD(true)}>
            <TimeBar
                width={percentageOfOneIsSecond(ActualCD, cooldown)}
                backgroundColor={IsSpellOnCD ? Colors.spellOnCD : Colors.ActiveSpell}
            />
            <Stripe style={{}}>
                <span>{spellsName}</span><span>{ActualCD}s</span>

            </Stripe>
        </Container>
    )
}


export default SpellStripe

// /style={{ ...styles.loadingSpell, width: `${100 * (ActualCD / cooldown)}%`, backgroundColor: IsSpellOnCD ? Color.spellOnCD : Color.ActiveSpell }}