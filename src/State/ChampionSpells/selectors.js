import { createSelector } from 'reselect'

export const getChampionsSpells = state => state.championSpells.championSpells;
// export const getFirstChampionSpell = state => state.selector
// export const getSecondChampionSpell = state => state.selector


export const getChampionSpellsForPosition = (position) => createSelector(
    getChampionsSpells,
    (championSpells) => championSpells.find(cs => cs.position === position)
)
export const getFirstChampionSpell = (position, state) => getChampionSpellsForPosition(position)(state)?.spells[0]
export const getSecondChampionSpell = (position, state) => getChampionSpellsForPosition(position)(state)?.spells[1]