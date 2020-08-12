import { combineReducers } from 'redux';

import { distanceReducer, startedPressedReducer } from './Pages/Home/Duck'
import { championReducer } from './components/AddedChampions/Duck'

const rootReducer = combineReducers({
    distance: distanceReducer,
    startedPressed: startedPressedReducer,
    champions: championReducer
})

export default rootReducer;