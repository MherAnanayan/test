import {INCREMENT_COUNT, DECREMENT_COUNT, PREV_COUNT} from './types';


export const incrementData = (add) => (dispatch) => {
    dispatch({type: INCREMENT_COUNT, add});
}

export const decrementData = (remove) => (dispatch) => {
    dispatch({type: DECREMENT_COUNT, remove});
}

export const prevCountData = (prev) => (dispatch) => {
    dispatch({type: PREV_COUNT , prev});
}