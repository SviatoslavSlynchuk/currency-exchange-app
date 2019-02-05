import * as actionTypes from '../constants/actionTypes';

export function setFirstCurrency(data) {
    return {
        type: actionTypes.SET_FIRST_CURRENCY,
        data,
    };
}

export function setFirstValue(data) {
    return {
        type: actionTypes.SET_FIRST_VALUE,
        data,
    };
}

export function setSecondCurrency(data) {
    return {
        type: actionTypes.SET_SECOND_CURRENCY,
        data,
    };
}

export function setSecondValue(data) {
    return {
        type: actionTypes.SET_SECOND_VALUE,
        data,
    };
}

export function setInitialData(data) {
    return {
        type: actionTypes.SET_INITIAL_DATA,
        data,
    };
}
