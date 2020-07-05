import { combineReducers } from 'redux';

import { distanceReducer, startedPressedReducer } from './Pages/Home/Duck'

const rootReducer = combineReducers({
    distance: distanceReducer,
    startedPressed: startedPressedReducer
})

export default rootReducer;