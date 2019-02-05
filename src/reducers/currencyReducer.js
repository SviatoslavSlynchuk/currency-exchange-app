import * as actionTypes from '../constants/actionTypes';

export default function currencyReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.SET_CURRENCY_DATA:
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
