import * as actionTypes from '../constants/actionTypes';
import * as constants from '../constants';

const initialState = {
    firstValue: 1000,
    secondValue: 1000,
    firstCurrency: constants.USD,
    secondCurrency: constants.ILS,
};

export default function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_FIRST_CURRENCY:
            return Object.assign({}, state, { firstCurrency: action.data});
        case actionTypes.SET_FIRST_VALUE:
            return Object.assign({}, state, { firstValue: action.data});
        case actionTypes.SET_SECOND_CURRENCY:
            return Object.assign({}, state, { secondCurrency: action.data});
        case actionTypes.SET_SECOND_VALUE:
            return Object.assign({}, state, { secondValue: action.data});
        default:
            return state;
    }
}
