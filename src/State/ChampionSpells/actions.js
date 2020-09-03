import { ADD_SPELL, CHANGE_SPELL, ACTIVATE_SPELL, DEACTIVATE_SPELL } from './types'

export const addSpell = (payload) => ({
    type: ADD_SPELL,
    payload
})

export const changeSpell = (payload) => ({
    type: CHANGE_SPELL,
    payload
})
export const activeSpell = (position, spell) => ({
    type: ACTIVATE_SPELL,
    payload: {
        position,
        spell
    }
})
export const deactivateSpell = (position, spell) => ({
    type: DEACTIVATE_SPELL,
    payload: {
        position,
        spell
    }
})


