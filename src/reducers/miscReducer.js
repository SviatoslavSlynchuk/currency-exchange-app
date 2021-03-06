import * as actionTypes from '../constants/actionTypes';

const initialState = {
    isFetching: true,
};

export default function miscReducer(state = initialState, action) {
    switch (action.type) {
    case actionTypes.GET_CURRENCY_DATA:
        return Object.assign({}, state, { isFetching: true });
    case actionTypes.SET_CURRENCY_DATA:
        return Object.assign({}, state, { isFetching: false });
    default:
        return state;
    }
}
