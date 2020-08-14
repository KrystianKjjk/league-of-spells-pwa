import { SELECT_CHAMPION, DESELECT_CHAMPION } from './types'

const initialState = {
    selected: null
}
export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SELECT_CHAMPION:
            return { ...state, selected: payload }
        case DESELECT_CHAMPION:
            return { ...state, selected: null }

        default:
            return state
    }
}
