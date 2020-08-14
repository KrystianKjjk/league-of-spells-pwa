import { SELECT_CHAMPION, DESELECT_CHAMPION } from './types'
export const selectChampion = (payload) => ({
    type: SELECT_CHAMPION,
    payload
})
export const deselectChampion = () => ({
    type: DESELECT_CHAMPION,
})