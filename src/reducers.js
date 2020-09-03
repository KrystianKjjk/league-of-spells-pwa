import { combineReducers } from 'redux';

import { distanceReducer, startedPressedReducer } from './State/StartedPressed'
import { championReducer } from './State/AddedChampions'
import { selectReducer } from './State/SelectedChampion';
import { championSpellsReducer } from './State/ChampionSpells'

const rootReducer = combineReducers({
    distance: distanceReducer,
    startedPressed: startedPressedReducer,
    champions: championReducer,
    championSpells: championSpellsReducer,
    selectedChampion: selectReducer
})

export default rootReducer;