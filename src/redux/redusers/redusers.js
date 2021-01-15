import {
    INCREMENT_COUNT,
    DECREMENT_COUNT,
    PREV_COUNT
} from '../actions/types'

const Initial_State = {
    count: 0,
    prev: ''
}

const countReduser = (state = Initial_State, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                count: action.add
            };
        case DECREMENT_COUNT:
            return {
                count: action.remove
            };
        case PREV_COUNT:
            return {
                ...state,
                prev: action.prev
            };
        default:
            return state
    }
}

export default countReduser