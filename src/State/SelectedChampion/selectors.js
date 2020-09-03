import { createSelector } from 'reselect'

export const getSelectedChampions = state => state.selectedChampion.selected


export const isSelected = createSelector(
    getSelectedChampions,
    selected => selected !== null
)
