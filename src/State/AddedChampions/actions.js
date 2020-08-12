import { ADD_CHAMPION, REMOVE_CHAMPION, RESET_CHAMPIONS } from './types'

export const addChampion = (payload) => ({
    type: ADD_CHAMPION,
    payload
})

export const removeChampion = (payload) => ({
    type: REMOVE_CHAMPION,
    payload
})
export const resetChampion = () => ({
    type: RESET_CHAMPIONS
})

