import { ADD_CHAMPION, REMOVE_CHAMPION, RESET_CHAMPIONS } from './types'

const initialState = {
    addedChampions: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_CHAMPION:
            {
                const addedWithGivenPosition = state.addedChampions.find(c => c.position === payload.position)
                var result = addedWithGivenPosition === undefined
                    ? [...state.addedChampions, payload]
                    : state.addedChampions.map(c => c.position === payload.position ? payload : c)

                return { ...state, addedChampions: result }
            }
        case REMOVE_CHAMPION:
            return { ...state, addedChampions: state.addedChampions.filter(c => c.name !== payload.name) }
        case RESET_CHAMPIONS:
            return { ...state, addedChampions: [] }
        default:
            return state
    }
}
