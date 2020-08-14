import { ADD_OR_REPLACE_CHAMPION, REMOVE_CHAMPION, RESET_CHAMPIONS } from './types'

export const addOrReplaceChampion = (payload) => ({
    type: ADD_OR_REPLACE_CHAMPION,
    payload
})

export const removeChampion = (payload) => ({
    type: REMOVE_CHAMPION,
    payload
})
export const resetChampions = () => ({
    type: RESET_CHAMPIONS
})

