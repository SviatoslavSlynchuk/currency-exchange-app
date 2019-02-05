import * as actionTypes from '../constants/actionTypes';

export function setCurrencyData(data) {
    return {
        type: actionTypes.SET_CURRENCY_DATA,
        data,
    };
}

export function getCurrencyData() {
    return {
        type: actionTypes.GET_CURRENCY_DATA,
    };
}
