import types from './types'

// const INITIAL_STATE = {
//     distance: 0,
//     StartedPressed: false
// }

const distanceReducer = (state = { distance: -10 }, action) => {
    switch (action.type) {
        case types.ADD_DISTANCE:
            return {
                ...state, distance: state.distance + action.item
            }
        case types.RESET_DISTANCE:
            return {
                ...state, distance: 0
            }

        default:
            return state;
    }
}
const startedPressedReducer = (state = { startedPressed: false }, action) => {
    switch (action.type) {
        case types.SET_START:
            return {
                ...state, startedPressed: true
            }
        case types.RESET_START:
            return {
                ...state, startedPressed: false
            }

        default:
            return state;
    }
}
export { distanceReducer, startedPressedReducer }