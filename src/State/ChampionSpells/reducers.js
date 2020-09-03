import { ADD_SPELL, CHANGE_SPELL, ACTIVATE_SPELL, DEACTIVATE_SPELL } from './types'

const initialState = {
    championSpells: []
}

const changeActivate = (payload, spellName, activated) => {
    const spells = payload.spells.map(s => s.name === spellName ? ({ ...s, isActive: activated }) : s);
    return { position: payload.position, spells };

}
export default (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_SPELL:
            {
                return { ...state, championSpells: [...state.championSpells, payload] }
            }
        case CHANGE_SPELL:
            {
                const { position, spells } = payload;
                console.log("POS", position);
                console.log("PY", payload);
                return { ...state, championSpells: [...state.championSpells.filter(s => s.position !== position), { position, spells },] }
            }
        case ACTIVATE_SPELL:
            {
                const { position, spell } = payload;
                return { ...state, championSpells: [...state.championSpells.map(p => p.position === position ? changeActivate(p, spell.name, true) : p)] }
            }
        case DEACTIVATE_SPELL:
            {
                const { position, spell } = payload;
                return { ...state, championSpells: [...state.championSpells.map(p => p.position === position ? changeActivate(p, spell.name, false) : p)] }
            }
        default:
            return state
    }
}

/*

payload: {
    position: "",
    spells: [
        spell: {
            spell,
            isActive
        },
        spell: {
            spell,
            isActive
        },
    ]
}
*/
