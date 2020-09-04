import { combineReducers } from 'redux';

import { championReducer } from './State/AddedChampions'
import { selectReducer } from './State/SelectedChampion';
import { championSpellsReducer } from './State/ChampionSpells'

const rootReducer = combineReducers({
    champions: championReducer,
    championSpells: championSpellsReducer,
    selectedChampion: selectReducer
})

export default rootReducer;