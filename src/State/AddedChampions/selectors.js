import { createSelector } from 'reselect'

export const getAddedChampions = state => state.champions.addedChampions;


export const hasAllPositionsCompleted = createSelector(
    getAddedChampions,
    (champions) => champions.length === 5
)

