import types from './types'

const addDistance = item => ({
    type: types.ADD_DISTANCE, item
})
const resetDistance = () => ({
    type: types.RESET_DISTANCE
})

const setStart = () => ({
    type: types.SET_START
})

const resetStart = () => ({
    type: types.RESET_START
})
export default {
    addDistance,
    resetDistance,
    setStart,
    resetStart
}