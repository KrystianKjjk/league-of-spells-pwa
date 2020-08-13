import { ADD_OR_REPLACE_CHAMPION, REMOVE_CHAMPION, RESET_CHAMPIONS } from './types'

const initialState = {
    addedChampions: []
}

export default (state = initialState, { type, payload }) => {
    console.log("XD")
    switch (type) {

        case ADD_OR_REPLACE_CHAMPION:
            {
                console.log("PAY", payload);
                const addedWithGivenPosition = state.addedChampions.find(c => c.position === payload.position)
                const isChampionAdded = state.addedChampions.find(c => c.item.name === payload.item.name)

                if (isChampionAdded === undefined) //Add champion
                {
                    const result = addedWithGivenPosition === undefined
                        ? [...state.addedChampions, payload]
                        : state.addedChampions.map(c => c.position === payload.position ? payload : c)
                    return { ...state, addedChampions: result }

                }
                else { //replace position
                    const removeOldPosition = state.addedChampions.filter(c => c.position !== payload.position)
                    const result = removeOldPosition.map(c => c.item.name === payload.item.name ? payload : c);

                    return { ...state, addedChampions: result }
                }

            }
        case REMOVE_CHAMPION:
            return { ...state, addedChampions: state.addedChampions.filter(c => c.name !== payload.name) }
        case RESET_CHAMPIONS:
            return { ...state, addedChampions: [] }
        default:
            return state
    }
}
