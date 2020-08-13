import { combineReducers } from 'redux';

import { distanceReducer, startedPressedReducer } from './State/StartedPressed'
import { championReducer } from './State/AddedChampions'

const rootReducer = combineReducers({
    distance: distanceReducer,
    startedPressed: startedPressedReducer,
    champions: championReducer
})

export default rootReducer;